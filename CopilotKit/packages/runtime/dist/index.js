var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from3, except, desc) => {
  if (from3 && typeof from3 === "object" || typeof from3 === "function") {
    for (let key of __getOwnPropNames(from3))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from3[key], enumerable: !(desc = __getOwnPropDesc(from3, key)) || desc.enumerable });
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

// package.json
var require_package = __commonJS({
  "package.json"(exports, module2) {
    module2.exports = {
      name: "@pixillab/runtime",
      private: false,
      homepage: "https://github.com/pixillab/CopilotKit",
      repository: {
        type: "git",
        url: "https://github.com/pixillab/CopilotKit.git"
      },
      publishConfig: {
        access: "public"
      },
      version: "1.3.15-pixil.1",
      sideEffects: false,
      main: "./dist/index.js",
      module: "./dist/index.mjs",
      exports: {
        ".": "./dist/index.js"
      },
      types: "./dist/index.d.ts",
      license: "MIT",
      scripts: {
        build: 'tsup --onSuccess "pnpm run generate-graphql-schema"',
        dev: 'tsup --watch --onSuccess "pnpm run generate-graphql-schema"',
        test: "jest --passWithNoTests",
        "check-types": "tsc --noEmit",
        clean: "rm -rf .turbo && rm -rf node_modules && rm -rf dist && rm -rf .next && rm -rf __snapshots__",
        "generate-graphql-schema": "rm -rf __snapshots__ && ts-node ./scripts/generate-gql-schema.ts",
        "link:global": "pnpm link --global",
        "unlink:global": "pnpm unlink --global"
      },
      devDependencies: {
        "@swc/core": "1.5.28",
        "@types/express": "^4.17.21",
        "@types/jest": "^29.5.4",
        "@types/node": "^18.11.17",
        "@whatwg-node/server": "^0.9.34",
        eslint: "^8.56.0",
        "eslint-config-custom": "workspace:*",
        jest: "^29.6.4",
        nodemon: "^3.1.3",
        "ts-jest": "^29.1.1",
        "ts-node": "^10.9.2",
        tsconfig: "workspace:*",
        tsup: "^6.7.0",
        typescript: "^5.2.3",
        "zod-to-json-schema": "^3.23.5"
      },
      dependencies: {
        "@anthropic-ai/sdk": "^0.27.3",
        "@copilotkit/shared": "workspace:*",
        "@graphql-yoga/plugin-defer-stream": "^3.3.1",
        "@langchain/community": "^0.0.53",
        "@langchain/core": "^0.3.13",
        "@langchain/google-gauth": "^0.1.0",
        "@langchain/openai": "^0.0.28",
        "class-transformer": "^0.5.1",
        express: "^4.19.2",
        graphql: "^16.8.1",
        "graphql-scalars": "^1.23.0",
        "graphql-yoga": "^5.3.1",
        "groq-sdk": "^0.5.0",
        langchain: "^0.3.3",
        openai: "^4.50.0",
        pino: "^9.2.0",
        "pino-pretty": "^11.2.1",
        "reflect-metadata": "^0.2.2",
        rxjs: "^7.8.1",
        "type-graphql": "2.0.0-rc.1",
        zod: "^3.23.3"
      },
      keywords: [
        "copilotkit",
        "copilot",
        "react",
        "nextjs",
        "nodejs",
        "ai",
        "assistant",
        "javascript",
        "automation",
        "textarea"
      ]
    };
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AnthropicAdapter: () => AnthropicAdapter,
  CopilotRuntime: () => CopilotRuntime,
  GoogleGenerativeAIAdapter: () => GoogleGenerativeAIAdapter,
  GroqAdapter: () => GroqAdapter,
  GuardrailsValidationFailureResponse: () => GuardrailsValidationFailureResponse,
  LangChainAdapter: () => LangChainAdapter,
  MessageStreamInterruptedResponse: () => MessageStreamInterruptedResponse,
  OpenAIAdapter: () => OpenAIAdapter,
  OpenAIAssistantAdapter: () => OpenAIAssistantAdapter,
  RemoteChain: () => RemoteChain,
  UnifyAdapter: () => UnifyAdapter,
  UnknownErrorResponse: () => UnknownErrorResponse,
  buildSchema: () => buildSchema,
  config: () => config,
  copilotRuntimeNestEndpoint: () => copilotRuntimeNestEndpoint,
  copilotRuntimeNextJSAppRouterEndpoint: () => copilotRuntimeNextJSAppRouterEndpoint,
  copilotRuntimeNextJSPagesRouterEndpoint: () => copilotRuntimeNextJSPagesRouterEndpoint,
  copilotRuntimeNodeExpressEndpoint: () => copilotRuntimeNodeExpressEndpoint,
  copilotRuntimeNodeHttpEndpoint: () => copilotRuntimeNodeHttpEndpoint,
  createContext: () => createContext,
  flattenToolCallsNoDuplicates: () => flattenToolCallsNoDuplicates,
  getCommonConfig: () => getCommonConfig
});
module.exports = __toCommonJS(src_exports);
var import_reflect_metadata = require("reflect-metadata");

// src/lib/runtime/copilot-runtime.ts
var import_shared9 = require("@copilotkit/shared");

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

// src/service-adapters/events.ts
var import_rxjs2 = require("rxjs");

// src/lib/telemetry-client.ts
var import_shared7 = require("@copilotkit/shared");
var packageJson = require_package();
var telemetryClient = new import_shared7.TelemetryClient({
  packageName: packageJson.name,
  packageVersion: packageJson.version
});
var telemetry_client_default = telemetryClient;

// src/agents/langgraph/event-source.ts
var import_rxjs = require("rxjs");

// src/agents/langgraph/events.ts
var LangGraphEventTypes;
(function(LangGraphEventTypes2) {
  LangGraphEventTypes2["OnChainStart"] = "on_chain_start";
  LangGraphEventTypes2["OnChainStream"] = "on_chain_stream";
  LangGraphEventTypes2["OnChainEnd"] = "on_chain_end";
  LangGraphEventTypes2["OnChatModelStart"] = "on_chat_model_start";
  LangGraphEventTypes2["OnChatModelStream"] = "on_chat_model_stream";
  LangGraphEventTypes2["OnChatModelEnd"] = "on_chat_model_end";
  LangGraphEventTypes2["OnToolStart"] = "on_tool_start";
  LangGraphEventTypes2["OnToolEnd"] = "on_tool_end";
  LangGraphEventTypes2["OnCopilotKitStateSync"] = "on_copilotkit_state_sync";
  LangGraphEventTypes2["OnCopilotKitEmitMessage"] = "on_copilotkit_emit_message";
  LangGraphEventTypes2["OnCopilotKitEmitToolCall"] = "on_copilotkit_emit_tool_call";
})(LangGraphEventTypes || (LangGraphEventTypes = {}));

// src/agents/langgraph/event-source.ts
var import_shared8 = require("@copilotkit/shared");
var RemoteLangGraphEventSource = class {
  eventStream$ = new import_rxjs.ReplaySubject();
  async streamResponse(response) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = [];
    const eventStream$ = this.eventStream$;
    function flushBuffer() {
      const currentBuffer = buffer.join("");
      if (currentBuffer.trim().length === 0) {
        return;
      }
      const parts = currentBuffer.split("\n");
      if (parts.length === 0) {
        return;
      }
      const lastPartIsComplete = currentBuffer.endsWith("\n");
      buffer = [];
      if (!lastPartIsComplete) {
        buffer.push(parts.pop());
      }
      parts.map((part) => part.trim()).filter((part) => part != "").forEach((part) => {
        eventStream$.next(JSON.parse(part));
      });
    }
    __name(flushBuffer, "flushBuffer");
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (!done) {
          buffer.push(decoder.decode(value, {
            stream: true
          }));
        }
        flushBuffer();
        if (done) {
          break;
        }
      }
    } catch (error) {
      console.error("Error in stream", error);
      eventStream$.error(error);
      return;
    }
    eventStream$.complete();
  }
  shouldEmitToolCall(shouldEmitToolCalls, toolCallName) {
    if (typeof shouldEmitToolCalls === "boolean") {
      return shouldEmitToolCalls;
    }
    if (Array.isArray(shouldEmitToolCalls)) {
      return shouldEmitToolCalls.includes(toolCallName);
    }
    return shouldEmitToolCalls === toolCallName;
  }
  processLangGraphEvents() {
    let lastEventWithState = null;
    return this.eventStream$.pipe((0, import_rxjs.scan)((acc, event) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
      if (event.event === LangGraphEventTypes.OnChatModelStream) {
        const content = ((_c = (_b = (_a = event.data) == null ? void 0 : _a.chunk) == null ? void 0 : _b.kwargs) == null ? void 0 : _c.content) ?? ((_e = (_d = event.data) == null ? void 0 : _d.chunk) == null ? void 0 : _e.content);
        if (typeof content === "string") {
          acc.content = content;
        } else if (Array.isArray(content) && content.length > 0) {
          acc.content = content[0].text;
        } else {
          acc.content = null;
        }
        if ((_h = (_g = (_f = event.data) == null ? void 0 : _f.chunk) == null ? void 0 : _g.kwargs) == null ? void 0 : _h.tool_call_chunks) {
          acc.prevToolCallMessageId = acc.toolCallMessageId;
          acc.toolCallMessageId = (_i = event.data.chunk.kwargs) == null ? void 0 : _i.id;
          if ((_j = event.data.chunk.kwargs.tool_call_chunks[0]) == null ? void 0 : _j.name) {
            acc.toolCallName = event.data.chunk.kwargs.tool_call_chunks[0].name;
          }
          if ((_k = event.data.chunk.kwargs.tool_call_chunks[0]) == null ? void 0 : _k.id) {
            acc.toolCallId = event.data.chunk.kwargs.tool_call_chunks[0].id;
          }
          acc.prevMessageId = acc.messageId;
          acc.messageId = (_n = (_m = (_l = event.data) == null ? void 0 : _l.chunk) == null ? void 0 : _m.kwargs) == null ? void 0 : _n.id;
        } else if (acc.content && acc.content != "") {
          acc.prevMessageId = acc.messageId;
          acc.messageId = (_q = (_p = (_o = event.data) == null ? void 0 : _o.chunk) == null ? void 0 : _p.kwargs) == null ? void 0 : _q.id;
        } else {
          acc.prevToolCallMessageId = acc.toolCallMessageId;
          acc.prevMessageId = acc.messageId;
        }
      } else {
        acc.prevToolCallMessageId = acc.toolCallMessageId;
        acc.toolCallMessageId = null;
        acc.prevMessageId = acc.messageId;
        acc.messageId = null;
        acc.toolCallName = null;
      }
      acc.event = event;
      lastEventWithState = acc;
      return acc;
    }, {
      event: null,
      toolCallId: null,
      toolCallMessageId: null,
      prevToolCallMessageId: null,
      messageId: null,
      toolCallName: null,
      prevMessageId: null,
      content: null
    }), (0, import_rxjs.mergeMap)((eventWithState) => {
      var _a, _b, _c, _d, _e;
      const events = [];
      let shouldEmitMessages = true;
      let shouldEmitToolCalls = false;
      if (eventWithState.event.event == LangGraphEventTypes.OnChatModelStream) {
        if ("copilotkit:emit-tool-calls" in (eventWithState.event.metadata || {})) {
          shouldEmitToolCalls = eventWithState.event.metadata["copilotkit:emit-tool-calls"];
        }
        if ("copilotkit:emit-messages" in (eventWithState.event.metadata || {})) {
          shouldEmitMessages = eventWithState.event.metadata["copilotkit:emit-messages"];
        }
      }
      if (eventWithState.prevToolCallMessageId !== null && eventWithState.prevToolCallMessageId !== eventWithState.toolCallMessageId && this.shouldEmitToolCall(shouldEmitToolCalls, eventWithState.toolCallName)) {
        events.push({
          type: RuntimeEventTypes.ActionExecutionEnd
        });
      }
      if (eventWithState.prevMessageId !== null && eventWithState.prevMessageId !== eventWithState.messageId && shouldEmitMessages) {
        events.push({
          type: RuntimeEventTypes.TextMessageEnd
        });
      }
      switch (eventWithState.event.event) {
        case LangGraphEventTypes.OnCopilotKitEmitMessage:
          events.push({
            type: RuntimeEventTypes.TextMessageStart,
            messageId: eventWithState.event.message_id
          });
          events.push({
            type: RuntimeEventTypes.TextMessageContent,
            content: eventWithState.event.message
          });
          events.push({
            type: RuntimeEventTypes.TextMessageEnd
          });
          break;
        case LangGraphEventTypes.OnCopilotKitEmitToolCall:
          events.push({
            type: RuntimeEventTypes.ActionExecutionStart,
            actionExecutionId: eventWithState.event.id,
            actionName: eventWithState.event.name
          });
          events.push({
            type: RuntimeEventTypes.ActionExecutionArgs,
            args: JSON.stringify(eventWithState.event.args)
          });
          events.push({
            type: RuntimeEventTypes.ActionExecutionEnd
          });
          break;
        case LangGraphEventTypes.OnCopilotKitStateSync:
          events.push({
            type: RuntimeEventTypes.AgentStateMessage,
            threadId: eventWithState.event.thread_id,
            role: eventWithState.event.role,
            agentName: eventWithState.event.agent_name,
            nodeName: eventWithState.event.node_name,
            runId: eventWithState.event.run_id,
            active: eventWithState.event.active,
            state: JSON.stringify(eventWithState.event.state),
            running: eventWithState.event.running
          });
          break;
        case LangGraphEventTypes.OnToolEnd:
          break;
        case LangGraphEventTypes.OnChatModelStream:
          if (eventWithState.toolCallMessageId !== null && eventWithState.prevToolCallMessageId !== eventWithState.toolCallMessageId) {
            if (this.shouldEmitToolCall(shouldEmitToolCalls, eventWithState.toolCallName)) {
              events.push({
                type: RuntimeEventTypes.ActionExecutionStart,
                actionExecutionId: eventWithState.toolCallMessageId,
                actionName: eventWithState.toolCallName,
                scope: "client"
              });
            }
          } else if (eventWithState.messageId !== null && eventWithState.prevMessageId !== eventWithState.messageId) {
            if (shouldEmitMessages) {
              events.push({
                type: RuntimeEventTypes.TextMessageStart,
                messageId: eventWithState.messageId
              });
            }
          }
          const args = (_e = (_d = (_c = (_b = (_a = eventWithState.event.data) == null ? void 0 : _a.chunk) == null ? void 0 : _b.kwargs) == null ? void 0 : _c.tool_call_chunks) == null ? void 0 : _d[0]) == null ? void 0 : _e.args;
          const content = eventWithState.content;
          if (args) {
            if (this.shouldEmitToolCall(shouldEmitToolCalls, eventWithState.toolCallName)) {
              events.push({
                type: RuntimeEventTypes.ActionExecutionArgs,
                args
              });
            }
          } else if (eventWithState.messageId !== null && content) {
            if (shouldEmitMessages) {
              events.push({
                type: RuntimeEventTypes.TextMessageContent,
                content
              });
            }
          }
          break;
      }
      return events;
    }), (0, import_rxjs.catchError)((error) => {
      console.error(error);
      const events = [];
      if (lastEventWithState == null ? void 0 : lastEventWithState.messageId) {
        events.push({
          type: RuntimeEventTypes.TextMessageEnd
        });
      }
      if (lastEventWithState == null ? void 0 : lastEventWithState.toolCallMessageId) {
        events.push({
          type: RuntimeEventTypes.ActionExecutionEnd
        });
      }
      const messageId = (0, import_shared8.randomId)();
      events.push({
        type: RuntimeEventTypes.TextMessageStart,
        messageId
      });
      events.push({
        type: RuntimeEventTypes.TextMessageContent,
        content: "\u274C An error occurred. Please try again."
      });
      events.push({
        type: RuntimeEventTypes.TextMessageEnd
      });
      return events;
    }));
  }
};
__name(RemoteLangGraphEventSource, "RemoteLangGraphEventSource");

