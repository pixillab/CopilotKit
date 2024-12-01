var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/service-adapters/index.ts
var service_adapters_exports = {};
__export(service_adapters_exports, {
  AnthropicAdapter: () => AnthropicAdapter,
  GoogleGenerativeAIAdapter: () => GoogleGenerativeAIAdapter,
  GroqAdapter: () => GroqAdapter,
  LangChainAdapter: () => LangChainAdapter,
  OpenAIAdapter: () => OpenAIAdapter,
  OpenAIAssistantAdapter: () => OpenAIAssistantAdapter,
  RemoteChain: () => RemoteChain,
  UnifyAdapter: () => UnifyAdapter
});
module.exports = __toCommonJS(service_adapters_exports);

// src/service-adapters/langchain/langserve.ts
var import_remote = require("langchain/runnables/remote");
var RemoteChain = class {
  name;
  description;
  chainUrl;
  parameters;
  parameterType;
  constructor(options) {
    this.name = options.name;
    this.description = options.description;
    this.chainUrl = options.chainUrl;
    this.parameters = options.parameters;
    this.parameterType = options.parameterType || "multi";
  }
  async toAction() {
    if (!this.parameters) {
      await this.inferLangServeParameters();
    }
    return {
      name: this.name,
      description: this.description,
      parameters: this.parameters,
      handler: async (args) => {
        const runnable = new import_remote.RemoteRunnable({
          url: this.chainUrl
        });
        let input;
        if (this.parameterType === "single") {
          input = args[Object.keys(args)[0]];
        } else {
          input = args;
        }
        return await runnable.invoke(input);
      }
    };
  }
  async inferLangServeParameters() {
    const supportedTypes = [
      "string",
      "number",
      "boolean"
    ];
    let schemaUrl = this.chainUrl.replace(/\/+$/, "") + "/input_schema";
    let schema = await fetch(schemaUrl).then((res) => res.json()).catch(() => {
      throw new Error("Failed to fetch langserve schema at " + schemaUrl);
    });
    if (supportedTypes.includes(schema.type)) {
      this.parameterType = "single";
      this.parameters = [
        {
          name: "input",
          type: schema.type,
          description: "The input to the chain"
        }
      ];
    } else if (schema.type === "object") {
      this.parameterType = "multi";
      this.parameters = Object.keys(schema.properties).map((key) => {
        var _a;
        let property = schema.properties[key];
        if (!supportedTypes.includes(property.type)) {
          throw new Error("Unsupported schema type");
        }
        return {
          name: key,
          type: property.type,
          description: property.description || "",
          required: ((_a = schema.required) == null ? void 0 : _a.includes(key)) || false
        };
      });
    } else {
      throw new Error("Unsupported schema type");
    }
  }
};
__name(RemoteChain, "RemoteChain");

// src/service-adapters/openai/openai-adapter.ts
var import_openai = __toESM(require("openai"));

// src/service-adapters/openai/utils.ts
function limitMessagesToTokenCount(messages, tools, model, maxTokens) {
  maxTokens || (maxTokens = maxTokensForOpenAIModel(model));
  const result = [];
  const toolsNumTokens = countToolsTokens(model, tools);
  if (toolsNumTokens > maxTokens) {
    throw new Error(`Too many tokens in function definitions: ${toolsNumTokens} > ${maxTokens}`);
  }
  maxTokens -= toolsNumTokens;
  for (const message of messages) {
    if (message.role === "system") {
      const numTokens = countMessageTokens(model, message);
      maxTokens -= numTokens;
      if (maxTokens < 0) {
        throw new Error("Not enough tokens for system message.");
      }
    }
  }
  let cutoff = false;
  const reversedMessages = [
    ...messages
  ].reverse();
  for (const message of reversedMessages) {
    if (message.role === "system") {
      result.unshift(message);
      continue;
    } else if (cutoff) {
      continue;
    }
    let numTokens = countMessageTokens(model, message);
    if (maxTokens < numTokens) {
      cutoff = true;
      continue;
    }
    result.unshift(message);
    maxTokens -= numTokens;
  }
  return result;
}
__name(limitMessagesToTokenCount, "limitMessagesToTokenCount");
function maxTokensForOpenAIModel(model) {
  return maxTokensByModel[model] || DEFAULT_MAX_TOKENS;
}
__name(maxTokensForOpenAIModel, "maxTokensForOpenAIModel");
var DEFAULT_MAX_TOKENS = 128e3;
var maxTokensByModel = {
  // GPT-4
  "gpt-4o": 128e3,
  "gpt-4o-2024-05-13": 128e3,
  "gpt-4-turbo": 128e3,
  "gpt-4-turbo-2024-04-09": 128e3,
  "gpt-4-0125-preview": 128e3,
  "gpt-4-turbo-preview": 128e3,
  "gpt-4-1106-preview": 128e3,
  "gpt-4-vision-preview": 128e3,
  "gpt-4-1106-vision-preview": 128e3,
  "gpt-4-32k": 32768,
  "gpt-4-32k-0613": 32768,
  "gpt-4-32k-0314": 32768,
  "gpt-4": 8192,
  "gpt-4-0613": 8192,
  "gpt-4-0314": 8192,
  // GPT-3.5
  "gpt-3.5-turbo-0125": 16385,
  "gpt-3.5-turbo": 16385,
  "gpt-3.5-turbo-1106": 16385,
  "gpt-3.5-turbo-instruct": 4096,
  "gpt-3.5-turbo-16k": 16385,
  "gpt-3.5-turbo-0613": 4096,
  "gpt-3.5-turbo-16k-0613": 16385,
  "gpt-3.5-turbo-0301": 4097
};
function countToolsTokens(model, tools) {
  if (tools.length === 0) {
    return 0;
  }
  const json = JSON.stringify(tools);
  return countTokens(model, json);
}
__name(countToolsTokens, "countToolsTokens");
function countMessageTokens(model, message) {
  return countTokens(model, message.content || "");
}
__name(countMessageTokens, "countMessageTokens");
function countTokens(model, text) {
  return text.length / 3;
}
__name(countTokens, "countTokens");
function convertActionInputToOpenAITool(action) {
  return {
    type: "function",
    function: {
      name: action.name,
      description: action.description,
      parameters: JSON.parse(action.jsonSchema)
    }
  };
}
__name(convertActionInputToOpenAITool, "convertActionInputToOpenAITool");
function convertMessageToOpenAIMessage(message) {
  if (message.isTextMessage() || message.isContentMessage()) {
    return {
      role: message.role,
      content: typeof message.content === "string" ? message.content : JSON.stringify(message.content)
    };
  } else if (message.isActionExecutionMessage()) {
    return {
      role: "assistant",
      tool_calls: [
        {
          id: message.id,
          type: "function",
          function: {
            name: message.name,
            arguments: JSON.stringify(message.arguments)
          }
        }
      ]
    };
  } else if (message.isResultMessage()) {
    return {
      role: "tool",
      content: message.result,
      tool_call_id: message.actionExecutionId
    };
  }
}
__name(convertMessageToOpenAIMessage, "convertMessageToOpenAIMessage");
function convertSystemMessageToAssistantAPI(message) {
  return {
    ...message,
    ...message.role === "system" && {
      role: "assistant",
      content: "THE FOLLOWING MESSAGE IS A SYSTEM MESSAGE: " + message.content
    }
  };
}
__name(convertSystemMessageToAssistantAPI, "convertSystemMessageToAssistantAPI");

