import { a as Message } from './index-b3d1da4c.js';
import * as rxjs from 'rxjs';
import { Subject, ReplaySubject } from 'rxjs';
import { Action, Parameter } from '@copilotkit/shared';

declare enum GuardrailsResultStatus {
    ALLOWED = "allowed",
    DENIED = "denied"
}
declare class GuardrailsResult {
    status: GuardrailsResultStatus;
    reason?: string;
}

declare class ActionInput {
    name: string;
    description: string;
    jsonSchema: string;
}

declare enum RuntimeEventTypes {
    TextMessageStart = "TextMessageStart",
    TextMessageContent = "TextMessageContent",
    TextMessageEnd = "TextMessageEnd",
    ActionExecutionStart = "ActionExecutionStart",
    ActionExecutionArgs = "ActionExecutionArgs",
    ActionExecutionEnd = "ActionExecutionEnd",
    ActionExecutionResult = "ActionExecutionResult",
    AgentStateMessage = "AgentStateMessage"
}
type FunctionCallScope = "client" | "server" | "passThrough";
type RuntimeEvent = {
    type: RuntimeEventTypes.TextMessageStart;
    messageId: string;
} | {
    type: RuntimeEventTypes.TextMessageContent;
    content: string;
} | {
    type: RuntimeEventTypes.TextMessageEnd;
} | {
    type: RuntimeEventTypes.ActionExecutionStart;
    actionExecutionId: string;
    actionName: string;
    scope?: FunctionCallScope;
} | {
    type: RuntimeEventTypes.ActionExecutionArgs;
    args: string;
} | {
    type: RuntimeEventTypes.ActionExecutionEnd;
} | {
    type: RuntimeEventTypes.ActionExecutionResult;
    actionName: string;
    actionExecutionId: string;
    result: string;
} | {
    type: RuntimeEventTypes.AgentStateMessage;
    threadId: string;
    agentName: string;
    nodeName: string;
    runId: string;
    active: boolean;
    role: string;
    state: string;
    running: boolean;
};
type EventSourceCallback = (eventStream$: RuntimeEventSubject) => Promise<void>;
declare class RuntimeEventSubject extends ReplaySubject<RuntimeEvent> {
    constructor();
    sendTextMessageStart(messageId: string): void;
    sendTextMessageContent(content: string): void;
    sendTextMessageEnd(): void;
    sendTextMessage(messageId: string, content: string): void;
    sendActionExecutionStart(actionExecutionId: string, actionName: string): void;
    sendActionExecutionArgs(args: string): void;
    sendActionExecutionEnd(): void;
    sendActionExecution(actionExecutionId: string, toolName: string, args: string): void;
    sendActionExecutionResult(actionExecutionId: string, actionName: string, result: string): void;
    sendAgentStateMessage(threadId: string, agentName: string, nodeName: string, runId: string, active: boolean, role: string, state: string, running: boolean): void;
}
declare class RuntimeEventSource {
    private eventStream$;
    private callback;
    stream(callback: EventSourceCallback): Promise<void>;
    processRuntimeEvents({ serverSideActions, guardrailsResult$, actionInputsWithoutAgents, }: {
        serverSideActions: Action<any>[];
        guardrailsResult$?: Subject<GuardrailsResult>;
        actionInputsWithoutAgents: ActionInput[];
    }): rxjs.Observable<RuntimeEvent>;
}

declare class ForwardedParametersInput {
    model?: string;
    maxTokens?: number;
    stop?: string[];
    toolChoice?: String;
    toolChoiceFunctionName?: string;
}

interface CopilotRuntimeChatCompletionRequest {
    eventSource: RuntimeEventSource;
    messages: Message[];
    actions: ActionInput[];
    model?: string;
    threadId?: string;
    runId?: string;
    forwardedParameters?: ForwardedParametersInput;
}
interface CopilotRuntimeChatCompletionResponse {
    threadId: string;
    runId?: string;
}
interface CopilotServiceAdapter {
    process(request: CopilotRuntimeChatCompletionRequest): Promise<CopilotRuntimeChatCompletionResponse>;
}

interface RemoteChainParameters {
    name: string;
    description: string;
    chainUrl: string;
    parameters?: Parameter[];
    parameterType?: "single" | "multi";
}
declare class RemoteChain {
    name: string;
    description: string;
    chainUrl: string;
    parameters?: Parameter[];
    parameterType: "single" | "multi";
    constructor(options: RemoteChainParameters);
    toAction(): Promise<Action<any>>;
    inferLangServeParameters(): Promise<void>;
}

export { ActionInput as A, CopilotServiceAdapter as C, ForwardedParametersInput as F, RemoteChainParameters as R, RemoteChain as a, RuntimeEventSource as b, CopilotRuntimeChatCompletionRequest as c, CopilotRuntimeChatCompletionResponse as d };