// src/lib/runtime/remote-actions.ts
function isLangGraphAgentAction(action) {
  if (!action) {
    return false;
  }
  return typeof action.langGraphAgentHandler === "function";
}
__name(isLangGraphAgentAction, "isLangGraphAgentAction");
function createHeaders(onBeforeRequest, graphqlContext) {
  const headers = {
    "Content-Type": "application/json"
  };
  if (onBeforeRequest) {
    const { headers: additionalHeaders } = onBeforeRequest({
      ctx: graphqlContext
    });
    if (additionalHeaders) {
      Object.assign(headers, additionalHeaders);
    }
  }
  return headers;
}
__name(createHeaders, "createHeaders");
async function fetchRemoteInfo({ url, onBeforeRequest, graphqlContext, logger: logger2, frontendUrl }) {
  logger2.debug({
    url
  }, "Fetching actions from url");
  const headers = createHeaders(onBeforeRequest, graphqlContext);
  try {
    const response = await fetch(`${url}/info`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        properties: graphqlContext.properties,
        frontendUrl
      })
    });
    if (!response.ok) {
      logger2.error({
        url,
        status: response.status,
        body: await response.text()
      }, "Failed to fetch actions from url");
      return {
        actions: [],
        agents: []
      };
    }
    const json = await response.json();
    logger2.debug({
      json
    }, "Fetched actions from url");
    return json;
  } catch (error) {
    logger2.error({
      error: error.message ? error.message : error + ""
    }, "Failed to fetch actions from url");
    return {
      actions: [],
      agents: []
    };
  }
}
__name(fetchRemoteInfo, "fetchRemoteInfo");
function constructRemoteActions({ json, url, onBeforeRequest, graphqlContext, logger: logger2, messages, agentStates }) {
  const actions = json["actions"].map((action) => ({
    name: action.name,
    description: action.description,
    parameters: action.parameters,
    handler: async (args) => {
      logger2.debug({
        actionName: action.name,
        args
      }, "Executing remote action");
      const headers = createHeaders(onBeforeRequest, graphqlContext);
      telemetry_client_default.capture("oss.runtime.remote_action_executed", {});
      try {
        const response = await fetch(`${url}/actions/execute`, {
          method: "POST",
          headers,
          body: JSON.stringify({
            name: action.name,
            arguments: args,
            properties: graphqlContext.properties
          })
        });
        if (!response.ok) {
          logger2.error({
            url,
            status: response.status,
            body: await response.text()
          }, "Failed to execute remote action");
          return "Failed to execute remote action";
        }
        const requestResult = await response.json();
        const result = requestResult["result"];
        logger2.debug({
          actionName: action.name,
          result
        }, "Executed remote action");
        return result;
      } catch (error) {
        logger2.error({
          error: error.message ? error.message : error + ""
        }, "Failed to execute remote action");
        return "Failed to execute remote action";
      }
    }
  }));
  const agents = json["agents"].map((agent) => ({
    name: agent.name,
    description: agent.description,
    parameters: [],
    handler: async (_args) => {
    },
    langGraphAgentHandler: async ({ name, actionInputsWithoutAgents, threadId, nodeName }) => {
      var _a;
      logger2.debug({
        actionName: agent.name
      }, "Executing remote agent");
      const headers = createHeaders(onBeforeRequest, graphqlContext);
      telemetry_client_default.capture("oss.runtime.remote_action_executed", {});
      let state = {};
      if (agentStates) {
        const jsonState = (_a = agentStates.find((state2) => state2.agentName === name)) == null ? void 0 : _a.state;
        if (jsonState) {
          state = JSON.parse(jsonState);
        }
      }
      const response = await fetch(`${url}/agents/execute`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          name,
          threadId,
          nodeName,
          messages,
          state,
          properties: graphqlContext.properties,
          actions: actionInputsWithoutAgents.map((action) => ({
            name: action.name,
            description: action.description,
            parameters: JSON.parse(action.jsonSchema)
          }))
        })
      });
      if (!response.ok) {
        logger2.error({
          url,
          status: response.status,
          body: await response.text()
        }, "Failed to execute remote agent");
        throw new Error("Failed to execute remote agent");
      }
      const eventSource = new RemoteLangGraphEventSource();
      eventSource.streamResponse(response);
      return eventSource.processLangGraphEvents();
    }
  }));
  return [
    ...actions,
    ...agents
  ];
}
__name(constructRemoteActions, "constructRemoteActions");
async function setupRemoteActions({ remoteActionDefinitions, graphqlContext, messages, agentStates, frontendUrl }) {
  const logger2 = graphqlContext.logger.child({
    component: "remote-actions.fetchRemoteActions"
  });
  logger2.debug({
    remoteActionDefinitions
  }, "Fetching remote actions");
  const filtered = remoteActionDefinitions.filter((value, index, self) => index === self.findIndex((t) => t.url === value.url));
  const result = await Promise.all(filtered.map(async (actionDefinition) => {
    const json = await fetchRemoteInfo({
      url: actionDefinition.url,
      onBeforeRequest: actionDefinition.onBeforeRequest,
      graphqlContext,
      logger: logger2.child({
        component: "remote-actions.fetchActionsFromUrl",
        actionDefinition
      }),
      frontendUrl
    });
    return constructRemoteActions({
      json,
      messages,
      url: actionDefinition.url,
      onBeforeRequest: actionDefinition.onBeforeRequest,
      graphqlContext,
      logger: logger2.child({
        component: "remote-actions.constructActions",
        actionDefinition
      }),
      agentStates
    });
  }));
  return result.flat();
}
__name(setupRemoteActions, "setupRemoteActions");