// src/service-adapters/openai/openai-adapter.ts
var import_shared = require("@copilotkit/shared");
var DEFAULT_MODEL = "gpt-4o";
var OpenAIAdapter = class {
  model = DEFAULT_MODEL;
  disableParallelToolCalls = false;
  _openai;
  get openai() {
    return this._openai;
  }
  constructor(params) {
    this._openai = (params == null ? void 0 : params.openai) || new import_openai.default({});
    if (params == null ? void 0 : params.model) {
      this.model = params.model;
    }
    this.disableParallelToolCalls = (params == null ? void 0 : params.disableParallelToolCalls) || false;
  }
  async process(request) {
    const { threadId, model = this.model, messages, actions, eventSource, forwardedParameters } = request;
    const tools = actions.map(convertActionInputToOpenAITool);
    let openaiMessages = messages.map(convertMessageToOpenAIMessage);
    openaiMessages = limitMessagesToTokenCount(openaiMessages, tools, model);
    let toolChoice = forwardedParameters == null ? void 0 : forwardedParameters.toolChoice;
    if ((forwardedParameters == null ? void 0 : forwardedParameters.toolChoice) === "function") {
      toolChoice = {
        type: "function",
        function: {
          name: forwardedParameters.toolChoiceFunctionName
        }
      };
    }
    const stream = this.openai.beta.chat.completions.stream({
      model,
      stream: true,
      messages: openaiMessages,
      ...tools.length > 0 && {
        tools
      },
      ...(forwardedParameters == null ? void 0 : forwardedParameters.maxTokens) && {
        max_tokens: forwardedParameters.maxTokens
      },
      ...(forwardedParameters == null ? void 0 : forwardedParameters.stop) && {
        stop: forwardedParameters.stop
      },
      ...toolChoice && {
        tool_choice: toolChoice
      },
      ...this.disableParallelToolCalls && {
        parallel_tool_calls: false
      }
    });
    eventSource.stream(async (eventStream$) => {
      var _a, _b;
      let mode = null;
      for await (const chunk of stream) {
        const toolCall = (_a = chunk.choices[0].delta.tool_calls) == null ? void 0 : _a[0];
        const content = chunk.choices[0].delta.content;
        if (mode === "message" && (toolCall == null ? void 0 : toolCall.id)) {
          mode = null;
          eventStream$.sendTextMessageEnd();
        } else if (mode === "function" && (toolCall === void 0 || (toolCall == null ? void 0 : toolCall.id))) {
          mode = null;
          eventStream$.sendActionExecutionEnd();
        }
        if (mode === null) {
          if (toolCall == null ? void 0 : toolCall.id) {
            mode = "function";
            eventStream$.sendActionExecutionStart(toolCall.id, toolCall.function.name);
          } else if (content) {
            mode = "message";
            eventStream$.sendTextMessageStart(chunk.id);
          }
        }
        if (mode === "message" && content) {
          eventStream$.sendTextMessageContent(content);
        } else if (mode === "function" && ((_b = toolCall == null ? void 0 : toolCall.function) == null ? void 0 : _b.arguments)) {
          eventStream$.sendActionExecutionArgs(toolCall.function.arguments);
        }
      }
      if (mode === "message") {
        eventStream$.sendTextMessageEnd();
      } else if (mode === "function") {
        eventStream$.sendActionExecutionEnd();
      }
      eventStream$.complete();
    });
    return {
      threadId: threadId || (0, import_shared.randomId)()
    };
  }
};
__name(OpenAIAdapter, "OpenAIAdapter");

