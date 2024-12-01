"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/components/chat/Messages.tsx
var Messages_exports = {};
__export(Messages_exports, {
  Messages: () => Messages
});
module.exports = __toCommonJS(Messages_exports);
var import_react2 = __toESM(require("react"));

// src/components/chat/ChatContext.tsx
var import_react = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var ChatContext = import_react.default.createContext(void 0);
function useChatContext() {
  const context = import_react.default.useContext(ChatContext);
  if (context === void 0) {
    throw new Error(
      "Context not found. Did you forget to wrap your app in a <ChatContextProvider> component?"
    );
  }
  return context;
}

// src/components/chat/Messages.tsx
var import_runtime_client_gql = require("@copilotkit/runtime-client-gql");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Messages = ({
  messages,
  inProgress,
  children,
  RenderTextMessage,
  RenderContentMessage,
  RenderActionExecutionMessage,
  RenderAgentStateMessage,
  RenderResultMessage
}) => {
  const context = useChatContext();
  const initialMessages = (0, import_react2.useMemo)(
    () => makeInitialMessages(context.labels.initial),
    [context.labels.initial]
  );
  messages = [...initialMessages, ...messages];
  const actionResults = {};
  for (let i = 0; i < messages.length; i++) {
    if (messages[i].isActionExecutionMessage()) {
      const id = messages[i].id;
      const resultMessage = messages.find(
        (message) => message.isResultMessage() && message.actionExecutionId === id
      );
      if (resultMessage) {
        actionResults[id] = import_runtime_client_gql.ResultMessage.decodeResult(resultMessage.result || "");
      }
    }
  }
  const messagesEndRef = import_react2.default.useRef(null);
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "auto"
      });
    }
  };
  (0, import_react2.useEffect)(() => {
    scrollToBottom();
  }, [messages]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "copilotKitMessages", children: [
    messages.map((message, index) => {
      const isCurrentMessage = index === messages.length - 1;
      if (message.isTextMessage()) {
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          RenderTextMessage,
          {
            message,
            inProgress,
            index,
            isCurrentMessage
          },
          index
        );
      } else if (message.isContentMessage()) {
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          RenderContentMessage,
          {
            message,
            inProgress,
            index,
            isCurrentMessage
          },
          index
        );
      } else if (message.isActionExecutionMessage()) {
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          RenderActionExecutionMessage,
          {
            message,
            inProgress,
            index,
            isCurrentMessage,
            actionResult: actionResults[message.id]
          },
          index
        );
      } else if (message.isAgentStateMessage()) {
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          RenderAgentStateMessage,
          {
            message,
            inProgress,
            index,
            isCurrentMessage
          },
          index
        );
      } else if (message.isResultMessage()) {
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          RenderResultMessage,
          {
            message,
            inProgress,
            index,
            isCurrentMessage
          },
          index
        );
      }
    }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("footer", { ref: messagesEndRef, children })
  ] });
};
function makeInitialMessages(initial) {
  let initialArray = [];
  if (initial) {
    if (Array.isArray(initial)) {
      initialArray.push(...initial);
    } else {
      initialArray.push(initial);
    }
  }
  return initialArray.map(
    (message) => new import_runtime_client_gql.TextMessage({
      role: import_runtime_client_gql.Role.Assistant,
      content: message
    })
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Messages
});
//# sourceMappingURL=Messages.js.map