// src/service-adapters/events.ts
var RuntimeEventTypes;
(function(RuntimeEventTypes2) {
  RuntimeEventTypes2["TextMessageStart"] = "TextMessageStart";
  RuntimeEventTypes2["TextMessageContent"] = "TextMessageContent";
  RuntimeEventTypes2["TextMessageEnd"] = "TextMessageEnd";
  RuntimeEventTypes2["ContentMessageStart"] = "ContentMessageStart";
  RuntimeEventTypes2["ContentMessageContent"] = "ContentMessageContent";
  RuntimeEventTypes2["ContentMessageEnd"] = "ContentMessageEnd";
  RuntimeEventTypes2["ActionExecutionStart"] = "ActionExecutionStart";
  RuntimeEventTypes2["ActionExecutionArgs"] = "ActionExecutionArgs";
  RuntimeEventTypes2["ActionExecutionEnd"] = "ActionExecutionEnd";
  RuntimeEventTypes2["ActionExecutionResult"] = "ActionExecutionResult";
  RuntimeEventTypes2["AgentStateMessage"] = "AgentStateMessage";
})(RuntimeEventTypes || (RuntimeEventTypes = {}));
var RuntimeEventSubject = class extends import_rxjs2.ReplaySubject {
  constructor() {
    super();
  }
  sendTextMessageStart(messageId) {
    this.next({
      type: "TextMessageStart",
      messageId
    });
  }
  sendTextMessageContent(content) {
    this.next({
      type: "TextMessageContent",
      content
    });
  }
  sendTextMessageEnd() {
    this.next({
      type: "TextMessageEnd"
    });
  }
  sendTextMessage(messageId, content) {
    this.sendTextMessageStart(messageId);
    this.sendTextMessageContent(content);
    this.sendTextMessageEnd();
  }
  sendContentMessageStart(messageId) {
    this.next({
      type: "ContentMessageStart",
      messageId
    });
  }
  sendContentMessageContent(content) {
    this.next({
      type: "ContentMessageContent",
      content
    });
  }
  sendContentMessageEnd() {
    this.next({
      type: "ContentMessageEnd"
    });
  }
  sendContentMessage(messageId, content) {
    this.sendContentMessageStart(messageId);
    this.sendContentMessageContent(content);
    this.sendContentMessageEnd();
  }
  sendActionExecutionStart(actionExecutionId, actionName) {
    this.next({
      type: "ActionExecutionStart",
      actionExecutionId,
      actionName
    });
  }
  sendActionExecutionArgs(args) {
    this.next({
      type: "ActionExecutionArgs",
      args
    });
  }
  sendActionExecutionEnd() {
    this.next({
      type: "ActionExecutionEnd"
    });
  }
  sendActionExecution(actionExecutionId, toolName, args) {
    this.sendActionExecutionStart(actionExecutionId, toolName);
    this.sendActionExecutionArgs(args);
    this.sendActionExecutionEnd();
  }
  sendActionExecutionResult(actionExecutionId, actionName, result) {
    this.next({
      type: "ActionExecutionResult",
      actionName,
      actionExecutionId,
      result
    });
  }
  sendAgentStateMessage(threadId, agentName, nodeName, runId, active, role, state, running) {
    this.next({
      type: "AgentStateMessage",
      threadId,
      agentName,
      nodeName,
      runId,
      active,
      role,
      state,
      running
    });
  }
};
__name(RuntimeEventSubject, "RuntimeEventSubject");
var RuntimeEventSource = class {
  eventStream$ = new RuntimeEventSubject();
  callback;
  async stream(callback) {
    this.callback = callback;
  }
  processRuntimeEvents({ serverSideActions, guardrailsResult$, actionInputsWithoutAgents }) {
    this.callback(this.eventStream$).catch((error) => {
      console.error("Error in event source callback", error);
    });
    return this.eventStream$.pipe(
      // mark tools for server side execution
      (0, import_rxjs2.map)((event) => {
        if (event.type === "ActionExecutionStart") {
          if (event.scope !== "passThrough") {
            event.scope = serverSideActions.find((action) => action.name === event.actionName) ? "server" : "client";
          }
        }
        return event;
      }),
      // track state
      (0, import_rxjs2.scan)((acc, event) => {
        acc = {
          ...acc
        };
        if (event.type === "ActionExecutionStart") {
          acc.callActionServerSide = event.scope === "server";
          acc.args = "";
          acc.actionExecutionId = event.actionExecutionId;
          if (acc.callActionServerSide) {
            acc.action = serverSideActions.find((action) => action.name === event.actionName);
          }
        } else if (event.type === "ActionExecutionArgs") {
          acc.args += event.args;
        } else if (event.type === "ContentMessageStart") {
          console.log(`ContentMessage started with ID: ${event.messageId}`);
        } else if (event.type === "ContentMessageContent") {
          console.log(`ContentMessage content received: ${event.content}`);
        } else if (event.type === "ContentMessageEnd") {
          console.log("ContentMessage ended.");
        }
        acc.event = event;
        return acc;
      }, {
        event: null,
        callActionServerSide: false,
        args: "",
        actionExecutionId: null,
        action: null
      }),
      (0, import_rxjs2.concatMap)((eventWithState) => {
        if (eventWithState.event.type === "ActionExecutionEnd" && eventWithState.callActionServerSide) {
          const toolCallEventStream$ = new RuntimeEventSubject();
          executeAction(toolCallEventStream$, guardrailsResult$ ? guardrailsResult$ : null, eventWithState.action, eventWithState.args, eventWithState.actionExecutionId, actionInputsWithoutAgents).catch((error) => {
            console.error(error);
          });
          telemetry_client_default.capture("oss.runtime.server_action_executed", {});
          return (0, import_rxjs2.concat)((0, import_rxjs2.of)(eventWithState.event), toolCallEventStream$);
        } else {
          return (0, import_rxjs2.of)(eventWithState.event);
        }
      })
    );
  }
};
__name(RuntimeEventSource, "RuntimeEventSource");
async function executeAction(eventStream$, guardrailsResult$, action, actionArguments, actionExecutionId, actionInputsWithoutAgents) {
  var _a;
  if (guardrailsResult$) {
    const { status } = await (0, import_rxjs2.firstValueFrom)(guardrailsResult$);
    if (status === "denied") {
      eventStream$.complete();
      return;
    }
  }
  let args = [];
  if (actionArguments) {
    try {
      args = JSON.parse(actionArguments);
    } catch (e) {
      console.warn("Action argument unparsable", {
        actionArguments
      });
    }
  }
  if (isLangGraphAgentAction(action)) {
    eventStream$.sendActionExecutionResult(actionExecutionId, action.name, `${action.name} agent started`);
    const stream = await action.langGraphAgentHandler({
      name: action.name,
      actionInputsWithoutAgents
    });
    (0, import_rxjs2.from)(stream).subscribe({
      next: (event) => eventStream$.next(event),
      error: (err) => console.error("Error in stream", err),
      complete: () => eventStream$.complete()
    });
  } else {
    const result = await ((_a = action.handler) == null ? void 0 : _a.call(action, args));
    await streamLangChainResponse({
      result,
      eventStream$,
      actionExecution: {
        name: action.name,
        id: actionExecutionId
      }
    });
  }
}
__name(executeAction, "executeAction");