// src/service-adapters/langchain/utils.ts
var import_messages = require("@langchain/core/messages");
var import_tools = require("@langchain/core/tools");
var import_zod = require("zod");
var import_shared2 = require("@copilotkit/shared");
function convertMessageToLangChainMessage(message) {
  if (message.isTextMessage()) {
    if (message.role == "user") {
      return new import_messages.HumanMessage(message.content);
    } else if (message.role == "assistant") {
      return new import_messages.AIMessage(message.content);
    } else if (message.role === "system") {
      return new import_messages.SystemMessage(message.content);
    }
  } else if (message.isActionExecutionMessage()) {
    return new import_messages.AIMessage({
      content: "",
      tool_calls: [
        {
          id: message.id,
          args: message.arguments,
          name: message.name
        }
      ]
    });
  } else if (message.isResultMessage()) {
    return new import_messages.ToolMessage({
      content: message.result,
      tool_call_id: message.actionExecutionId
    });
  }
}
__name(convertMessageToLangChainMessage, "convertMessageToLangChainMessage");
function convertJsonSchemaToZodSchema(jsonSchema, required) {
  if (jsonSchema.type === "object") {
    const spec = {};
    if (!jsonSchema.properties || !Object.keys(jsonSchema.properties).length) {
      return !required ? import_zod.z.object(spec).optional() : import_zod.z.object(spec);
    }
    for (const [key, value] of Object.entries(jsonSchema.properties)) {
      spec[key] = convertJsonSchemaToZodSchema(value, jsonSchema.required ? jsonSchema.required.includes(key) : false);
    }
    let schema = import_zod.z.object(spec).describe(jsonSchema.description);
    return required ? schema : schema.optional();
  } else if (jsonSchema.type === "string") {
    let schema = import_zod.z.string().describe(jsonSchema.description);
    return required ? schema : schema.optional();
  } else if (jsonSchema.type === "number") {
    let schema = import_zod.z.number().describe(jsonSchema.description);
    return required ? schema : schema.optional();
  } else if (jsonSchema.type === "boolean") {
    let schema = import_zod.z.boolean().describe(jsonSchema.description);
    return required ? schema : schema.optional();
  } else if (jsonSchema.type === "array") {
    let itemSchema = convertJsonSchemaToZodSchema(jsonSchema.items, true);
    let schema = import_zod.z.array(itemSchema).describe(jsonSchema.description);
    return required ? schema : schema.optional();
  }
}
__name(convertJsonSchemaToZodSchema, "convertJsonSchemaToZodSchema");
function convertActionInputToLangChainTool(actionInput) {
  return new import_tools.DynamicStructuredTool({
    name: actionInput.name,
    description: actionInput.description,
    schema: convertJsonSchemaToZodSchema(JSON.parse(actionInput.jsonSchema), true),
    func: async () => {
      return "";
    }
  });
}
__name(convertActionInputToLangChainTool, "convertActionInputToLangChainTool");
function isAIMessage(message) {
  return Object.prototype.toString.call(message) === "[object AIMessage]";
}
__name(isAIMessage, "isAIMessage");
function isAIMessageChunk(message) {
  return Object.prototype.toString.call(message) === "[object AIMessageChunk]";
}
__name(isAIMessageChunk, "isAIMessageChunk");
function isBaseMessageChunk(message) {
  return Object.prototype.toString.call(message) === "[object BaseMessageChunk]";
}
__name(isBaseMessageChunk, "isBaseMessageChunk");
function maybeSendActionExecutionResultIsMessage(eventStream$, actionExecution) {
  if (actionExecution) {
    eventStream$.sendActionExecutionResult(actionExecution.id, actionExecution.name, "Sending a message");
  }
}
__name(maybeSendActionExecutionResultIsMessage, "maybeSendActionExecutionResultIsMessage");
async function streamLangChainResponse({ result, eventStream$, actionExecution }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  if (typeof result === "string") {
    if (!actionExecution) {
      eventStream$.sendTextMessage((0, import_shared2.randomId)(), result);
    } else {
      eventStream$.sendActionExecutionResult(actionExecution.id, actionExecution.name, result);
    }
  } else if (isAIMessage(result)) {
    maybeSendActionExecutionResultIsMessage(eventStream$, actionExecution);
    if (result.content) {
      eventStream$.sendTextMessage((0, import_shared2.randomId)(), result.content);
    }
    for (const toolCall of result.tool_calls) {
      eventStream$.sendActionExecution(toolCall.id || (0, import_shared2.randomId)(), toolCall.name, JSON.stringify(toolCall.args));
    }
  } else if (isBaseMessageChunk(result)) {
    maybeSendActionExecutionResultIsMessage(eventStream$, actionExecution);
    if ((_a = result.lc_kwargs) == null ? void 0 : _a.content) {
      eventStream$.sendTextMessage((0, import_shared2.randomId)(), result.content);
    }
    if ((_b = result.lc_kwargs) == null ? void 0 : _b.tool_calls) {
      for (const toolCall of (_c = result.lc_kwargs) == null ? void 0 : _c.tool_calls) {
        eventStream$.sendActionExecution(toolCall.id || (0, import_shared2.randomId)(), toolCall.name, JSON.stringify(toolCall.args));
      }
    }
  } else if (result && "getReader" in result) {
    maybeSendActionExecutionResultIsMessage(eventStream$, actionExecution);
    let reader = result.getReader();
    let mode = null;
    const toolCallDetails = {
      name: null,
      id: null,
      index: null,
      prevIndex: null
    };
    while (true) {
      try {
        const { done, value } = await reader.read();
        let toolCallName = void 0;
        let toolCallId = void 0;
        let toolCallArgs = void 0;
        let hasToolCall = false;
        let content = value == null ? void 0 : value.content;
        if (isAIMessageChunk(value)) {
          let chunk = (_d = value.tool_call_chunks) == null ? void 0 : _d[0];
          toolCallArgs = chunk == null ? void 0 : chunk.args;
          hasToolCall = chunk != void 0;
          if (chunk == null ? void 0 : chunk.name)
            toolCallDetails.name = chunk.name;
          if ((chunk == null ? void 0 : chunk.index) != null) {
            toolCallDetails.index = chunk.index;
            if (toolCallDetails.prevIndex == null)
              toolCallDetails.prevIndex = chunk.index;
          }
          if (chunk == null ? void 0 : chunk.id)
            toolCallDetails.id = chunk.index != null ? `${chunk.id}-idx-${chunk.index}` : chunk.id;
          toolCallName = toolCallDetails.name;
          toolCallId = toolCallDetails.id;
        } else if (isBaseMessageChunk(value)) {
          let chunk = (_f = (_e = value.additional_kwargs) == null ? void 0 : _e.tool_calls) == null ? void 0 : _f[0];
          toolCallName = (_g = chunk == null ? void 0 : chunk.function) == null ? void 0 : _g.name;
          toolCallId = chunk == null ? void 0 : chunk.id;
          toolCallArgs = (_h = chunk == null ? void 0 : chunk.function) == null ? void 0 : _h.arguments;
          hasToolCall = (chunk == null ? void 0 : chunk.function) != void 0;
        }
        if (mode === "message" && (toolCallId || done)) {
          mode = null;
          eventStream$.sendTextMessageEnd();
        } else if (mode === "function" && (!hasToolCall || done)) {
          mode = null;
          eventStream$.sendActionExecutionEnd();
        }
        if (done) {
          break;
        }
        if (mode === null) {
          if (hasToolCall && toolCallId && toolCallName) {
            mode = "function";
            eventStream$.sendActionExecutionStart(toolCallId, toolCallName);
          } else if (content) {
            mode = "message";
            eventStream$.sendTextMessageStart((0, import_shared2.randomId)());
          }
        }
        if (mode === "message" && content) {
          eventStream$.sendTextMessageContent(Array.isArray(content) ? ((_i = content[0]) == null ? void 0 : _i.text) ?? "" : content);
        } else if (mode === "function" && toolCallArgs) {
          if (toolCallDetails.index !== toolCallDetails.prevIndex) {
            eventStream$.sendActionExecutionEnd();
            eventStream$.sendActionExecutionStart(toolCallId, toolCallName);
            toolCallDetails.prevIndex = toolCallDetails.index;
          }
          eventStream$.sendActionExecutionArgs(toolCallArgs);
        }
      } catch (error) {
        console.error("Error reading from stream", error);
        break;
      }
    }
  } else if (actionExecution) {
    eventStream$.sendActionExecutionResult(actionExecution.id, actionExecution.name, encodeResult(result));
  } else {
    throw new Error("Invalid return type from LangChain function.");
  }
  eventStream$.complete();
}
__name(streamLangChainResponse, "streamLangChainResponse");
function encodeResult(result) {
  if (result === void 0) {
    return "";
  } else if (typeof result === "string") {
    return result;
  } else {
    return JSON.stringify(result);
  }
}
__name(encodeResult, "encodeResult");

