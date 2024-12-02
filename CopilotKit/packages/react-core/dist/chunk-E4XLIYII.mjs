import {
  useCopilotChat
} from "./chunk-4EZPAPPG.mjs";
import {
  useCopilotMessagesContext
} from "./chunk-DCTJZ742.mjs";
import {
  useCopilotContext
} from "./chunk-2MPUQRAY.mjs";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-SKC7AJIV.mjs";

// src/hooks/use-coagent.ts
import { useEffect } from "react";
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
  useEffect(() => {
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

export {
  useCoAgent
};
//# sourceMappingURL=chunk-E4XLIYII.mjs.map