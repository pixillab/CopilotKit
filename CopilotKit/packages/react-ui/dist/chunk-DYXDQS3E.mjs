import {
  Textarea_default
} from "./chunk-YQFVRDNC.mjs";
import {
  useChatContext
} from "./chunk-CBBFRI3Q.mjs";
import {
  usePushToTalk
} from "./chunk-6IT6R6XO.mjs";

// src/components/chat/Input.tsx
import { useEffect, useRef, useState } from "react";
import { useCopilotContext } from "@copilotkit/react-core";
import { jsx, jsxs } from "react/jsx-runtime";
var Input = ({ inProgress, onSend, isVisible = false }) => {
  const context = useChatContext();
  const copilotContext = useCopilotContext();
  const pushToTalkConfigured = copilotContext.copilotApiConfig.textToSpeechUrl !== void 0 && copilotContext.copilotApiConfig.transcribeAudioUrl !== void 0;
  const textareaRef = useRef(null);
  const handleDivClick = (event) => {
    var _a;
    if (event.target !== event.currentTarget)
      return;
    (_a = textareaRef.current) == null ? void 0 : _a.focus();
  };
  const [text, setText] = useState("");
  const send = () => {
    var _a;
    if (inProgress)
      return;
    onSend(text);
    setText("");
    (_a = textareaRef.current) == null ? void 0 : _a.focus();
  };
  useEffect(() => {
    var _a;
    if (isVisible) {
      (_a = textareaRef.current) == null ? void 0 : _a.focus();
    }
  }, [isVisible]);
  const { pushToTalkState, setPushToTalkState } = usePushToTalk({
    sendFunction: onSend,
    inProgress
  });
  const sendIcon = inProgress || pushToTalkState === "transcribing" ? context.icons.activityIcon : context.icons.sendIcon;
  const showPushToTalk = pushToTalkConfigured && (pushToTalkState === "idle" || pushToTalkState === "recording") && !inProgress;
  const sendDisabled = inProgress || text.length === 0 || pushToTalkState !== "idle";
  return /* @__PURE__ */ jsxs("div", { className: "copilotKitInput", onClick: handleDivClick, children: [
    /* @__PURE__ */ jsx(
      Textarea_default,
      {
        ref: textareaRef,
        placeholder: context.labels.placeholder,
        autoFocus: true,
        maxRows: 5,
        value: text,
        onChange: (event) => setText(event.target.value),
        onKeyDown: (event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            send();
          }
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "copilotKitInputControls", children: [
      showPushToTalk && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setPushToTalkState(pushToTalkState === "idle" ? "recording" : "transcribing"),
          className: pushToTalkState === "recording" ? "copilotKitPushToTalkRecording" : "",
          children: context.icons.pushToTalkIcon
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          disabled: sendDisabled,
          onClick: send,
          "data-copilotkit-in-progress": !!inProgress,
          "data-testid": inProgress ? "copilot-chat-request-in-progress" : void 0,
          children: sendIcon
        }
      )
    ] })
  ] });
};

export {
  Input
};
//# sourceMappingURL=chunk-DYXDQS3E.mjs.map