// src/service-adapters/langchain/langchain-adapter.ts
var import_shared3 = require("@copilotkit/shared");
var LangChainAdapter = class {
  options;
  /**
  * To use LangChain as a backend, provide a handler function to the adapter with your custom LangChain logic.
  */
  constructor(options) {
    this.options = options;
  }
  async process(request) {
    const { eventSource, model, actions, messages, threadId, runId } = request;
    const result = await this.options.chainFn({
      messages: messages.map(convertMessageToLangChainMessage),
      tools: actions.map(convertActionInputToLangChainTool),
      model,
      threadId,
      runId
    });
    eventSource.stream(async (eventStream$) => {
      await streamLangChainResponse({
        result,
        eventStream$
      });
    });
    return {
      threadId: threadId || (0, import_shared3.randomId)()
    };
  }
};
__name(LangChainAdapter, "LangChainAdapter");

// src/service-adapters/google/google-genai-adapter.ts
var import_google_gauth = require("@langchain/google-gauth");
var GoogleGenerativeAIAdapter = class extends LangChainAdapter {
  constructor(options) {
    super({
      chainFn: async ({ messages, tools }) => {
        const model = new import_google_gauth.ChatGoogle({
          modelName: (options == null ? void 0 : options.model) ?? "gemini-1.5-pro",
          apiVersion: "v1beta"
        }).bindTools(tools);
        return model.stream(messages);
      }
    });
  }
};
__name(GoogleGenerativeAIAdapter, "GoogleGenerativeAIAdapter");

