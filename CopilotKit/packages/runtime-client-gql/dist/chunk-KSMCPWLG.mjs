import {
  ActionExecutionMessage,
  AgentStateMessage,
  ContentMessage,
  ResultMessage,
  TextMessage
} from "./chunk-5L277J5Z.mjs";

// src/client/conversion.ts
import untruncateJson from "untruncate-json";
function filterAgentStateMessages(messages) {
  return messages.filter((message) => !message.isAgentStateMessage());
}
function convertMessagesToGqlInput(messages) {
  return messages.map((message) => {
    if (message.isTextMessage()) {
      return {
        id: message.id,
        createdAt: message.createdAt,
        textMessage: {
          content: message.content,
          role: message.role
        }
      };
    } else if (message.isActionExecutionMessage()) {
      return {
        id: message.id,
        createdAt: message.createdAt,
        actionExecutionMessage: {
          name: message.name,
          arguments: JSON.stringify(message.arguments),
          scope: message.scope
        }
      };
    } else if (message.isResultMessage()) {
      return {
        id: message.id,
        createdAt: message.createdAt,
        resultMessage: {
          result: message.result,
          actionExecutionId: message.actionExecutionId,
          actionName: message.actionName
        }
      };
    } else if (message.isAgentStateMessage()) {
      return {
        id: message.id,
        createdAt: message.createdAt,
        agentStateMessage: {
          threadId: message.threadId,
          role: message.role,
          agentName: message.agentName,
          nodeName: message.nodeName,
          runId: message.runId,
          active: message.active,
          running: message.running,
          state: JSON.stringify(message.state)
        }
      };
    } else if (message.isContentMessage()) {
      return {
        id: message.id,
        createdAt: message.createdAt,
        contentMessage: {
          content: message.content,
          role: message.role
        }
      };
    } else {
      throw new Error("Unknown message type");
    }
  });
}
function filterAdjacentAgentStateMessages(messages) {
  const filteredMessages = [];
  messages.forEach((message, i) => {
    if (message.__typename !== "AgentStateMessageOutput") {
      filteredMessages.push(message);
    } else {
      const prevAgentStateMessageIndex = filteredMessages.findIndex(
        // TODO: also check runId
        (m) => m.__typename === "AgentStateMessageOutput" && m.agentName === message.agentName
      );
      if (prevAgentStateMessageIndex === -1) {
        filteredMessages.push(message);
      } else {
        filteredMessages[prevAgentStateMessageIndex] = message;
      }
    }
  });
  return filteredMessages;
}
function convertGqlOutputToMessages(messages) {
  return messages.map((message) => {
    if (message.__typename === "TextMessageOutput") {
      return new TextMessage({
        id: message.id,
        role: message.role,
        content: message.content.join(""),
        createdAt: /* @__PURE__ */ new Date(),
        status: message.status || { code: "Pending" /* Pending */ }
      });
    } else if (message.__typename === "ActionExecutionMessageOutput") {
      return new ActionExecutionMessage({
        id: message.id,
        name: message.name,
        arguments: getPartialArguments(message.arguments),
        scope: message.scope,
        createdAt: /* @__PURE__ */ new Date(),
        status: message.status || { code: "Pending" /* Pending */ }
      });
    } else if (message.__typename === "ResultMessageOutput") {
      return new ResultMessage({
        id: message.id,
        result: message.result,
        actionExecutionId: message.actionExecutionId,
        actionName: message.actionName,
        createdAt: /* @__PURE__ */ new Date(),
        status: message.status || { code: "Pending" /* Pending */ }
      });
    } else if (message.__typename === "AgentStateMessageOutput") {
      return new AgentStateMessage({
        id: message.id,
        threadId: message.threadId,
        role: message.role,
        agentName: message.agentName,
        nodeName: message.nodeName,
        runId: message.runId,
        active: message.active,
        running: message.running,
        state: JSON.parse(message.state),
        createdAt: /* @__PURE__ */ new Date()
      });
    } else if (message.__typename === "ContentMessageOutput") {
      const content = message.content.map((item) => ({
        type: "text",
        // Assume all content strings are text
        textContent: {
          type: "text",
          text: item
          // Map string to `textContent.text`
        }
      }));
      return new ContentMessage({
        id: message.id,
        role: message.role,
        content,
        createdAt: /* @__PURE__ */ new Date(),
        status: message.status || { code: "Pending" /* Pending */ }
      });
    }
    throw new Error("Unknown message type");
  });
}
function getPartialArguments(args) {
  try {
    return JSON.parse(untruncateJson(args.join("")));
  } catch (e) {
    return {};
  }
}

export {
  filterAgentStateMessages,
  convertMessagesToGqlInput,
  filterAdjacentAgentStateMessages,
  convertGqlOutputToMessages
};
//# sourceMappingURL=chunk-KSMCPWLG.mjs.map