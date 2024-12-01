"use strict";
"use client";
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
var __restKey = (key) => typeof key === "symbol" ? key : key + "";
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

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  CopilotContext: () => CopilotContext,
  CopilotKit: () => CopilotKit,
  CopilotMessagesContext: () => CopilotMessagesContext,
  CopilotTask: () => CopilotTask,
  defaultCopilotContextCategories: () => defaultCopilotContextCategories,
  extract: () => extract,
  useCoAgent: () => useCoAgent,
  useCoAgentStateRender: () => useCoAgentStateRender,
  useCopilotAction: () => useCopilotAction,
  useCopilotChat: () => useCopilotChat,
  useCopilotContext: () => useCopilotContext,
  useCopilotMessagesContext: () => useCopilotMessagesContext,
  useCopilotReadable: () => useCopilotReadable,
  useMakeCopilotDocumentReadable: () => useMakeCopilotDocumentReadable
});
module.exports = __toCommonJS(src_exports);

// src/components/copilot-provider/copilotkit.tsx
var import_react6 = require("react");

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

// src/hooks/use-tree.ts
var import_shared = require("@copilotkit/shared");
var import_react2 = require("react");
var removeNode = (nodes, id) => {
  return nodes.reduce((result, node) => {
    if (node.id !== id) {
      const newNode = __spreadProps(__spreadValues({}, node), { children: removeNode(node.children, id) });
      result.push(newNode);
    }
    return result;
  }, []);
};
var addNode = (nodes, newNode, parentId) => {
  if (!parentId) {
    return [...nodes, newNode];
  }
  return nodes.map((node) => {
    if (node.id === parentId) {
      return __spreadProps(__spreadValues({}, node), { children: [...node.children, newNode] });
    } else if (node.children.length) {
      return __spreadProps(__spreadValues({}, node), { children: addNode(node.children, newNode, parentId) });
    }
    return node;
  });
};
var treeIndentationRepresentation = (index, indentLevel) => {
  if (indentLevel === 0) {
    return (index + 1).toString();
  } else if (indentLevel === 1) {
    return String.fromCharCode(65 + index);
  } else if (indentLevel === 2) {
    return String.fromCharCode(97 + index);
  } else {
    return "-";
  }
};
var printNode = (node, prefix = "", indentLevel = 0) => {
  const indent = " ".repeat(3).repeat(indentLevel);
  const prefixPlusIndentLength = prefix.length + indent.length;
  const subsequentLinesPrefix = " ".repeat(prefixPlusIndentLength);
  const valueLines = node.value.split("\n");
  const outputFirstLine = `${indent}${prefix}${valueLines[0]}`;
  const outputSubsequentLines = valueLines.slice(1).map((line) => `${subsequentLinesPrefix}${line}`).join("\n");
  let output = `${outputFirstLine}
`;
  if (outputSubsequentLines) {
    output += `${outputSubsequentLines}
`;
  }
  const childPrePrefix = " ".repeat(prefix.length);
  node.children.forEach(
    (child, index) => output += printNode(
      child,
      `${childPrePrefix}${treeIndentationRepresentation(index, indentLevel + 1)}. `,
      indentLevel + 1
    )
  );
  return output;
};
function treeReducer(state, action) {
  switch (action.type) {
    case "ADD_NODE": {
      const { value, parentId, id: newNodeId } = action;
      const newNode = {
        id: newNodeId,
        value,
        children: [],
        categories: new Set(action.categories)
      };
      try {
        return addNode(state, newNode, parentId);
      } catch (error) {
        console.error(`Error while adding node with id ${newNodeId}: ${error}`);
        return state;
      }
    }
    case "REMOVE_NODE":
      return removeNode(state, action.id);
    default:
      return state;
  }
}
var useTree = () => {
  const [tree, dispatch] = (0, import_react2.useReducer)(treeReducer, []);
  const addElement = (0, import_react2.useCallback)(
    (value, categories, parentId) => {
      const newNodeId = (0, import_shared.randomId)();
      dispatch({
        type: "ADD_NODE",
        value,
        parentId,
        id: newNodeId,
        categories
      });
      return newNodeId;
    },
    []
  );
  const removeElement = (0, import_react2.useCallback)((id) => {
    dispatch({ type: "REMOVE_NODE", id });
  }, []);
  const printTree = (0, import_react2.useCallback)(
    (categories) => {
      const categoriesSet = new Set(categories);
      let output = "";
      tree.forEach((node, index) => {
        if (!setsHaveIntersection(categoriesSet, node.categories)) {
          return;
        }
        if (index !== 0) {
          output += "\n";
        }
        output += printNode(node, `${treeIndentationRepresentation(index, 0)}. `);
      });
      return output;
    },
    [tree]
  );
  return { tree, addElement, printTree, removeElement };
};
var use_tree_default = useTree;
function setsHaveIntersection(setA, setB) {
  const [smallerSet, largerSet] = setA.size <= setB.size ? [setA, setB] : [setB, setA];
  for (let item of smallerSet) {
    if (largerSet.has(item)) {
      return true;
    }
  }
  return false;
}