// src/service-adapters/openai/openai-assistant-adapter.ts
var import_openai2 = __toESM(require("openai"));
var OpenAIAssistantAdapter = class {
  openai;
  codeInterpreterEnabled;
  assistantId;
  fileSearchEnabled;
  disableParallelToolCalls;
  constructor(params) {
    this.openai = params.openai || new import_openai2.default({});
    this.codeInterpreterEnabled = params.codeInterpreterEnabled === false || true;
    this.fileSearchEnabled = params.fileSearchEnabled === false || true;
    this.assistantId = params.assistantId;
    this.disableParallelToolCalls = (params == null ? void 0 : params.disableParallelToolCalls) || false;
  }
  async process(request) {
    const { messages, actions, eventSource, runId, forwardedParameters } = request;
    let threadId = request.threadId || (await this.openai.beta.threads.create()).id;
    const lastMessage = messages.at(-1);
    let nextRunId = void 0;
    if (lastMessage.isResultMessage() && runId) {
      nextRunId = await this.submitToolOutputs(threadId, runId, messages, eventSource);
    } else if (lastMessage.isTextMessage()) {
      nextRunId = await this.submitUserMessage(threadId, messages, actions, eventSource, forwardedParameters);
    } else {
      throw new Error("No actionable message found in the messages");
    }
    return {
      threadId,
      runId: nextRunId
    };
  }
  async submitToolOutputs(threadId, runId, messages, eventSource) {
    let run = await this.openai.beta.threads.runs.retrieve(threadId, runId);
    if (!run.required_action) {
      throw new Error("No tool outputs required");
    }
    const toolCallsIds = run.required_action.submit_tool_outputs.tool_calls.map((toolCall) => toolCall.id);
    const resultMessages = messages.filter((message) => message.isResultMessage() && toolCallsIds.includes(message.actionExecutionId));
    if (toolCallsIds.length != resultMessages.length) {
      throw new Error("Number of function results does not match the number of tool calls");
    }
    const toolOutputs = resultMessages.map((message) => {
      return {
        tool_call_id: message.actionExecutionId,
        output: message.result
      };
    });
    const stream = this.openai.beta.threads.runs.submitToolOutputsStream(threadId, runId, {
      tool_outputs: toolOutputs,
      ...this.disableParallelToolCalls && {
        parallel_tool_calls: false
      }
    });
    await this.streamResponse(stream, eventSource);
    return runId;
  }
  async submitUserMessage(threadId, messages, actions, eventSource, forwardedParameters) {
    messages = [
      ...messages
    ];
    const instructionsMessage = messages.shift();
    const instructions = instructionsMessage.isTextMessage() ? instructionsMessage.content : "";
    const userMessage = messages.map(convertMessageToOpenAIMessage).map(convertSystemMessageToAssistantAPI).at(-1);
    if (userMessage.role !== "user") {
      throw new Error("No user message found");
    }
    await this.openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: userMessage.content
    });
    const openaiTools = actions.map(convertActionInputToOpenAITool);
    const tools = [
      ...openaiTools,
      ...this.codeInterpreterEnabled ? [
        {
          type: "code_interpreter"
        }
      ] : [],
      ...this.fileSearchEnabled ? [
        {
          type: "file_search"
        }
      ] : []
    ];
    let stream = this.openai.beta.threads.runs.stream(threadId, {
      assistant_id: this.assistantId,
      instructions,
      tools,
      ...(forwardedParameters == null ? void 0 : forwardedParameters.maxTokens) && {
        max_completion_tokens: forwardedParameters.maxTokens
      },
      ...this.disableParallelToolCalls && {
        parallel_tool_calls: false
      }
    });
    await this.streamResponse(stream, eventSource);
    return getRunIdFromStream(stream);
  }
  async streamResponse(stream, eventSource) {
    eventSource.stream(async (eventStream$) => {
      var _a, _b, _c, _d, _e, _f;
      let inFunctionCall = false;
      for await (const chunk of stream) {
        switch (chunk.event) {
          case "thread.message.created":
            if (inFunctionCall) {
              eventStream$.sendActionExecutionEnd();
            }
            eventStream$.sendTextMessageStart(chunk.data.id);
            break;
          case "thread.message.delta":
            if (((_a = chunk.data.delta.content) == null ? void 0 : _a[0].type) === "text") {
              eventStream$.sendTextMessageContent((_b = chunk.data.delta.content) == null ? void 0 : _b[0].text.value);
            }
            break;
          case "thread.message.completed":
            eventStream$.sendTextMessageEnd();
            break;
          case "thread.run.step.delta":
            let toolCallId;
            let toolCallName;
            let toolCallArgs;
            if (chunk.data.delta.step_details.type === "tool_calls" && ((_c = chunk.data.delta.step_details.tool_calls) == null ? void 0 : _c[0].type) === "function") {
              toolCallId = (_d = chunk.data.delta.step_details.tool_calls) == null ? void 0 : _d[0].id;
              toolCallName = (_e = chunk.data.delta.step_details.tool_calls) == null ? void 0 : _e[0].function.name;
              toolCallArgs = (_f = chunk.data.delta.step_details.tool_calls) == null ? void 0 : _f[0].function.arguments;
            }
            if (toolCallName && toolCallId) {
              if (inFunctionCall) {
                eventStream$.sendActionExecutionEnd();
              }
              inFunctionCall = true;
              eventStream$.sendActionExecutionStart(toolCallId, toolCallName);
            } else if (toolCallArgs) {
              eventStream$.sendActionExecutionArgs(toolCallArgs);
            }
            break;
        }
      }
      if (inFunctionCall) {
        eventStream$.sendActionExecutionEnd();
      }
      eventStream$.complete();
    });
  }
};
__name(OpenAIAssistantAdapter, "OpenAIAssistantAdapter");
function getRunIdFromStream(stream) {
  return new Promise((resolve, reject) => {
    let runIdGetter = /* @__PURE__ */ __name((event) => {
      if (event.event === "thread.run.created") {
        const runId = event.data.id;
        stream.off("event", runIdGetter);
        resolve(runId);
      }
    }, "runIdGetter");
    stream.on("event", runIdGetter);
  });
}
__name(getRunIdFromStream, "getRunIdFromStream");

