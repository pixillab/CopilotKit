import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-SKC7AJIV.mjs";

// src/hooks/use-chat.ts
import { useRef } from "react";
import {
  COPILOT_CLOUD_PUBLIC_API_KEY_HEADER,
  actionParametersToJsonSchema
} from "@copilotkit/shared";
import {
  TextMessage,
  ResultMessage,
  CopilotRuntimeClient,
  convertMessagesToGqlInput,
  filterAdjacentAgentStateMessages,
  filterAgentStateMessages,
  convertGqlOutputToMessages,
  MessageStatusCode,
  MessageRole,
  Role,
  CopilotRequestType
} from "@copilotkit/runtime-client-gql";
function useChat(options) {
  const {
    messages,
    setMessages,
    makeSystemMessageCallback,
    copilotConfig,
    setIsLoading,
    initialMessages,
    isLoading,
    actions,
    onFunctionCall,
    onCoAgentStateRender,
    setCoagentStates,
    coagentStates,
    agentSession,
    setAgentSession
  } = options;
  const abortControllerRef = useRef();
  const threadIdRef = useRef(null);
  const runIdRef = useRef(null);
  const runChatCompletionRef = useRef();
  const coagentStatesRef = useRef(coagentStates);
  coagentStatesRef.current = coagentStates;
  const agentSessionRef = useRef(agentSession);
  agentSessionRef.current = agentSession;
  const publicApiKey = copilotConfig.publicApiKey;
  const headers = __spreadValues(__spreadValues({}, copilotConfig.headers || {}), publicApiKey ? { [COPILOT_CLOUD_PUBLIC_API_KEY_HEADER]: publicApiKey } : {});
  const runtimeClient = new CopilotRuntimeClient({
    url: copilotConfig.chatApiEndpoint,
    publicApiKey: copilotConfig.publicApiKey,
    headers,
    credentials: copilotConfig.credentials
  });
  const runChatCompletion = (previousMessages) => __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    setIsLoading(true);
    let newMessages = [
      new TextMessage({
        content: "",
        role: Role.Assistant
      })
    ];
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    setMessages([...previousMessages, ...newMessages]);
    const systemMessage = makeSystemMessageCallback();
    const messagesWithContext = [systemMessage, ...initialMessages || [], ...previousMessages];
    const stream = CopilotRuntimeClient.asStream(
      runtimeClient.generateCopilotResponse({
        data: __spreadProps(__spreadValues(__spreadProps(__spreadValues({
          frontend: {
            actions: actions.filter((action) => !action.disabled).map((action) => ({
              name: action.name,
              description: action.description || "",
              jsonSchema: JSON.stringify(actionParametersToJsonSchema(action.parameters || []))
            })),
            url: window.location.href
          },
          threadId: threadIdRef.current,
          runId: runIdRef.current,
          messages: convertMessagesToGqlInput(filterAgentStateMessages(messagesWithContext))
        }, copilotConfig.cloud ? {
          cloud: __spreadValues({}, ((_c = (_b = (_a = copilotConfig.cloud.guardrails) == null ? void 0 : _a.input) == null ? void 0 : _b.restrictToTopic) == null ? void 0 : _c.enabled) ? {
            guardrails: {
              inputValidationRules: {
                allowList: copilotConfig.cloud.guardrails.input.restrictToTopic.validTopics,
                denyList: copilotConfig.cloud.guardrails.input.restrictToTopic.invalidTopics
              }
            }
          } : {})
        } : {}), {
          metadata: {
            requestType: CopilotRequestType.Chat
          }
        }), agentSessionRef.current ? {
          agentSession: agentSessionRef.current
        } : {}), {
          agentStates: Object.values(coagentStatesRef.current).map((state) => ({
            agentName: state.name,
            state: JSON.stringify(state.state)
          }))
        }),
        properties: copilotConfig.properties,
        signal: (_d = abortControllerRef.current) == null ? void 0 : _d.signal
      })
    );
    const guardrailsEnabled = ((_g = (_f = (_e = copilotConfig.cloud) == null ? void 0 : _e.guardrails) == null ? void 0 : _f.input) == null ? void 0 : _g.restrictToTopic.enabled) || false;
    const reader = stream.getReader();
    let actionResults = {};
    let executedCoAgentStateRenders = [];
    let followUp = void 0;
    try {
      while (true) {
        const { done, value } = yield reader.read();
        if (done) {
          break;
        }
        if (!(value == null ? void 0 : value.generateCopilotResponse)) {
          continue;
        }
        threadIdRef.current = value.generateCopilotResponse.threadId || null;
        runIdRef.current = value.generateCopilotResponse.runId || null;
        const messages2 = convertGqlOutputToMessages(
          filterAdjacentAgentStateMessages(value.generateCopilotResponse.messages)
        );
        if (messages2.length === 0) {
          continue;
        }
        newMessages = [];
        if (((_h = value.generateCopilotResponse.status) == null ? void 0 : _h.__typename) === "FailedResponseStatus" && value.generateCopilotResponse.status.reason === "GUARDRAILS_VALIDATION_FAILED") {
          newMessages = [
            new TextMessage({
              role: MessageRole.Assistant,
              content: ((_i = value.generateCopilotResponse.status.details) == null ? void 0 : _i.guardrailsReason) || ""
            })
          ];
        } else {
          for (const message of messages2) {
            newMessages.push(message);
            if (message.isContentMessage()) {
              console.log("Handling ContentMessage:", (_k = (_j = message.content[0]) == null ? void 0 : _j.textContent) == null ? void 0 : _k.text);
            }
            if (message.isActionExecutionMessage() && message.status.code !== MessageStatusCode.Pending && message.scope === "client" && onFunctionCall) {
              if (!(message.id in actionResults)) {
                if (guardrailsEnabled && value.generateCopilotResponse.status === void 0) {
                  break;
                }
                try {
                  setMessages([...previousMessages, ...newMessages]);
                  const action = actions.find((action2) => action2.name === message.name);
                  if (action) {
                    followUp = action.followUp;
                  }
                  const result = yield onFunctionCall({
                    messages: previousMessages,
                    name: message.name,
                    args: message.arguments
                  });
                  actionResults[message.id] = result;
                } catch (e) {
                  actionResults[message.id] = `Failed to execute action ${message.name}`;
                  console.error(`Failed to execute action ${message.name}: ${e}`);
                }
              }
              newMessages.push(
                new ResultMessage({
                  result: ResultMessage.encodeResult(actionResults[message.id]),
                  actionExecutionId: message.id,
                  actionName: message.name
                })
              );
            }
            if (message.isAgentStateMessage() && !message.active && !executedCoAgentStateRenders.includes(message.id) && onCoAgentStateRender) {
              if (guardrailsEnabled && value.generateCopilotResponse.status === void 0) {
                break;
              }
              yield onCoAgentStateRender({
                name: message.agentName,
                nodeName: message.nodeName,
                state: message.state
              });
              executedCoAgentStateRenders.push(message.id);
            }
          }
          const lastAgentStateMessage = [...messages2].reverse().find((message) => message.isAgentStateMessage());
          if (lastAgentStateMessage) {
            setCoagentStates((prevAgentStates) => __spreadProps(__spreadValues({}, prevAgentStates), {
              [lastAgentStateMessage.agentName]: {
                name: lastAgentStateMessage.agentName,
                state: lastAgentStateMessage.state,
                running: lastAgentStateMessage.running,
                active: lastAgentStateMessage.active,
                threadId: lastAgentStateMessage.threadId,
                nodeName: lastAgentStateMessage.nodeName,
                runId: lastAgentStateMessage.runId
              }
            }));
            if (lastAgentStateMessage.running) {
              setAgentSession({
                threadId: lastAgentStateMessage.threadId,
                agentName: lastAgentStateMessage.agentName,
                nodeName: lastAgentStateMessage.nodeName
              });
            } else {
              setAgentSession(null);
            }
          }
        }
        if (newMessages.length > 0) {
          setMessages([...previousMessages, ...newMessages]);
        }
      }
      if (
        // if followUp is not explicitly false
        followUp !== false && // if we have client side results
        (Object.values(actionResults).length || // or the last message we received is a result
        newMessages.length && newMessages[newMessages.length - 1].isResultMessage())
      ) {
        yield new Promise((resolve) => setTimeout(resolve, 10));
        return yield runChatCompletionRef.current([...previousMessages, ...newMessages]);
      } else {
        return newMessages.slice();
      }
    } finally {
      setIsLoading(false);
    }
  });
  runChatCompletionRef.current = runChatCompletion;
  const runChatCompletionAndHandleFunctionCall = (messages2) => __async(this, null, function* () {
    yield runChatCompletionRef.current(messages2);
  });
  const append = (message) => __async(this, null, function* () {
    var _a, _b;
    if (isLoading) {
      return;
    }
    if (message.isContentMessage()) {
      console.log("Appending ContentMessage:", (_b = (_a = message.content[0]) == null ? void 0 : _a.textContent) == null ? void 0 : _b.text);
    }
    const newMessages = [...messages, message];
    setMessages(newMessages);
    return runChatCompletionAndHandleFunctionCall(newMessages);
  });
  const reload = () => __async(this, null, function* () {
    if (isLoading || messages.length === 0) {
      return;
    }
    let newMessages = [...messages];
    const lastMessage = messages[messages.length - 1];
    if ((lastMessage.isTextMessage() || lastMessage.isContentMessage()) && lastMessage.role === "assistant") {
      newMessages = newMessages.slice(0, -1);
    }
    setMessages(newMessages);
    return runChatCompletionAndHandleFunctionCall(newMessages);
  });
  const stop = () => {
    var _a;
    (_a = abortControllerRef.current) == null ? void 0 : _a.abort();
  };
  return {
    append,
    reload,
    stop
  };
}

export {
  useChat
};
//# sourceMappingURL=chunk-XCH6MOCG.mjs.map