// src/components/copilot-provider/copilotkit.tsx
var import_react_dom = require("react-dom");
var import_shared3 = require("@copilotkit/shared");

// src/hooks/use-flat-category-store.ts
var import_react3 = require("react");
var import_shared2 = require("@copilotkit/shared");
var useFlatCategoryStore = () => {
  const [elements, dispatch] = (0, import_react3.useReducer)(flatCategoryStoreReducer, /* @__PURE__ */ new Map());
  const addElement = (0, import_react3.useCallback)((value, categories) => {
    const newId = (0, import_shared2.randomId)();
    dispatch({
      type: "ADD_ELEMENT",
      value,
      id: newId,
      categories
    });
    return newId;
  }, []);
  const removeElement = (0, import_react3.useCallback)((id) => {
    dispatch({ type: "REMOVE_ELEMENT", id });
  }, []);
  const allElements = (0, import_react3.useCallback)(
    (categories) => {
      const categoriesSet = new Set(categories);
      const result = [];
      elements.forEach((element) => {
        if (setsHaveIntersection2(categoriesSet, element.categories)) {
          result.push(element.value);
        }
      });
      return result;
    },
    [elements]
  );
  return { addElement, removeElement, allElements };
};
var use_flat_category_store_default = useFlatCategoryStore;
function flatCategoryStoreReducer(state, action) {
  switch (action.type) {
    case "ADD_ELEMENT": {
      const { value, id, categories } = action;
      const newElement = {
        id,
        value,
        categories: new Set(categories)
      };
      const newState = new Map(state);
      newState.set(id, newElement);
      return newState;
    }
    case "REMOVE_ELEMENT": {
      const newState = new Map(state);
      newState.delete(action.id);
      return newState;
    }
    default:
      return state;
  }
}
function setsHaveIntersection2(setA, setB) {
  const [smallerSet, largerSet] = setA.size <= setB.size ? [setA, setB] : [setB, setA];
  for (let item of smallerSet) {
    if (largerSet.has(item)) {
      return true;
    }
  }
  return false;
}

// src/components/copilot-provider/copilot-messages.tsx
var import_react5 = require("react");

// src/context/copilot-messages-context.tsx
var import_react4 = __toESM(require("react"));
var emptyCopilotContext2 = {
  messages: [],
  setMessages: () => []
};
var CopilotMessagesContext = import_react4.default.createContext(emptyCopilotContext2);
function useCopilotMessagesContext() {
  const context = import_react4.default.useContext(CopilotMessagesContext);
  if (context === emptyCopilotContext2) {
    throw new Error(
      "A messages consuming component was not wrapped with `<CopilotMessages> {...} </CopilotMessages>`"
    );
  }
  return context;
}

// src/components/copilot-provider/copilot-messages.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function CopilotMessages(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  const [messages, setMessages] = (0, import_react5.useState)([]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    CopilotMessagesContext.Provider,
    {
      value: {
        messages,
        setMessages
      },
      children
    }
  );
}

