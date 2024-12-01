import { C as CopilotServiceAdapter, c as CopilotRuntimeChatCompletionRequest, d as CopilotRuntimeChatCompletionResponse } from '../langserve-68a14520.js';
export { a as RemoteChain, R as RemoteChainParameters } from '../langserve-68a14520.js';
export { G as GoogleGenerativeAIAdapter, f as GroqAdapter, e as GroqAdapterParams, L as LangChainAdapter, a as OpenAIAdapter, O as OpenAIAdapterParams, c as OpenAIAssistantAdapter, b as OpenAIAssistantAdapterParams, d as UnifyAdapter, U as UnifyAdapterParams } from '../groq-adapter-0611cd70.js';
import Anthropic from '@anthropic-ai/sdk';
import '../index-b3d1da4c.js';
import '../graphql/types/base/index.js';
import 'rxjs';
import '@copilotkit/shared';
import 'openai';
import '@langchain/core/messages';
import '@langchain/core/tools';
import '@langchain/core/utils/stream';
import 'groq-sdk';

/**
 * Copilot Runtime adapter for Anthropic.
 *
 * ## Example
 *
 * ```ts
 * import { CopilotRuntime, AnthropicAdapter } from "@copilotkit/runtime";
 * import Anthropic from "@anthropic-ai/sdk";
 *
 * const copilotKit = new CopilotRuntime();
 *
 * const anthropic = new Anthropic({
 *   apiKey: "<your-api-key>",
 * });
 *
 * const serviceAdapter = new AnthropicAdapter({ anthropic });
 *
 * return copilotKit.streamHttpServerResponse(req, res, serviceAdapter);
 * ```
 */

interface AnthropicAdapterParams {
    /**
     * An optional Anthropic instance to use.  If not provided, a new instance will be
     * created.
     */
    anthropic?: Anthropic;
    /**
     * The model to use.
     */
    model?: string;
}
declare class AnthropicAdapter implements CopilotServiceAdapter {
    private model;
    private _anthropic;
    get anthropic(): Anthropic;
    constructor(params?: AnthropicAdapterParams);
    process(request: CopilotRuntimeChatCompletionRequest): Promise<CopilotRuntimeChatCompletionResponse>;
}

export { AnthropicAdapter, AnthropicAdapterParams, CopilotServiceAdapter };
