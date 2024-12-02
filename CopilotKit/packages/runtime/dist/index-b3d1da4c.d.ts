import { BaseMessageInput } from './graphql/types/base/index.js';

declare enum MessageRole {
    user = "user",
    assistant = "assistant",
    system = "system"
}
declare enum ActionExecutionScope {
    server = "server",
    client = "client",
    passThrough = "passThrough"
}

declare class MessageInput extends BaseMessageInput {
    textMessage?: TextMessageInput;
    actionExecutionMessage?: ActionExecutionMessageInput;
    resultMessage?: ResultMessageInput;
    agentStateMessage?: AgentStateMessageInput;
    contentMessage?: ContentMessageInput;
}
declare class MessageContentInput {
    type: "text" | "image_url";
    textContent?: TextContentBlockInput;
    imageURLContent?: ImageURLContentBlockInput;
}
declare class ContentMessageInput {
    content: MessageContentInput[];
    role: MessageRole;
}
declare class TextMessageInput {
    content: string;
    role: MessageRole;
}
declare class ActionExecutionMessageInput {
    name: string;
    arguments: string;
    scope: ActionExecutionScope;
}
declare class ResultMessageInput {
    actionExecutionId: string;
    actionName: string;
    result: string;
}
declare class AgentStateMessageInput {
    threadId: string;
    agentName: string;
    role: MessageRole;
    state: string;
    running: boolean;
    nodeName: string;
    runId: string;
    active: boolean;
}
declare class ImageURLContentBlockInput {
    type: "image_url";
    image_url: ImageURLInput;
}
declare class ImageURLInput {
    url: string;
    detail?: "auto" | "low" | "high";
}
declare class TextContentBlockInput {
    type: "text";
    text: string;
}

type MessageContent = ImageURLContentBlockInput | TextContentBlockInput;
type MessageType = "TextMessage" | "ContentMessage" | "ActionExecutionMessage" | "ResultMessage" | "AgentStateMessage";
declare class Message extends BaseMessageInput {
    type: MessageType;
    isTextMessage(): this is TextMessage;
    isContentMessage(): this is ContentMessage;
    isActionExecutionMessage(): this is ActionExecutionMessage;
    isResultMessage(): this is ResultMessage;
    isAgentStateMessage(): this is AgentStateMessage;
}
declare class TextMessage extends Message implements TextMessageInput {
    type: MessageType;
    content: string;
    role: MessageRole;
}
declare class ContentMessage extends Message implements ContentMessageInput {
    type: MessageType;
    content: MessageContent[];
    role: MessageRole;
}
declare class ActionExecutionMessage extends Message implements Omit<ActionExecutionMessageInput, "arguments"> {
    type: MessageType;
    name: string;
    arguments: Record<string, any>;
    scope: ActionExecutionScope;
}
declare class ResultMessage extends Message implements ResultMessageInput {
    type: MessageType;
    actionExecutionId: string;
    actionName: string;
    result: string;
}
declare class AgentStateMessage extends Message implements Omit<AgentStateMessageInput, "state"> {
    type: MessageType;
    threadId: string;
    agentName: string;
    nodeName: string;
    runId: string;
    active: boolean;
    role: MessageRole;
    state: any;
    running: boolean;
}

export { ActionExecutionMessage as A, ContentMessage as C, MessageInput as M, ResultMessage as R, TextMessage as T, Message as a, MessageContent as b, AgentStateMessage as c };
