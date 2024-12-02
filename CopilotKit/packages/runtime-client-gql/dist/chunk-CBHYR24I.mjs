import {
  GenerateCopilotResponseDocument
} from "./chunk-KB3DBVXU.mjs";

// src/graphql/@generated/gql.ts
var documents = {
  "\n  mutation generateCopilotResponse($data: GenerateCopilotResponseInput!, $properties: JSONObject) {\n    generateCopilotResponse(data: $data, properties: $properties) {\n      threadId\n      runId\n      ... on CopilotResponse @defer {\n        status {\n          ... on BaseResponseStatus {\n            code\n          }\n          ... on FailedResponseStatus {\n            reason\n            details\n          }\n        }\n      }\n      messages @stream {\n        __typename\n        ... on BaseMessageOutput {\n          id\n          createdAt\n        }\n        ... on BaseMessageOutput @defer {\n          status {\n            ... on SuccessMessageStatus {\n              code\n            }\n            ... on FailedMessageStatus {\n              code\n              reason\n            }\n            ... on PendingMessageStatus {\n              code\n            }\n          }\n        }\n        ... on TextMessageOutput {\n          content @stream\n          role\n        }\n        ... on ContentMessageOutput {\n          content @stream\n          role\n        }\n        ... on ActionExecutionMessageOutput {\n          name\n          scope\n          arguments @stream\n        }\n        ... on ResultMessageOutput {\n          result\n          actionExecutionId\n          actionName\n        }\n        ... on AgentStateMessageOutput {\n          threadId\n          state\n          running\n          agentName\n          nodeName\n          runId\n          active\n          role\n        }\n      }\n    }\n  }\n": GenerateCopilotResponseDocument
};
function graphql(source) {
  return documents[source] ?? {};
}

export {
  graphql
};
//# sourceMappingURL=chunk-CBHYR24I.mjs.map