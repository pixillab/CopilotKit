import {
  ActionExecutionMessageInput,
  ResultMessageInput,
  TextMessageInput,
  AgentStateMessageInput,
  ContentMessageInput,
  TextContentBlockInput,
  ImageURLContentBlockInput,
} from "../../inputs/message.input";
import { BaseMessageInput } from "../base";
import { ActionExecutionScope, MessageRole } from "../enums";

export type MessageContent = ImageURLContentBlockInput | TextContentBlockInput;

type MessageType =
  | "TextMessage"
  | "ContentMessage"
  | "ActionExecutionMessage"
  | "ResultMessage"
  | "AgentStateMessage";

export class Message extends BaseMessageInput {
  type: MessageType;

  isTextMessage(): this is TextMessage {
    return this.type === "TextMessage";
  }

  isContentMessage(): this is ContentMessage {
    return this.type === "ContentMessage";
  }

  isActionExecutionMessage(): this is ActionExecutionMessage {
    return this.type === "ActionExecutionMessage";
  }

  isResultMessage(): this is ResultMessage {
    return this.type === "ResultMessage";
  }

  isAgentStateMessage(): this is AgentStateMessage {
    return this.type === "AgentStateMessage";
  }
}

export class TextMessage extends Message implements TextMessageInput {
  type: MessageType = "TextMessage";
  content: string;
  role: MessageRole;
}

export class ContentMessage extends Message implements ContentMessageInput {
  type: MessageType = "ContentMessage";
  content: MessageContent[]; // Correctly maps to the MessageContentInput array
  role: MessageRole;
}

export class ActionExecutionMessage
  extends Message
  implements Omit<ActionExecutionMessageInput, "arguments">
{
  type: MessageType = "ActionExecutionMessage";
  name: string;
  arguments: Record<string, any>;
  scope: ActionExecutionScope;
}

export class ResultMessage extends Message implements ResultMessageInput {
  type: MessageType = "ResultMessage";
  actionExecutionId: string;
  actionName: string;
  result: string;
}

export class AgentStateMessage extends Message implements Omit<AgentStateMessageInput, "state"> {
  type: MessageType = "AgentStateMessage";
  threadId: string;
  agentName: string;
  nodeName: string;
  runId: string;
  active: boolean;
  role: MessageRole;
  state: any;
  running: boolean;
}
