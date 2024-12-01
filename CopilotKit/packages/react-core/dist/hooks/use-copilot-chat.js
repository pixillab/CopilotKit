"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/hooks/use-copilot-chat.ts
var use_copilot_chat_exports = {};
__export(use_copilot_chat_exports, {
  defaultSystemMessage: () => defaultSystemMessage,
  useCopilotChat: () => useCopilotChat
});
module.exports = __toCommonJS(use_copilot_chat_exports);
var import_react5 = require("react");

// src/context/copilot-context.tsx
var import_react = __toESM(require("react"));
var emptyCopilotContext = {
  actions: {},
  setAction: () => {
  },
  removeAction: () => {
  },
  coAgentStateRenders: {},
  setCoAgentStateRender: () => {
  },
  removeCoAgentStateRender: () => {
  },
  chatComponentsCache: { current: { actions: {}, coAgentStateRenders: {} } },
  getContextString: (documents, categories) => returnAndThrowInDebug(""),
  addContext: () => "",
  removeContext: () => {
  },
  getFunctionCallHandler: () => returnAndThrowInDebug(() => __async(void 0, null, function* () {
  })),
  isLoading: false,
  setIsLoading: () => returnAndThrowInDebug(false),
  chatInstructions: "",
  setChatInstructions: () => returnAndThrowInDebug(""),
  getDocumentsContext: (categories) => returnAndThrowInDebug([]),
  addDocumentContext: () => returnAndThrowInDebug(""),
  removeDocumentContext: () => {
  },
  copilotApiConfig: new class {
    get chatApiEndpoint() {
      throw new Error("Remember to wrap your app in a `<CopilotKit> {...} </CopilotKit>` !!!");
    }
    get headers() {
      return {};
    }
    get body() {
      return {};
    }
  }(),
  chatSuggestionConfiguration: {},
  addChatSuggestionConfiguration: () => {
  },
  removeChatSuggestionConfiguration: () => {
  },
  showDevConsole: "auto",
  coagentStates: {},
  setCoagentStates: () => {
  },
  agentSession: null,
  setAgentSession: () => {
  }
};
var CopilotContext = import_react.default.createContext(emptyCopilotContext);
function useCopilotContext() {
  const context = import_react.default.useContext(CopilotContext);
  if (context === emptyCopilotContext) {
    throw new Error("Remember to wrap your app in a `<CopilotKit> {...} </CopilotKit>` !!!");
  }
  return context;
}
function returnAndThrowInDebug(value) {
  throw new Error("Remember to wrap your app in a `<CopilotKit> {...} </CopilotKit>` !!!");
  return value;
}

// src/hooks/use-copilot-chat.ts
var import_runtime_client_gql2 = require("@copilotkit/runtime-client-gql");

// src/hooks/use-chat.ts
var import_react2 = require("react");
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
  const abortControllerRef = (0, import_react2.useRef)();
  const threadIdRef = (0, import_react2.useRef)(null);
  const runIdRef = (0, import_react2.useRef)(null);
  const runChatCompletionRef = (0, import_react2.useRef)();
  const coagentStatesRef = (0, import_react2.useRef)(coagentStates);
  coagentStatesRef.current = coagentStates;
  const agentSessionRef = (0, import_react2.useRef)(agentSession);
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

// src/components/copilot-provider/copilotkit.tsx
var import_react4 = require("react");
var import_react_dom = require("react-dom");
var import_shared2 = require("@copilotkit/shared");

// src/context/copilot-messages-context.tsx
var import_react3 = __toESM(require("react"));
var emptyCopilotContext2 = {
  messages: [],
  setMessages: () => []
};
var CopilotMessagesContext = import_react3.default.createContext(emptyCopilotContext2);
function useCopilotMessagesContext() {
  const context = import_react3.default.useContext(CopilotMessagesContext);
  if (context === emptyCopilotContext2) {
    throw new Error(
      "A messages consuming component was not wrapped with `<CopilotMessages> {...} </CopilotMessages>`"
    );
  }
  return context;
}

// src/components/copilot-provider/copilotkit.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var defaultCopilotContextCategories = ["global"];

