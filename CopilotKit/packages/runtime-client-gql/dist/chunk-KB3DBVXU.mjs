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

export {
  ActionExecutionScope,
  CopilotRequestType,
  FailedResponseStatusReason,
  MessageRole,
  MessageStatusCode,
  ResponseStatusCode,
  GenerateCopilotResponseDocument
};
//# sourceMappingURL=chunk-KB3DBVXU.mjs.map