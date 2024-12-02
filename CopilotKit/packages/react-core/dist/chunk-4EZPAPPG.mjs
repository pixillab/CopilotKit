import {
  defaultCopilotContextCategories
} from "./chunk-6YEMNWKE.mjs";
import {
  useCopilotMessagesContext
} from "./chunk-DCTJZ742.mjs";
import {
  useChat
} from "./chunk-XCH6MOCG.mjs";
import {
  useCopilotContext
} from "./chunk-2MPUQRAY.mjs";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-SKC7AJIV.mjs";

// src/hooks/use-copilot-chat.ts
import { useRef, useEffect, useCallback } from "react";
import { Role, TextMessage } from "@copilotkit/runtime-client-gql";
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
  const deleteMessage = useCallback(
    (messageId) => {
      setMessages((prev) => prev.filter((message) => message.id !== messageId));
    },
    [setMessages]
  );
  const makeSystemMessageCallback = useCallback(() => {
    const systemMessageMaker = makeSystemMessage || defaultSystemMessage;
    const contextString = latestGetContextString.current([], defaultCopilotContextCategories);
    return new TextMessage({
      content: systemMessageMaker(contextString, chatInstructions),
      role: Role.System
    });
  }, [getContextString, makeSystemMessage, chatInstructions]);
  const onCoAgentStateRender = useCallback(
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
  const latestAppendFunc = useCallback(
    (message) => {
      return latestAppend.current(message);
    },
    [latestAppend]
  );
  const latestReload = useUpdatedRef(reload);
  const latestReloadFunc = useCallback(() => {
    return latestReload.current();
  }, [latestReload]);
  const latestStop = useUpdatedRef(stop);
  const latestStopFunc = useCallback(() => {
    return latestStop.current();
  }, [latestStop]);
  const latestDelete = useUpdatedRef(deleteMessage);
  const latestDeleteFunc = useCallback(
    (messageId) => {
      return latestDelete.current(messageId);
    },
    [latestDelete]
  );
  const latestSetMessages = useUpdatedRef(setMessages);
  const latestSetMessagesFunc = useCallback(
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
  const ref = useRef(value);
  useEffect(() => {
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

export {
  useCopilotChat,
  defaultSystemMessage
};
//# sourceMappingURL=chunk-4EZPAPPG.mjs.map