// src/service-adapters/unify/unify-adapter.ts
var import_openai3 = __toESM(require("openai"));
var import_shared4 = require("@copilotkit/shared");
var UnifyAdapter = class {
  apiKey;
  model;
  start;
  constructor(options) {
    if (options == null ? void 0 : options.apiKey) {
      this.apiKey = options.apiKey;
    } else {
      this.apiKey = "UNIFY_API_KEY";
    }
    this.model = options == null ? void 0 : options.model;
    this.start = true;
  }
  async process(request) {
    const tools = request.actions.map(convertActionInputToOpenAITool);
    const openai = new import_openai3.default({
      apiKey: this.apiKey,
      baseURL: "https://api.unify.ai/v0/"
    });
    const messages = request.messages.map(convertMessageToOpenAIMessage);
    const stream = await openai.chat.completions.create({
      model: this.model,
      messages,
      stream: true,
      ...tools.length > 0 && {
        tools
      }
    });
    let model = null;
    request.eventSource.stream(async (eventStream$) => {
      var _a, _b;
      let mode = null;
      for await (const chunk of stream) {
        if (this.start) {
          model = chunk.model;
          eventStream$.sendTextMessageStart((0, import_shared4.randomId)());
          eventStream$.sendTextMessageContent(`Model used: ${model}
`);
          eventStream$.sendTextMessageEnd();
          this.start = false;
        }
        const toolCall = (_a = chunk.choices[0].delta.tool_calls) == null ? void 0 : _a[0];
        const content = chunk.choices[0].delta.content;
        if (mode === "message" && (toolCall == null ? void 0 : toolCall.id)) {
          mode = null;
          eventStream$.sendTextMessageEnd();
        } else if (mode === "function" && (toolCall === void 0 || (toolCall == null ? void 0 : toolCall.id))) {
          mode = null;
          eventStream$.sendActionExecutionEnd();
        }
        if (mode === null) {
          if (toolCall == null ? void 0 : toolCall.id) {
            mode = "function";
            eventStream$.sendActionExecutionStart(toolCall.id, toolCall.function.name);
          } else if (content) {
            mode = "message";
            eventStream$.sendTextMessageStart(chunk.id);
          }
        }
        if (mode === "message" && content) {
          eventStream$.sendTextMessageContent(content);
        } else if (mode === "function" && ((_b = toolCall == null ? void 0 : toolCall.function) == null ? void 0 : _b.arguments)) {
          eventStream$.sendActionExecutionArgs(toolCall.function.arguments);
        }
      }
      if (mode === "message") {
        eventStream$.sendTextMessageEnd();
      } else if (mode === "function") {
        eventStream$.sendActionExecutionEnd();
      }
      eventStream$.complete();
    });
    return {
      threadId: request.threadId || (0, import_shared4.randomId)()
    };
  }
};
__name(UnifyAdapter, "UnifyAdapter");

