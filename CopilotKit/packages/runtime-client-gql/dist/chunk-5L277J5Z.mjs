import {
  MessageRole
} from "./chunk-KB3DBVXU.mjs";

// src/client/types.ts
import { randomId } from "@copilotkit/shared";
var Message = class {
  constructor(props) {
    props.id ?? (props.id = randomId());
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

export {
  Message,
  Role,
  TextMessage,
  ContentMessage,
  ActionExecutionMessage,
  ResultMessage,
  AgentStateMessage
};
//# sourceMappingURL=chunk-5L277J5Z.mjs.map