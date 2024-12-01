"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/hooks/use-chat.ts
var use_chat_exports = {};
__export(use_chat_exports, {
  useChat: () => useChat
});
module.exports = __toCommonJS(use_chat_exports);
var import_react = require("react");
var import_shared = require("@copilotkit/shared");
var import_runtime_client_gql = require("@copilotkit/runtime-client-gql");
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
  const abortControllerRef = (0, import_react.useRef)();
  const threadIdRef = (0, import_react.useRef)(null);
  const runIdRef = (0, import_react.useRef)(null);
  const runChatCompletionRef = (0, import_react.useRef)();
  const coagentStatesRef = (0, import_react.useRef)(coagentStates);
  coagentStatesRef.current = coagentStates;
  const agentSessionRef = (0, import_react.useRef)(agentSession);
  agentSessionRef.current = agentSession;
  const publicApiKey = copilotConfig.publicApiKey;
  const headers = __spreadValues(__spreadValues({}, copilotConfig.headers || {}), publicApiKey ? { [import_shared.COPILOT_CLOUD_PUBLIC_API_KEY_HEADER]: publicApiKey } : {});
  const runtimeClient = new import_runtime_client_gql.CopilotRuntimeClient({
    url: copilotConfig.chatApiEndpoint,
    publicApiKey: copilotConfig.publicApiKey,
    headers,
    credentials: copilotConfig.credentials
  });
  const runChatCompletion = (previousMessages) => __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    setIsLoading(true);
    let newMessages = [
      new import_runtime_client_gql.TextMessage({
        content: "",
        role: import_runtime_client_gql.Role.Assistant
      })
    ];
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    setMessages([...previousMessages, ...newMessages]);
    const systemMessage = makeSystemMessageCallback();
    const messagesWithContext = [systemMessage, ...initialMessages || [], ...previousMessages];
    const stream = import_runtime_client_gql.CopilotRuntimeClient.asStream(
      runtimeClient.generateCopilotResponse({
        data: __spreadProps(__spreadValues(__spreadProps(__spreadValues({
          frontend: {
            actions: actions.filter((action) => !action.disabled).map((action) => ({
              name: action.name,
              description: action.description || "",
              jsonSchema: JSON.stringify((0, import_shared.actionParametersToJsonSchema)(action.parameters || []))
            })),
            url: window.location.href
          },
          threadId: threadIdRef.current,
          runId: runIdRef.current,
          messages: (0, import_runtime_client_gql.convertMessagesToGqlInput)((0, import_runtime_client_gql.filterAgentStateMessages)(messagesWithContext))
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
            requestType: import_runtime_client_gql.CopilotRequestType.Chat
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
        const messages2 = (0, import_runtime_client_gql.convertGqlOutputToMessages)(
          (0, import_runtime_client_gql.filterAdjacentAgentStateMessages)(value.generateCopilotResponse.messages)
        );
        if (messages2.length === 0) {
          continue;
        }
        newMessages = [];
        if (((_h = value.generateCopilotResponse.status) == null ? void 0 : _h.__typename) === "FailedResponseStatus" && value.generateCopilotResponse.status.reason === "GUARDRAILS_VALIDATION_FAILED") {
          newMessages = [
            new import_runtime_client_gql.TextMessage({
              role: import_runtime_client_gql.MessageRole.Assistant,
              content: ((_i = value.generateCopilotResponse.status.details) == null ? void 0 : _i.guardrailsReason) || ""
            })
          ];
        } else {
          for (const message of messages2) {
            newMessages.push(message);
            if (message.isContentMessage()) {
              console.log("Handling ContentMessage:", (_k = (_j = message.content[0]) == null ? void 0 : _j.textContent) == null ? void 0 : _k.text);
            }
            if (message.isActionExecutionMessage() && message.status.code !== import_runtime_client_gql.MessageStatusCode.Pending && message.scope === "client" && onFunctionCall) {
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
                new import_runtime_client_gql.ResultMessage({
                  result: import_runtime_client_gql.ResultMessage.encodeResult(actionResults[message.id]),
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
    if (message instanceof import_runtime_client_gql.ContentMessage) {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useChat
});
//# sourceMappingURL=use-chat.js.map