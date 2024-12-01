import { TypedDocumentNode } from '@graphql-typed-document-node/core';

type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
    DateTimeISO: {
        input: any;
        output: any;
    };
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: {
        input: any;
        output: any;
    };
    /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSONObject: {
        input: any;
        output: any;
    };
};
type ActionExecutionMessageInput = {
    arguments: Scalars['String']['input'];
    name: Scalars['String']['input'];
    scope: ActionExecutionScope;
};
type ActionExecutionMessageOutput = BaseMessageOutput & {
    __typename?: 'ActionExecutionMessageOutput';
    arguments: Array<Scalars['String']['output']>;
    createdAt: Scalars['DateTimeISO']['output'];
    id: Scalars['String']['output'];
    name: Scalars['String']['output'];
    scope: ActionExecutionScope;
    status: MessageStatus;
};
/** The scope of the action */
declare enum ActionExecutionScope {
    Client = "client",
    PassThrough = "passThrough",
    Server = "server"
}
type ActionInput = {
    description: Scalars['String']['input'];
    jsonSchema: Scalars['String']['input'];
    name: Scalars['String']['input'];
};
type AgentSessionInput = {
    agentName: Scalars['String']['input'];
    nodeName?: InputMaybe<Scalars['String']['input']>;
    threadId?: InputMaybe<Scalars['String']['input']>;
};
type AgentStateInput = {
    agentName: Scalars['String']['input'];
    state: Scalars['String']['input'];
};
type AgentStateMessageInput = {
    active: Scalars['Boolean']['input'];
    agentName: Scalars['String']['input'];
    nodeName: Scalars['String']['input'];
    role: MessageRole;
    runId: Scalars['String']['input'];
    running: Scalars['Boolean']['input'];
    state: Scalars['String']['input'];
    threadId: Scalars['String']['input'];
};
type AgentStateMessageOutput = BaseMessageOutput & {
    __typename?: 'AgentStateMessageOutput';
    active: Scalars['Boolean']['output'];
    agentName: Scalars['String']['output'];
    createdAt: Scalars['DateTimeISO']['output'];
    id: Scalars['String']['output'];
    nodeName: Scalars['String']['output'];
    role: MessageRole;
    runId: Scalars['String']['output'];
    running: Scalars['Boolean']['output'];
    state: Scalars['String']['output'];
    status: MessageStatus;
    threadId: Scalars['String']['output'];
};
type BaseMessageOutput = {
    createdAt: Scalars['DateTimeISO']['output'];
    id: Scalars['String']['output'];
    status: MessageStatus;
};
type BaseResponseStatus = {
    code: ResponseStatusCode;
};
type CloudInput = {
    guardrails?: InputMaybe<GuardrailsInput>;
};
type ContentMessageInput = {
    content: Array<MessageContentInput>;
    role: MessageRole;
};
type ContentMessageOutput = BaseMessageOutput & {
    __typename?: 'ContentMessageOutput';
    content: Array<Scalars['String']['output']>;
    createdAt: Scalars['DateTimeISO']['output'];
    id: Scalars['String']['output'];
    role: MessageRole;
    status: MessageStatus;
};
/** The type of Copilot request */
declare enum CopilotRequestType {
    Chat = "Chat",
    Suggestion = "Suggestion",
    Task = "Task",
    TextareaCompletion = "TextareaCompletion",
    TextareaPopover = "TextareaPopover"
}
type CopilotResponse = {
    __typename?: 'CopilotResponse';
    messages: Array<BaseMessageOutput>;
    runId?: Maybe<Scalars['String']['output']>;
    status: ResponseStatus;
    threadId: Scalars['String']['output'];
};
type FailedMessageStatus = {
    __typename?: 'FailedMessageStatus';
    code: MessageStatusCode;
    reason: Scalars['String']['output'];
};
type FailedResponseStatus = BaseResponseStatus & {
    __typename?: 'FailedResponseStatus';
    code: ResponseStatusCode;
    details?: Maybe<Scalars['JSON']['output']>;
    reason: FailedResponseStatusReason;
};
declare enum FailedResponseStatusReason {
    GuardrailsValidationFailed = "GUARDRAILS_VALIDATION_FAILED",
    MessageStreamInterrupted = "MESSAGE_STREAM_INTERRUPTED",
    UnknownError = "UNKNOWN_ERROR"
}
type ForwardedParametersInput = {
    maxTokens?: InputMaybe<Scalars['Float']['input']>;
    model?: InputMaybe<Scalars['String']['input']>;
    stop?: InputMaybe<Array<Scalars['String']['input']>>;
    toolChoice?: InputMaybe<Scalars['String']['input']>;
    toolChoiceFunctionName?: InputMaybe<Scalars['String']['input']>;
};
type FrontendInput = {
    actions: Array<ActionInput>;
    toDeprecate_fullContext?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
};
type GenerateCopilotResponseInput = {
    agentSession?: InputMaybe<AgentSessionInput>;
    agentState?: InputMaybe<AgentStateInput>;
    agentStates?: InputMaybe<Array<AgentStateInput>>;
    cloud?: InputMaybe<CloudInput>;
    forwardedParameters?: InputMaybe<ForwardedParametersInput>;
    frontend: FrontendInput;
    messages: Array<MessageInput>;
    metadata: GenerateCopilotResponseMetadataInput;
    runId?: InputMaybe<Scalars['String']['input']>;
    threadId?: InputMaybe<Scalars['String']['input']>;
};
type GenerateCopilotResponseMetadataInput = {
    requestType?: InputMaybe<CopilotRequestType>;
};
type GuardrailsInput = {
    inputValidationRules: GuardrailsRuleInput;
};
type GuardrailsRuleInput = {
    allowList?: InputMaybe<Array<Scalars['String']['input']>>;
    denyList?: InputMaybe<Array<Scalars['String']['input']>>;
};
type ImageUrlContentBlockInput = {
    image_url: ImageUrlInput;
    type: Scalars['String']['input'];
};
type ImageUrlInput = {
    detail?: InputMaybe<Scalars['String']['input']>;
    url: Scalars['String']['input'];
};
type MessageContentInput = {
    imageURLContent?: InputMaybe<ImageUrlContentBlockInput>;
    textContent?: InputMaybe<TextContentBlockInput>;
    type: Scalars['String']['input'];
};
type MessageInput = {
    actionExecutionMessage?: InputMaybe<ActionExecutionMessageInput>;
    agentStateMessage?: InputMaybe<AgentStateMessageInput>;
    contentMessage?: InputMaybe<ContentMessageInput>;
    createdAt: Scalars['DateTimeISO']['input'];
    id: Scalars['String']['input'];
    resultMessage?: InputMaybe<ResultMessageInput>;
    textMessage?: InputMaybe<TextMessageInput>;
};
/** The role of the message */
declare enum MessageRole {
    Assistant = "assistant",
    System = "system",
    User = "user"
}
type MessageStatus = FailedMessageStatus | PendingMessageStatus | SuccessMessageStatus;
declare enum MessageStatusCode {
    Failed = "Failed",
    Pending = "Pending",
    Success = "Success"
}
type Mutation = {
    __typename?: 'Mutation';
    generateCopilotResponse: CopilotResponse;
};
type MutationGenerateCopilotResponseArgs = {
    data: GenerateCopilotResponseInput;
    properties?: InputMaybe<Scalars['JSONObject']['input']>;
};
type PendingMessageStatus = {
    __typename?: 'PendingMessageStatus';
    code: MessageStatusCode;
};
type PendingResponseStatus = BaseResponseStatus & {
    __typename?: 'PendingResponseStatus';
    code: ResponseStatusCode;
};
type Query = {
    __typename?: 'Query';
    hello: Scalars['String']['output'];
};
type ResponseStatus = FailedResponseStatus | PendingResponseStatus | SuccessResponseStatus;
declare enum ResponseStatusCode {
    Failed = "Failed",
    Pending = "Pending",
    Success = "Success"
}
type ResultMessageInput = {
    actionExecutionId: Scalars['String']['input'];
    actionName: Scalars['String']['input'];
    result: Scalars['String']['input'];
};
type ResultMessageOutput = BaseMessageOutput & {
    __typename?: 'ResultMessageOutput';
    actionExecutionId: Scalars['String']['output'];
    actionName: Scalars['String']['output'];
    createdAt: Scalars['DateTimeISO']['output'];
    id: Scalars['String']['output'];
    result: Scalars['String']['output'];
    status: MessageStatus;
};
type SuccessMessageStatus = {
    __typename?: 'SuccessMessageStatus';
    code: MessageStatusCode;
};
type SuccessResponseStatus = BaseResponseStatus & {
    __typename?: 'SuccessResponseStatus';
    code: ResponseStatusCode;
};
type TextContentBlockInput = {
    text: Scalars['String']['input'];
    type: Scalars['String']['input'];
};
type TextMessageInput = {
    content: Scalars['String']['input'];
    role: MessageRole;
};
type TextMessageOutput = BaseMessageOutput & {
    __typename?: 'TextMessageOutput';
    content: Array<Scalars['String']['output']>;
    createdAt: Scalars['DateTimeISO']['output'];
    id: Scalars['String']['output'];
    role: MessageRole;
    status: MessageStatus;
};
type GenerateCopilotResponseMutationVariables = Exact<{
    data: GenerateCopilotResponseInput;
    properties?: InputMaybe<Scalars['JSONObject']['input']>;
}>;
type GenerateCopilotResponseMutation = {
    __typename?: 'Mutation';
    generateCopilotResponse: {
        __typename?: 'CopilotResponse';
        threadId: string;
        runId?: string | null;
        messages: Array<{
            __typename: 'ActionExecutionMessageOutput';
            id: string;
            createdAt: any;
            name: string;
            scope: ActionExecutionScope;
            arguments: Array<string>;
            status: {
                __typename?: 'FailedMessageStatus';
                code: MessageStatusCode;
                reason: string;
            } | {
                __typename?: 'PendingMessageStatus';
                code: MessageStatusCode;
            } | {
                __typename?: 'SuccessMessageStatus';
                code: MessageStatusCode;
            };
        } | {
            __typename: 'AgentStateMessageOutput';
            id: string;
            createdAt: any;
            threadId: string;
            state: string;
            running: boolean;
            agentName: string;
            nodeName: string;
            runId: string;
            active: boolean;
            role: MessageRole;
            status: {
                __typename?: 'FailedMessageStatus';
                code: MessageStatusCode;
                reason: string;
            } | {
                __typename?: 'PendingMessageStatus';
                code: MessageStatusCode;
            } | {
                __typename?: 'SuccessMessageStatus';
                code: MessageStatusCode;
            };
        } | {
            __typename: 'ContentMessageOutput';
            id: string;
            createdAt: any;
            content: Array<string>;
            role: MessageRole;
            status: {
                __typename?: 'FailedMessageStatus';
                code: MessageStatusCode;
                reason: string;
            } | {
                __typename?: 'PendingMessageStatus';
                code: MessageStatusCode;
            } | {
                __typename?: 'SuccessMessageStatus';
                code: MessageStatusCode;
            };
        } | {
            __typename: 'ResultMessageOutput';
            id: string;
            createdAt: any;
            result: string;
            actionExecutionId: string;
            actionName: string;
            status: {
                __typename?: 'FailedMessageStatus';
                code: MessageStatusCode;
                reason: string;
            } | {
                __typename?: 'PendingMessageStatus';
                code: MessageStatusCode;
            } | {
                __typename?: 'SuccessMessageStatus';
                code: MessageStatusCode;
            };
        } | {
            __typename: 'TextMessageOutput';
            id: string;
            createdAt: any;
            content: Array<string>;
            role: MessageRole;
            status: {
                __typename?: 'FailedMessageStatus';
                code: MessageStatusCode;
                reason: string;
            } | {
                __typename?: 'PendingMessageStatus';
                code: MessageStatusCode;
            } | {
                __typename?: 'SuccessMessageStatus';
                code: MessageStatusCode;
            };
        }>;
    } & ({
        __typename?: 'CopilotResponse';
        status: {
            __typename?: 'FailedResponseStatus';
            code: ResponseStatusCode;
            reason: FailedResponseStatusReason;
            details?: any | null;
        } | {
            __typename?: 'PendingResponseStatus';
            code: ResponseStatusCode;
        } | {
            __typename?: 'SuccessResponseStatus';
            code: ResponseStatusCode;
        };
    } | {
        __typename?: 'CopilotResponse';
        status?: never;
    });
};
declare const GenerateCopilotResponseDocument: TypedDocumentNode<GenerateCopilotResponseMutation, GenerateCopilotResponseMutationVariables>;

