import { FunctionCallHandler, CoAgentStateRenderHandler } from '@copilotkit/shared';
import { Message, TextMessage, ContentMessage } from '@copilotkit/runtime-client-gql';
import { CopilotApiConfig, AgentSession } from '../context/copilot-context.js';
import { FrontendAction } from '../types/frontend-action.js';
import { CoagentState } from '../types/coagent-state.js';
import 'react';
import './use-tree.js';
import '../types/document-pointer.js';
import '../types/chat-suggestion-configuration.js';
import '../types/coagent-action.js';

type UseChatOptions = {
    /**
     * System messages of the chat. Defaults to an empty array.
     */
    initialMessages?: Message[];
    /**
     * Callback function to be called when a function call is received.
     * If the function returns a `ChatRequest` object, the request will be sent
     * automatically to the API and will be used to update the chat.
     */
    onFunctionCall?: FunctionCallHandler;
    /**
     * Callback function to be called when a coagent action is received.
     */
    onCoAgentStateRender?: CoAgentStateRenderHandler;
    /**
     * Function definitions to be sent to the API.
     */
    actions: FrontendAction<any>[];
    /**
     * The CopilotKit API configuration.
     */
    copilotConfig: CopilotApiConfig;
    /**
     * The current list of messages in the chat.
     */
    messages: Message[];
    /**
     * The setState-powered method to update the chat messages.
     */
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    /**
     * A callback to get the latest system message.
     */
    makeSystemMessageCallback: () => TextMessage | ContentMessage;
    /**
     * Whether the API request is in progress
     */
    isLoading: boolean;
    /**
     * setState-powered method to update the isChatLoading value
     */
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * The current list of coagent states.
     */
    coagentStates: Record<string, CoagentState>;
    /**
     * setState-powered method to update the agent states
     */
    setCoagentStates: React.Dispatch<React.SetStateAction<Record<string, CoagentState>>>;
    /**
     * The current agent session.
     */
    agentSession: AgentSession | null;
    /**
     * setState-powered method to update the agent session
     */
    setAgentSession: React.Dispatch<React.SetStateAction<AgentSession | null>>;
};
type UseChatHelpers = {
    /**
     * Append a user message to the chat list. This triggers the API call to fetch
     * the assistant's response.
     * @param message The message to append
     */
    append: (message: Message) => Promise<void>;
    /**
     * Reload the last AI chat response for the given chat history. If the last
     * message isn't from the assistant, it will request the API to generate a
     * new response.
     */
    reload: () => Promise<void>;
    /**
     * Abort the current request immediately, keep the generated tokens if any.
     */
    stop: () => void;
};
declare function useChat(options: UseChatOptions): UseChatHelpers;

export { UseChatHelpers, UseChatOptions, useChat };
