import * as react_jsx_runtime from 'react/jsx-runtime';
import { CopilotChatIcons, CopilotChatLabels } from './ChatContext.js';
import React__default from 'react';
import { SystemMessageFunction } from '@copilotkit/react-core';
import { CopilotChatSuggestion } from '../../types/suggestions.js';
import { Message } from '@copilotkit/runtime-client-gql';
import { MessagesProps, RenderMessageProps, InputProps, ResponseButtonProps } from './props.js';

/**
 * Props for CopilotChat component.
 */
interface CopilotChatProps {
    /**
     * Custom instructions to be added to the system message. Use this property to
     * provide additional context or guidance to the language model, influencing
     * its responses. These instructions can include specific directions,
     * preferences, or criteria that the model should consider when generating
     * its output, thereby tailoring the conversation more precisely to the
     * user's needs or the application's requirements.
     */
    instructions?: string;
    /**
     * A callback that gets called when the in progress state changes.
     */
    onInProgress?: (inProgress: boolean) => void;
    /**
     * A callback that gets called when a new message it submitted.
     */
    onSubmitMessage?: (message: string) => void | Promise<void>;
    /**
     * Icons can be used to set custom icons for the chat window.
     */
    icons?: CopilotChatIcons;
    /**
     * Labels can be used to set custom labels for the chat window.
     */
    labels?: CopilotChatLabels;
    /**
     * A function that takes in context string and instructions and returns
     * the system message to include in the chat request.
     * Use this to completely override the system message, when providing
     * instructions is not enough.
     */
    makeSystemMessage?: SystemMessageFunction;
    /**
     * Whether to show the response button.
     * @default true
     */
    showResponseButton?: boolean;
    /**
     * A custom Messages component to use instead of the default.
     */
    Messages?: React__default.ComponentType<MessagesProps>;
    /**
     * A custom RenderTextMessage component to use instead of the default.
     */
    RenderTextMessage?: React__default.ComponentType<RenderMessageProps>;
    RenderContentMessage?: React__default.ComponentType<RenderMessageProps>;
    /**
     * A custom RenderActionExecutionMessage component to use instead of the default.
     */
    RenderActionExecutionMessage?: React__default.ComponentType<RenderMessageProps>;
    /**
     * A custom RenderAgentStateMessage component to use instead of the default.
     */
    RenderAgentStateMessage?: React__default.ComponentType<RenderMessageProps>;
    /**
     * A custom RenderResultMessage component to use instead of the default.
     */
    RenderResultMessage?: React__default.ComponentType<RenderMessageProps>;
    /**
     * A custom Input component to use instead of the default.
     */
    Input?: React__default.ComponentType<InputProps>;
    /**
     * A custom ResponseButton component to use instead of the default.
     */
    ResponseButton?: React__default.ComponentType<ResponseButtonProps>;
    /**
     * A class name to apply to the root element.
     */
    className?: string;
    /**
     * Children to render.
     */
    children?: React__default.ReactNode;
}
declare function CopilotChat({ instructions, onSubmitMessage, makeSystemMessage, showResponseButton, onInProgress, Messages, RenderTextMessage, RenderContentMessage, RenderActionExecutionMessage, RenderAgentStateMessage, RenderResultMessage, Input, ResponseButton, className, icons, labels, }: CopilotChatProps): react_jsx_runtime.JSX.Element;
declare function WrappedCopilotChat({ children, icons, labels, className, }: {
    children: React__default.ReactNode;
    icons?: CopilotChatIcons;
    labels?: CopilotChatLabels;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare const useCopilotChatLogic: (makeSystemMessage?: SystemMessageFunction, onInProgress?: (isLoading: boolean) => void, onSubmitMessage?: (messageContent: string) => Promise<void> | void) => {
    visibleMessages: Message[];
    isLoading: boolean;
    currentSuggestions: CopilotChatSuggestion[];
    sendMessage: (messageContent: string) => Promise<Message>;
    stopGeneration: () => void;
    reloadMessages: () => Promise<void>;
};

export { CopilotChat, CopilotChatProps, WrappedCopilotChat, useCopilotChatLogic };
