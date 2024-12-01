import { Parameter, Action } from '@copilotkit/shared';
import { C as CopilotServiceAdapter, R as RemoteChainParameters, A as ActionInput, F as ForwardedParametersInput, b as RuntimeEventSource } from './langserve-c4ef128c.js';
import { M as MessageInput, a as Message } from './index-b3d1da4c.js';
import * as graphql from 'graphql';
import * as pino from 'pino';
import { YogaInitialContext, createYoga } from 'graphql-yoga';
import { CopilotCloudOptions } from './lib/cloud/index.js';

type LogLevel = "debug" | "info" | "warn" | "error";

declare const logger: pino.Logger<never>;
type AnyPrimitive = string | boolean | number | null;
type CopilotRequestContextProperties = Record<string, AnyPrimitive | Record<string, AnyPrimitive>>;
type GraphQLContext = YogaInitialContext & {
    _copilotkit: CreateCopilotRuntimeServerOptions;
    properties: CopilotRequestContextProperties;
    logger: typeof logger;
};
interface CreateCopilotRuntimeServerOptions {
    runtime: CopilotRuntime<any>;
    serviceAdapter: CopilotServiceAdapter;
    endpoint: string;
    baseUrl?: string;
    cloud?: CopilotCloudOptions;
    properties?: CopilotRequestContextProperties;
    logLevel?: LogLevel;
}
declare function createContext(initialContext: YogaInitialContext, copilotKitContext: CreateCopilotRuntimeServerOptions, contextLogger: typeof logger, properties?: CopilotRequestContextProperties): Promise<Partial<GraphQLContext>>;
declare function buildSchema(options?: {
    emitSchemaFile?: string;
}): graphql.GraphQLSchema;
type CommonConfig = {
    logging: typeof logger;
    schema: ReturnType<typeof buildSchema>;
    plugins: Parameters<typeof createYoga>[0]["plugins"];
    context: (ctx: YogaInitialContext) => Promise<Partial<GraphQLContext>>;
};
declare function getCommonConfig(options: CreateCopilotRuntimeServerOptions): CommonConfig;

declare class AgentStateInput {
    agentName: string;
    state: string;
}

type RemoteActionDefinition = {
    url: string;
    onBeforeRequest?: ({ ctx }: {
        ctx: GraphQLContext;
    }) => {
        headers?: Record<string, string> | undefined;
    };
};

declare class AgentSessionInput {
    agentName: string;
    threadId?: string;
    nodeName?: string;
}

/**
 * <Callout type="info">
 *   This is the reference for the `CopilotRuntime` class. For more information and example code snippets, please see [Concept: Copilot Runtime](/concepts/copilot-runtime).
 * </Callout>
 *
 * ## Usage
 *
 * ```tsx
 * import { CopilotRuntime } from "@copilotkit/runtime";
 *
 * const copilotKit = new CopilotRuntime();
 * ```
 */

interface CopilotRuntimeRequest {
    serviceAdapter: CopilotServiceAdapter;
    messages: MessageInput[];
    actions: ActionInput[];
    agentSession?: AgentSessionInput;
    agentStates?: AgentStateInput[];
    outputMessagesPromise: Promise<Message[]>;
    threadId?: string;
    runId?: string;
    publicApiKey?: string;
    graphqlContext: GraphQLContext;
    forwardedParameters?: ForwardedParametersInput;
    url?: string;
}
interface CopilotRuntimeResponse {
    threadId: string;
    runId?: string;
    eventSource: RuntimeEventSource;
    serverSideActions: Action<any>[];
    actionInputsWithoutAgents: ActionInput[];
}
type ActionsConfiguration<T extends Parameter[] | [] = []> = Action<T>[] | ((ctx: {
    properties: any;
    url?: string;
}) => Action<T>[]);
interface OnBeforeRequestOptions {
    threadId?: string;
    runId?: string;
    inputMessages: Message[];
    properties: any;
    url?: string;
}
type OnBeforeRequestHandler = (options: OnBeforeRequestOptions) => void | Promise<void>;
interface OnAfterRequestOptions {
    threadId: string;
    runId?: string;
    inputMessages: Message[];
    outputMessages: Message[];
    properties: any;
    url?: string;
}
type OnAfterRequestHandler = (options: OnAfterRequestOptions) => void | Promise<void>;
interface Middleware {
    /**
     * A function that is called before the request is processed.
     */
    onBeforeRequest?: OnBeforeRequestHandler;
    /**
     * A function that is called after the request is processed.
     */
    onAfterRequest?: OnAfterRequestHandler;
}
interface CopilotRuntimeConstructorParams<T extends Parameter[] | [] = []> {
    /**
     * Middleware to be used by the runtime.
     *
     * ```ts
     * onBeforeRequest: (options: {
     *   threadId?: string;
     *   runId?: string;
     *   inputMessages: Message[];
     *   properties: any;
     * }) => void | Promise<void>;
     * ```
     *
     * ```ts
     * onAfterRequest: (options: {
     *   threadId?: string;
     *   runId?: string;
     *   inputMessages: Message[];
     *   outputMessages: Message[];
     *   properties: any;
     * }) => void | Promise<void>;
     * ```
     */
    middleware?: Middleware;
    actions?: ActionsConfiguration<T>;
    remoteActions?: RemoteActionDefinition[];
    langserve?: RemoteChainParameters[];
}
declare class CopilotRuntime<const T extends Parameter[] | [] = []> {
    actions: ActionsConfiguration<T>;
    private remoteActionDefinitions;
    private langserve;
    private onBeforeRequest?;
    private onAfterRequest?;
    constructor(params?: CopilotRuntimeConstructorParams<T>);
    processRuntimeRequest(request: CopilotRuntimeRequest): Promise<CopilotRuntimeResponse>;
    private processAgentRequest;
    private getServerSideActions;
}
declare function flattenToolCallsNoDuplicates(toolsByPriority: ActionInput[]): ActionInput[];

export { CopilotRuntimeConstructorParams as C, GraphQLContext as G, CopilotRuntime as a, CopilotRequestContextProperties as b, CreateCopilotRuntimeServerOptions as c, createContext as d, buildSchema as e, flattenToolCallsNoDuplicates as f, CommonConfig as g, getCommonConfig as h };