// src/components/copilot-provider/copilotkit.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function CopilotKit(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  if (!props.runtimeUrl && !props.publicApiKey) {
    throw new Error(
      "Please provide either a runtimeUrl or a publicApiKey to the CopilotKit component."
    );
  }
  const chatApiEndpoint = props.runtimeUrl || import_shared3.COPILOT_CLOUD_CHAT_URL;
  const [actions, setActions] = (0, import_react6.useState)({});
  const [coAgentStateRenders, setCoAgentStateRenders] = (0, import_react6.useState)({});
  const chatComponentsCache = (0, import_react6.useRef)({
    actions: {},
    coAgentStateRenders: {}
  });
  const { addElement, removeElement, printTree } = use_tree_default();
  const [isLoading, setIsLoading] = (0, import_react6.useState)(false);
  const [chatInstructions, setChatInstructions] = (0, import_react6.useState)("");
  const {
    addElement: addDocument,
    removeElement: removeDocument,
    allElements: allDocuments
  } = use_flat_category_store_default();
  const setAction = (0, import_react6.useCallback)((id, action) => {
    setActions((prevPoints) => {
      return __spreadProps(__spreadValues({}, prevPoints), {
        [id]: action
      });
    });
  }, []);
  const removeAction = (0, import_react6.useCallback)((id) => {
    setActions((prevPoints) => {
      const newPoints = __spreadValues({}, prevPoints);
      delete newPoints[id];
      return newPoints;
    });
  }, []);
  const setCoAgentStateRender = (0, import_react6.useCallback)((id, stateRender) => {
    setCoAgentStateRenders((prevPoints) => {
      return __spreadProps(__spreadValues({}, prevPoints), {
        [id]: stateRender
      });
    });
  }, []);
  const removeCoAgentStateRender = (0, import_react6.useCallback)((id) => {
    setCoAgentStateRenders((prevPoints) => {
      const newPoints = __spreadValues({}, prevPoints);
      delete newPoints[id];
      return newPoints;
    });
  }, []);
  const getContextString = (0, import_react6.useCallback)(
    (documents, categories) => {
      const documentsString = documents.map((document) => {
        return `${document.name} (${document.sourceApplication}):
${document.getContents()}`;
      }).join("\n\n");
      const nonDocumentStrings = printTree(categories);
      return `${documentsString}

${nonDocumentStrings}`;
    },
    [printTree]
  );
  const addContext = (0, import_react6.useCallback)(
    (context, parentId, categories = defaultCopilotContextCategories) => {
      return addElement(context, categories, parentId);
    },
    [addElement]
  );
  const removeContext = (0, import_react6.useCallback)(
    (id) => {
      removeElement(id);
    },
    [removeElement]
  );
  const getFunctionCallHandler = (0, import_react6.useCallback)(
    (customEntryPoints) => {
      return entryPointsToFunctionCallHandler(Object.values(customEntryPoints || actions));
    },
    [actions]
  );
  const getDocumentsContext = (0, import_react6.useCallback)(
    (categories) => {
      return allDocuments(categories);
    },
    [allDocuments]
  );
  const addDocumentContext = (0, import_react6.useCallback)(
    (documentPointer, categories = defaultCopilotContextCategories) => {
      return addDocument(documentPointer, categories);
    },
    [addDocument]
  );
  const removeDocumentContext = (0, import_react6.useCallback)(
    (documentId) => {
      removeDocument(documentId);
    },
    [removeDocument]
  );
  if (!props.publicApiKey) {
    if (props.cloudRestrictToTopic) {
      throw new Error(
        "To use the cloudRestrictToTopic feature, please sign up at https://copilotkit.ai and provide a publicApiKey."
      );
    }
  }
  const copilotApiConfig = (0, import_react6.useMemo)(() => {
    var _a2, _b2;
    let cloud = void 0;
    if (props.publicApiKey) {
      cloud = {
        guardrails: {
          input: {
            restrictToTopic: {
              enabled: props.cloudRestrictToTopic ? true : false,
              validTopics: ((_a2 = props.cloudRestrictToTopic) == null ? void 0 : _a2.validTopics) || [],
              invalidTopics: ((_b2 = props.cloudRestrictToTopic) == null ? void 0 : _b2.invalidTopics) || []
            }
          }
        }
      };
    }
    return __spreadProps(__spreadValues({
      publicApiKey: props.publicApiKey
    }, cloud ? { cloud } : {}), {
      chatApiEndpoint,
      headers: props.headers || {},
      properties: props.properties || {},
      transcribeAudioUrl: props.transcribeAudioUrl,
      textToSpeechUrl: props.textToSpeechUrl,
      credentials: props.credentials
    });
  }, [
    props.publicApiKey,
    props.headers,
    props.properties,
    props.transcribeAudioUrl,
    props.textToSpeechUrl,
    props.credentials,
    props.cloudRestrictToTopic
  ]);
  const [chatSuggestionConfiguration, setChatSuggestionConfiguration] = (0, import_react6.useState)({});
  const addChatSuggestionConfiguration = (id, suggestion) => {
    setChatSuggestionConfiguration((prev) => __spreadProps(__spreadValues({}, prev), { [id]: suggestion }));
  };
  const removeChatSuggestionConfiguration = (id) => {
    setChatSuggestionConfiguration((prev) => {
      const _a2 = prev, { [id]: _ } = _a2, rest = __objRest(_a2, [__restKey(id)]);
      return rest;
    });
  };
  const [coagentStates, setCoagentStates] = (0, import_react6.useState)({});
  let initialAgentSession = null;
  if (props.agent) {
    initialAgentSession = {
      agentName: props.agent
    };
  }
  const [agentSession, setAgentSession] = (0, import_react6.useState)(initialAgentSession);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    CopilotContext.Provider,
    {
      value: {
        actions,
        chatComponentsCache,
        getFunctionCallHandler,
        setAction,
        removeAction,
        coAgentStateRenders,
        setCoAgentStateRender,
        removeCoAgentStateRender,
        getContextString,
        addContext,
        removeContext,
        getDocumentsContext,
        addDocumentContext,
        removeDocumentContext,
        copilotApiConfig,
        isLoading,
        setIsLoading,
        chatSuggestionConfiguration,
        addChatSuggestionConfiguration,
        removeChatSuggestionConfiguration,
        chatInstructions,
        setChatInstructions,
        showDevConsole: props.showDevConsole === void 0 ? "auto" : props.showDevConsole,
        coagentStates,
        setCoagentStates,
        agentSession,
        setAgentSession
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CopilotMessages, { children })
    }
  );
}
var defaultCopilotContextCategories = ["global"];
function entryPointsToFunctionCallHandler(actions) {
  return (_0) => __async(this, [_0], function* ({ messages, name, args }) {
    let actionsByFunctionName = {};
    for (let action2 of actions) {
      actionsByFunctionName[action2.name] = action2;
    }
    const action = actionsByFunctionName[name];
    let result = void 0;
    if (action) {
      yield new Promise((resolve, reject) => {
        (0, import_react_dom.flushSync)(() => __async(this, null, function* () {
          var _a;
          try {
            result = yield (_a = action.handler) == null ? void 0 : _a.call(action, args);
            resolve();
          } catch (error) {
            reject(error);
          }
        }));
      });
      yield new Promise((resolve) => setTimeout(resolve, 20));
    }
    return result;
  });
}