// src/graphql/types/base/index.ts
var import_type_graphql = require("type-graphql");
function _ts_decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate, "_ts_decorate");
function _ts_metadata(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
}
__name(_ts_metadata, "_ts_metadata");
var BaseMessageInput = class {
  id;
  createdAt;
};
__name(BaseMessageInput, "BaseMessageInput");
_ts_decorate([
  (0, import_type_graphql.Field)(() => String),
  _ts_metadata("design:type", String)
], BaseMessageInput.prototype, "id", void 0);
_ts_decorate([
  (0, import_type_graphql.Field)(() => Date),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BaseMessageInput.prototype, "createdAt", void 0);
BaseMessageInput = _ts_decorate([
  (0, import_type_graphql.InputType)()
], BaseMessageInput);

// src/graphql/types/converted/index.ts
var Message = class extends BaseMessageInput {
  type;
  isTextMessage() {
    return this.type === "TextMessage";
  }
  isContentMessage() {
    return this.type === "ContentMessage";
  }
  isActionExecutionMessage() {
    return this.type === "ActionExecutionMessage";
  }
  isResultMessage() {
    return this.type === "ResultMessage";
  }
  isAgentStateMessage() {
    return this.type === "AgentStateMessage";
  }
};
__name(Message, "Message");
var TextMessage = class extends Message {
  type = "TextMessage";
  content;
  role;
};
__name(TextMessage, "TextMessage");
var ActionExecutionMessage = class extends Message {
  type = "ActionExecutionMessage";
  name;
  arguments;
  scope;
};
__name(ActionExecutionMessage, "ActionExecutionMessage");
var ResultMessage = class extends Message {
  type = "ResultMessage";
  actionExecutionId;
  actionName;
  result;
};
__name(ResultMessage, "ResultMessage");
var AgentStateMessage = class extends Message {
  type = "AgentStateMessage";
  threadId;
  agentName;
  nodeName;
  runId;
  active;
  role;
  state;
  running;
};
__name(AgentStateMessage, "AgentStateMessage");

// src/service-adapters/conversion.ts
var import_class_transformer = require("class-transformer");
function convertGqlInputToMessages(inputMessages) {
  const messages = [];
  for (const message of inputMessages) {
    if (message.textMessage) {
      messages.push((0, import_class_transformer.plainToInstance)(TextMessage, {
        id: message.id,
        createdAt: message.createdAt,
        role: message.textMessage.role,
        content: message.textMessage.content
      }));
    } else if (message.actionExecutionMessage) {
      messages.push((0, import_class_transformer.plainToInstance)(ActionExecutionMessage, {
        id: message.id,
        createdAt: message.createdAt,
        name: message.actionExecutionMessage.name,
        arguments: JSON.parse(message.actionExecutionMessage.arguments),
        scope: message.actionExecutionMessage.scope
      }));
    } else if (message.resultMessage) {
      messages.push((0, import_class_transformer.plainToInstance)(ResultMessage, {
        id: message.id,
        createdAt: message.createdAt,
        actionExecutionId: message.resultMessage.actionExecutionId,
        actionName: message.resultMessage.actionName,
        result: message.resultMessage.result
      }));
    } else if (message.agentStateMessage) {
      messages.push((0, import_class_transformer.plainToInstance)(AgentStateMessage, {
        id: message.id,
        threadId: message.agentStateMessage.threadId,
        createdAt: message.createdAt,
        agentName: message.agentStateMessage.agentName,
        nodeName: message.agentStateMessage.nodeName,
        runId: message.agentStateMessage.runId,
        active: message.agentStateMessage.active,
        role: message.agentStateMessage.role,
        state: JSON.parse(message.agentStateMessage.state),
        running: message.agentStateMessage.running
      }));
    }
  }
  return messages;
}
__name(convertGqlInputToMessages, "convertGqlInputToMessages");

// src/lib/runtime/copilot-runtime.ts
var import_rxjs3 = require("rxjs");
var CopilotRuntime = class {
  actions;
  remoteActionDefinitions;
  langserve = [];
  onBeforeRequest;
  onAfterRequest;
  constructor(params) {
    var _a, _b;
    this.actions = (params == null ? void 0 : params.actions) || [];
    for (const chain of (params == null ? void 0 : params.langserve) || []) {
      const remoteChain = new RemoteChain(chain);
      this.langserve.push(remoteChain.toAction());
    }
    this.remoteActionDefinitions = (params == null ? void 0 : params.remoteActions) || [];
    this.onBeforeRequest = (_a = params == null ? void 0 : params.middleware) == null ? void 0 : _a.onBeforeRequest;
    this.onAfterRequest = (_b = params == null ? void 0 : params.middleware) == null ? void 0 : _b.onAfterRequest;
  }
  async processRuntimeRequest(request) {
    var _a;
    const { serviceAdapter, messages: rawMessages, actions: clientSideActionsInput, threadId, runId, outputMessagesPromise, graphqlContext, forwardedParameters, agentSession, url } = request;
    if (agentSession) {
      return this.processAgentRequest(request);
    }
    const messages = rawMessages.filter((message) => !message.agentStateMessage);
    const inputMessages = convertGqlInputToMessages(messages);
    const serverSideActions = await this.getServerSideActions(request);
    const serverSideActionsInput = serverSideActions.map((action) => ({
      name: action.name,
      description: action.description,
      jsonSchema: JSON.stringify((0, import_shared9.actionParametersToJsonSchema)(action.parameters))
    }));
    const actionInputs = flattenToolCallsNoDuplicates([
      ...serverSideActionsInput,
      ...clientSideActionsInput
    ]);
    await ((_a = this.onBeforeRequest) == null ? void 0 : _a.call(this, {
      threadId,
      runId,
      inputMessages,
      properties: graphqlContext.properties,
      url
    }));
    try {
      const eventSource = new RuntimeEventSource();
      const result = await serviceAdapter.process({
        messages: inputMessages,
        actions: actionInputs,
        threadId,
        runId,
        eventSource,
        forwardedParameters
      });
      outputMessagesPromise.then((outputMessages) => {
        var _a2;
        (_a2 = this.onAfterRequest) == null ? void 0 : _a2.call(this, {
          threadId: result.threadId,
          runId: result.runId,
          inputMessages,
          outputMessages,
          properties: graphqlContext.properties,
          url
        });
      }).catch((_error) => {
      });
      return {
        threadId: result.threadId,
        runId: result.runId,
        eventSource,
        serverSideActions,
        actionInputsWithoutAgents: actionInputs.filter((action) => (
          // TODO-AGENTS: do not exclude ALL server side actions
          !serverSideActions.find((serverSideAction) => serverSideAction.name == action.name)
        ))
      };
    } catch (error) {
      console.error("Error getting response:", error);
      throw error;
    }
  }
  async processAgentRequest(request) {
    var _a;
    const { messages: rawMessages, outputMessagesPromise, graphqlContext, agentSession } = request;
    const { threadId = (0, import_shared9.randomId)(), agentName, nodeName } = agentSession;
    const serverSideActions = await this.getServerSideActions(request);
    const messages = convertGqlInputToMessages(rawMessages);
    const agent = serverSideActions.find((action) => action.name === agentName && isLangGraphAgentAction(action));
    if (!agent) {
      throw new Error(`Agent ${agentName} not found`);
    }
    const serverSideActionsInput = serverSideActions.filter((action) => !isLangGraphAgentAction(action)).map((action) => ({
      name: action.name,
      description: action.description,
      jsonSchema: JSON.stringify((0, import_shared9.actionParametersToJsonSchema)(action.parameters))
    }));
    const actionInputsWithoutAgents = flattenToolCallsNoDuplicates([
      ...serverSideActionsInput,
      ...request.actions
    ]);
    await ((_a = this.onBeforeRequest) == null ? void 0 : _a.call(this, {
      threadId,
      runId: void 0,
      inputMessages: messages,
      properties: graphqlContext.properties
    }));
    try {
      const eventSource = new RuntimeEventSource();
      const stream = await agent.langGraphAgentHandler({
        name: agentName,
        threadId,
        nodeName,
        actionInputsWithoutAgents
      });
      eventSource.stream(async (eventStream$) => {
        (0, import_rxjs3.from)(stream).subscribe({
          next: (event) => eventStream$.next(event),
          error: (err) => console.error("Error in stream", err),
          complete: () => eventStream$.complete()
        });
      });
      outputMessagesPromise.then((outputMessages) => {
        var _a2;
        (_a2 = this.onAfterRequest) == null ? void 0 : _a2.call(this, {
          threadId,
          runId: void 0,
          inputMessages: messages,
          outputMessages,
          properties: graphqlContext.properties
        });
      }).catch((_error) => {
      });
      return {
        threadId,
        runId: void 0,
        eventSource,
        serverSideActions: [],
        actionInputsWithoutAgents
      };
    } catch (error) {
      console.error("Error getting response:", error);
      throw error;
    }
  }
  async getServerSideActions(request) {
    const { messages: rawMessages, graphqlContext, agentStates, url } = request;
    const inputMessages = convertGqlInputToMessages(rawMessages);
    const langserveFunctions = [];
    for (const chainPromise of this.langserve) {
      try {
        const chain = await chainPromise;
        langserveFunctions.push(chain);
      } catch (error) {
        console.error("Error loading langserve chain:", error);
      }
    }
    const remoteActions = await setupRemoteActions({
      remoteActionDefinitions: this.remoteActionDefinitions,
      graphqlContext,
      messages: inputMessages,
      agentStates,
      frontendUrl: url
    });
    const configuredActions = typeof this.actions === "function" ? this.actions({
      properties: graphqlContext.properties,
      url
    }) : this.actions;
    return [
      ...configuredActions,
      ...langserveFunctions,
      ...remoteActions
    ];
  }
};
__name(CopilotRuntime, "CopilotRuntime");
function flattenToolCallsNoDuplicates(toolsByPriority) {
  let allTools = [];
  const allToolNames = [];
  for (const tool of toolsByPriority) {
    if (!allToolNames.includes(tool.name)) {
      allTools.push(tool);
      allToolNames.push(tool.name);
    }
  }
  return allTools;
}
__name(flattenToolCallsNoDuplicates, "flattenToolCallsNoDuplicates");

// src/lib/integrations/shared.ts
var import_type_graphql16 = require("type-graphql");

// src/graphql/resolvers/copilot.resolver.ts
var import_type_graphql15 = require("type-graphql");
var import_rxjs4 = require("rxjs");

// src/graphql/inputs/generate-copilot-response.input.ts
var import_type_graphql11 = require("type-graphql");

// src/graphql/inputs/message.input.ts
var import_type_graphql3 = require("type-graphql");

// src/graphql/types/enums.ts
var import_type_graphql2 = require("type-graphql");
var MessageRole;
(function(MessageRole2) {
  MessageRole2["user"] = "user";
  MessageRole2["assistant"] = "assistant";
  MessageRole2["system"] = "system";
})(MessageRole || (MessageRole = {}));
var ActionExecutionScope;
(function(ActionExecutionScope2) {
  ActionExecutionScope2["server"] = "server";
  ActionExecutionScope2["client"] = "client";
  ActionExecutionScope2["passThrough"] = "passThrough";
})(ActionExecutionScope || (ActionExecutionScope = {}));
var CopilotRequestType;
(function(CopilotRequestType2) {
  CopilotRequestType2["Chat"] = "Chat";
  CopilotRequestType2["Task"] = "Task";
  CopilotRequestType2["TextareaCompletion"] = "TextareaCompletion";
  CopilotRequestType2["TextareaPopover"] = "TextareaPopover";
  CopilotRequestType2["Suggestion"] = "Suggestion";
})(CopilotRequestType || (CopilotRequestType = {}));
(0, import_type_graphql2.registerEnumType)(MessageRole, {
  name: "MessageRole",
  description: "The role of the message"
});
(0, import_type_graphql2.registerEnumType)(ActionExecutionScope, {
  name: "ActionExecutionScope",
  description: "The scope of the action"
});
(0, import_type_graphql2.registerEnumType)(CopilotRequestType, {
  name: "CopilotRequestType",
  description: "The type of Copilot request"
});

// src/graphql/inputs/message.input.ts
function _ts_decorate2(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate2, "_ts_decorate");
function _ts_metadata2(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
}
__name(_ts_metadata2, "_ts_metadata");
var MessageInput = class extends BaseMessageInput {
  textMessage;
  actionExecutionMessage;
  resultMessage;
  agentStateMessage;
  contentMessage;
};
__name(MessageInput, "MessageInput");
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => TextMessageInput, {
    nullable: true
  }),
  _ts_metadata2("design:type", typeof TextMessageInput === "undefined" ? Object : TextMessageInput)
], MessageInput.prototype, "textMessage", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => ActionExecutionMessageInput, {
    nullable: true
  }),
  _ts_metadata2("design:type", typeof ActionExecutionMessageInput === "undefined" ? Object : ActionExecutionMessageInput)
], MessageInput.prototype, "actionExecutionMessage", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => ResultMessageInput, {
    nullable: true
  }),
  _ts_metadata2("design:type", typeof ResultMessageInput === "undefined" ? Object : ResultMessageInput)
], MessageInput.prototype, "resultMessage", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => AgentStateMessageInput, {
    nullable: true
  }),
  _ts_metadata2("design:type", typeof AgentStateMessageInput === "undefined" ? Object : AgentStateMessageInput)
], MessageInput.prototype, "agentStateMessage", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => ContentMessageInput, {
    nullable: true
  }),
  _ts_metadata2("design:type", typeof ContentMessageInput === "undefined" ? Object : ContentMessageInput)
], MessageInput.prototype, "contentMessage", void 0);
MessageInput = _ts_decorate2([
  (0, import_type_graphql3.InputType)()
], MessageInput);
var MessageContentInput = class {
  type;
  textContent;
  imageURLContent;
};
__name(MessageContentInput, "MessageContentInput");
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String),
  _ts_metadata2("design:type", String)
], MessageContentInput.prototype, "type", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => TextContentBlockInput, {
    nullable: true
  }),
  _ts_metadata2("design:type", typeof TextContentBlockInput === "undefined" ? Object : TextContentBlockInput)
], MessageContentInput.prototype, "textContent", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => ImageURLContentBlockInput, {
    nullable: true
  }),
  _ts_metadata2("design:type", typeof ImageURLContentBlockInput === "undefined" ? Object : ImageURLContentBlockInput)
], MessageContentInput.prototype, "imageURLContent", void 0);
MessageContentInput = _ts_decorate2([
  (0, import_type_graphql3.InputType)()
], MessageContentInput);
var ContentMessageInput = class {
  content;
  role;
};
__name(ContentMessageInput, "ContentMessageInput");
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => [
    MessageContentInput
  ]),
  _ts_metadata2("design:type", Array)
], ContentMessageInput.prototype, "content", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => MessageRole),
  _ts_metadata2("design:type", typeof MessageRole === "undefined" ? Object : MessageRole)
], ContentMessageInput.prototype, "role", void 0);
ContentMessageInput = _ts_decorate2([
  (0, import_type_graphql3.InputType)()
], ContentMessageInput);
var TextMessageInput = class {
  content;
  role;
};
__name(TextMessageInput, "TextMessageInput");
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String),
  _ts_metadata2("design:type", String)
], TextMessageInput.prototype, "content", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => MessageRole),
  _ts_metadata2("design:type", typeof MessageRole === "undefined" ? Object : MessageRole)
], TextMessageInput.prototype, "role", void 0);
TextMessageInput = _ts_decorate2([
  (0, import_type_graphql3.InputType)()
], TextMessageInput);
var ActionExecutionMessageInput = class {
  name;
  arguments;
  scope;
};
__name(ActionExecutionMessageInput, "ActionExecutionMessageInput");
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String),
  _ts_metadata2("design:type", String)
], ActionExecutionMessageInput.prototype, "name", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String),
  _ts_metadata2("design:type", String)
], ActionExecutionMessageInput.prototype, "arguments", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => ActionExecutionScope),
  _ts_metadata2("design:type", typeof ActionExecutionScope === "undefined" ? Object : ActionExecutionScope)
], ActionExecutionMessageInput.prototype, "scope", void 0);
ActionExecutionMessageInput = _ts_decorate2([
  (0, import_type_graphql3.InputType)()
], ActionExecutionMessageInput);
var ResultMessageInput = class {
  actionExecutionId;
  actionName;
  result;
};
__name(ResultMessageInput, "ResultMessageInput");
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String),
  _ts_metadata2("design:type", String)
], ResultMessageInput.prototype, "actionExecutionId", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String),
  _ts_metadata2("design:type", String)
], ResultMessageInput.prototype, "actionName", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String),
  _ts_metadata2("design:type", String)
], ResultMessageInput.prototype, "result", void 0);
ResultMessageInput = _ts_decorate2([
  (0, import_type_graphql3.InputType)()
], ResultMessageInput);
var AgentStateMessageInput = class {
  threadId;
  agentName;
  role;
  state;
  running;
  nodeName;
  runId;
  active;
};
__name(AgentStateMessageInput, "AgentStateMessageInput");
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String),
  _ts_metadata2("design:type", String)
], AgentStateMessageInput.prototype, "threadId", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String),
  _ts_metadata2("design:type", String)
], AgentStateMessageInput.prototype, "agentName", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => MessageRole),
  _ts_metadata2("design:type", typeof MessageRole === "undefined" ? Object : MessageRole)
], AgentStateMessageInput.prototype, "role", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String),
  _ts_metadata2("design:type", String)
], AgentStateMessageInput.prototype, "state", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => Boolean),
  _ts_metadata2("design:type", Boolean)
], AgentStateMessageInput.prototype, "running", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String),
  _ts_metadata2("design:type", String)
], AgentStateMessageInput.prototype, "nodeName", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String),
  _ts_metadata2("design:type", String)
], AgentStateMessageInput.prototype, "runId", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => Boolean),
  _ts_metadata2("design:type", Boolean)
], AgentStateMessageInput.prototype, "active", void 0);
AgentStateMessageInput = _ts_decorate2([
  (0, import_type_graphql3.InputType)()
], AgentStateMessageInput);
var ImageURLContentBlockInput = class {
  type;
  image_url;
};
__name(ImageURLContentBlockInput, "ImageURLContentBlockInput");
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String),
  _ts_metadata2("design:type", String)
], ImageURLContentBlockInput.prototype, "type", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => ImageURLInput),
  _ts_metadata2("design:type", typeof ImageURLInput === "undefined" ? Object : ImageURLInput)
], ImageURLContentBlockInput.prototype, "image_url", void 0);
ImageURLContentBlockInput = _ts_decorate2([
  (0, import_type_graphql3.InputType)()
], ImageURLContentBlockInput);
var ImageURLInput = class {
  url;
  detail;
};
__name(ImageURLInput, "ImageURLInput");
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String),
  _ts_metadata2("design:type", String)
], ImageURLInput.prototype, "url", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String, {
    nullable: true,
    defaultValue: "auto"
  }),
  _ts_metadata2("design:type", String)
], ImageURLInput.prototype, "detail", void 0);
ImageURLInput = _ts_decorate2([
  (0, import_type_graphql3.InputType)()
], ImageURLInput);
var TextContentBlockInput = class {
  type;
  text;
};
__name(TextContentBlockInput, "TextContentBlockInput");
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String),
  _ts_metadata2("design:type", String)
], TextContentBlockInput.prototype, "type", void 0);
_ts_decorate2([
  (0, import_type_graphql3.Field)(() => String),
  _ts_metadata2("design:type", String)
], TextContentBlockInput.prototype, "text", void 0);
TextContentBlockInput = _ts_decorate2([
  (0, import_type_graphql3.InputType)()
], TextContentBlockInput);

// src/graphql/inputs/frontend.input.ts
var import_type_graphql5 = require("type-graphql");

// src/graphql/inputs/action.input.ts
var import_type_graphql4 = require("type-graphql");
function _ts_decorate3(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate3, "_ts_decorate");
function _ts_metadata3(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
}
__name(_ts_metadata3, "_ts_metadata");
var ActionInput = class {
  name;
  description;
  jsonSchema;
};
__name(ActionInput, "ActionInput");
_ts_decorate3([
  (0, import_type_graphql4.Field)(() => String),
  _ts_metadata3("design:type", String)
], ActionInput.prototype, "name", void 0);
_ts_decorate3([
  (0, import_type_graphql4.Field)(() => String),
  _ts_metadata3("design:type", String)
], ActionInput.prototype, "description", void 0);
_ts_decorate3([
  (0, import_type_graphql4.Field)(() => String),
  _ts_metadata3("design:type", String)
], ActionInput.prototype, "jsonSchema", void 0);
ActionInput = _ts_decorate3([
  (0, import_type_graphql4.InputType)()
], ActionInput);

