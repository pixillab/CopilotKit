import {
  __async,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/hooks/use-push-to-talk.tsx
import { useCopilotContext, useCopilotMessagesContext } from "@copilotkit/react-core";
import { useEffect, useRef, useState } from "react";
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
  const [pushToTalkState, setPushToTalkState] = useState("idle");
  const mediaStreamRef = useRef(null);
  const audioContextRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunks = useRef([]);
  const generalContext = useCopilotContext();
  const messagesContext = useCopilotMessagesContext();
  const context = __spreadValues(__spreadValues({}, generalContext), messagesContext);
  const [startReadingFromMessageId, setStartReadingFromMessageId] = useState(null);
  useEffect(() => {
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
  useEffect(() => {
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

export {
  checkMicrophonePermission,
  requestMicAndPlaybackPermission,
  usePushToTalk
};
//# sourceMappingURL=chunk-6IT6R6XO.mjs.map