// src/hooks/use-copilot-chat.ts
var import_react8 = require("react");
var import_runtime_client_gql2 = require("@copilotkit/runtime-client-gql");

// src/hooks/use-chat.ts
var import_react7 = require("react");
var import_shared4 = require("@copilotkit/shared");
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
  const abortControllerRef = (0, import_react7.useRef)();
  const threadIdRef = (0, import_react7.useRef)(null);
  const runIdRef = (0, import_react7.useRef)(null);
  const runChatCompletionRef = (0, import_react7.useRef)();
  const coagentStatesRef = (0, import_react7.useRef)(coagentStates);
  coagentStatesRef.current = coagentStates;
  const agentSessionRef = (0, import_react7.useRef)(agentSession);
  agentSessionRef.current = agentSession;
  const publicApiKey = copilotConfig.publicApiKey;
  const headers = __spreadValues(__spreadValues({}, copilotConfig.headers || {}), publicApiKey ? { [import_shared4.COPILOT_CLOUD_PUBLIC_API_KEY_HEADER]: publicApiKey } : {});
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
              jsonSchema: JSON.stringify((0, import_shared4.actionParametersToJsonSchema)(action.parameters || []))
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

// src/hooks/use-copilot-chat.ts
function useCopilotChat(_a = {}) {
  var _b = _a, {
    makeSystemMessage: makeSystemMessage2
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
  const deleteMessage = (0, import_react8.useCallback)(
    (messageId) => {
      setMessages((prev) => prev.filter((message) => message.id !== messageId));
    },
    [setMessages]
  );
  const makeSystemMessageCallback = (0, import_react8.useCallback)(() => {
    const systemMessageMaker = makeSystemMessage2 || defaultSystemMessage;
    const contextString = latestGetContextString.current([], defaultCopilotContextCategories);
    return new import_runtime_client_gql2.TextMessage({
      content: systemMessageMaker(contextString, chatInstructions),
      role: import_runtime_client_gql2.Role.System
    });
  }, [getContextString, makeSystemMessage2, chatInstructions]);
  const onCoAgentStateRender = (0, import_react8.useCallback)(
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
  const latestAppendFunc = (0, import_react8.useCallback)(
    (message) => {
      return latestAppend.current(message);
    },
    [latestAppend]
  );
  const latestReload = useUpdatedRef(reload);
  const latestReloadFunc = (0, import_react8.useCallback)(() => {
    return latestReload.current();
  }, [latestReload]);
  const latestStop = useUpdatedRef(stop);
  const latestStopFunc = (0, import_react8.useCallback)(() => {
    return latestStop.current();
  }, [latestStop]);
  const latestDelete = useUpdatedRef(deleteMessage);
  const latestDeleteFunc = (0, import_react8.useCallback)(
    (messageId) => {
      return latestDelete.current(messageId);
    },
    [latestDelete]
  );
  const latestSetMessages = useUpdatedRef(setMessages);
  const latestSetMessagesFunc = (0, import_react8.useCallback)(
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
  const ref = (0, import_react8.useRef)(value);
  (0, import_react8.useEffect)(() => {
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

// src/hooks/use-copilot-action.ts
var import_react9 = require("react");
var import_shared5 = require("@copilotkit/shared");
function useCopilotAction(action, dependencies) {
  const { setAction, removeAction, actions, chatComponentsCache } = useCopilotContext();
  const idRef = (0, import_react9.useRef)((0, import_shared5.randomId)());
  const renderAndWaitRef = (0, import_react9.useRef)(null);
  action = __spreadValues({}, action);
  if (action.renderAndWait) {
    const renderAndWait = action.renderAndWait;
    action.renderAndWait = void 0;
    action.handler = () => __async(this, null, function* () {
      let resolve;
      let reject;
      const promise = new Promise((resolvePromise, rejectPromise) => {
        resolve = resolvePromise;
        reject = rejectPromise;
      });
      renderAndWaitRef.current = { promise, resolve, reject };
      return yield promise;
    });
    action.render = (props) => {
      const waitProps = {
        status: props.status,
        args: props.args,
        result: props.result,
        handler: props.status === "executing" ? renderAndWaitRef.current.resolve : void 0
      };
      return renderAndWait(waitProps);
    };
  }
  if (dependencies === void 0) {
    if (actions[idRef.current]) {
      actions[idRef.current].handler = action.handler;
      if (typeof action.render === "function") {
        if (chatComponentsCache.current !== null) {
          chatComponentsCache.current.actions[action.name] = action.render;
        }
      }
    }
  }
  (0, import_react9.useEffect)(() => {
    setAction(idRef.current, action);
    if (chatComponentsCache.current !== null && action.render !== void 0) {
      chatComponentsCache.current.actions[action.name] = action.render;
    }
    return () => {
      removeAction(idRef.current);
    };
  }, [
    setAction,
    removeAction,
    action.description,
    action.name,
    action.disabled,
    // This should be faster than deep equality checking
    // In addition, all major JS engines guarantee the order of object keys
    JSON.stringify(action.parameters),
    // include render only if it's a string
    typeof action.render === "string" ? action.render : void 0,
    // dependencies set by the developer
    ...dependencies || []
  ]);
}

// src/hooks/use-coagent-state-render.ts
var import_react10 = require("react");
var import_shared6 = require("@copilotkit/shared");
function useCoAgentStateRender(action, dependencies) {
  const {
    setCoAgentStateRender,
    removeCoAgentStateRender,
    coAgentStateRenders,
    chatComponentsCache
  } = (0, import_react10.useContext)(CopilotContext);
  const idRef = (0, import_react10.useRef)((0, import_shared6.randomId)());
  const key = `${action.name}-${action.nodeName || "global"}`;
  if (dependencies === void 0) {
    if (coAgentStateRenders[idRef.current]) {
      coAgentStateRenders[idRef.current].handler = action.handler;
      if (typeof action.render === "function") {
        if (chatComponentsCache.current !== null) {
          chatComponentsCache.current.coAgentStateRenders[key] = action.render;
        }
      }
    }
  }
  (0, import_react10.useEffect)(() => {
    setCoAgentStateRender(idRef.current, action);
    if (chatComponentsCache.current !== null && action.render !== void 0) {
      chatComponentsCache.current.coAgentStateRenders[key] = action.render;
    }
    return () => {
      removeCoAgentStateRender(idRef.current);
    };
  }, [
    setCoAgentStateRender,
    removeCoAgentStateRender,
    action.name,
    // include render only if it's a string
    typeof action.render === "string" ? action.render : void 0,
    // dependencies set by the developer
    ...dependencies || []
  ]);
}

// src/hooks/use-make-copilot-document-readable.ts
var import_react11 = require("react");
function useMakeCopilotDocumentReadable(document, categories, dependencies = []) {
  const { addDocumentContext, removeDocumentContext } = useCopilotContext();
  const idRef = (0, import_react11.useRef)();
  (0, import_react11.useEffect)(() => {
    const id = addDocumentContext(document, categories);
    idRef.current = id;
    return () => {
      removeDocumentContext(id);
    };
  }, [addDocumentContext, removeDocumentContext, ...dependencies]);
  return idRef.current;
}

// src/hooks/use-copilot-readable.ts
var import_react12 = require("react");
function convertToJSON(description, value) {
  return `${description}: ${typeof value === "string" ? value : JSON.stringify(value)}`;
}
function useCopilotReadable({ description, value, parentId, categories, convert }, dependencies) {
  const { addContext, removeContext } = useCopilotContext();
  const idRef = (0, import_react12.useRef)();
  convert = convert || convertToJSON;
  const information = convert(description, value);
  (0, import_react12.useEffect)(() => {
    const id = addContext(information, parentId, categories);
    idRef.current = id;
    return () => {
      removeContext(id);
    };
  }, [information, parentId, addContext, removeContext, ...dependencies || []]);
  return idRef.current;
}

// src/hooks/use-coagent.ts
var import_react13 = require("react");
function useCoAgent(options) {
  const isExternalStateManagement = (options2) => {
    return "state" in options2 && "setState" in options2;
  };
  const { name } = options;
  const isInternalStateManagementWithInitial = (options2) => {
    return "initialState" in options2;
  };
  const generalContext = useCopilotContext();
  const messagesContext = useCopilotMessagesContext();
  const context = __spreadValues(__spreadValues({}, generalContext), messagesContext);
  const { coagentStates, setCoagentStates } = context;
  const { appendMessage } = useCopilotChat();
  const getCoagentState = (coagentStates2, name2) => {
    if (coagentStates2[name2]) {
      return coagentStates2[name2];
    } else {
      return {
        name: name2,
        state: isInternalStateManagementWithInitial(options) ? options.initialState : {},
        running: false,
        active: false,
        threadId: void 0,
        nodeName: void 0,
        runId: void 0
      };
    }
  };
  const setState = (newState) => {
    setCoagentStates((prevAgentStates) => {
      let coagentState2 = getCoagentState(prevAgentStates, name);
      const updatedState = typeof newState === "function" ? newState(coagentState2.state) : newState;
      return __spreadProps(__spreadValues({}, prevAgentStates), {
        [name]: __spreadProps(__spreadValues({}, coagentState2), {
          state: updatedState
        })
      });
    });
  };
  const coagentState = getCoagentState(coagentStates, name);
  const state = isExternalStateManagement(options) ? options.state : coagentState.state;
  (0, import_react13.useEffect)(() => {
    if (isExternalStateManagement(options)) {
      setState(options.state);
    } else if (coagentStates[name] === void 0) {
      setState(options.initialState === void 0 ? {} : options.initialState);
    }
  }, [isExternalStateManagement(options) ? JSON.stringify(options.state) : void 0]);
  return {
    name,
    nodeName: coagentState.nodeName,
    state,
    setState,
    running: coagentState.running,
    start: () => {
      startAgent(name, context);
    },
    stop: () => {
      stopAgent(name, context);
    },
    run: (hint) => {
      return runAgent(name, context, appendMessage, hint);
    }
  };
}
function startAgent(name, context) {
  const { setAgentSession } = context;
  setAgentSession({
    agentName: name
  });
}
function stopAgent(name, context) {
  const { agentSession, setAgentSession } = context;
  if (agentSession && agentSession.agentName === name) {
    setAgentSession(null);
  } else {
    console.warn(`No agent session found for ${name}`);
  }
}
function runAgent(name, context, appendMessage, hint) {
  return __async(this, null, function* () {
    var _a, _b;
    const { agentSession, setAgentSession } = context;
    if (!agentSession || agentSession.agentName !== name) {
      setAgentSession({
        agentName: name
      });
    }
    let previousState = null;
    for (let i = context.messages.length - 1; i >= 0; i--) {
      const message = context.messages[i];
      if (message.isAgentStateMessage() && message.agentName === name) {
        previousState = message.state;
      }
    }
    let state = ((_b = (_a = context.coagentStates) == null ? void 0 : _a[name]) == null ? void 0 : _b.state) || {};
    if (hint) {
      const hintMessage = hint({ previousState, currentState: state });
      if (hintMessage) {
        yield appendMessage(hintMessage);
      }
    }
  });
}

// src/lib/copilot-task.ts
var import_runtime_client_gql3 = require("@copilotkit/runtime-client-gql");
var import_shared7 = require("@copilotkit/shared");
var CopilotTask = class {
  constructor(config) {
    this.instructions = config.instructions;
    this.actions = config.actions || [];
    this.includeCopilotReadable = config.includeCopilotReadable !== false;
    this.includeCopilotActions = config.includeCopilotActions !== false;
  }
  /**
   * Run the task.
   * @param context The CopilotContext to use for the task. Use `useCopilotContext` to obtain the current context.
   * @param data The data to use for the task.
   */
  run(context, data) {
    return __async(this, null, function* () {
      var _a, _b;
      const actions = this.includeCopilotActions ? Object.assign({}, context.actions) : {};
      for (const fn of this.actions) {
        actions[fn.name] = fn;
      }
      let contextString = "";
      if (data) {
        contextString = (typeof data === "string" ? data : JSON.stringify(data)) + "\n\n";
      }
      if (this.includeCopilotReadable) {
        contextString += context.getContextString([], defaultCopilotContextCategories);
      }
      const systemMessage = new import_runtime_client_gql3.TextMessage({
        content: taskSystemMessage(contextString, this.instructions),
        role: import_runtime_client_gql3.Role.System
      });
      const messages = [systemMessage];
      const runtimeClient = new import_runtime_client_gql3.CopilotRuntimeClient({
        url: context.copilotApiConfig.chatApiEndpoint,
        publicApiKey: context.copilotApiConfig.publicApiKey,
        headers: context.copilotApiConfig.headers,
        credentials: context.copilotApiConfig.credentials
      });
      const response = yield runtimeClient.generateCopilotResponse({
        data: {
          frontend: {
            actions: Object.values(actions).map((action) => ({
              name: action.name,
              description: action.description || "",
              jsonSchema: JSON.stringify((0, import_shared7.actionParametersToJsonSchema)(action.parameters || []))
            })),
            url: window.location.href
          },
          messages: (0, import_runtime_client_gql3.convertMessagesToGqlInput)((0, import_runtime_client_gql3.filterAgentStateMessages)(messages)),
          metadata: {
            requestType: import_runtime_client_gql3.CopilotRequestType.Task
          },
          forwardedParameters: {
            toolChoice: "required"
          }
        },
        properties: context.copilotApiConfig.properties
      }).toPromise();
      const functionCallHandler = context.getFunctionCallHandler(actions);
      const functionCalls = (0, import_runtime_client_gql3.convertGqlOutputToMessages)(
        ((_b = (_a = response.data) == null ? void 0 : _a.generateCopilotResponse) == null ? void 0 : _b.messages) || []
      ).filter((m) => m.isActionExecutionMessage());
      for (const functionCall of functionCalls) {
        yield functionCallHandler({
          messages,
          name: functionCall.name,
          args: functionCall.arguments
        });
      }
    });
  }
};
function taskSystemMessage(contextString, instructions) {
  return `
Please act as an efficient, competent, conscientious, and industrious professional assistant.

Help the user achieve their goals, and you do so in a way that is as efficient as possible, without unnecessary fluff, but also without sacrificing professionalism.
Always be polite and respectful, and prefer brevity over verbosity.

The user has provided you with the following context:
\`\`\`
${contextString}
\`\`\`

They have also provided you with functions you can call to initiate actions on their behalf.

Please assist them as best you can.

This is not a conversation, so please do not ask questions. Just call a function without saying anything else.

The user has given you the following task to complete:

\`\`\`
${instructions}
\`\`\`
`;
}

// src/utils/extract.ts
var import_shared8 = require("@copilotkit/shared");
var import_runtime_client_gql4 = require("@copilotkit/runtime-client-gql");
var import_runtime_client_gql5 = require("@copilotkit/runtime-client-gql");
var import_runtime_client_gql6 = require("@copilotkit/runtime-client-gql");
function extract(_0) {
  return __async(this, arguments, function* ({
    context,
    instructions,
    parameters,
    include,
    data,
    abortSignal,
    stream,
    requestType = import_runtime_client_gql4.CopilotRequestType.Task
  }) {
    var _a, _b;
    const { messages } = context;
    const action = {
      name: "extract",
      description: instructions,
      parameters,
      handler: (args) => {
      }
    };
    const includeReadable = (_a = include == null ? void 0 : include.readable) != null ? _a : false;
    const includeMessages = (_b = include == null ? void 0 : include.messages) != null ? _b : false;
    let contextString = "";
    if (data) {
      contextString = (typeof data === "string" ? data : JSON.stringify(data)) + "\n\n";
    }
    if (includeReadable) {
      contextString += context.getContextString([], defaultCopilotContextCategories);
    }
    const systemMessage = new import_runtime_client_gql4.TextMessage({
      content: makeSystemMessage(contextString, instructions),
      role: import_runtime_client_gql4.Role.System
    });
    const instructionsMessage = new import_runtime_client_gql4.TextMessage({
      content: makeInstructionsMessage(instructions),
      role: import_runtime_client_gql4.Role.User
    });
    const headers = __spreadValues(__spreadValues({}, context.copilotApiConfig.headers || {}), context.copilotApiConfig.publicApiKey ? { [import_shared8.COPILOT_CLOUD_PUBLIC_API_KEY_HEADER]: context.copilotApiConfig.publicApiKey } : {});
    const runtimeClient = new import_runtime_client_gql5.CopilotRuntimeClient({
      url: context.copilotApiConfig.chatApiEndpoint,
      publicApiKey: context.copilotApiConfig.publicApiKey,
      headers,
      credentials: context.copilotApiConfig.credentials
    });
    const response = import_runtime_client_gql5.CopilotRuntimeClient.asStream(
      runtimeClient.generateCopilotResponse({
        data: {
          frontend: {
            actions: [
              {
                name: action.name,
                description: action.description || "",
                jsonSchema: JSON.stringify((0, import_shared8.actionParametersToJsonSchema)(action.parameters || []))
              }
            ],
            url: window.location.href
          },
          messages: (0, import_runtime_client_gql6.convertMessagesToGqlInput)(
            includeMessages ? [systemMessage, instructionsMessage, ...(0, import_runtime_client_gql6.filterAgentStateMessages)(messages)] : [systemMessage, instructionsMessage]
          ),
          metadata: {
            requestType
          },
          forwardedParameters: {
            toolChoice: "function",
            toolChoiceFunctionName: action.name
          }
        },
        properties: context.copilotApiConfig.properties,
        signal: abortSignal
      })
    );
    const reader = response.getReader();
    let isInitial = true;
    let actionExecutionMessage = void 0;
    while (true) {
      const { done, value } = yield reader.read();
      if (done) {
        break;
      }
      if (abortSignal == null ? void 0 : abortSignal.aborted) {
        throw new Error("Aborted");
      }
      actionExecutionMessage = (0, import_runtime_client_gql4.convertGqlOutputToMessages)(
        value.generateCopilotResponse.messages
      ).find((msg) => msg.isActionExecutionMessage());
      if (!actionExecutionMessage) {
        continue;
      }
      stream == null ? void 0 : stream({
        status: isInitial ? "initial" : "inProgress",
        args: actionExecutionMessage.arguments
      });
      isInitial = false;
    }
    if (!actionExecutionMessage) {
      throw new Error("extract() failed: No function call occurred");
    }
    stream == null ? void 0 : stream({
      status: "complete",
      args: actionExecutionMessage.arguments
    });
    return actionExecutionMessage.arguments;
  });
}
function makeInstructionsMessage(instructions) {
  return `
The user has given you the following task to complete:

\`\`\`
${instructions}
\`\`\`

Any additional messages provided are for providing context only and should not be used to ask questions or engage in conversation.
`;
}
function makeSystemMessage(contextString, instructions) {
  return `
Please act as an efficient, competent, conscientious, and industrious professional assistant.

Help the user achieve their goals, and you do so in a way that is as efficient as possible, without unnecessary fluff, but also without sacrificing professionalism.
Always be polite and respectful, and prefer brevity over verbosity.

The user has provided you with the following context:
\`\`\`
${contextString}
\`\`\`

They have also provided you with a function called extract you MUST call to initiate actions on their behalf.

Please assist them as best you can.

This is not a conversation, so please do not ask questions. Just call the function without saying anything else.
`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CopilotContext,
  CopilotKit,
  CopilotMessagesContext,
  CopilotTask,
  defaultCopilotContextCategories,
  extract,
  useCoAgent,
  useCoAgentStateRender,
  useCopilotAction,
  useCopilotChat,
  useCopilotContext,
  useCopilotMessagesContext,
  useCopilotReadable,
  useMakeCopilotDocumentReadable
});
//# sourceMappingURL=index.js.map