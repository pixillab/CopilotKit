"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/types.ts
var types_exports = {};
__export(types_exports, {
  ActionExecutionMessage: () => ActionExecutionMessage,
  AgentStateMessage: () => AgentStateMessage,
  ContentMessage: () => ContentMessage,
  Message: () => Message,
  ResultMessage: () => ResultMessage,
  Role: () => Role,
  TextMessage: () => TextMessage
});
module.exports = __toCommonJS(types_exports);
var import_shared = require("@copilotkit/shared");

// src/graphql/@generated/graphql.ts
var MessageRole = /* @__PURE__ */ ((MessageRole2) => {
  MessageRole2["Assistant"] = "assistant";
  MessageRole2["System"] = "system";
  MessageRole2["User"] = "user";
  return MessageRole2;
})(MessageRole || {});

// src/client/types.ts
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
var Role = MessageRole;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ActionExecutionMessage,
  AgentStateMessage,
  ContentMessage,
  Message,
  ResultMessage,
  Role,
  TextMessage
});
//# sourceMappingURL=types.js.map