// src/service-adapters/groq/groq-adapter.ts
var import_groq_sdk = require("groq-sdk");
var import_shared5 = require("@copilotkit/shared");
var DEFAULT_MODEL2 = "llama3-groq-70b-8192-tool-use-preview";
var GroqAdapter = class {
  model = DEFAULT_MODEL2;
  disableParallelToolCalls = false;
  _groq;
  get groq() {
    return this._groq;
  }
  constructor(params) {
    this._groq = (params == null ? void 0 : params.groq) || new import_groq_sdk.Groq({});
    if (params == null ? void 0 : params.model) {
      this.model = params.model;
    }
    this.disableParallelToolCalls = (params == null ? void 0 : params.disableParallelToolCalls) || false;
  }
  async process(request) {
    const { threadId, model = this.model, messages, actions, eventSource, forwardedParameters } = request;
    const tools = actions.map(convertActionInputToOpenAITool);
    let openaiMessages = messages.map(convertMessageToOpenAIMessage);
    openaiMessages = limitMessagesToTokenCount(openaiMessages, tools, model);
    let toolChoice = forwardedParameters == null ? void 0 : forwardedParameters.toolChoice;
    if ((forwardedParameters == null ? void 0 : forwardedParameters.toolChoice) === "function") {
      toolChoice = {
        type: "function",
        function: {
          name: forwardedParameters.toolChoiceFunctionName
        }
      };
    }
    const stream = await this.groq.chat.completions.create({
      model,
      stream: true,
      messages: openaiMessages,
      ...tools.length > 0 && {
        tools
      },
      ...(forwardedParameters == null ? void 0 : forwardedParameters.maxTokens) && {
        max_tokens: forwardedParameters.maxTokens
      },
      ...(forwardedParameters == null ? void 0 : forwardedParameters.stop) && {
        stop: forwardedParameters.stop
      },
      ...toolChoice && {
        tool_choice: toolChoice
      },
      ...this.disableParallelToolCalls && {
        parallel_tool_calls: false
      }
    });
    eventSource.stream(async (eventStream$) => {
      var _a, _b;
      let mode = null;
      for await (const chunk of stream) {
        const toolCall = (_a = chunk.choices[0].delta.tool_calls) == null ? void 0 : _a[0];
        const content = chunk.choices[0].delta.content;
        if (mode === "message" && (toolCall == null ? void 0 : toolCall.id)) {
          mode = null;
          eventStream$.sendTextMessageEnd();
        } else if (mode === "function" && (toolCall === void 0 || (toolCall == null ? void 0 : toolCall.id))) {
          mode = null;
          eventStream$.sendActionExecutionEnd();
        }
        if (mode === null) {
          if (toolCall == null ? void 0 : toolCall.id) {
            mode = "function";
            eventStream$.sendActionExecutionStart(toolCall.id, toolCall.function.name);
          } else if (content) {
            mode = "message";
            eventStream$.sendTextMessageStart(chunk.id);
          }
        }
        if (mode === "message" && content) {
          eventStream$.sendTextMessageContent(content);
        } else if (mode === "function" && ((_b = toolCall == null ? void 0 : toolCall.function) == null ? void 0 : _b.arguments)) {
          eventStream$.sendActionExecutionArgs(toolCall.function.arguments);
        }
      }
      if (mode === "message") {
        eventStream$.sendTextMessageEnd();
      } else if (mode === "function") {
        eventStream$.sendActionExecutionEnd();
      }
      eventStream$.complete();
    });
    return {
      threadId: threadId || (0, import_shared5.randomId)()
    };
  }
};
__name(GroqAdapter, "GroqAdapter");

// src/service-adapters/anthropic/anthropic-adapter.ts
var import_sdk = __toESM(require("@anthropic-ai/sdk"));

// src/service-adapters/anthropic/utils.ts
function limitMessagesToTokenCount2(messages, tools, model, maxTokens) {
  maxTokens || (maxTokens = MAX_TOKENS);
  const result = [];
  const toolsNumTokens = countToolsTokens2(model, tools);
  if (toolsNumTokens > maxTokens) {
    throw new Error(`Too many tokens in function definitions: ${toolsNumTokens} > ${maxTokens}`);
  }
  maxTokens -= toolsNumTokens;
  for (const message of messages) {
    if (message.role === "system") {
      const numTokens = countMessageTokens2(model, message);
      maxTokens -= numTokens;
      if (maxTokens < 0) {
        throw new Error("Not enough tokens for system message.");
      }
    }
  }
  let cutoff = false;
  const reversedMessages = [
    ...messages
  ].reverse();
  for (const message of reversedMessages) {
    if (message.role === "system") {
      result.unshift(message);
      continue;
    } else if (cutoff) {
      continue;
    }
    let numTokens = countMessageTokens2(model, message);
    if (maxTokens < numTokens) {
      cutoff = true;
      continue;
    }
    result.unshift(message);
    maxTokens -= numTokens;
  }
  return result;
}
__name(limitMessagesToTokenCount2, "limitMessagesToTokenCount");
var MAX_TOKENS = 128e3;
function countToolsTokens2(model, tools) {
  if (tools.length === 0) {
    return 0;
  }
  const json = JSON.stringify(tools);
  return countTokens2(model, json);
}
__name(countToolsTokens2, "countToolsTokens");
function countMessageTokens2(model, message) {
  return countTokens2(model, JSON.stringify(message.content) || "");
}
__name(countMessageTokens2, "countMessageTokens");
function countTokens2(model, text) {
  return text.length / 3;
}
__name(countTokens2, "countTokens");
function convertActionInputToAnthropicTool(action) {
  return {
    name: action.name,
    description: action.description,
    input_schema: JSON.parse(action.jsonSchema)
  };
}
__name(convertActionInputToAnthropicTool, "convertActionInputToAnthropicTool");
function convertMessageToAnthropicMessage(message) {
  if (message.isTextMessage()) {
    if (message.role === "system") {
      return {
        role: "assistant",
        content: [
          {
            type: "text",
            text: "THE FOLLOWING MESSAGE IS A SYSTEM MESSAGE: " + message.content
          }
        ]
      };
    } else {
      return {
        role: message.role === "user" ? "user" : "assistant",
        content: [
          {
            type: "text",
            text: message.content
          }
        ]
      };
    }
  } else if (message.isActionExecutionMessage()) {
    return {
      role: "assistant",
      content: [
        {
          id: message.id,
          type: "tool_use",
          input: message.arguments,
          name: message.name
        }
      ]
    };
  } else if (message.isResultMessage()) {
    return {
      role: "user",
      content: [
        {
          type: "tool_result",
          content: message.result,
          tool_use_id: message.actionExecutionId
        }
      ]
    };
  }
}
__name(convertMessageToAnthropicMessage, "convertMessageToAnthropicMessage");
function groupAnthropicMessagesByRole(messageParams) {
  return messageParams.reduce((acc, message) => {
    const lastGroup = acc[acc.length - 1];
    if (lastGroup && lastGroup.role === message.role) {
      lastGroup.content = lastGroup.content.concat(message.content);
    } else {
      acc.push({
        role: message.role,
        content: [
          ...message.content
        ]
      });
    }
    return acc;
  }, []);
}
__name(groupAnthropicMessagesByRole, "groupAnthropicMessagesByRole");