// src/hooks/use-copilot-chat.ts
function useCopilotChat(_a = {}) {
  var _b = _a, {
    makeSystemMessage
  } = _b, options = __objRest(_b, [
    "makeSystemMessage"
  ]);
  const {
    getContextString,
    getFunctionCallHandler,
    copilotApiConfig,
    isLoading,
    setIsLoading,
    chatInstructions,
    actions,
    coagentStates,
    setCoagentStates,
    coAgentStateRenders,
    agentSession,
    setAgentSession
  } = useCopilotContext();
  const { messages, setMessages } = useCopilotMessagesContext();
  const latestGetContextString = useUpdatedRef(getContextString);
  const deleteMessage = (0, import_react5.useCallback)(
    (messageId) => {
      setMessages((prev) => prev.filter((message) => message.id !== messageId));
    },
    [setMessages]
  );
  const makeSystemMessageCallback = (0, import_react5.useCallback)(() => {
    const systemMessageMaker = makeSystemMessage || defaultSystemMessage;
    const contextString = latestGetContextString.current([], defaultCopilotContextCategories);
    return new import_runtime_client_gql2.TextMessage({
      content: systemMessageMaker(contextString, chatInstructions),
      role: import_runtime_client_gql2.Role.System
    });
  }, [getContextString, makeSystemMessage, chatInstructions]);
  const onCoAgentStateRender = (0, import_react5.useCallback)(
    (args) => __async(this, null, function* () {
      var _a2;
      const { name, nodeName, state } = args;
      let action = Object.values(coAgentStateRenders).find(
        (action2) => action2.name === name && action2.nodeName === nodeName
      );
      if (!action) {
        action = Object.values(coAgentStateRenders).find(
          (action2) => action2.name === name && !action2.nodeName
        );
      }
      if (action) {
        yield (_a2 = action.handler) == null ? void 0 : _a2.call(action, { state, nodeName });
      }
    }),
    [coAgentStateRenders]
  );
  const { append, reload, stop } = useChat(__spreadProps(__spreadValues({}, options), {
    actions: Object.values(actions),
    copilotConfig: copilotApiConfig,
    initialMessages: options.initialMessages || [],
    onFunctionCall: getFunctionCallHandler(),
    onCoAgentStateRender,
    messages,
    setMessages,
    makeSystemMessageCallback,
    isLoading,
    setIsLoading,
    coagentStates,
    setCoagentStates,
    agentSession,
    setAgentSession
  }));
  const latestAppend = useUpdatedRef(append);
  const latestAppendFunc = (0, import_react5.useCallback)(
    (message) => {
      return latestAppend.current(message);
    },
    [latestAppend]
  );
  const latestReload = useUpdatedRef(reload);
  const latestReloadFunc = (0, import_react5.useCallback)(() => {
    return latestReload.current();
  }, [latestReload]);
  const latestStop = useUpdatedRef(stop);
  const latestStopFunc = (0, import_react5.useCallback)(() => {
    return latestStop.current();
  }, [latestStop]);
  const latestDelete = useUpdatedRef(deleteMessage);
  const latestDeleteFunc = (0, import_react5.useCallback)(
    (messageId) => {
      return latestDelete.current(messageId);
    },
    [latestDelete]
  );
  const latestSetMessages = useUpdatedRef(setMessages);
  const latestSetMessagesFunc = (0, import_react5.useCallback)(
    (messages2) => {
      return latestSetMessages.current(messages2);
    },
    [latestSetMessages]
  );
  return {
    visibleMessages: messages,
    appendMessage: latestAppendFunc,
    setMessages: latestSetMessagesFunc,
    reloadMessages: latestReloadFunc,
    stopGeneration: latestStopFunc,
    deleteMessage: latestDeleteFunc,
    isLoading
  };
}
function useUpdatedRef(value) {
  const ref = (0, import_react5.useRef)(value);
  (0, import_react5.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
function defaultSystemMessage(contextString, additionalInstructions) {
  return `
Please act as an efficient, competent, conscientious, and industrious professional assistant.

Help the user achieve their goals, and you do so in a way that is as efficient as possible, without unnecessary fluff, but also without sacrificing professionalism.
Always be polite and respectful, and prefer brevity over verbosity.

The user has provided you with the following context:
\`\`\`
${contextString}
\`\`\`

They have also provided you with functions you can call to initiate actions on their behalf, or functions you can call to receive more information.

Please assist them as best you can.

You can ask them for clarifying questions if needed, but don't be annoying about it. If you can reasonably 'fill in the blanks' yourself, do so.

If you would like to call a function, call it without saying anything else.
` + (additionalInstructions ? `

${additionalInstructions}` : "");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultSystemMessage,
  useCopilotChat
});
//# sourceMappingURL=use-copilot-chat.js.map