// src/graphql/inputs/frontend.input.ts
function _ts_decorate4(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate4, "_ts_decorate");
function _ts_metadata4(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
}
__name(_ts_metadata4, "_ts_metadata");
var FrontendInput = class {
  toDeprecate_fullContext;
  actions;
  url;
};
__name(FrontendInput, "FrontendInput");
_ts_decorate4([
  (0, import_type_graphql5.Field)(() => String, {
    nullable: true
  }),
  _ts_metadata4("design:type", String)
], FrontendInput.prototype, "toDeprecate_fullContext", void 0);
_ts_decorate4([
  (0, import_type_graphql5.Field)(() => [
    ActionInput
  ]),
  _ts_metadata4("design:type", Array)
], FrontendInput.prototype, "actions", void 0);
_ts_decorate4([
  (0, import_type_graphql5.Field)(() => String, {
    nullable: true
  }),
  _ts_metadata4("design:type", String)
], FrontendInput.prototype, "url", void 0);
FrontendInput = _ts_decorate4([
  (0, import_type_graphql5.InputType)()
], FrontendInput);

// src/graphql/inputs/cloud.input.ts
var import_type_graphql7 = require("type-graphql");

// src/graphql/inputs/cloud-guardrails.input.ts
var import_type_graphql6 = require("type-graphql");
function _ts_decorate5(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate5, "_ts_decorate");
function _ts_metadata5(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
}
__name(_ts_metadata5, "_ts_metadata");
var GuardrailsRuleInput = class {
  allowList = [];
  denyList = [];
};
__name(GuardrailsRuleInput, "GuardrailsRuleInput");
_ts_decorate5([
  (0, import_type_graphql6.Field)(() => [
    String
  ], {
    nullable: true
  }),
  _ts_metadata5("design:type", Array)
], GuardrailsRuleInput.prototype, "allowList", void 0);
_ts_decorate5([
  (0, import_type_graphql6.Field)(() => [
    String
  ], {
    nullable: true
  }),
  _ts_metadata5("design:type", Array)
], GuardrailsRuleInput.prototype, "denyList", void 0);
GuardrailsRuleInput = _ts_decorate5([
  (0, import_type_graphql6.InputType)()
], GuardrailsRuleInput);
var GuardrailsInput = class {
  inputValidationRules;
};
__name(GuardrailsInput, "GuardrailsInput");
_ts_decorate5([
  (0, import_type_graphql6.Field)(() => GuardrailsRuleInput, {
    nullable: false
  }),
  _ts_metadata5("design:type", typeof GuardrailsRuleInput === "undefined" ? Object : GuardrailsRuleInput)
], GuardrailsInput.prototype, "inputValidationRules", void 0);
GuardrailsInput = _ts_decorate5([
  (0, import_type_graphql6.InputType)()
], GuardrailsInput);

// src/graphql/inputs/cloud.input.ts
function _ts_decorate6(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate6, "_ts_decorate");
function _ts_metadata6(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
}
__name(_ts_metadata6, "_ts_metadata");
var CloudInput = class {
  guardrails;
};
__name(CloudInput, "CloudInput");
_ts_decorate6([
  (0, import_type_graphql7.Field)(() => GuardrailsInput, {
    nullable: true
  }),
  _ts_metadata6("design:type", typeof GuardrailsInput === "undefined" ? Object : GuardrailsInput)
], CloudInput.prototype, "guardrails", void 0);
CloudInput = _ts_decorate6([
  (0, import_type_graphql7.InputType)()
], CloudInput);

// src/graphql/inputs/forwarded-parameters.input.ts
var import_type_graphql8 = require("type-graphql");
function _ts_decorate7(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate7, "_ts_decorate");
function _ts_metadata7(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
}
__name(_ts_metadata7, "_ts_metadata");
var ForwardedParametersInput = class {
  model;
  maxTokens;
  stop;
  toolChoice;
  toolChoiceFunctionName;
};
__name(ForwardedParametersInput, "ForwardedParametersInput");
_ts_decorate7([
  (0, import_type_graphql8.Field)(() => String, {
    nullable: true
  }),
  _ts_metadata7("design:type", String)
], ForwardedParametersInput.prototype, "model", void 0);
_ts_decorate7([
  (0, import_type_graphql8.Field)(() => Number, {
    nullable: true
  }),
  _ts_metadata7("design:type", Number)
], ForwardedParametersInput.prototype, "maxTokens", void 0);
_ts_decorate7([
  (0, import_type_graphql8.Field)(() => [
    String
  ], {
    nullable: true
  }),
  _ts_metadata7("design:type", Array)
], ForwardedParametersInput.prototype, "stop", void 0);
_ts_decorate7([
  (0, import_type_graphql8.Field)(() => String, {
    nullable: true
  }),
  _ts_metadata7("design:type", typeof String === "undefined" ? Object : String)
], ForwardedParametersInput.prototype, "toolChoice", void 0);
_ts_decorate7([
  (0, import_type_graphql8.Field)(() => String, {
    nullable: true
  }),
  _ts_metadata7("design:type", String)
], ForwardedParametersInput.prototype, "toolChoiceFunctionName", void 0);
ForwardedParametersInput = _ts_decorate7([
  (0, import_type_graphql8.InputType)()
], ForwardedParametersInput);

// src/graphql/inputs/agent-session.input.ts
var import_type_graphql9 = require("type-graphql");
function _ts_decorate8(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate8, "_ts_decorate");
function _ts_metadata8(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
}
__name(_ts_metadata8, "_ts_metadata");
var AgentSessionInput = class {
  agentName;
  threadId;
  nodeName;
};
__name(AgentSessionInput, "AgentSessionInput");
_ts_decorate8([
  (0, import_type_graphql9.Field)(() => String),
  _ts_metadata8("design:type", String)
], AgentSessionInput.prototype, "agentName", void 0);
_ts_decorate8([
  (0, import_type_graphql9.Field)(() => String, {
    nullable: true
  }),
  _ts_metadata8("design:type", String)
], AgentSessionInput.prototype, "threadId", void 0);
_ts_decorate8([
  (0, import_type_graphql9.Field)(() => String, {
    nullable: true
  }),
  _ts_metadata8("design:type", String)
], AgentSessionInput.prototype, "nodeName", void 0);
AgentSessionInput = _ts_decorate8([
  (0, import_type_graphql9.InputType)()
], AgentSessionInput);

// src/graphql/inputs/agent-state.input.ts
var import_type_graphql10 = require("type-graphql");
function _ts_decorate9(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate9, "_ts_decorate");
function _ts_metadata9(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
}
__name(_ts_metadata9, "_ts_metadata");
var AgentStateInput = class {
  agentName;
  state;
};
__name(AgentStateInput, "AgentStateInput");
_ts_decorate9([
  (0, import_type_graphql10.Field)(() => String),
  _ts_metadata9("design:type", String)
], AgentStateInput.prototype, "agentName", void 0);
_ts_decorate9([
  (0, import_type_graphql10.Field)(() => String),
  _ts_metadata9("design:type", String)
], AgentStateInput.prototype, "state", void 0);
AgentStateInput = _ts_decorate9([
  (0, import_type_graphql10.InputType)()
], AgentStateInput);

// src/graphql/inputs/generate-copilot-response.input.ts
function _ts_decorate10(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate10, "_ts_decorate");
function _ts_metadata10(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
}
__name(_ts_metadata10, "_ts_metadata");
var GenerateCopilotResponseMetadataInput = class {
  requestType;
};
__name(GenerateCopilotResponseMetadataInput, "GenerateCopilotResponseMetadataInput");
_ts_decorate10([
  (0, import_type_graphql11.Field)(() => CopilotRequestType, {
    nullable: true
  }),
  _ts_metadata10("design:type", typeof CopilotRequestType === "undefined" ? Object : CopilotRequestType)
], GenerateCopilotResponseMetadataInput.prototype, "requestType", void 0);
GenerateCopilotResponseMetadataInput = _ts_decorate10([
  (0, import_type_graphql11.InputType)()
], GenerateCopilotResponseMetadataInput);
var GenerateCopilotResponseInput = class {
  metadata;
  threadId;
  runId;
  messages;
  frontend;
  cloud;
  forwardedParameters;
  agentSession;
  agentState;
  agentStates;
};
__name(GenerateCopilotResponseInput, "GenerateCopilotResponseInput");
_ts_decorate10([
  (0, import_type_graphql11.Field)(() => GenerateCopilotResponseMetadataInput, {
    nullable: false
  }),
  _ts_metadata10("design:type", typeof GenerateCopilotResponseMetadataInput === "undefined" ? Object : GenerateCopilotResponseMetadataInput)
], GenerateCopilotResponseInput.prototype, "metadata", void 0);
_ts_decorate10([
  (0, import_type_graphql11.Field)(() => String, {
    nullable: true
  }),
  _ts_metadata10("design:type", String)
], GenerateCopilotResponseInput.prototype, "threadId", void 0);
_ts_decorate10([
  (0, import_type_graphql11.Field)(() => String, {
    nullable: true
  }),
  _ts_metadata10("design:type", String)
], GenerateCopilotResponseInput.prototype, "runId", void 0);
_ts_decorate10([
  (0, import_type_graphql11.Field)(() => [
    MessageInput
  ]),
  _ts_metadata10("design:type", Array)
], GenerateCopilotResponseInput.prototype, "messages", void 0);
_ts_decorate10([
  (0, import_type_graphql11.Field)(() => FrontendInput),
  _ts_metadata10("design:type", typeof FrontendInput === "undefined" ? Object : FrontendInput)
], GenerateCopilotResponseInput.prototype, "frontend", void 0);
_ts_decorate10([
  (0, import_type_graphql11.Field)(() => CloudInput, {
    nullable: true
  }),
  _ts_metadata10("design:type", typeof CloudInput === "undefined" ? Object : CloudInput)
], GenerateCopilotResponseInput.prototype, "cloud", void 0);
_ts_decorate10([
  (0, import_type_graphql11.Field)(() => ForwardedParametersInput, {
    nullable: true
  }),
  _ts_metadata10("design:type", typeof ForwardedParametersInput === "undefined" ? Object : ForwardedParametersInput)
], GenerateCopilotResponseInput.prototype, "forwardedParameters", void 0);
_ts_decorate10([
  (0, import_type_graphql11.Field)(() => AgentSessionInput, {
    nullable: true
  }),
  _ts_metadata10("design:type", typeof AgentSessionInput === "undefined" ? Object : AgentSessionInput)
], GenerateCopilotResponseInput.prototype, "agentSession", void 0);
_ts_decorate10([
  (0, import_type_graphql11.Field)(() => AgentStateInput, {
    nullable: true
  }),
  _ts_metadata10("design:type", typeof AgentStateInput === "undefined" ? Object : AgentStateInput)
], GenerateCopilotResponseInput.prototype, "agentState", void 0);
_ts_decorate10([
  (0, import_type_graphql11.Field)(() => [
    AgentStateInput
  ], {
    nullable: true
  }),
  _ts_metadata10("design:type", Array)
], GenerateCopilotResponseInput.prototype, "agentStates", void 0);
GenerateCopilotResponseInput = _ts_decorate10([
  (0, import_type_graphql11.InputType)()
], GenerateCopilotResponseInput);

// src/graphql/types/copilot-response.type.ts
var import_type_graphql14 = require("type-graphql");

