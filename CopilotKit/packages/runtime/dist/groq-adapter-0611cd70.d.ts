import OpenAI from 'openai';
import { C as CopilotServiceAdapter, c as CopilotRuntimeChatCompletionRequest, d as CopilotRuntimeChatCompletionResponse } from './langserve-68a14520.js';
import { BaseMessageChunk, AIMessage, AIMessageChunk, BaseMessage } from '@langchain/core/messages';
import { DynamicStructuredTool } from '@langchain/core/tools';
import { IterableReadableStream, IterableReadableStreamInterface } from '@langchain/core/utils/stream';
import { Groq } from 'groq-sdk';

/**
 * Copilot Runtime adapter for OpenAI.
 *
 * ## Example
 *
 * ```ts
 * import { CopilotRuntime, OpenAIAdapter } from "@copilotkit/runtime";
 * import OpenAI from "openai";
 *
 * const copilotKit = new CopilotRuntime();
 *
 * const openai = new OpenAI({
 *   organization: "<your-organization-id>", // optional
 *   apiKey: "<your-api-key>",
 * });
 *
 * const serviceAdapter = new OpenAIAdapter({ openai });
 *
 * return copilotKit.streamHttpServerResponse(req, res, serviceAdapter);
 * ```
 */

interface OpenAIAdapterParams {
    /**
     * An optional OpenAI instance to use.  If not provided, a new instance will be
     * created.
     */
    openai?: OpenAI;
    /**
     * The model to use.
     */
    model?: string;
    /**
     * Whether to disable parallel tool calls.
     * You can disable parallel tool calls to force the model to execute tool calls sequentially.
     * This is useful if you want to execute tool calls in a specific order so that the state changes
     * introduced by one tool call are visible to the next tool call. (i.e. new actions or readables)
     *
     * @default false
     */
    disableParallelToolCalls?: boolean;
}
declare class OpenAIAdapter implements CopilotServiceAdapter {
    private model;
    private disableParallelToolCalls;
    private _openai;
    get openai(): OpenAI;
    constructor(params?: OpenAIAdapterParams);
    process(request: CopilotRuntimeChatCompletionRequest): Promise<CopilotRuntimeChatCompletionResponse>;
}

type LangChainBaseMessageChunkStream = IterableReadableStream<BaseMessageChunk>;
type LangChainAIMessageChunkStream = IterableReadableStreamInterface<AIMessageChunk>;
type LangChainReturnType = LangChainBaseMessageChunkStream | LangChainAIMessageChunkStream | BaseMessageChunk | string | AIMessage;

/**
 * Copilot Runtime adapter for LangChain.
 *
 * ## Example
 *
 * ```ts
 * import { CopilotRuntime, LangChainAdapter } from "@copilotkit/runtime";
 * import { ChatOpenAI } from "@langchain/openai";
 *
 * const copilotKit = new CopilotRuntime();
 *
 * const model = new ChatOpenAI({
 *   model: "gpt-4o",
 *   apiKey: "<your-api-key>",
 * });
 *
 * const serviceAdapter = new LangChainAdapter({
 *   chainFn: async ({ messages, tools }) => {
 *     return model.stream(messages, { tools });
 *   }
 * });
 *
 * return copilotKit.streamHttpServerResponse(req, res, serviceAdapter);
 * ```
 *
 * The asynchronous handler function (`chainFn`) can return any of the following:
 *
 * - A simple `string` response
 * - A LangChain stream (`IterableReadableStream`)
 * - A LangChain `BaseMessageChunk` object
 * - A LangChain `AIMessage` object
 */

interface ChainFnParameters {
    model: string;
    messages: BaseMessage[];
    tools: DynamicStructuredTool[];
    threadId?: string;
    runId?: string;
}
interface LangChainAdapterOptions {
    /**
     * A function that uses the LangChain API to generate a response.
     */
    chainFn: (parameters: ChainFnParameters) => Promise<LangChainReturnType>;
}
declare class LangChainAdapter implements CopilotServiceAdapter {
    private options;
    /**
     * To use LangChain as a backend, provide a handler function to the adapter with your custom LangChain logic.
     */
    constructor(options: LangChainAdapterOptions);
    process(request: CopilotRuntimeChatCompletionRequest): Promise<CopilotRuntimeChatCompletionResponse>;
}

interface GoogleGenerativeAIAdapterOptions {
    /**
     * A custom Google Generative AI model to use.
     */
    model?: string;
}
declare class GoogleGenerativeAIAdapter extends LangChainAdapter {
    constructor(options?: GoogleGenerativeAIAdapterOptions);
}