export { ActionExecutionMessageInput, ActionExecutionMessageOutput, ActionExecutionScope, ActionInput, AgentSessionInput, AgentStateInput, AgentStateMessageInput, AgentStateMessageOutput, BaseMessageOutput, BaseResponseStatus, CloudInput, ContentMessageInput, ContentMessageOutput, CopilotRequestType, CopilotResponse, Exact, FailedMessageStatus, FailedResponseStatus, FailedResponseStatusReason, ForwardedParametersInput, FrontendInput, GenerateCopilotResponseDocument, GenerateCopilotResponseInput, GenerateCopilotResponseMetadataInput, GenerateCopilotResponseMutation, GenerateCopilotResponseMutationVariables, GuardrailsInput, GuardrailsRuleInput, ImageUrlContentBlockInput, ImageUrlInput, Incremental, InputMaybe, MakeEmpty, MakeMaybe, MakeOptional, Maybe, MessageContentInput, MessageInput, MessageRole, MessageStatus, MessageStatusCode, Mutation, MutationGenerateCopilotResponseArgs, PendingMessageStatus, PendingResponseStatus, Query, ResponseStatus, ResponseStatusCode, ResultMessageInput, ResultMessageOutput, Scalars, SuccessMessageStatus, SuccessResponseStatus, TextContentBlockInput, TextMessageInput, TextMessageOutput };
