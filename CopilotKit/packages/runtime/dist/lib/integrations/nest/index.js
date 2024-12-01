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
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
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
      name: "@copilotkit/runtime",
      private: false,
      homepage: "https://github.com/pixillab/CopilotKit",
      repository: {
        type: "git",
        url: "https://github.com/pixillab/CopilotKit.git"
      },
      publishConfig: {
        access: "public"
      },
      version: "1.3.15-pixil.2",
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
        "unlink:global": "pnpm unlink --global",
        prepare: "npm run build"
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

// src/lib/integrations/nest/index.ts
var nest_exports = {};
__export(nest_exports, {
  copilotRuntimeNestEndpoint: () => copilotRuntimeNestEndpoint
});
module.exports = __toCommonJS(nest_exports);

// src/lib/integrations/node-http/index.ts
var import_graphql_yoga2 = require("graphql-yoga");

// src/lib/integrations/shared.ts
var import_type_graphql16 = require("type-graphql");

// src/graphql/resolvers/copilot.resolver.ts
var import_type_graphql15 = require("type-graphql");
var import_rxjs2 = require("rxjs");

// src/graphql/inputs/generate-copilot-response.input.ts
var import_type_graphql11 = require("type-graphql");

// src/graphql/inputs/message.input.ts
var import_type_graphql3 = require("type-graphql");

// src/graphql/types/enums.ts
var import_type_graphql = require("type-graphql");
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
(0, import_type_graphql.registerEnumType)(MessageRole, {
  name: "MessageRole",
  description: "The role of the message"
});
(0, import_type_graphql.registerEnumType)(ActionExecutionScope, {
  name: "ActionExecutionScope",
  description: "The scope of the action"
});
(0, import_type_graphql.registerEnumType)(CopilotRequestType, {
  name: "CopilotRequestType",
  description: "The type of Copilot request"
});

// src/graphql/types/base/index.ts
var import_type_graphql2 = require("type-graphql");
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
  (0, import_type_graphql2.Field)(() => String),
  _ts_metadata("design:type", String)
], BaseMessageInput.prototype, "id", void 0);
_ts_decorate([
  (0, import_type_graphql2.Field)(() => Date),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BaseMessageInput.prototype, "createdAt", void 0);
BaseMessageInput = _ts_decorate([
  (0, import_type_graphql2.InputType)()
], BaseMessageInput);

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

// src/service-adapters/events.ts
var import_rxjs = require("rxjs");

// src/lib/telemetry-client.ts
var import_shared = require("@copilotkit/shared");
var packageJson = require_package();
var telemetryClient = new import_shared.TelemetryClient({
  packageName: packageJson.name,
  packageVersion: packageJson.version
});
var telemetry_client_default = telemetryClient;

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

// src/graphql/resolvers/copilot.resolver.ts
var import_graphql_scalars2 = require("graphql-scalars");
var import_class_transformer = require("class-transformer");
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

// src/graphql/resolvers/copilot.resolver.ts
var import_shared2 = require("@copilotkit/shared");
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
    const responseStatus$ = new import_rxjs2.ReplaySubject();
    const interruptStreaming$ = new import_rxjs2.ReplaySubject();
    const guardrailsResult$ = new import_rxjs2.ReplaySubject();
    let outputMessages = [];
    let resolveOutputMessagesPromise;
    let rejectOutputMessagesPromise;
    const outputMessagesPromise = new Promise((resolve, reject) => {
      resolveOutputMessagesPromise = resolve;
      rejectOutputMessagesPromise = reject;
    });
    logger2.debug("Processing");
    const { eventSource, threadId = (0, import_shared2.randomId)(), runId, serverSideActions, actionInputsWithoutAgents } = await copilotRuntime.processRuntimeRequest({
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
      status: (0, import_rxjs2.firstValueFrom)(responseStatus$),
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
                  (0, import_class_transformer.plainToInstance)(TextMessage, {
                    id: (0, import_shared2.randomId)(),
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
          (0, import_rxjs2.shareReplay)(),
          (0, import_rxjs2.finalize)(() => {
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
                  (0, import_rxjs2.skipWhile)((e) => e !== event),
                  // take until the message end event
                  (0, import_rxjs2.takeWhile)((e) => e.type != RuntimeEventTypes.TextMessageEnd)
                );
                const streamingTextStatus = new import_rxjs2.Subject();
                const messageId = event.messageId;
                pushMessage({
                  id: messageId,
                  status: (0, import_rxjs2.firstValueFrom)(streamingTextStatus),
                  createdAt: /* @__PURE__ */ new Date(),
                  role: MessageRole.assistant,
                  content: new import_graphql_yoga.Repeater(async (pushTextChunk, stopStreamingText) => {
                    logger2.debug("Text message content repeater created");
                    const textChunks = [];
                    let textSubscription;
                    interruptStreaming$.pipe((0, import_rxjs2.shareReplay)(), (0, import_rxjs2.take)(1), (0, import_rxjs2.tap)(({ reason, messageId: messageId2 }) => {
                      logger2.debug({
                        reason,
                        messageId: messageId2
                      }, "Text streaming interrupted");
                      streamingTextStatus.next((0, import_class_transformer.plainToInstance)(FailedMessageStatus, {
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
                        outputMessages.push((0, import_class_transformer.plainToInstance)(TextMessage, {
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
                const actionExecutionArgumentStream = eventStream.pipe((0, import_rxjs2.skipWhile)((e) => e !== event), (0, import_rxjs2.takeWhile)((e) => e.type != RuntimeEventTypes.ActionExecutionEnd));
                const streamingArgumentsStatus = new import_rxjs2.Subject();
                pushMessage({
                  id: event.actionExecutionId,
                  status: (0, import_rxjs2.firstValueFrom)(streamingArgumentsStatus),
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
                        streamingArgumentsStatus.next((0, import_class_transformer.plainToInstance)(FailedMessageStatus, {
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
                        outputMessages.push((0, import_class_transformer.plainToInstance)(ActionExecutionMessage, {
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
                  id: (0, import_shared2.randomId)(),
                  status: new SuccessMessageStatus(),
                  createdAt: /* @__PURE__ */ new Date(),
                  actionExecutionId: event.actionExecutionId,
                  actionName: event.actionName,
                  result: event.result
                });
                outputMessages.push((0, import_class_transformer.plainToInstance)(ResultMessage, {
                  id: (0, import_shared2.randomId)(),
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
                  id: (0, import_shared2.randomId)(),
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
                outputMessages.push((0, import_class_transformer.plainToInstance)(AgentStateMessage, {
                  id: (0, import_shared2.randomId)(),
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
              await (0, import_rxjs2.firstValueFrom)(guardrailsResult$);
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

// src/lib/integrations/node-http/index.ts
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
  const yoga = (0, import_graphql_yoga2.createYoga)({
    ...commonConfig,
    graphqlEndpoint: options.endpoint
  });
  return yoga;
}
__name(copilotRuntimeNodeHttpEndpoint, "copilotRuntimeNodeHttpEndpoint");

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
  copilotRuntimeNestEndpoint
});
//# sourceMappingURL=index.js.map