// src/service-adapters/anthropic/anthropic-adapter.ts
var import_shared6 = require("@copilotkit/shared");
var DEFAULT_MODEL3 = "claude-3-sonnet-20240229";
var AnthropicAdapter = class {
  model = DEFAULT_MODEL3;
  _anthropic;
  get anthropic() {
    return this._anthropic;
  }
  constructor(params) {
    this._anthropic = (params == null ? void 0 : params.anthropic) || new import_sdk.default({});
    if (params == null ? void 0 : params.model) {
      this.model = params.model;
    }
  }
  async process(request) {
    const { threadId, model = this.model, messages: rawMessages, actions, eventSource, forwardedParameters } = request;
    const tools = actions.map(convertActionInputToAnthropicTool);
    const messages = [
      ...rawMessages
    ];
    const instructionsMessage = messages.shift();
    const instructions = instructionsMessage.isTextMessage() ? instructionsMessage.content : "";
    let anthropicMessages = messages.map(convertMessageToAnthropicMessage);
    anthropicMessages = limitMessagesToTokenCount2(anthropicMessages, tools, model);
    anthropicMessages = groupAnthropicMessagesByRole(anthropicMessages);
    let toolChoice = forwardedParameters == null ? void 0 : forwardedParameters.toolChoice;
    if ((forwardedParameters == null ? void 0 : forwardedParameters.toolChoice) === "function") {
      toolChoice = {
        type: "tool",
        name: forwardedParameters.toolChoiceFunctionName
      };
    }
    const stream = this.anthropic.messages.create({
      system: instructions,
      model: this.model,
      messages: anthropicMessages,
      max_tokens: (forwardedParameters == null ? void 0 : forwardedParameters.maxTokens) || 1024,
      ...tools.length > 0 && {
        tools
      },
      ...toolChoice && {
        tool_choice: toolChoice
      },
      stream: true
    });
    eventSource.stream(async (eventStream$) => {
      let mode = null;
      let didOutputText = false;
      let currentMessageId = (0, import_shared6.randomId)();
      let currentToolCallId = (0, import_shared6.randomId)();
      let filterThinkingTextBuffer = new FilterThinkingTextBuffer();
      for await (const chunk of await stream) {
        if (chunk.type === "message_start") {
          currentMessageId = chunk.message.id;
        } else if (chunk.type === "content_block_start") {
          if (chunk.content_block.type === "text") {
            didOutputText = false;
            filterThinkingTextBuffer.reset();
            mode = "message";
          } else if (chunk.content_block.type === "tool_use") {
            currentToolCallId = chunk.content_block.id;
            eventStream$.sendActionExecutionStart(currentToolCallId, chunk.content_block.name);
            mode = "function";
          }
        } else if (chunk.type === "content_block_delta") {
          if (chunk.delta.type === "text_delta") {
            const text = filterThinkingTextBuffer.onTextChunk(chunk.delta.text);
            if (text.length > 0) {
              if (!didOutputText) {
                eventStream$.sendTextMessageStart(currentMessageId);
                didOutputText = true;
              }
              eventStream$.sendTextMessageContent(text);
            }
          } else if (chunk.delta.type === "input_json_delta") {
            eventStream$.sendActionExecutionArgs(chunk.delta.partial_json);
          }
        } else if (chunk.type === "content_block_stop") {
          if (mode === "message") {
            if (didOutputText) {
              eventStream$.sendTextMessageEnd();
            }
          } else if (mode === "function") {
            eventStream$.sendActionExecutionEnd();
          }
        }
      }
      eventStream$.complete();
    });
    return {
      threadId: threadId || (0, import_shared6.randomId)()
    };
  }
};
__name(AnthropicAdapter, "AnthropicAdapter");
var THINKING_TAG = "<thinking>";
var THINKING_TAG_END = "</thinking>";
var FilterThinkingTextBuffer = /* @__PURE__ */ __name(class FilterThinkingTextBuffer2 {
  buffer;
  didFilterThinkingTag = false;
  constructor() {
    this.buffer = "";
  }
  onTextChunk(text) {
    this.buffer += text;
    if (this.didFilterThinkingTag) {
      return text;
    }
    const potentialTag = this.buffer.slice(0, THINKING_TAG.length);
    if (THINKING_TAG.startsWith(potentialTag)) {
      if (this.buffer.includes(THINKING_TAG_END)) {
        const end = this.buffer.indexOf(THINKING_TAG_END);
        const filteredText = this.buffer.slice(end + THINKING_TAG_END.length);
        this.buffer = filteredText;
        this.didFilterThinkingTag = true;
        return filteredText;
      } else {
        return "";
      }
    }
    return text;
  }
  reset() {
    this.buffer = "";
    this.didFilterThinkingTag = false;
  }
}, "FilterThinkingTextBuffer");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnthropicAdapter,
  GoogleGenerativeAIAdapter,
  GroqAdapter,
  LangChainAdapter,
  OpenAIAdapter,
  OpenAIAssistantAdapter,
  RemoteChain,
  UnifyAdapter
});
//# sourceMappingURL=index.js.map