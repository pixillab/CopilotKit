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

// src/graphql/definitions/mutations.ts
var mutations_exports = {};
__export(mutations_exports, {
  generateCopilotResponseMutation: () => generateCopilotResponseMutation
});
module.exports = __toCommonJS(mutations_exports);

// src/graphql/@generated/graphql.ts
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateCopilotResponseMutation
});
//# sourceMappingURL=mutations.js.map