/**
 * Copilot Runtime adapter for the OpenAI Assistant API.
 *
 * ## Example
 *
 * ```ts
 * import { CopilotRuntime, OpenAIAssistantAdapter } from "@copilotkit/runtime";
 * import OpenAI from "openai";
 *
 * const copilotKit = new CopilotRuntime();
 *
 * const openai = new OpenAI({
 *   organization: "<your-organization-id>",
 *   apiKey: "<your-api-key>",
 * });
 *
 * const serviceAdapter = new OpenAIAssistantAdapter({
 *   openai,
 *   assistantId: "<your-assistant-id>",
 *   codeInterpreterEnabled: true,
 *   fileSearchEnabled: true,
 * });
 *
 * return copilotKit.streamHttpServerResponse(req, res, serviceAdapter);
 * ```
 */

interface OpenAIAssistantAdapterParams {
    /**
     * The ID of the assistant to use.
     */
    assistantId: string;
    /**
     * An optional OpenAI instance to use. If not provided, a new instance will be created.
     */
    openai?: OpenAI;
    /**
     * Whether to enable code interpretation.
     * @default true
     */
    codeInterpreterEnabled?: boolean;
    /**
     * Whether to enable file search.
     * @default true
     */
    fileSearchEnabled?: boolean;
    /**
     * Whether to disable parallel tool calls.
     * You can disable parallel tool calls to force the model to execute tool calls sequentially.
     * This is useful if you want to execute tool calls in a specific order so that the state changes
     * introduced by one tool call are visible to the next tool call. (i.e. new actions or readables)
     *
     * @default false
     */
    disableParallelToolCalls?: boolean;
}
declare class OpenAIAssistantAdapter implements CopilotServiceAdapter {
    private openai;
    private codeInterpreterEnabled;
    private assistantId;
    private fileSearchEnabled;
    private disableParallelToolCalls;
    constructor(params: OpenAIAssistantAdapterParams);
    process(request: CopilotRuntimeChatCompletionRequest): Promise<CopilotRuntimeChatCompletionResponse>;
    private submitToolOutputs;
    private submitUserMessage;
    private streamResponse;
}

interface UnifyAdapterParams {
    apiKey?: string;
    model: string;
}
declare class UnifyAdapter implements CopilotServiceAdapter {
    private apiKey;
    private model;
    private start;
    constructor(options?: UnifyAdapterParams);
    process(request: CopilotRuntimeChatCompletionRequest): Promise<CopilotRuntimeChatCompletionResponse>;
}

/**
 * Copilot Runtime adapter for Groq.
 *
 * ## Example
 *
 * ```ts
 * import { CopilotRuntime, GroqAdapter } from "@copilotkit/runtime";
 * import { Groq } from "groq-sdk";
 *
 * const groq = new Groq({ apiKey: process.env["GROQ_API_KEY"] });
 *
 * const copilotKit = new CopilotRuntime();
 *
 * const serviceAdapter = new GroqAdapter({ groq, model: "<model-name>" });
 *
 * return copilotKit.streamHttpServerResponse(req, res, serviceAdapter);
 * ```
 */

interface GroqAdapterParams {
    /**
     * An optional Groq instance to use.
     */
    groq?: Groq;
    /**
     * The model to use.
     */
    model?: string;
    /**
     * Whether to disable parallel tool calls.
     * You can disable parallel tool calls to force the model to execute tool calls sequentially.
     * This is useful if you want to execute tool calls in a specific order so that the state changes
     * introduced by one tool call are visible to the next tool call. (i.e. new actions or readables)
     *
     * @default false
     */
    disableParallelToolCalls?: boolean;
}
declare class GroqAdapter implements CopilotServiceAdapter {
    private model;
    private disableParallelToolCalls;
    private _groq;
    get groq(): Groq;
    constructor(params?: GroqAdapterParams);
    process(request: CopilotRuntimeChatCompletionRequest): Promise<CopilotRuntimeChatCompletionResponse>;
}

export { GoogleGenerativeAIAdapter as G, LangChainAdapter as L, OpenAIAdapterParams as O, UnifyAdapterParams as U, OpenAIAdapter as a, OpenAIAssistantAdapterParams as b, OpenAIAssistantAdapter as c, UnifyAdapter as d, GroqAdapterParams as e, GroqAdapter as f };
