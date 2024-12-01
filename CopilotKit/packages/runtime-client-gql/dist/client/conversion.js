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

// src/client/conversion.ts
var conversion_exports = {};
__export(conversion_exports, {
  convertGqlOutputToMessages: () => convertGqlOutputToMessages,
  convertMessagesToGqlInput: () => convertMessagesToGqlInput,
  filterAdjacentAgentStateMessages: () => filterAdjacentAgentStateMessages,
  filterAgentStateMessages: () => filterAgentStateMessages
});
module.exports = __toCommonJS(conversion_exports);

// src/client/types.ts
var import_shared = require("@copilotkit/shared");
var Message = class {
  constructor(props) {
    props.id ?? (props.id = (0, import_shared.randomId)());
    props.status ?? (props.status = { code: "Success" /* Success */ });
    props.createdAt ?? (props.createdAt = /* @__PURE__ */ new Date());
    Object.assign(this, props);
  }
  isTextMessage() {
    return this.type === "TextMessage";
  }
  isContentMessage() {
    return this.type === "ContentMessage";
  }
  isActionExecutionMessage() {
    return this.type === "ActionExecutionMessage";
  }
  isResultMessage() {
    return this.type === "ResultMessage";
  }
  isAgentStateMessage() {
    return this.type === "AgentStateMessage";
  }
};
var TextMessage = class extends Message {
  constructor(props) {
    super(props);
    this.type = "TextMessage";
  }
};
var ContentMessage = class extends Message {
  constructor(props) {
    super(props);
    this.content = props.content ?? [];
    this.role = props.role;
    this.type = "ContentMessage";
  }
};
var ActionExecutionMessage = class extends Message {
  constructor(props) {
    super(props);
    this.type = "ActionExecutionMessage";
  }
};
var ResultMessage = class extends Message {
  constructor(props) {
    super(props);
    this.type = "ResultMessage";
  }
  static decodeResult(result) {
    try {
      return JSON.parse(result);
    } catch (e) {
      return result;
    }
  }
  static encodeResult(result) {
    if (result === void 0) {
      return "";
    } else if (typeof result === "string") {
      return result;
    } else {
      return JSON.stringify(result);
    }
  }
};
var AgentStateMessage = class extends Message {
  constructor(props) {
    super(props);
    this.type = "AgentStateMessage";
  }
};

// src/client/conversion.ts
var import_untruncate_json = __toESM(require("untruncate-json"));
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
    } else if (message instanceof ContentMessage) {
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
    return JSON.parse((0, import_untruncate_json.default)(args.join("")));
  } catch (e) {
    return {};
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  convertGqlOutputToMessages,
  convertMessagesToGqlInput,
  filterAdjacentAgentStateMessages,
  filterAgentStateMessages
});
//# sourceMappingURL=conversion.js.map