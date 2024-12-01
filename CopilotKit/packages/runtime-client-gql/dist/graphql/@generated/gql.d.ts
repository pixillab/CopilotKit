import { GenerateCopilotResponseMutation, Exact, GenerateCopilotResponseInput, InputMaybe, Scalars } from './graphql.js';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
declare const documents: {
    "\n  mutation generateCopilotResponse($data: GenerateCopilotResponseInput!, $properties: JSONObject) {\n    generateCopilotResponse(data: $data, properties: $properties) {\n      threadId\n      runId\n      ... on CopilotResponse @defer {\n        status {\n          ... on BaseResponseStatus {\n            code\n          }\n          ... on FailedResponseStatus {\n            reason\n            details\n          }\n        }\n      }\n      messages @stream {\n        __typename\n        ... on BaseMessageOutput {\n          id\n          createdAt\n        }\n        ... on BaseMessageOutput @defer {\n          status {\n            ... on SuccessMessageStatus {\n              code\n            }\n            ... on FailedMessageStatus {\n              code\n              reason\n            }\n            ... on PendingMessageStatus {\n              code\n            }\n          }\n        }\n        ... on TextMessageOutput {\n          content @stream\n          role\n        }\n        ... on ContentMessageOutput {\n          content @stream\n          role\n        }\n        ... on ActionExecutionMessageOutput {\n          name\n          scope\n          arguments @stream\n        }\n        ... on ResultMessageOutput {\n          result\n          actionExecutionId\n          actionName\n        }\n        ... on AgentStateMessageOutput {\n          threadId\n          state\n          running\n          agentName\n          nodeName\n          runId\n          active\n          role\n        }\n      }\n    }\n  }\n": TypedDocumentNode<GenerateCopilotResponseMutation, Exact<{
        data: GenerateCopilotResponseInput;
        properties?: InputMaybe<Scalars["JSONObject"]["input"]>;
    }>>;
};
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
declare function graphql(source: string): unknown;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation generateCopilotResponse($data: GenerateCopilotResponseInput!, $properties: JSONObject) {\n    generateCopilotResponse(data: $data, properties: $properties) {\n      threadId\n      runId\n      ... on CopilotResponse @defer {\n        status {\n          ... on BaseResponseStatus {\n            code\n          }\n          ... on FailedResponseStatus {\n            reason\n            details\n          }\n        }\n      }\n      messages @stream {\n        __typename\n        ... on BaseMessageOutput {\n          id\n          createdAt\n        }\n        ... on BaseMessageOutput @defer {\n          status {\n            ... on SuccessMessageStatus {\n              code\n            }\n            ... on FailedMessageStatus {\n              code\n              reason\n            }\n            ... on PendingMessageStatus {\n              code\n            }\n          }\n        }\n        ... on TextMessageOutput {\n          content @stream\n          role\n        }\n        ... on ContentMessageOutput {\n          content @stream\n          role\n        }\n        ... on ActionExecutionMessageOutput {\n          name\n          scope\n          arguments @stream\n        }\n        ... on ResultMessageOutput {\n          result\n          actionExecutionId\n          actionName\n        }\n        ... on AgentStateMessageOutput {\n          threadId\n          state\n          running\n          agentName\n          nodeName\n          runId\n          active\n          role\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation generateCopilotResponse($data: GenerateCopilotResponseInput!, $properties: JSONObject) {\n    generateCopilotResponse(data: $data, properties: $properties) {\n      threadId\n      runId\n      ... on CopilotResponse @defer {\n        status {\n          ... on BaseResponseStatus {\n            code\n          }\n          ... on FailedResponseStatus {\n            reason\n            details\n          }\n        }\n      }\n      messages @stream {\n        __typename\n        ... on BaseMessageOutput {\n          id\n          createdAt\n        }\n        ... on BaseMessageOutput @defer {\n          status {\n            ... on SuccessMessageStatus {\n              code\n            }\n            ... on FailedMessageStatus {\n              code\n              reason\n            }\n            ... on PendingMessageStatus {\n              code\n            }\n          }\n        }\n        ... on TextMessageOutput {\n          content @stream\n          role\n        }\n        ... on ContentMessageOutput {\n          content @stream\n          role\n        }\n        ... on ActionExecutionMessageOutput {\n          name\n          scope\n          arguments @stream\n        }\n        ... on ResultMessageOutput {\n          result\n          actionExecutionId\n          actionName\n        }\n        ... on AgentStateMessageOutput {\n          threadId\n          state\n          running\n          agentName\n          nodeName\n          runId\n          active\n          role\n        }\n      }\n    }\n  }\n"];
type DocumentType<TDocumentNode extends TypedDocumentNode<any, any>> = TDocumentNode extends TypedDocumentNode<infer TType, any> ? TType : never;

export { DocumentType, graphql };
