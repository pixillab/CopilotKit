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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ActionExecutionMessage: () => ActionExecutionMessage,
  ActionExecutionScope: () => ActionExecutionScope,
  AgentStateMessage: () => AgentStateMessage,
  ContentMessage: () => ContentMessage,
  CopilotRequestType: () => CopilotRequestType,
  CopilotRuntimeClient: () => CopilotRuntimeClient,
  FailedResponseStatusReason: () => FailedResponseStatusReason,
  GenerateCopilotResponseDocument: () => GenerateCopilotResponseDocument,
  Message: () => Message,
  MessageRole: () => MessageRole,
  MessageStatusCode: () => MessageStatusCode,
  ResponseStatusCode: () => ResponseStatusCode,
  ResultMessage: () => ResultMessage,
  Role: () => Role,
  TextMessage: () => TextMessage,
  convertGqlOutputToMessages: () => convertGqlOutputToMessages,
  convertMessagesToGqlInput: () => convertMessagesToGqlInput,
  filterAdjacentAgentStateMessages: () => filterAdjacentAgentStateMessages,
  filterAgentStateMessages: () => filterAgentStateMessages
});
module.exports = __toCommonJS(src_exports);

// src/client/CopilotRuntimeClient.ts
var import_core = require("@urql/core");

// package.json
var version = "1.3.15-pixil.3";

// src/graphql/@generated/graphql.ts
var ActionExecutionScope = /* @__PURE__ */ ((ActionExecutionScope2) => {
  ActionExecutionScope2["Client"] = "client";
  ActionExecutionScope2["PassThrough"] = "passThrough";
  ActionExecutionScope2["Server"] = "server";
  return ActionExecutionScope2;
})(ActionExecutionScope || {});
var CopilotRequestType = /* @__PURE__ */ ((CopilotRequestType2) => {
  CopilotRequestType2["Chat"] = "Chat";
  CopilotRequestType2["Suggestion"] = "Suggestion";
  CopilotRequestType2["Task"] = "Task";
  CopilotRequestType2["TextareaCompletion"] = "TextareaCompletion";
  CopilotRequestType2["TextareaPopover"] = "TextareaPopover";
  return CopilotRequestType2;
})(CopilotRequestType || {});
var FailedResponseStatusReason = /* @__PURE__ */ ((FailedResponseStatusReason2) => {
  FailedResponseStatusReason2["GuardrailsValidationFailed"] = "GUARDRAILS_VALIDATION_FAILED";
  FailedResponseStatusReason2["MessageStreamInterrupted"] = "MESSAGE_STREAM_INTERRUPTED";
  FailedResponseStatusReason2["UnknownError"] = "UNKNOWN_ERROR";
  return FailedResponseStatusReason2;
})(FailedResponseStatusReason || {});
var MessageRole = /* @__PURE__ */ ((MessageRole2) => {
  MessageRole2["Assistant"] = "assistant";
  MessageRole2["System"] = "system";
  MessageRole2["User"] = "user";
  return MessageRole2;
})(MessageRole || {});
var MessageStatusCode = /* @__PURE__ */ ((MessageStatusCode2) => {
  MessageStatusCode2["Failed"] = "Failed";
  MessageStatusCode2["Pending"] = "Pending";
  MessageStatusCode2["Success"] = "Success";
  return MessageStatusCode2;
})(MessageStatusCode || {});
var ResponseStatusCode = /* @__PURE__ */ ((ResponseStatusCode2) => {
  ResponseStatusCode2["Failed"] = "Failed";
  ResponseStatusCode2["Pending"] = "Pending";
  ResponseStatusCode2["Success"] = "Success";
  return ResponseStatusCode2;
})(ResponseStatusCode || {});
var GenerateCopilotResponseDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "generateCopilotResponse" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "data" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "GenerateCopilotResponseInput" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "properties" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "JSONObject" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "generateCopilotResponse" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "data" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "data" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "properties" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "properties" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "threadId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "runId" } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "CopilotResponse" } }, "directives": [{ "kind": "Directive", "name": { "kind": "Name", "value": "defer" } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "status" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "BaseResponseStatus" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "code" } }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "FailedResponseStatus" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "reason" } }, { "kind": "Field", "name": { "kind": "Name", "value": "details" } }] } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "messages" }, "directives": [{ "kind": "Directive", "name": { "kind": "Name", "value": "stream" } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "__typename" } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "BaseMessageOutput" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "BaseMessageOutput" } }, "directives": [{ "kind": "Directive", "name": { "kind": "Name", "value": "defer" } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "status" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "SuccessMessageStatus" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "code" } }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "FailedMessageStatus" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "reason" } }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "PendingMessageStatus" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "code" } }] } }] } }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "TextMessageOutput" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "content" }, "directives": [{ "kind": "Directive", "name": { "kind": "Name", "value": "stream" } }] }, { "kind": "Field", "name": { "kind": "Name", "value": "role" } }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "ContentMessageOutput" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "content" }, "directives": [{ "kind": "Directive", "name": { "kind": "Name", "value": "stream" } }] }, { "kind": "Field", "name": { "kind": "Name", "value": "role" } }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "ActionExecutionMessageOutput" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "scope" } }, { "kind": "Field", "name": { "kind": "Name", "value": "arguments" }, "directives": [{ "kind": "Directive", "name": { "kind": "Name", "value": "stream" } }] }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "ResultMessageOutput" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "result" } }, { "kind": "Field", "name": { "kind": "Name", "value": "actionExecutionId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "actionName" } }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "AgentStateMessageOutput" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "threadId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "state" } }, { "kind": "Field", "name": { "kind": "Name", "value": "running" } }, { "kind": "Field", "name": { "kind": "Name", "value": "agentName" } }, { "kind": "Field", "name": { "kind": "Name", "value": "nodeName" } }, { "kind": "Field", "name": { "kind": "Name", "value": "runId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "role" } }] } }] } }] } }] } }] };

