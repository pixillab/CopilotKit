"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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

// src/hooks/use-push-to-talk.tsx
var use_push_to_talk_exports = {};
__export(use_push_to_talk_exports, {
  checkMicrophonePermission: () => checkMicrophonePermission,
  requestMicAndPlaybackPermission: () => requestMicAndPlaybackPermission,
  usePushToTalk: () => usePushToTalk
});
module.exports = __toCommonJS(use_push_to_talk_exports);
var import_react_core = require("@copilotkit/react-core");
var import_react = require("react");
var checkMicrophonePermission = () => __async(void 0, null, function* () {
  try {
    const permissionStatus = yield navigator.permissions.query({
      name: "microphone"
    });
    if (permissionStatus.state === "granted") {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error("Error checking microphone permission", err);
  }
});
var requestMicAndPlaybackPermission = () => __async(void 0, null, function* () {
  try {
    const stream = yield navigator.mediaDevices.getUserMedia({ audio: true });
    const audioContext = new window.AudioContext();
    yield audioContext.resume();
    return { stream, audioContext };
  } catch (err) {
    console.error("Error requesting microphone and playback permissions", err);
    return null;
  }
});
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
  const [pushToTalkState, setPushToTalkState] = (0, import_react.useState)("idle");
  const mediaStreamRef = (0, import_react.useRef)(null);
  const audioContextRef = (0, import_react.useRef)(null);
  const mediaRecorderRef = (0, import_react.useRef)(null);
  const recordedChunks = (0, import_react.useRef)([]);
  const generalContext = (0, import_react_core.useCopilotContext)();
  const messagesContext = (0, import_react_core.useCopilotMessagesContext)();
  const context = __spreadValues(__spreadValues({}, generalContext), messagesContext);
  const [startReadingFromMessageId, setStartReadingFromMessageId] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
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
  (0, import_react.useEffect)(() => {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkMicrophonePermission,
  requestMicAndPlaybackPermission,
  usePushToTalk
});
//# sourceMappingURL=use-push-to-talk.js.map