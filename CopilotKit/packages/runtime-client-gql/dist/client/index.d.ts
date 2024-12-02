export { CopilotRuntimeClient } from './CopilotRuntimeClient.js';
export { convertGqlOutputToMessages, convertMessagesToGqlInput, filterAdjacentAgentStateMessages, filterAgentStateMessages } from './conversion.js';
export { ActionExecutionMessage, AgentStateMessage, ContentMessage, Message, ResultMessage, Role, TextMessage } from './types.js';
import '../graphql/@generated/graphql.js';
import '@urql/core';
import 'urql';
import '@graphql-typed-document-node/core';
