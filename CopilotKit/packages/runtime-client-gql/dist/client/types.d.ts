import { BaseMessageOutput, MessageStatus, MessageRole, TextMessageInput, ContentMessageInput, ActionExecutionMessageInput, ResultMessageInput, AgentStateMessageInput } from '../graphql/@generated/graphql.js';
import '@graphql-typed-document-node/core';

type MessageType = "TextMessage" | "ContentMessage" | "ActionExecutionMessage" | "ResultMessage" | "AgentStateMessage";
declare class Message {
    type: MessageType;
    id: BaseMessageOutput["id"];
    createdAt: BaseMessageOutput["createdAt"];
    status: MessageStatus;
    constructor(props: any);
    isTextMessage(): this is TextMessage;
    isContentMessage(): this is ContentMessage;
    isActionExecutionMessage(): this is ActionExecutionMessage;
    isResultMessage(): this is ResultMessage;
    isAgentStateMessage(): this is AgentStateMessage;
}
declare const Role: typeof MessageRole;
type MessageConstructorOptions = Partial<Message>;
type TextMessageConstructorOptions = MessageConstructorOptions & TextMessageInput;
type ContentMessageConstructorOptions = MessageConstructorOptions & ContentMessageInput;
declare class TextMessage extends Message implements TextMessageConstructorOptions {
    role: TextMessageInput["role"];
    content: TextMessageInput["content"];
    constructor(props: TextMessageConstructorOptions);
}
declare class ContentMessage extends Message implements ContentMessageConstructorOptions {
    role: ContentMessageInput["role"];
    content: ContentMessageInput["content"];
    constructor(props: ContentMessageConstructorOptions);
}
type ActionExecutionMessageConstructorOptions = MessageConstructorOptions & Omit<ActionExecutionMessageInput, "arguments"> & {
    arguments: Record<string, any>;
};
declare class ActionExecutionMessage extends Message implements Omit<ActionExecutionMessageInput, "arguments"> {
    name: ActionExecutionMessageInput["name"];
    arguments: Record<string, any>;
    scope: ActionExecutionMessageInput["scope"];
    constructor(props: ActionExecutionMessageConstructorOptions);
}
type ResultMessageConstructorOptions = MessageConstructorOptions & ResultMessageInput;
declare class ResultMessage extends Message implements ResultMessageConstructorOptions {
    actionExecutionId: ResultMessageInput["actionExecutionId"];
    actionName: ResultMessageInput["actionName"];
    result: ResultMessageInput["result"];
    constructor(props: ResultMessageConstructorOptions);
    static decodeResult(result: string): any;
    static encodeResult(result: any): string;
}
declare class AgentStateMessage extends Message implements Omit<AgentStateMessageInput, "state"> {
    agentName: AgentStateMessageInput["agentName"];
    state: any;
    running: AgentStateMessageInput["running"];
    threadId: AgentStateMessageInput["threadId"];
    role: AgentStateMessageInput["role"];
    nodeName: AgentStateMessageInput["nodeName"];
    runId: AgentStateMessageInput["runId"];
    active: AgentStateMessageInput["active"];
    constructor(props: any);
}

export { ActionExecutionMessage, AgentStateMessage, ContentMessage, Message, ResultMessage, Role, TextMessage };