// src/graphql/types/message-status.type.ts
var import_type_graphql12 = require("type-graphql");
function _ts_decorate11(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate11, "_ts_decorate");
function _ts_metadata11(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
}
__name(_ts_metadata11, "_ts_metadata");
var MessageStatusCode;
(function(MessageStatusCode2) {
  MessageStatusCode2["Pending"] = "pending";
  MessageStatusCode2["Success"] = "success";
  MessageStatusCode2["Failed"] = "failed";
})(MessageStatusCode || (MessageStatusCode = {}));
(0, import_type_graphql12.registerEnumType)(MessageStatusCode, {
  name: "MessageStatusCode"
});
var BaseMessageStatus = /* @__PURE__ */ __name(class BaseMessageStatus2 {
  code;
}, "BaseMessageStatus");
_ts_decorate11([
  (0, import_type_graphql12.Field)(() => MessageStatusCode),
  _ts_metadata11("design:type", String)
], BaseMessageStatus.prototype, "code", void 0);
BaseMessageStatus = _ts_decorate11([
  (0, import_type_graphql12.ObjectType)()
], BaseMessageStatus);
var PendingMessageStatus = class extends BaseMessageStatus {
  code = "pending";
};
__name(PendingMessageStatus, "PendingMessageStatus");
PendingMessageStatus = _ts_decorate11([
  (0, import_type_graphql12.ObjectType)()
], PendingMessageStatus);
var SuccessMessageStatus = class extends BaseMessageStatus {
  code = "success";
};
__name(SuccessMessageStatus, "SuccessMessageStatus");
SuccessMessageStatus = _ts_decorate11([
  (0, import_type_graphql12.ObjectType)()
], SuccessMessageStatus);
var FailedMessageStatus = class extends BaseMessageStatus {
  code = "failed";
  reason;
};
__name(FailedMessageStatus, "FailedMessageStatus");
_ts_decorate11([
  (0, import_type_graphql12.Field)(() => String),
  _ts_metadata11("design:type", String)
], FailedMessageStatus.prototype, "reason", void 0);
FailedMessageStatus = _ts_decorate11([
  (0, import_type_graphql12.ObjectType)()
], FailedMessageStatus);
var MessageStatusUnion = (0, import_type_graphql12.createUnionType)({
  name: "MessageStatus",
  types: () => [
    PendingMessageStatus,
    SuccessMessageStatus,
    FailedMessageStatus
  ]
});

// src/graphql/types/response-status.type.ts
var import_graphql_scalars = require("graphql-scalars");
var import_type_graphql13 = require("type-graphql");
function _ts_decorate12(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate12, "_ts_decorate");
function _ts_metadata12(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
}
__name(_ts_metadata12, "_ts_metadata");
var ResponseStatusCode;
(function(ResponseStatusCode2) {
  ResponseStatusCode2["Pending"] = "pending";
  ResponseStatusCode2["Success"] = "success";
  ResponseStatusCode2["Failed"] = "failed";
})(ResponseStatusCode || (ResponseStatusCode = {}));
(0, import_type_graphql13.registerEnumType)(ResponseStatusCode, {
  name: "ResponseStatusCode"
});
var BaseResponseStatus = /* @__PURE__ */ __name(class BaseResponseStatus2 {
  code;
}, "BaseResponseStatus");
_ts_decorate12([
  (0, import_type_graphql13.Field)(() => ResponseStatusCode),
  _ts_metadata12("design:type", String)
], BaseResponseStatus.prototype, "code", void 0);
BaseResponseStatus = _ts_decorate12([
  (0, import_type_graphql13.InterfaceType)({
    resolveType(value) {
      if (value.code === "success") {
        return SuccessResponseStatus;
      } else if (value.code === "failed") {
        return FailedResponseStatus;
      } else if (value.code === "pending") {
        return PendingResponseStatus;
      }
      return void 0;
    }
  }),
  (0, import_type_graphql13.ObjectType)()
], BaseResponseStatus);
var PendingResponseStatus = class extends BaseResponseStatus {
  code = "pending";
};
__name(PendingResponseStatus, "PendingResponseStatus");
PendingResponseStatus = _ts_decorate12([
  (0, import_type_graphql13.ObjectType)({
    implements: BaseResponseStatus
  })
], PendingResponseStatus);
var SuccessResponseStatus = class extends BaseResponseStatus {
  code = "success";
};
__name(SuccessResponseStatus, "SuccessResponseStatus");
SuccessResponseStatus = _ts_decorate12([
  (0, import_type_graphql13.ObjectType)({
    implements: BaseResponseStatus
  })
], SuccessResponseStatus);
var FailedResponseStatusReason;
(function(FailedResponseStatusReason2) {
  FailedResponseStatusReason2["GUARDRAILS_VALIDATION_FAILED"] = "GUARDRAILS_VALIDATION_FAILED";
  FailedResponseStatusReason2["MESSAGE_STREAM_INTERRUPTED"] = "MESSAGE_STREAM_INTERRUPTED";
  FailedResponseStatusReason2["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
})(FailedResponseStatusReason || (FailedResponseStatusReason = {}));
(0, import_type_graphql13.registerEnumType)(FailedResponseStatusReason, {
  name: "FailedResponseStatusReason"
});
var FailedResponseStatus = class extends BaseResponseStatus {
  code = "failed";
  reason;
  details = null;
};
__name(FailedResponseStatus, "FailedResponseStatus");
_ts_decorate12([
  (0, import_type_graphql13.Field)(() => FailedResponseStatusReason),
  _ts_metadata12("design:type", String)
], FailedResponseStatus.prototype, "reason", void 0);
_ts_decorate12([
  (0, import_type_graphql13.Field)(() => import_graphql_scalars.GraphQLJSON, {
    nullable: true
  }),
  _ts_metadata12("design:type", typeof Record === "undefined" ? Object : Record)
], FailedResponseStatus.prototype, "details", void 0);
FailedResponseStatus = _ts_decorate12([
  (0, import_type_graphql13.ObjectType)({
    implements: BaseResponseStatus
  })
], FailedResponseStatus);
var ResponseStatusUnion = (0, import_type_graphql13.createUnionType)({
  name: "ResponseStatus",
  types: () => [
    PendingResponseStatus,
    SuccessResponseStatus,
    FailedResponseStatus
  ]
});

// src/graphql/types/copilot-response.type.ts
function _ts_decorate13(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate13, "_ts_decorate");
function _ts_metadata13(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
}
__name(_ts_metadata13, "_ts_metadata");
var BaseMessageOutput = /* @__PURE__ */ __name(class BaseMessageOutput2 {
  id;
  createdAt;
  status;
}, "BaseMessageOutput");
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => String),
  _ts_metadata13("design:type", String)
], BaseMessageOutput.prototype, "id", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => Date),
  _ts_metadata13("design:type", typeof Date === "undefined" ? Object : Date)
], BaseMessageOutput.prototype, "createdAt", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => MessageStatusUnion),
  _ts_metadata13("design:type", Object)
], BaseMessageOutput.prototype, "status", void 0);
BaseMessageOutput = _ts_decorate13([
  (0, import_type_graphql14.InterfaceType)({
    resolveType(value) {
      if (value.hasOwnProperty("content") && Array.isArray(value.content)) {
        const firstContentItem = value.content[0];
        if ((firstContentItem == null ? void 0 : firstContentItem.type) === "text") {
          return ContentMessageOutput;
        } else if ((firstContentItem == null ? void 0 : firstContentItem.type) === "image_url") {
          return ContentMessageOutput;
        }
      }
      if (value.hasOwnProperty("content") && typeof value.content === "string") {
        return TextMessageOutput;
      } else if (value.hasOwnProperty("name")) {
        return ActionExecutionMessageOutput;
      } else if (value.hasOwnProperty("result")) {
        return ResultMessageOutput;
      } else if (value.hasOwnProperty("state")) {
        return AgentStateMessageOutput;
      }
      return void 0;
    }
  })
], BaseMessageOutput);
var TextMessageOutput = class {
  role;
  content;
};
__name(TextMessageOutput, "TextMessageOutput");
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => MessageRole),
  _ts_metadata13("design:type", typeof MessageRole === "undefined" ? Object : MessageRole)
], TextMessageOutput.prototype, "role", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => [
    String
  ]),
  _ts_metadata13("design:type", Array)
], TextMessageOutput.prototype, "content", void 0);
TextMessageOutput = _ts_decorate13([
  (0, import_type_graphql14.ObjectType)({
    implements: BaseMessageOutput
  })
], TextMessageOutput);
var ContentMessageOutput = class {
  role;
  content;
};
__name(ContentMessageOutput, "ContentMessageOutput");
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => MessageRole),
  _ts_metadata13("design:type", typeof MessageRole === "undefined" ? Object : MessageRole)
], ContentMessageOutput.prototype, "role", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => [
    String
  ]),
  _ts_metadata13("design:type", Array)
], ContentMessageOutput.prototype, "content", void 0);
ContentMessageOutput = _ts_decorate13([
  (0, import_type_graphql14.ObjectType)({
    implements: BaseMessageOutput
  })
], ContentMessageOutput);
var ActionExecutionMessageOutput = class {
  name;
  scope;
  arguments;
};
__name(ActionExecutionMessageOutput, "ActionExecutionMessageOutput");
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => String),
  _ts_metadata13("design:type", String)
], ActionExecutionMessageOutput.prototype, "name", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => ActionExecutionScope),
  _ts_metadata13("design:type", typeof ActionExecutionScope === "undefined" ? Object : ActionExecutionScope)
], ActionExecutionMessageOutput.prototype, "scope", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => [
    String
  ]),
  _ts_metadata13("design:type", Array)
], ActionExecutionMessageOutput.prototype, "arguments", void 0);
ActionExecutionMessageOutput = _ts_decorate13([
  (0, import_type_graphql14.ObjectType)({
    implements: BaseMessageOutput
  })
], ActionExecutionMessageOutput);
var ResultMessageOutput = class {
  actionExecutionId;
  actionName;
  result;
};
__name(ResultMessageOutput, "ResultMessageOutput");
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => String),
  _ts_metadata13("design:type", String)
], ResultMessageOutput.prototype, "actionExecutionId", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => String),
  _ts_metadata13("design:type", String)
], ResultMessageOutput.prototype, "actionName", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => String),
  _ts_metadata13("design:type", String)
], ResultMessageOutput.prototype, "result", void 0);
ResultMessageOutput = _ts_decorate13([
  (0, import_type_graphql14.ObjectType)({
    implements: BaseMessageOutput
  })
], ResultMessageOutput);
var AgentStateMessageOutput = class {
  threadId;
  agentName;
  nodeName;
  runId;
  active;
  role;
  state;
  running;
};
__name(AgentStateMessageOutput, "AgentStateMessageOutput");
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => String),
  _ts_metadata13("design:type", String)
], AgentStateMessageOutput.prototype, "threadId", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => String),
  _ts_metadata13("design:type", String)
], AgentStateMessageOutput.prototype, "agentName", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => String),
  _ts_metadata13("design:type", String)
], AgentStateMessageOutput.prototype, "nodeName", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => String),
  _ts_metadata13("design:type", String)
], AgentStateMessageOutput.prototype, "runId", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => Boolean),
  _ts_metadata13("design:type", Boolean)
], AgentStateMessageOutput.prototype, "active", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => MessageRole),
  _ts_metadata13("design:type", typeof MessageRole === "undefined" ? Object : MessageRole)
], AgentStateMessageOutput.prototype, "role", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => String),
  _ts_metadata13("design:type", String)
], AgentStateMessageOutput.prototype, "state", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => Boolean),
  _ts_metadata13("design:type", Boolean)
], AgentStateMessageOutput.prototype, "running", void 0);
AgentStateMessageOutput = _ts_decorate13([
  (0, import_type_graphql14.ObjectType)({
    implements: BaseMessageOutput
  })
], AgentStateMessageOutput);
var CopilotResponse = class {
  threadId;
  status;
  runId;
  messages;
};
__name(CopilotResponse, "CopilotResponse");
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => String),
  _ts_metadata13("design:type", String)
], CopilotResponse.prototype, "threadId", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => ResponseStatusUnion),
  _ts_metadata13("design:type", Object)
], CopilotResponse.prototype, "status", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)({
    nullable: true
  }),
  _ts_metadata13("design:type", String)
], CopilotResponse.prototype, "runId", void 0);
_ts_decorate13([
  (0, import_type_graphql14.Field)(() => [
    BaseMessageOutput
  ]),
  _ts_metadata13("design:type", Array)
], CopilotResponse.prototype, "messages", void 0);
CopilotResponse = _ts_decorate13([
  (0, import_type_graphql14.ObjectType)()
], CopilotResponse);

// src/graphql/resolvers/copilot.resolver.ts
var import_graphql_yoga = require("graphql-yoga");
var import_graphql_scalars2 = require("graphql-scalars");
var import_class_transformer2 = require("class-transformer");
var import_graphql = require("graphql");

