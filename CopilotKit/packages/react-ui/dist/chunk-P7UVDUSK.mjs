import {
  RenderActionExecutionMessage
} from "./chunk-OMTPWC7T.mjs";
import {
  RenderAgentStateMessage
} from "./chunk-ZABXREBH.mjs";
import {
  RenderContentMessage
} from "./chunk-UPNGHZG7.mjs";
import {
  RenderResultMessage
} from "./chunk-6INMITFA.mjs";
import {
  RenderTextMessage
} from "./chunk-RU73BEZM.mjs";
import {
  Messages
} from "./chunk-Z4PIJ57Y.mjs";
import {
  ResponseButton
} from "./chunk-3XAXY2Z3.mjs";
import {
  Suggestion,
  reloadSuggestions
} from "./chunk-RJCZRKTV.mjs";
import {
  Input
} from "./chunk-DYXDQS3E.mjs";
import {
  ChatContext,
  ChatContextProvider
} from "./chunk-CBBFRI3Q.mjs";
import {
  CopilotDevConsole
} from "./chunk-XHDD2NWZ.mjs";
import {
  __async,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/components/chat/Chat.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  useCopilotChat,
  useCopilotContext,
  useCopilotMessagesContext
} from "@copilotkit/react-core";
import { Role, TextMessage } from "@copilotkit/runtime-client-gql";
import { randomId } from "@copilotkit/shared";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function CopilotChat({
  instructions,
  onSubmitMessage,
  makeSystemMessage,
  showResponseButton = true,
  onInProgress,
  Messages: Messages2 = Messages,
  RenderTextMessage: RenderTextMessage2 = RenderTextMessage,
  RenderContentMessage: RenderContentMessage2 = RenderContentMessage,
  RenderActionExecutionMessage: RenderActionExecutionMessage2 = RenderActionExecutionMessage,
  RenderAgentStateMessage: RenderAgentStateMessage2 = RenderAgentStateMessage,
  RenderResultMessage: RenderResultMessage2 = RenderResultMessage,
  Input: Input2 = Input,
  ResponseButton: ResponseButton2 = ResponseButton,
  className,
  icons,
  labels
}) {
  const context = useCopilotContext();
  useEffect(() => {
    context.setChatInstructions(instructions || "");
  }, [instructions]);
  const {
    visibleMessages,
    isLoading,
    currentSuggestions,
    sendMessage,
    stopGeneration,
    reloadMessages
  } = useCopilotChatLogic(makeSystemMessage, onInProgress, onSubmitMessage);
  const chatContext = React.useContext(ChatContext);
  const isVisible = chatContext ? chatContext.open : true;
  return /* @__PURE__ */ jsxs(WrappedCopilotChat, { icons, labels, className, children: [
    /* @__PURE__ */ jsx(CopilotDevConsole, {}),
    /* @__PURE__ */ jsxs(
      Messages2,
      {
        RenderTextMessage: RenderTextMessage2,
        RenderActionExecutionMessage: RenderActionExecutionMessage2,
        RenderAgentStateMessage: RenderAgentStateMessage2,
        RenderResultMessage: RenderResultMessage2,
        messages: visibleMessages,
        inProgress: isLoading,
        RenderContentMessage: RenderContentMessage2,
        children: [
          currentSuggestions.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h6", { children: "Suggested:" }),
            /* @__PURE__ */ jsx("div", { className: "suggestions", children: currentSuggestions.map((suggestion, index) => /* @__PURE__ */ jsx(
              Suggestion,
              {
                title: suggestion.title,
                message: suggestion.message,
                partial: suggestion.partial,
                className: suggestion.className,
                onClick: (message) => sendMessage(message)
              },
              index
            )) })
          ] }),
          showResponseButton && visibleMessages.length > 0 && /* @__PURE__ */ jsx(
            ResponseButton2,
            {
              onClick: isLoading ? stopGeneration : reloadMessages,
              inProgress: isLoading
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(Input2, { inProgress: isLoading, onSend: sendMessage, isVisible })
  ] });
}
function WrappedCopilotChat({
  children,
  icons,
  labels,
  className
}) {
  const chatContext = React.useContext(ChatContext);
  if (!chatContext) {
    return /* @__PURE__ */ jsx(ChatContextProvider, { icons, labels, open: true, setOpen: () => {
    }, children: /* @__PURE__ */ jsx("div", { className: `copilotKitChat ${className}`, children }) });
  }
  return /* @__PURE__ */ jsx(Fragment, { children });
}
var SUGGESTIONS_DEBOUNCE_TIMEOUT = 1e3;
var useCopilotChatLogic = (makeSystemMessage, onInProgress, onSubmitMessage) => {
  const { visibleMessages, appendMessage, reloadMessages, stopGeneration, isLoading } = useCopilotChat({
    id: randomId(),
    makeSystemMessage
  });
  const [currentSuggestions, setCurrentSuggestions] = useState([]);
  const suggestionsAbortControllerRef = useRef(null);
  const debounceTimerRef = useRef();
  const abortSuggestions = () => {
    var _a;
    (_a = suggestionsAbortControllerRef.current) == null ? void 0 : _a.abort();
    suggestionsAbortControllerRef.current = null;
  };
  const generalContext = useCopilotContext();
  const messagesContext = useCopilotMessagesContext();
  const context = __spreadValues(__spreadValues({}, generalContext), messagesContext);
  useEffect(() => {
    onInProgress == null ? void 0 : onInProgress(isLoading);
    abortSuggestions();
    debounceTimerRef.current = setTimeout(
      () => {
        if (!isLoading && Object.keys(context.chatSuggestionConfiguration).length !== 0) {
          suggestionsAbortControllerRef.current = new AbortController();
          reloadSuggestions(
            context,
            context.chatSuggestionConfiguration,
            setCurrentSuggestions,
            suggestionsAbortControllerRef
          );
        }
      },
      currentSuggestions.length == 0 ? 0 : SUGGESTIONS_DEBOUNCE_TIMEOUT
    );
    return () => {
      clearTimeout(debounceTimerRef.current);
    };
  }, [isLoading, context.chatSuggestionConfiguration]);
  const sendMessage = (messageContent) => __async(void 0, null, function* () {
    abortSuggestions();
    setCurrentSuggestions([]);
    const message = new TextMessage({
      content: messageContent,
      role: Role.User
    });
    if (onSubmitMessage) {
      try {
        yield onSubmitMessage(messageContent);
      } catch (error) {
        console.error("Error in onSubmitMessage:", error);
      }
    }
    appendMessage(message);
    return message;
  });
  return {
    visibleMessages,
    isLoading,
    currentSuggestions,
    sendMessage,
    stopGeneration,
    reloadMessages
  };
};

export {
  CopilotChat,
  WrappedCopilotChat,
  useCopilotChatLogic
};
//# sourceMappingURL=chunk-P7UVDUSK.mjs.map