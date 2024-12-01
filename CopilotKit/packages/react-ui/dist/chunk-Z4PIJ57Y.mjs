import {
  useChatContext
} from "./chunk-CBBFRI3Q.mjs";

// src/components/chat/Messages.tsx
import React, { useEffect, useMemo } from "react";
import {
  ResultMessage,
  TextMessage,
  Role
} from "@copilotkit/runtime-client-gql";
import { jsx, jsxs } from "react/jsx-runtime";
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
  const initialMessages = useMemo(
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
        actionResults[id] = ResultMessage.decodeResult(resultMessage.result || "");
      }
    }
  }
  const messagesEndRef = React.useRef(null);
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "auto"
      });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return /* @__PURE__ */ jsxs("div", { className: "copilotKitMessages", children: [
    messages.map((message, index) => {
      const isCurrentMessage = index === messages.length - 1;
      if (message.isTextMessage()) {
        return /* @__PURE__ */ jsx(
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
        return /* @__PURE__ */ jsx(
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
        return /* @__PURE__ */ jsx(
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
        return /* @__PURE__ */ jsx(
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
        return /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx("footer", { ref: messagesEndRef, children })
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
    (message) => new TextMessage({
      role: Role.Assistant,
      content: message
    })
  );
}

export {
  Messages
};
//# sourceMappingURL=chunk-Z4PIJ57Y.mjs.map