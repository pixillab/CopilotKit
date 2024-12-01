import {
  BaseMessageInput
} from "./chunk-D2WLFQS6.mjs";
import {
  __name
} from "./chunk-44O2JGUY.mjs";

// src/graphql/types/converted/index.ts
var Message = class extends BaseMessageInput {
  type;
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
__name(Message, "Message");
var TextMessage = class extends Message {
  type = "TextMessage";
  content;
  role;
};
__name(TextMessage, "TextMessage");
var ContentMessage = class extends Message {
  type = "ContentMessage";
  content;
  role;
};
__name(ContentMessage, "ContentMessage");
var ActionExecutionMessage = class extends Message {
  type = "ActionExecutionMessage";
  name;
  arguments;
  scope;
};
__name(ActionExecutionMessage, "ActionExecutionMessage");
var ResultMessage = class extends Message {
  type = "ResultMessage";
  actionExecutionId;
  actionName;
  result;
};
__name(ResultMessage, "ResultMessage");
var AgentStateMessage = class extends Message {
  type = "AgentStateMessage";
  threadId;
  agentName;
  nodeName;
  runId;
  active;
  role;
  state;
  running;
};
__name(AgentStateMessage, "AgentStateMessage");

export {
  Message,
  TextMessage,
  ContentMessage,
  ActionExecutionMessage,
  ResultMessage,
  AgentStateMessage
};
//# sourceMappingURL=chunk-WU5ND2ND.mjs.map