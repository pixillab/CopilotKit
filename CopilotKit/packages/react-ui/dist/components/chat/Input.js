"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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

// src/components/chat/Input.tsx
var Input_exports = {};
__export(Input_exports, {
  Input: () => Input
});
module.exports = __toCommonJS(Input_exports);
var import_react4 = require("react");

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

// src/components/chat/Textarea.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var AutoResizingTextarea = (0, import_react2.forwardRef)(
  ({ maxRows = 1, placeholder, value, onChange, onKeyDown, autoFocus }, ref) => {
    const internalTextareaRef = (0, import_react2.useRef)(null);
    const [maxHeight, setMaxHeight] = (0, import_react2.useState)(0);
    (0, import_react2.useImperativeHandle)(ref, () => internalTextareaRef.current);
    (0, import_react2.useEffect)(() => {
      const calculateMaxHeight = () => {
        const textarea = internalTextareaRef.current;
        if (textarea) {
          textarea.style.height = "auto";
          const singleRowHeight = textarea.scrollHeight;
          setMaxHeight(singleRowHeight * maxRows);
          if (autoFocus) {
            textarea.focus();
          }
        }
      };
      calculateMaxHeight();
    }, [maxRows]);
    (0, import_react2.useEffect)(() => {
      const textarea = internalTextareaRef.current;
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
      }
    }, [value, maxHeight]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "textarea",
      {
        ref: internalTextareaRef,
        value,
        onChange,
        onKeyDown,
        placeholder,
        style: {
          overflow: "auto",
          resize: "none",
          maxHeight: `${maxHeight}px`
        },
        rows: 1
      }
    );
  }
);
var Textarea_default = AutoResizingTextarea;

// src/hooks/use-push-to-talk.tsx
var import_react_core = require("@copilotkit/react-core");
var import_react3 = require("react");
var startRecording = (mediaStreamRef, mediaRecorderRef, audioContextRef, recordedChunks, onStop) => __async(void 0, null, function* () {
  if (!mediaStreamRef.current || !audioContextRef.current) {
    mediaStreamRef.current = yield navigator.mediaDevices.getUserMedia({ audio: true });
    audioContextRef.current = new window.AudioContext();
    yield audioContextRef.current.resume();
  }
  mediaRecorderRef.current = new MediaRecorder(mediaStreamRef.current);
  mediaRecorderRef.current.start(1e3);
  mediaRecorderRef.current.ondataavailable = (event) => {
    recordedChunks.push(event.data);
  };
  mediaRecorderRef.current.onstop = onStop;
});
var stopRecording = (mediaRecorderRef) => {
  if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
    mediaRecorderRef.current.stop();
  }
};
var transcribeAudio = (recordedChunks, transcribeAudioUrl) => __async(void 0, null, function* () {
  const completeBlob = new Blob(recordedChunks, { type: "audio/mp4" });
  const formData = new FormData();
  formData.append("file", completeBlob, "recording.mp4");
  const response = yield fetch(transcribeAudioUrl, {
    method: "POST",
    body: formData
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  const transcription = yield response.json();
  return transcription.text;
});
var playAudioResponse = (text, textToSpeechUrl, audioContext, contentMessages) => {
  const encodedText = encodeURIComponent(text);
  const url = `${textToSpeechUrl}?text=${encodedText}`;
  fetch(url).then((response) => response.arrayBuffer()).then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer)).then((audioBuffer) => {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start(0);
    contentMessages.forEach((contentMessage) => {
      console.log("Handling content message:", contentMessage.content[0].textContent);
    });
  }).catch((error) => {
    console.error("Error with decoding audio data", error);
  });
};
var usePushToTalk = ({
  sendFunction,
  inProgress
}) => {
  const [pushToTalkState, setPushToTalkState] = (0, import_react3.useState)("idle");
  const mediaStreamRef = (0, import_react3.useRef)(null);
  const audioContextRef = (0, import_react3.useRef)(null);
  const mediaRecorderRef = (0, import_react3.useRef)(null);
  const recordedChunks = (0, import_react3.useRef)([]);
  const generalContext = (0, import_react_core.useCopilotContext)();
  const messagesContext = (0, import_react_core.useCopilotMessagesContext)();
  const context = __spreadValues(__spreadValues({}, generalContext), messagesContext);
  const [startReadingFromMessageId, setStartReadingFromMessageId] = (0, import_react3.useState)(null);
  (0, import_react3.useEffect)(() => {
    if (pushToTalkState === "recording") {
      startRecording(
        mediaStreamRef,
        mediaRecorderRef,
        audioContextRef,
        recordedChunks.current,
        () => {
          setPushToTalkState("transcribing");
        }
      );
    } else {
      stopRecording(mediaRecorderRef);
      if (pushToTalkState === "transcribing") {
        transcribeAudio(recordedChunks.current, context.copilotApiConfig.transcribeAudioUrl).then(
          (transcription) => __async(void 0, null, function* () {
            recordedChunks.current = [];
            setPushToTalkState("idle");
            const message = yield sendFunction(transcription);
            setStartReadingFromMessageId(message.id);
          })
        );
      }
    }
    return () => {
      stopRecording(mediaRecorderRef);
    };
  }, [pushToTalkState]);
  (0, import_react3.useEffect)(() => {
    if (inProgress === false && startReadingFromMessageId) {
      const lastMessageIndex = context.messages.findIndex(
        (message) => message.id === startReadingFromMessageId
      );
      const messagesAfterLast = context.messages.slice(lastMessageIndex + 1);
      const textMessages = messagesAfterLast.filter(
        (message) => message.isTextMessage() && message.role === "assistant"
      );
      const contentMessages = messagesAfterLast.filter(
        (message) => message.isContentMessage()
      );
      const text = textMessages.map((message) => message.content).join("\n");
      playAudioResponse(
        text,
        context.copilotApiConfig.textToSpeechUrl,
        audioContextRef.current,
        contentMessages
      );
      setStartReadingFromMessageId(null);
    }
  }, [startReadingFromMessageId, inProgress]);
  return { pushToTalkState, setPushToTalkState };
};

// src/components/chat/Input.tsx
var import_react_core2 = require("@copilotkit/react-core");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Input = ({ inProgress, onSend, isVisible = false }) => {
  const context = useChatContext();
  const copilotContext = (0, import_react_core2.useCopilotContext)();
  const pushToTalkConfigured = copilotContext.copilotApiConfig.textToSpeechUrl !== void 0 && copilotContext.copilotApiConfig.transcribeAudioUrl !== void 0;
  const textareaRef = (0, import_react4.useRef)(null);
  const handleDivClick = (event) => {
    var _a;
    if (event.target !== event.currentTarget)
      return;
    (_a = textareaRef.current) == null ? void 0 : _a.focus();
  };
  const [text, setText] = (0, import_react4.useState)("");
  const send = () => {
    var _a;
    if (inProgress)
      return;
    onSend(text);
    setText("");
    (_a = textareaRef.current) == null ? void 0 : _a.focus();
  };
  (0, import_react4.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "copilotKitInput", onClick: handleDivClick, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "copilotKitInputControls", children: [
      showPushToTalk && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "button",
        {
          onClick: () => setPushToTalkState(pushToTalkState === "idle" ? "recording" : "transcribing"),
          className: pushToTalkState === "recording" ? "copilotKitPushToTalkRecording" : "",
          children: context.icons.pushToTalkIcon
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Input
});
//# sourceMappingURL=Input.js.map