// src/graphql/@generated/gql.ts
var documents = {
  "\n  mutation generateCopilotResponse($data: GenerateCopilotResponseInput!, $properties: JSONObject) {\n    generateCopilotResponse(data: $data, properties: $properties) {\n      threadId\n      runId\n      ... on CopilotResponse @defer {\n        status {\n          ... on BaseResponseStatus {\n            code\n          }\n          ... on FailedResponseStatus {\n            reason\n            details\n          }\n        }\n      }\n      messages @stream {\n        __typename\n        ... on BaseMessageOutput {\n          id\n          createdAt\n        }\n        ... on BaseMessageOutput @defer {\n          status {\n            ... on SuccessMessageStatus {\n              code\n            }\n            ... on FailedMessageStatus {\n              code\n              reason\n            }\n            ... on PendingMessageStatus {\n              code\n            }\n          }\n        }\n        ... on TextMessageOutput {\n          content @stream\n          role\n        }\n        ... on ContentMessageOutput {\n          content @stream\n          role\n        }\n        ... on ActionExecutionMessageOutput {\n          name\n          scope\n          arguments @stream\n        }\n        ... on ResultMessageOutput {\n          result\n          actionExecutionId\n          actionName\n        }\n        ... on AgentStateMessageOutput {\n          threadId\n          state\n          running\n          agentName\n          nodeName\n          runId\n          active\n          role\n        }\n      }\n    }\n  }\n": GenerateCopilotResponseDocument
};
function graphql(source) {
  return documents[source] ?? {};
}

// src/graphql/definitions/mutations.ts
var generateCopilotResponseMutation = graphql(
  /** GraphQL **/
  `
  mutation generateCopilotResponse($data: GenerateCopilotResponseInput!, $properties: JSONObject) {
    generateCopilotResponse(data: $data, properties: $properties) {
      threadId
      runId
      ... on CopilotResponse @defer {
        status {
          ... on BaseResponseStatus {
            code
          }
          ... on FailedResponseStatus {
            reason
            details
          }
        }
      }
      messages @stream {
        __typename
        ... on BaseMessageOutput {
          id
          createdAt
        }
        ... on BaseMessageOutput @defer {
          status {
            ... on SuccessMessageStatus {
              code
            }
            ... on FailedMessageStatus {
              code
              reason
            }
            ... on PendingMessageStatus {
              code
            }
          }
        }
        ... on TextMessageOutput {
          content @stream
          role
        }
        ... on ContentMessageOutput {
          content @stream
          role
        }
        ... on ActionExecutionMessageOutput {
          name
          scope
          arguments @stream
        }
        ... on ResultMessageOutput {
          result
          actionExecutionId
          actionName
        }
        ... on AgentStateMessageOutput {
          threadId
          state
          running
          agentName
          nodeName
          runId
          active
          role
        }
      }
    }
  }
`
);

// src/client/CopilotRuntimeClient.ts
var CopilotRuntimeClient = class {
  constructor(options) {
    const headers = {};
    if (options.headers) {
      Object.assign(headers, options.headers);
    }
    if (options.publicApiKey) {
      headers["x-copilotcloud-public-api-key"] = options.publicApiKey;
    }
    this.client = new import_core.Client({
      url: options.url,
      exchanges: [import_core.cacheExchange, import_core.fetchExchange],
      fetchOptions: {
        headers: {
          ...headers,
          "X-CopilotKit-Runtime-Client-GQL-Version": version
        },
        ...options.credentials ? { credentials: options.credentials } : {}
      }
    });
  }
  generateCopilotResponse({
    data,
    properties,
    signal
  }) {
    const result = this.client.mutation(
      generateCopilotResponseMutation,
      { data, properties },
      { fetch: (url, opts) => fetch(url, { ...opts, signal }) }
    );
    return result;
  }
  static asStream(source) {
    return new ReadableStream({
      start(controller) {
        source.subscribe(({ data, hasNext }) => {
          controller.enqueue(data);
          if (!hasNext) {
            controller.close();
          }
        });
      }
    });
  }
};

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
  ActionExecutionMessage,
  ActionExecutionScope,
  AgentStateMessage,
  ContentMessage,
  CopilotRequestType,
  CopilotRuntimeClient,
  FailedResponseStatusReason,
  GenerateCopilotResponseDocument,
  Message,
  MessageRole,
  MessageStatusCode,
  ResponseStatusCode,
  ResultMessage,
  Role,
  TextMessage,
  convertGqlOutputToMessages,
  convertMessagesToGqlInput,
  filterAdjacentAgentStateMessages,
  filterAgentStateMessages
});
//# sourceMappingURL=index.js.map