// src/utils/failed-response-status-reasons.ts
var GuardrailsValidationFailureResponse = class extends FailedResponseStatus {
  reason = FailedResponseStatusReason.GUARDRAILS_VALIDATION_FAILED;
  constructor({ guardrailsReason }) {
    super();
    this.details = {
      guardrailsReason
    };
  }
};
__name(GuardrailsValidationFailureResponse, "GuardrailsValidationFailureResponse");
var MessageStreamInterruptedResponse = class extends FailedResponseStatus {
  reason = FailedResponseStatusReason.MESSAGE_STREAM_INTERRUPTED;
  constructor({ messageId }) {
    super();
    this.details = {
      messageId,
      description: "Check the message for mode details"
    };
  }
};
__name(MessageStreamInterruptedResponse, "MessageStreamInterruptedResponse");
var UnknownErrorResponse = class extends FailedResponseStatus {
  reason = FailedResponseStatusReason.UNKNOWN_ERROR;
  constructor({ description }) {
    super();
    this.details = {
      description
    };
  }
};
__name(UnknownErrorResponse, "UnknownErrorResponse");

// src/graphql/resolvers/copilot.resolver.ts
var import_shared10 = require("@copilotkit/shared");
function _ts_decorate14(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate14, "_ts_decorate");
function _ts_metadata14(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
}
__name(_ts_metadata14, "_ts_metadata");
function _ts_param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param, "_ts_param");
var invokeGuardrails = /* @__PURE__ */ __name(async ({ baseUrl, copilotCloudPublicApiKey, data, onResult, onError }) => {
  var _a;
  if (data.messages.length && ((_a = data.messages[data.messages.length - 1].textMessage) == null ? void 0 : _a.role) === MessageRole.user) {
    const messages = data.messages.filter((m) => m.textMessage !== void 0 && (m.textMessage.role === MessageRole.user || m.textMessage.role === MessageRole.assistant)).map((m) => ({
      role: m.textMessage.role,
      content: m.textMessage.content
    }));
    const lastMessage = messages[messages.length - 1];
    const restOfMessages = messages.slice(0, -1);
    const body = {
      input: lastMessage.content,
      validTopics: data.cloud.guardrails.inputValidationRules.allowList,
      invalidTopics: data.cloud.guardrails.inputValidationRules.denyList,
      messages: restOfMessages
    };
    const guardrailsResult = await fetch(`${baseUrl}/guardrails/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CopilotCloud-Public-API-Key": copilotCloudPublicApiKey
      },
      body: JSON.stringify(body)
    });
    if (guardrailsResult.ok) {
      const resultJson = await guardrailsResult.json();
      onResult(resultJson);
    } else {
      onError(await guardrailsResult.json());
    }
  }
}, "invokeGuardrails");
var CopilotResolver = class {
  async hello() {
    return "Hello World";
  }
  async generateCopilotResponse(ctx, data, properties) {
    var _a, _b, _c;
    telemetry_client_default.capture("oss.runtime.copilot_request_created", {
      "cloud.guardrails.enabled": ((_a = data.cloud) == null ? void 0 : _a.guardrails) !== void 0,
      requestType: data.metadata.requestType
    });
    let logger2 = ctx.logger.child({
      component: "CopilotResolver.generateCopilotResponse"
    });
    logger2.debug({
      data
    }, "Generating Copilot response");
    if (properties) {
      logger2.debug("Properties provided, merging with context properties");
      ctx.properties = {
        ...ctx.properties,
        ...properties
      };
    }
    const copilotRuntime = ctx._copilotkit.runtime;
    const serviceAdapter = ctx._copilotkit.serviceAdapter;
    let copilotCloudPublicApiKey = null;
    let copilotCloudBaseUrl;
    if (data.cloud) {
      logger2 = logger2.child({
        cloud: true
      });
      logger2.debug("Cloud configuration provided, checking for public API key in headers");
      const key = ctx.request.headers.get("x-copilotcloud-public-api-key");
      if (key) {
        logger2.debug("Public API key found in headers");
        copilotCloudPublicApiKey = key;
      } else {
        logger2.error("Public API key not found in headers");
        throw new import_graphql.GraphQLError("X-CopilotCloud-Public-API-Key header is required");
      }
      if (process.env.COPILOT_CLOUD_BASE_URL) {
        copilotCloudBaseUrl = process.env.COPILOT_CLOUD_BASE_URL;
      } else if ((_b = ctx._copilotkit.cloud) == null ? void 0 : _b.baseUrl) {
        copilotCloudBaseUrl = (_c = ctx._copilotkit.cloud) == null ? void 0 : _c.baseUrl;
      } else {
        copilotCloudBaseUrl = "https://api.cloud.copilotkit.ai";
      }
      logger2 = logger2.child({
        copilotCloudBaseUrl
      });
    }
    logger2.debug("Setting up subjects");
    const responseStatus$ = new import_rxjs4.ReplaySubject();
    const interruptStreaming$ = new import_rxjs4.ReplaySubject();
    const guardrailsResult$ = new import_rxjs4.ReplaySubject();
    let outputMessages = [];
    let resolveOutputMessagesPromise;
    let rejectOutputMessagesPromise;
    const outputMessagesPromise = new Promise((resolve, reject) => {
      resolveOutputMessagesPromise = resolve;
      rejectOutputMessagesPromise = reject;
    });
    logger2.debug("Processing");
    const { eventSource, threadId = (0, import_shared10.randomId)(), runId, serverSideActions, actionInputsWithoutAgents } = await copilotRuntime.processRuntimeRequest({
      serviceAdapter,
      messages: data.messages,
      actions: data.frontend.actions,
      threadId: data.threadId,
      runId: data.runId,
      publicApiKey: void 0,
      outputMessagesPromise,
      graphqlContext: ctx,
      forwardedParameters: data.forwardedParameters,
      agentSession: data.agentSession,
      agentStates: data.agentStates,
      url: data.frontend.url
    });
    logger2.debug("Event source created, creating response");
    const response = {
      threadId,
      runId,
      status: (0, import_rxjs4.firstValueFrom)(responseStatus$),
      messages: new import_graphql_yoga.Repeater(async (pushMessage, stopStreamingMessages) => {
        var _a2, _b2;
        logger2.debug("Messages repeater created");
        if ((_a2 = data.cloud) == null ? void 0 : _a2.guardrails) {
          logger2 = logger2.child({
            guardrails: true
          });
          logger2.debug("Guardrails is enabled, validating input");
          invokeGuardrails({
            baseUrl: copilotCloudBaseUrl,
            copilotCloudPublicApiKey,
            data,
            onResult: (result) => {
              logger2.debug({
                status: result.status
              }, "Guardrails validation done");
              guardrailsResult$.next(result);
              if (result.status === "denied") {
                responseStatus$.next(new GuardrailsValidationFailureResponse({
                  guardrailsReason: result.reason
                }));
                interruptStreaming$.next({
                  reason: `Interrupted due to Guardrails validation failure. Reason: ${result.reason}`
                });
                outputMessages = [
                  (0, import_class_transformer2.plainToInstance)(TextMessage, {
                    id: (0, import_shared10.randomId)(),
                    createdAt: /* @__PURE__ */ new Date(),
                    content: result.reason,
                    role: MessageRole.assistant
                  })
                ];
                resolveOutputMessagesPromise(outputMessages);
              }
            },
            onError: (err) => {
              logger2.error({
                err
              }, "Error in guardrails validation");
              responseStatus$.next(new UnknownErrorResponse({
                description: `An unknown error has occurred in the guardrails validation`
              }));
              interruptStreaming$.next({
                reason: `Interrupted due to unknown error in guardrails validation`
              });
              rejectOutputMessagesPromise(err);
            }
          });
        }
        let eventStreamSubscription;
        const eventStream = eventSource.processRuntimeEvents({
          serverSideActions,
          guardrailsResult$: ((_b2 = data.cloud) == null ? void 0 : _b2.guardrails) ? guardrailsResult$ : null,
          actionInputsWithoutAgents: actionInputsWithoutAgents.filter(
            // TODO-AGENTS: do not exclude ALL server side actions
            (action) => !serverSideActions.find((serverSideAction) => serverSideAction.name == action.name)
          )
        }).pipe(
          // shareReplay() ensures that later subscribers will see the whole stream instead of
          // just the events that were emitted after the subscriber was added.
          (0, import_rxjs4.shareReplay)(),
          (0, import_rxjs4.finalize)(() => {
            logger2.debug("Event stream finalized");
          })
        );
        logger2.debug("Event stream created, subscribing to event stream");
        eventStreamSubscription = eventStream.subscribe({
          next: async (event) => {
            switch (event.type) {
              case RuntimeEventTypes.TextMessageStart:
                const textMessageContentStream = eventStream.pipe(
                  // skip until this message start event
                  (0, import_rxjs4.skipWhile)((e) => e !== event),
                  // take until the message end event
                  (0, import_rxjs4.takeWhile)((e) => e.type != RuntimeEventTypes.TextMessageEnd)
                );
                const streamingTextStatus = new import_rxjs4.Subject();
                const messageId = event.messageId;
                pushMessage({
                  id: messageId,
                  status: (0, import_rxjs4.firstValueFrom)(streamingTextStatus),
                  createdAt: /* @__PURE__ */ new Date(),
                  role: MessageRole.assistant,
                  content: new import_graphql_yoga.Repeater(async (pushTextChunk, stopStreamingText) => {
                    logger2.debug("Text message content repeater created");
                    const textChunks = [];
                    let textSubscription;
                    interruptStreaming$.pipe((0, import_rxjs4.shareReplay)(), (0, import_rxjs4.take)(1), (0, import_rxjs4.tap)(({ reason, messageId: messageId2 }) => {
                      logger2.debug({
                        reason,
                        messageId: messageId2
                      }, "Text streaming interrupted");
                      streamingTextStatus.next((0, import_class_transformer2.plainToInstance)(FailedMessageStatus, {
                        reason
                      }));
                      responseStatus$.next(new MessageStreamInterruptedResponse({
                        messageId: messageId2
                      }));
                      stopStreamingText();
                      textSubscription == null ? void 0 : textSubscription.unsubscribe();
                    })).subscribe();
                    logger2.debug("Subscribing to text message content stream");
                    textSubscription = textMessageContentStream.subscribe({
                      next: async (e) => {
                        if (e.type == RuntimeEventTypes.TextMessageContent) {
                          await pushTextChunk(e.content);
                          textChunks.push(e.content);
                        }
                      },
                      error: (err) => {
                        logger2.error({
                          err
                        }, "Error in text message content stream");
                        interruptStreaming$.next({
                          reason: "Error streaming message content",
                          messageId
                        });
                        stopStreamingText();
                        textSubscription == null ? void 0 : textSubscription.unsubscribe();
                      },
                      complete: () => {
                        logger2.debug("Text message content stream completed");
                        streamingTextStatus.next(new SuccessMessageStatus());
                        stopStreamingText();
                        textSubscription == null ? void 0 : textSubscription.unsubscribe();
                        outputMessages.push((0, import_class_transformer2.plainToInstance)(TextMessage, {
                          id: messageId,
                          createdAt: /* @__PURE__ */ new Date(),
                          content: textChunks.join(""),
                          role: MessageRole.assistant
                        }));
                      }
                    });
                  })
                });
                break;
              case RuntimeEventTypes.ActionExecutionStart:
                logger2.debug("Action execution start event received");
                const actionExecutionArgumentStream = eventStream.pipe((0, import_rxjs4.skipWhile)((e) => e !== event), (0, import_rxjs4.takeWhile)((e) => e.type != RuntimeEventTypes.ActionExecutionEnd));
                const streamingArgumentsStatus = new import_rxjs4.Subject();
                pushMessage({
                  id: event.actionExecutionId,
                  status: (0, import_rxjs4.firstValueFrom)(streamingArgumentsStatus),
                  createdAt: /* @__PURE__ */ new Date(),
                  name: event.actionName,
                  scope: event.scope,
                  arguments: new import_graphql_yoga.Repeater(async (pushArgumentsChunk, stopStreamingArguments) => {
                    logger2.debug("Action execution argument stream created");
                    const argumentChunks = [];
                    let actionExecutionArgumentSubscription;
                    actionExecutionArgumentSubscription = actionExecutionArgumentStream.subscribe({
                      next: async (e) => {
                        if (e.type == RuntimeEventTypes.ActionExecutionArgs) {
                          await pushArgumentsChunk(e.args);
                          argumentChunks.push(e.args);
                        }
                      },
                      error: (err) => {
                        logger2.error({
                          err
                        }, "Error in action execution argument stream");
                        streamingArgumentsStatus.next((0, import_class_transformer2.plainToInstance)(FailedMessageStatus, {
                          reason: "An unknown error has occurred in the action execution argument stream"
                        }));
                        stopStreamingArguments();
                        actionExecutionArgumentSubscription == null ? void 0 : actionExecutionArgumentSubscription.unsubscribe();
                      },
                      complete: () => {
                        logger2.debug("Action execution argument stream completed");
                        streamingArgumentsStatus.next(new SuccessMessageStatus());
                        stopStreamingArguments();
                        actionExecutionArgumentSubscription == null ? void 0 : actionExecutionArgumentSubscription.unsubscribe();
                        outputMessages.push((0, import_class_transformer2.plainToInstance)(ActionExecutionMessage, {
                          id: event.actionExecutionId,
                          createdAt: /* @__PURE__ */ new Date(),
                          name: event.actionName,
                          scope: event.scope,
                          arguments: argumentChunks.join("")
                        }));
                      }
                    });
                  })
                });
                break;
              case RuntimeEventTypes.ActionExecutionResult:
                logger2.debug({
                  result: event.result
                }, "Action execution result event received");
                pushMessage({
                  id: (0, import_shared10.randomId)(),
                  status: new SuccessMessageStatus(),
                  createdAt: /* @__PURE__ */ new Date(),
                  actionExecutionId: event.actionExecutionId,
                  actionName: event.actionName,
                  result: event.result
                });
                outputMessages.push((0, import_class_transformer2.plainToInstance)(ResultMessage, {
                  id: (0, import_shared10.randomId)(),
                  createdAt: /* @__PURE__ */ new Date(),
                  actionExecutionId: event.actionExecutionId,
                  actionName: event.actionName,
                  result: event.result
                }));
                break;
              case RuntimeEventTypes.AgentStateMessage:
                logger2.debug({
                  event
                }, "Agent message event received");
                pushMessage({
                  id: (0, import_shared10.randomId)(),
                  status: new SuccessMessageStatus(),
                  threadId: event.threadId,
                  agentName: event.agentName,
                  nodeName: event.nodeName,
                  runId: event.runId,
                  active: event.active,
                  state: event.state,
                  running: event.running,
                  role: MessageRole.assistant,
                  createdAt: /* @__PURE__ */ new Date()
                });
                outputMessages.push((0, import_class_transformer2.plainToInstance)(AgentStateMessage, {
                  id: (0, import_shared10.randomId)(),
                  threadId: event.threadId,
                  agentName: event.agentName,
                  nodeName: event.nodeName,
                  runId: event.runId,
                  active: event.active,
                  state: event.state,
                  running: event.running,
                  role: MessageRole.assistant,
                  createdAt: /* @__PURE__ */ new Date()
                }));
                break;
            }
          },
          error: (err) => {
            logger2.error({
              err
            }, "Error in event stream");
            responseStatus$.next(new UnknownErrorResponse({
              description: `An unknown error has occurred in the event stream`
            }));
            eventStreamSubscription == null ? void 0 : eventStreamSubscription.unsubscribe();
            stopStreamingMessages();
            rejectOutputMessagesPromise(err);
          },
          complete: async () => {
            var _a3;
            logger2.debug("Event stream completed");
            if ((_a3 = data.cloud) == null ? void 0 : _a3.guardrails) {
              logger2.debug("Guardrails is enabled, waiting for guardrails result");
              await (0, import_rxjs4.firstValueFrom)(guardrailsResult$);
            }
            responseStatus$.next(new SuccessResponseStatus());
            eventStreamSubscription == null ? void 0 : eventStreamSubscription.unsubscribe();
            stopStreamingMessages();
            resolveOutputMessagesPromise(outputMessages);
          }
        });
      })
    };
    return response;
  }
};
__name(CopilotResolver, "CopilotResolver");
_ts_decorate14([
  (0, import_type_graphql15.Query)(() => String),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", []),
  _ts_metadata14("design:returntype", Promise)
], CopilotResolver.prototype, "hello", null);
_ts_decorate14([
  (0, import_type_graphql15.Mutation)(() => CopilotResponse),
  _ts_param(0, (0, import_type_graphql15.Ctx)()),
  _ts_param(1, (0, import_type_graphql15.Arg)("data")),
  _ts_param(2, (0, import_type_graphql15.Arg)("properties", () => import_graphql_scalars2.GraphQLJSONObject, {
    nullable: true
  })),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    typeof GraphQLContext === "undefined" ? Object : GraphQLContext,
    typeof GenerateCopilotResponseInput === "undefined" ? Object : GenerateCopilotResponseInput,
    typeof CopilotRequestContextProperties === "undefined" ? Object : CopilotRequestContextProperties
  ]),
  _ts_metadata14("design:returntype", Promise)
], CopilotResolver.prototype, "generateCopilotResponse", null);
CopilotResolver = _ts_decorate14([
  (0, import_type_graphql15.Resolver)(() => CopilotResponse)
], CopilotResolver);

// src/lib/integrations/shared.ts
var import_plugin_defer_stream = require("@graphql-yoga/plugin-defer-stream");

// src/lib/logger.ts
var import_pino = __toESM(require("pino"));
var import_pino_pretty = __toESM(require("pino-pretty"));
function createLogger(options) {
  const { level, component } = options || {};
  const stream = (0, import_pino_pretty.default)({
    colorize: true
  });
  const logger2 = (0, import_pino.default)({
    level: process.env.LOG_LEVEL || level || "error",
    redact: {
      paths: [
        "pid",
        "hostname"
      ],
      remove: true
    }
  }, stream);
  if (component) {
    return logger2.child({
      component
    });
  } else {
    return logger2;
  }
}
__name(createLogger, "createLogger");

// src/lib/integrations/shared.ts
var logger = createLogger();
async function createContext(initialContext, copilotKitContext, contextLogger, properties = {}) {
  logger.debug({
    copilotKitContext
  }, "Creating GraphQL context");
  const ctx = {
    ...initialContext,
    _copilotkit: {
      ...copilotKitContext
    },
    properties: {
      ...properties
    },
    logger: contextLogger
  };
  return ctx;
}
__name(createContext, "createContext");
function buildSchema(options = {}) {
  logger.debug("Building GraphQL schema...");
  const schema = (0, import_type_graphql16.buildSchemaSync)({
    resolvers: [
      CopilotResolver
    ],
    emitSchemaFile: options.emitSchemaFile
  });
  logger.debug("GraphQL schema built successfully");
  return schema;
}
__name(buildSchema, "buildSchema");
function getCommonConfig(options) {
  var _a;
  const logLevel = process.env.LOG_LEVEL || options.logLevel || "error";
  const logger2 = createLogger({
    level: logLevel,
    component: "getCommonConfig"
  });
  const contextLogger = createLogger({
    level: logLevel
  });
  if (options.cloud) {
    telemetry_client_default.setCloudConfiguration({
      publicApiKey: options.cloud.publicApiKey,
      baseUrl: options.cloud.baseUrl
    });
  }
  if ((_a = options.properties) == null ? void 0 : _a._copilotkit) {
    telemetry_client_default.setGlobalProperties({
      _copilotkit: {
        ...options.properties._copilotkit
      }
    });
  }
  telemetry_client_default.setGlobalProperties({
    runtime: {
      serviceAdapter: options.serviceAdapter.constructor.name
    }
  });
  return {
    logging: createLogger({
      component: "Yoga GraphQL",
      level: logLevel
    }),
    schema: buildSchema(),
    plugins: [
      (0, import_plugin_defer_stream.useDeferStream)()
    ],
    context: (ctx) => createContext(ctx, options, contextLogger, options.properties)
  };
}
__name(getCommonConfig, "getCommonConfig");

// src/lib/integrations/nextjs/app-router.ts
var import_graphql_yoga2 = require("graphql-yoga");
function copilotRuntimeNextJSAppRouterEndpoint(options) {
  var _a;
  const commonConfig = getCommonConfig(options);
  telemetry_client_default.setGlobalProperties({
    runtime: {
      framework: "nextjs-app-router"
    }
  });
  if ((_a = options.properties) == null ? void 0 : _a._copilotkit) {
    telemetry_client_default.setGlobalProperties({
      _copilotkit: options.properties._copilotkit
    });
  }
  telemetry_client_default.capture("oss.runtime.instance_created", {});
  const logger2 = commonConfig.logging;
  logger2.debug("Creating NextJS App Router endpoint");
  const yoga = (0, import_graphql_yoga2.createYoga)({
    ...commonConfig,
    graphqlEndpoint: options.endpoint,
    fetchAPI: {
      Response: globalThis.Response
    }
  });
  return {
    handleRequest: yoga,
    GET: yoga,
    POST: yoga,
    OPTIONS: yoga
  };
}
__name(copilotRuntimeNextJSAppRouterEndpoint, "copilotRuntimeNextJSAppRouterEndpoint");

// src/lib/integrations/nextjs/pages-router.ts
var import_graphql_yoga3 = require("graphql-yoga");
var config = {
  api: {
    bodyParser: false
  }
};
function copilotRuntimeNextJSPagesRouterEndpoint(options) {
  var _a;
  const commonConfig = getCommonConfig(options);
  telemetry_client_default.setGlobalProperties({
    runtime: {
      framework: "nextjs-pages-router"
    }
  });
  if ((_a = options.properties) == null ? void 0 : _a._copilotkit) {
    telemetry_client_default.setGlobalProperties({
      _copilotkit: options.properties._copilotkit
    });
  }
  telemetry_client_default.capture("oss.runtime.instance_created", {});
  const logger2 = commonConfig.logging;
  logger2.debug("Creating NextJS Pages Router endpoint");
  const yoga = (0, import_graphql_yoga3.createYoga)({
    ...commonConfig,
    graphqlEndpoint: options.endpoint
  });
  return yoga;
}
__name(copilotRuntimeNextJSPagesRouterEndpoint, "copilotRuntimeNextJSPagesRouterEndpoint");

// src/lib/integrations/node-http/index.ts
var import_graphql_yoga4 = require("graphql-yoga");
function copilotRuntimeNodeHttpEndpoint(options) {
  var _a;
  const commonConfig = getCommonConfig(options);
  telemetry_client_default.setGlobalProperties({
    runtime: {
      framework: "node-http"
    }
  });
  if ((_a = options.properties) == null ? void 0 : _a._copilotkit) {
    telemetry_client_default.setGlobalProperties({
      _copilotkit: options.properties._copilotkit
    });
  }
  telemetry_client_default.capture("oss.runtime.instance_created", {});
  const logger2 = commonConfig.logging;
  logger2.debug("Creating Node HTTP endpoint");
  const yoga = (0, import_graphql_yoga4.createYoga)({
    ...commonConfig,
    graphqlEndpoint: options.endpoint
  });
  return yoga;
}
__name(copilotRuntimeNodeHttpEndpoint, "copilotRuntimeNodeHttpEndpoint");

// src/lib/integrations/node-express/index.ts
function copilotRuntimeNodeExpressEndpoint(options) {
  telemetry_client_default.setGlobalProperties({
    runtime: {
      framework: "node-express"
    }
  });
  telemetry_client_default.capture("oss.runtime.instance_created", {});
  return copilotRuntimeNodeHttpEndpoint(options);
}
__name(copilotRuntimeNodeExpressEndpoint, "copilotRuntimeNodeExpressEndpoint");

// src/lib/integrations/nest/index.ts
function copilotRuntimeNestEndpoint(options) {
  telemetry_client_default.setGlobalProperties({
    runtime: {
      framework: "nest"
    }
  });
  telemetry_client_default.capture("oss.runtime.instance_created", {});
  return copilotRuntimeNodeHttpEndpoint(options);
}
__name(copilotRuntimeNestEndpoint, "copilotRuntimeNestEndpoint");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnthropicAdapter,
  CopilotRuntime,
  GoogleGenerativeAIAdapter,
  GroqAdapter,
  GuardrailsValidationFailureResponse,
  LangChainAdapter,
  MessageStreamInterruptedResponse,
  OpenAIAdapter,
  OpenAIAssistantAdapter,
  RemoteChain,
  UnifyAdapter,
  UnknownErrorResponse,
  buildSchema,
  config,
  copilotRuntimeNestEndpoint,
  copilotRuntimeNextJSAppRouterEndpoint,
  copilotRuntimeNextJSPagesRouterEndpoint,
  copilotRuntimeNodeExpressEndpoint,
  copilotRuntimeNodeHttpEndpoint,
  createContext,
  flattenToolCallsNoDuplicates,
  getCommonConfig
});
//# sourceMappingURL=index.js.map