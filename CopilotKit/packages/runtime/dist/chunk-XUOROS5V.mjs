import {
  streamLangChainResponse
} from "./chunk-MXXPWWBF.mjs";
import {
  GuardrailsValidationFailureResponse,
  MessageStreamInterruptedResponse,
  ResponseStatusUnion,
  SuccessResponseStatus,
  UnknownErrorResponse
} from "./chunk-U3V2BCGI.mjs";
import {
  ActionExecutionMessage,
  AgentStateMessage,
  ResultMessage,
  TextMessage
} from "./chunk-WU5ND2ND.mjs";
import {
  BaseMessageInput
} from "./chunk-D2WLFQS6.mjs";
import {
  __commonJS,
  __name
} from "./chunk-44O2JGUY.mjs";

// package.json
var require_package = __commonJS({
  "package.json"(exports, module) {
    module.exports = {
      name: "@copilotkit/runtime",
      private: false,
      homepage: "https://github.com/CopilotKit/CopilotKit",
      repository: {
        type: "git",
        url: "https://github.com/CopilotKit/CopilotKit.git"
      },
      publishConfig: {
        access: "public"
      },
      version: "1.3.15",
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

// src/lib/integrations/node-http/index.ts
import { createYoga } from "graphql-yoga";

// src/lib/integrations/shared.ts
import { buildSchemaSync } from "type-graphql";

// src/graphql/resolvers/copilot.resolver.ts
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { ReplaySubject as ReplaySubject3, Subject, finalize, firstValueFrom as firstValueFrom2, shareReplay, skipWhile, take, takeWhile, tap } from "rxjs";

// src/graphql/inputs/generate-copilot-response.input.ts
import { Field as Field9, InputType as InputType9 } from "type-graphql";

// src/graphql/inputs/message.input.ts
import { Field, InputType } from "type-graphql";

// src/graphql/types/enums.ts
import { registerEnumType } from "type-graphql";
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
registerEnumType(MessageRole, {
  name: "MessageRole",
  description: "The role of the message"
});
registerEnumType(ActionExecutionScope, {
  name: "ActionExecutionScope",
  description: "The scope of the action"
});
registerEnumType(CopilotRequestType, {
  name: "CopilotRequestType",
  description: "The type of Copilot request"
});

// src/graphql/inputs/message.input.ts
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
var MessageInput = class extends BaseMessageInput {
  textMessage;
  actionExecutionMessage;
  resultMessage;
  agentStateMessage;
  contentMessage;
};
__name(MessageInput, "MessageInput");
_ts_decorate([
  Field(() => TextMessageInput, {
    nullable: true
  }),
  _ts_metadata("design:type", typeof TextMessageInput === "undefined" ? Object : TextMessageInput)
], MessageInput.prototype, "textMessage", void 0);
_ts_decorate([
  Field(() => ActionExecutionMessageInput, {
    nullable: true
  }),
  _ts_metadata("design:type", typeof ActionExecutionMessageInput === "undefined" ? Object : ActionExecutionMessageInput)
], MessageInput.prototype, "actionExecutionMessage", void 0);
_ts_decorate([
  Field(() => ResultMessageInput, {
    nullable: true
  }),
  _ts_metadata("design:type", typeof ResultMessageInput === "undefined" ? Object : ResultMessageInput)
], MessageInput.prototype, "resultMessage", void 0);
_ts_decorate([
  Field(() => AgentStateMessageInput, {
    nullable: true
  }),
  _ts_metadata("design:type", typeof AgentStateMessageInput === "undefined" ? Object : AgentStateMessageInput)
], MessageInput.prototype, "agentStateMessage", void 0);
_ts_decorate([
  Field(() => ContentMessageInput, {
    nullable: true
  }),
  _ts_metadata("design:type", typeof ContentMessageInput === "undefined" ? Object : ContentMessageInput)
], MessageInput.prototype, "contentMessage", void 0);
MessageInput = _ts_decorate([
  InputType()
], MessageInput);
var MessageContentInput = class {
  type;
  textContent;
  imageURLContent;
};
__name(MessageContentInput, "MessageContentInput");
_ts_decorate([
  Field(() => String),
  _ts_metadata("design:type", String)
], MessageContentInput.prototype, "type", void 0);
_ts_decorate([
  Field(() => TextContentBlockInput, {
    nullable: true
  }),
  _ts_metadata("design:type", typeof TextContentBlockInput === "undefined" ? Object : TextContentBlockInput)
], MessageContentInput.prototype, "textContent", void 0);
_ts_decorate([
  Field(() => ImageURLContentBlockInput, {
    nullable: true
  }),
  _ts_metadata("design:type", typeof ImageURLContentBlockInput === "undefined" ? Object : ImageURLContentBlockInput)
], MessageContentInput.prototype, "imageURLContent", void 0);
MessageContentInput = _ts_decorate([
  InputType()
], MessageContentInput);
var ContentMessageInput = class {
  content;
  role;
};
__name(ContentMessageInput, "ContentMessageInput");
_ts_decorate([
  Field(() => [
    MessageContentInput
  ]),
  _ts_metadata("design:type", Array)
], ContentMessageInput.prototype, "content", void 0);
_ts_decorate([
  Field(() => MessageRole),
  _ts_metadata("design:type", typeof MessageRole === "undefined" ? Object : MessageRole)
], ContentMessageInput.prototype, "role", void 0);
ContentMessageInput = _ts_decorate([
  InputType()
], ContentMessageInput);
var TextMessageInput = class {
  content;
  role;
};
__name(TextMessageInput, "TextMessageInput");
_ts_decorate([
  Field(() => String),
  _ts_metadata("design:type", String)
], TextMessageInput.prototype, "content", void 0);
_ts_decorate([
  Field(() => MessageRole),
  _ts_metadata("design:type", typeof MessageRole === "undefined" ? Object : MessageRole)
], TextMessageInput.prototype, "role", void 0);
TextMessageInput = _ts_decorate([
  InputType()
], TextMessageInput);
var ActionExecutionMessageInput = class {
  name;
  arguments;
  scope;
};
__name(ActionExecutionMessageInput, "ActionExecutionMessageInput");
_ts_decorate([
  Field(() => String),
  _ts_metadata("design:type", String)
], ActionExecutionMessageInput.prototype, "name", void 0);
_ts_decorate([
  Field(() => String),
  _ts_metadata("design:type", String)
], ActionExecutionMessageInput.prototype, "arguments", void 0);
_ts_decorate([
  Field(() => ActionExecutionScope),
  _ts_metadata("design:type", typeof ActionExecutionScope === "undefined" ? Object : ActionExecutionScope)
], ActionExecutionMessageInput.prototype, "scope", void 0);
ActionExecutionMessageInput = _ts_decorate([
  InputType()
], ActionExecutionMessageInput);
var ResultMessageInput = class {
  actionExecutionId;
  actionName;
  result;
};
__name(ResultMessageInput, "ResultMessageInput");
_ts_decorate([
  Field(() => String),
  _ts_metadata("design:type", String)
], ResultMessageInput.prototype, "actionExecutionId", void 0);
_ts_decorate([
  Field(() => String),
  _ts_metadata("design:type", String)
], ResultMessageInput.prototype, "actionName", void 0);
_ts_decorate([
  Field(() => String),
  _ts_metadata("design:type", String)
], ResultMessageInput.prototype, "result", void 0);
ResultMessageInput = _ts_decorate([
  InputType()
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
_ts_decorate([
  Field(() => String),
  _ts_metadata("design:type", String)
], AgentStateMessageInput.prototype, "threadId", void 0);
_ts_decorate([
  Field(() => String),
  _ts_metadata("design:type", String)
], AgentStateMessageInput.prototype, "agentName", void 0);
_ts_decorate([
  Field(() => MessageRole),
  _ts_metadata("design:type", typeof MessageRole === "undefined" ? Object : MessageRole)
], AgentStateMessageInput.prototype, "role", void 0);
_ts_decorate([
  Field(() => String),
  _ts_metadata("design:type", String)
], AgentStateMessageInput.prototype, "state", void 0);
_ts_decorate([
  Field(() => Boolean),
  _ts_metadata("design:type", Boolean)
], AgentStateMessageInput.prototype, "running", void 0);
_ts_decorate([
  Field(() => String),
  _ts_metadata("design:type", String)
], AgentStateMessageInput.prototype, "nodeName", void 0);
_ts_decorate([
  Field(() => String),
  _ts_metadata("design:type", String)
], AgentStateMessageInput.prototype, "runId", void 0);
_ts_decorate([
  Field(() => Boolean),
  _ts_metadata("design:type", Boolean)
], AgentStateMessageInput.prototype, "active", void 0);
AgentStateMessageInput = _ts_decorate([
  InputType()
], AgentStateMessageInput);
var ImageURLContentBlockInput = class {
  type;
  image_url;
};
__name(ImageURLContentBlockInput, "ImageURLContentBlockInput");
_ts_decorate([
  Field(() => String),
  _ts_metadata("design:type", String)
], ImageURLContentBlockInput.prototype, "type", void 0);
_ts_decorate([
  Field(() => ImageURLInput),
  _ts_metadata("design:type", typeof ImageURLInput === "undefined" ? Object : ImageURLInput)
], ImageURLContentBlockInput.prototype, "image_url", void 0);
ImageURLContentBlockInput = _ts_decorate([
  InputType()
], ImageURLContentBlockInput);
var ImageURLInput = class {
  url;
  detail;
};
__name(ImageURLInput, "ImageURLInput");
_ts_decorate([
  Field(() => String),
  _ts_metadata("design:type", String)
], ImageURLInput.prototype, "url", void 0);
_ts_decorate([
  Field(() => String, {
    nullable: true,
    defaultValue: "auto"
  }),
  _ts_metadata("design:type", String)
], ImageURLInput.prototype, "detail", void 0);
ImageURLInput = _ts_decorate([
  InputType()
], ImageURLInput);
var TextContentBlockInput = class {
  type;
  text;
};
__name(TextContentBlockInput, "TextContentBlockInput");
_ts_decorate([
  Field(() => String),
  _ts_metadata("design:type", String)
], TextContentBlockInput.prototype, "type", void 0);
_ts_decorate([
  Field(() => String),
  _ts_metadata("design:type", String)
], TextContentBlockInput.prototype, "text", void 0);
TextContentBlockInput = _ts_decorate([
  InputType()
], TextContentBlockInput);

// src/graphql/inputs/frontend.input.ts
import { Field as Field3, InputType as InputType3 } from "type-graphql";

// src/graphql/inputs/action.input.ts
import { Field as Field2, InputType as InputType2 } from "type-graphql";
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
var ActionInput = class {
  name;
  description;
  jsonSchema;
};
__name(ActionInput, "ActionInput");
_ts_decorate2([
  Field2(() => String),
  _ts_metadata2("design:type", String)
], ActionInput.prototype, "name", void 0);
_ts_decorate2([
  Field2(() => String),
  _ts_metadata2("design:type", String)
], ActionInput.prototype, "description", void 0);
_ts_decorate2([
  Field2(() => String),
  _ts_metadata2("design:type", String)
], ActionInput.prototype, "jsonSchema", void 0);
ActionInput = _ts_decorate2([
  InputType2()
], ActionInput);

// src/graphql/inputs/frontend.input.ts
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
var FrontendInput = class {
  toDeprecate_fullContext;
  actions;
  url;
};
__name(FrontendInput, "FrontendInput");
_ts_decorate3([
  Field3(() => String, {
    nullable: true
  }),
  _ts_metadata3("design:type", String)
], FrontendInput.prototype, "toDeprecate_fullContext", void 0);
_ts_decorate3([
  Field3(() => [
    ActionInput
  ]),
  _ts_metadata3("design:type", Array)
], FrontendInput.prototype, "actions", void 0);
_ts_decorate3([
  Field3(() => String, {
    nullable: true
  }),
  _ts_metadata3("design:type", String)
], FrontendInput.prototype, "url", void 0);
FrontendInput = _ts_decorate3([
  InputType3()
], FrontendInput);

// src/graphql/inputs/cloud.input.ts
import { Field as Field5, InputType as InputType5 } from "type-graphql";

// src/graphql/inputs/cloud-guardrails.input.ts
import { Field as Field4, InputType as InputType4 } from "type-graphql";
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
var GuardrailsRuleInput = class {
  allowList = [];
  denyList = [];
};
__name(GuardrailsRuleInput, "GuardrailsRuleInput");
_ts_decorate4([
  Field4(() => [
    String
  ], {
    nullable: true
  }),
  _ts_metadata4("design:type", Array)
], GuardrailsRuleInput.prototype, "allowList", void 0);
_ts_decorate4([
  Field4(() => [
    String
  ], {
    nullable: true
  }),
  _ts_metadata4("design:type", Array)
], GuardrailsRuleInput.prototype, "denyList", void 0);
GuardrailsRuleInput = _ts_decorate4([
  InputType4()
], GuardrailsRuleInput);
var GuardrailsInput = class {
  inputValidationRules;
};
__name(GuardrailsInput, "GuardrailsInput");
_ts_decorate4([
  Field4(() => GuardrailsRuleInput, {
    nullable: false
  }),
  _ts_metadata4("design:type", typeof GuardrailsRuleInput === "undefined" ? Object : GuardrailsRuleInput)
], GuardrailsInput.prototype, "inputValidationRules", void 0);
GuardrailsInput = _ts_decorate4([
  InputType4()
], GuardrailsInput);

// src/graphql/inputs/cloud.input.ts
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
var CloudInput = class {
  guardrails;
};
__name(CloudInput, "CloudInput");
_ts_decorate5([
  Field5(() => GuardrailsInput, {
    nullable: true
  }),
  _ts_metadata5("design:type", typeof GuardrailsInput === "undefined" ? Object : GuardrailsInput)
], CloudInput.prototype, "guardrails", void 0);
CloudInput = _ts_decorate5([
  InputType5()
], CloudInput);

// src/graphql/inputs/forwarded-parameters.input.ts
import { Field as Field6, InputType as InputType6 } from "type-graphql";
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
var ForwardedParametersInput = class {
  model;
  maxTokens;
  stop;
  toolChoice;
  toolChoiceFunctionName;
};
__name(ForwardedParametersInput, "ForwardedParametersInput");
_ts_decorate6([
  Field6(() => String, {
    nullable: true
  }),
  _ts_metadata6("design:type", String)
], ForwardedParametersInput.prototype, "model", void 0);
_ts_decorate6([
  Field6(() => Number, {
    nullable: true
  }),
  _ts_metadata6("design:type", Number)
], ForwardedParametersInput.prototype, "maxTokens", void 0);
_ts_decorate6([
  Field6(() => [
    String
  ], {
    nullable: true
  }),
  _ts_metadata6("design:type", Array)
], ForwardedParametersInput.prototype, "stop", void 0);
_ts_decorate6([
  Field6(() => String, {
    nullable: true
  }),
  _ts_metadata6("design:type", typeof String === "undefined" ? Object : String)
], ForwardedParametersInput.prototype, "toolChoice", void 0);
_ts_decorate6([
  Field6(() => String, {
    nullable: true
  }),
  _ts_metadata6("design:type", String)
], ForwardedParametersInput.prototype, "toolChoiceFunctionName", void 0);
ForwardedParametersInput = _ts_decorate6([
  InputType6()
], ForwardedParametersInput);

// src/graphql/inputs/agent-session.input.ts
import { Field as Field7, InputType as InputType7 } from "type-graphql";
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
var AgentSessionInput = class {
  agentName;
  threadId;
  nodeName;
};
__name(AgentSessionInput, "AgentSessionInput");
_ts_decorate7([
  Field7(() => String),
  _ts_metadata7("design:type", String)
], AgentSessionInput.prototype, "agentName", void 0);
_ts_decorate7([
  Field7(() => String, {
    nullable: true
  }),
  _ts_metadata7("design:type", String)
], AgentSessionInput.prototype, "threadId", void 0);
_ts_decorate7([
  Field7(() => String, {
    nullable: true
  }),
  _ts_metadata7("design:type", String)
], AgentSessionInput.prototype, "nodeName", void 0);
AgentSessionInput = _ts_decorate7([
  InputType7()
], AgentSessionInput);

// src/graphql/inputs/agent-state.input.ts
import { Field as Field8, InputType as InputType8 } from "type-graphql";
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
var AgentStateInput = class {
  agentName;
  state;
};
__name(AgentStateInput, "AgentStateInput");
_ts_decorate8([
  Field8(() => String),
  _ts_metadata8("design:type", String)
], AgentStateInput.prototype, "agentName", void 0);
_ts_decorate8([
  Field8(() => String),
  _ts_metadata8("design:type", String)
], AgentStateInput.prototype, "state", void 0);
AgentStateInput = _ts_decorate8([
  InputType8()
], AgentStateInput);

// src/graphql/inputs/generate-copilot-response.input.ts
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
var GenerateCopilotResponseMetadataInput = class {
  requestType;
};
__name(GenerateCopilotResponseMetadataInput, "GenerateCopilotResponseMetadataInput");
_ts_decorate9([
  Field9(() => CopilotRequestType, {
    nullable: true
  }),
  _ts_metadata9("design:type", typeof CopilotRequestType === "undefined" ? Object : CopilotRequestType)
], GenerateCopilotResponseMetadataInput.prototype, "requestType", void 0);
GenerateCopilotResponseMetadataInput = _ts_decorate9([
  InputType9()
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
_ts_decorate9([
  Field9(() => GenerateCopilotResponseMetadataInput, {
    nullable: false
  }),
  _ts_metadata9("design:type", typeof GenerateCopilotResponseMetadataInput === "undefined" ? Object : GenerateCopilotResponseMetadataInput)
], GenerateCopilotResponseInput.prototype, "metadata", void 0);
_ts_decorate9([
  Field9(() => String, {
    nullable: true
  }),
  _ts_metadata9("design:type", String)
], GenerateCopilotResponseInput.prototype, "threadId", void 0);
_ts_decorate9([
  Field9(() => String, {
    nullable: true
  }),
  _ts_metadata9("design:type", String)
], GenerateCopilotResponseInput.prototype, "runId", void 0);
_ts_decorate9([
  Field9(() => [
    MessageInput
  ]),
  _ts_metadata9("design:type", Array)
], GenerateCopilotResponseInput.prototype, "messages", void 0);
_ts_decorate9([
  Field9(() => FrontendInput),
  _ts_metadata9("design:type", typeof FrontendInput === "undefined" ? Object : FrontendInput)
], GenerateCopilotResponseInput.prototype, "frontend", void 0);
_ts_decorate9([
  Field9(() => CloudInput, {
    nullable: true
  }),
  _ts_metadata9("design:type", typeof CloudInput === "undefined" ? Object : CloudInput)
], GenerateCopilotResponseInput.prototype, "cloud", void 0);
_ts_decorate9([
  Field9(() => ForwardedParametersInput, {
    nullable: true
  }),
  _ts_metadata9("design:type", typeof ForwardedParametersInput === "undefined" ? Object : ForwardedParametersInput)
], GenerateCopilotResponseInput.prototype, "forwardedParameters", void 0);
_ts_decorate9([
  Field9(() => AgentSessionInput, {
    nullable: true
  }),
  _ts_metadata9("design:type", typeof AgentSessionInput === "undefined" ? Object : AgentSessionInput)
], GenerateCopilotResponseInput.prototype, "agentSession", void 0);
_ts_decorate9([
  Field9(() => AgentStateInput, {
    nullable: true
  }),
  _ts_metadata9("design:type", typeof AgentStateInput === "undefined" ? Object : AgentStateInput)
], GenerateCopilotResponseInput.prototype, "agentState", void 0);
_ts_decorate9([
  Field9(() => [
    AgentStateInput
  ], {
    nullable: true
  }),
  _ts_metadata9("design:type", Array)
], GenerateCopilotResponseInput.prototype, "agentStates", void 0);
GenerateCopilotResponseInput = _ts_decorate9([
  InputType9()
], GenerateCopilotResponseInput);

// src/graphql/types/copilot-response.type.ts
import { Field as Field11, InterfaceType, ObjectType as ObjectType2 } from "type-graphql";

// src/graphql/types/message-status.type.ts
import { Field as Field10, ObjectType, createUnionType, registerEnumType as registerEnumType2 } from "type-graphql";
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
var MessageStatusCode;
(function(MessageStatusCode2) {
  MessageStatusCode2["Pending"] = "pending";
  MessageStatusCode2["Success"] = "success";
  MessageStatusCode2["Failed"] = "failed";
})(MessageStatusCode || (MessageStatusCode = {}));
registerEnumType2(MessageStatusCode, {
  name: "MessageStatusCode"
});
var BaseMessageStatus = /* @__PURE__ */ __name(class BaseMessageStatus2 {
  code;
}, "BaseMessageStatus");
_ts_decorate10([
  Field10(() => MessageStatusCode),
  _ts_metadata10("design:type", String)
], BaseMessageStatus.prototype, "code", void 0);
BaseMessageStatus = _ts_decorate10([
  ObjectType()
], BaseMessageStatus);
var PendingMessageStatus = class extends BaseMessageStatus {
  code = "pending";
};
__name(PendingMessageStatus, "PendingMessageStatus");
PendingMessageStatus = _ts_decorate10([
  ObjectType()
], PendingMessageStatus);
var SuccessMessageStatus = class extends BaseMessageStatus {
  code = "success";
};
__name(SuccessMessageStatus, "SuccessMessageStatus");
SuccessMessageStatus = _ts_decorate10([
  ObjectType()
], SuccessMessageStatus);
var FailedMessageStatus = class extends BaseMessageStatus {
  code = "failed";
  reason;
};
__name(FailedMessageStatus, "FailedMessageStatus");
_ts_decorate10([
  Field10(() => String),
  _ts_metadata10("design:type", String)
], FailedMessageStatus.prototype, "reason", void 0);
FailedMessageStatus = _ts_decorate10([
  ObjectType()
], FailedMessageStatus);
var MessageStatusUnion = createUnionType({
  name: "MessageStatus",
  types: () => [
    PendingMessageStatus,
    SuccessMessageStatus,
    FailedMessageStatus
  ]
});

// src/graphql/types/copilot-response.type.ts
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
var BaseMessageOutput = /* @__PURE__ */ __name(class BaseMessageOutput2 {
  id;
  createdAt;
  status;
}, "BaseMessageOutput");
_ts_decorate11([
  Field11(() => String),
  _ts_metadata11("design:type", String)
], BaseMessageOutput.prototype, "id", void 0);
_ts_decorate11([
  Field11(() => Date),
  _ts_metadata11("design:type", typeof Date === "undefined" ? Object : Date)
], BaseMessageOutput.prototype, "createdAt", void 0);
_ts_decorate11([
  Field11(() => MessageStatusUnion),
  _ts_metadata11("design:type", Object)
], BaseMessageOutput.prototype, "status", void 0);
BaseMessageOutput = _ts_decorate11([
  InterfaceType({
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
_ts_decorate11([
  Field11(() => MessageRole),
  _ts_metadata11("design:type", typeof MessageRole === "undefined" ? Object : MessageRole)
], TextMessageOutput.prototype, "role", void 0);
_ts_decorate11([
  Field11(() => [
    String
  ]),
  _ts_metadata11("design:type", Array)
], TextMessageOutput.prototype, "content", void 0);
TextMessageOutput = _ts_decorate11([
  ObjectType2({
    implements: BaseMessageOutput
  })
], TextMessageOutput);
var ContentMessageOutput = class {
  role;
  content;
};
__name(ContentMessageOutput, "ContentMessageOutput");
_ts_decorate11([
  Field11(() => MessageRole),
  _ts_metadata11("design:type", typeof MessageRole === "undefined" ? Object : MessageRole)
], ContentMessageOutput.prototype, "role", void 0);
_ts_decorate11([
  Field11(() => [
    String
  ]),
  _ts_metadata11("design:type", Array)
], ContentMessageOutput.prototype, "content", void 0);
ContentMessageOutput = _ts_decorate11([
  ObjectType2({
    implements: BaseMessageOutput
  })
], ContentMessageOutput);
var ActionExecutionMessageOutput = class {
  name;
  scope;
  arguments;
};
__name(ActionExecutionMessageOutput, "ActionExecutionMessageOutput");
_ts_decorate11([
  Field11(() => String),
  _ts_metadata11("design:type", String)
], ActionExecutionMessageOutput.prototype, "name", void 0);
_ts_decorate11([
  Field11(() => ActionExecutionScope),
  _ts_metadata11("design:type", typeof ActionExecutionScope === "undefined" ? Object : ActionExecutionScope)
], ActionExecutionMessageOutput.prototype, "scope", void 0);
_ts_decorate11([
  Field11(() => [
    String
  ]),
  _ts_metadata11("design:type", Array)
], ActionExecutionMessageOutput.prototype, "arguments", void 0);
ActionExecutionMessageOutput = _ts_decorate11([
  ObjectType2({
    implements: BaseMessageOutput
  })
], ActionExecutionMessageOutput);
var ResultMessageOutput = class {
  actionExecutionId;
  actionName;
  result;
};
__name(ResultMessageOutput, "ResultMessageOutput");
_ts_decorate11([
  Field11(() => String),
  _ts_metadata11("design:type", String)
], ResultMessageOutput.prototype, "actionExecutionId", void 0);
_ts_decorate11([
  Field11(() => String),
  _ts_metadata11("design:type", String)
], ResultMessageOutput.prototype, "actionName", void 0);
_ts_decorate11([
  Field11(() => String),
  _ts_metadata11("design:type", String)
], ResultMessageOutput.prototype, "result", void 0);
ResultMessageOutput = _ts_decorate11([
  ObjectType2({
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
_ts_decorate11([
  Field11(() => String),
  _ts_metadata11("design:type", String)
], AgentStateMessageOutput.prototype, "threadId", void 0);
_ts_decorate11([
  Field11(() => String),
  _ts_metadata11("design:type", String)
], AgentStateMessageOutput.prototype, "agentName", void 0);
_ts_decorate11([
  Field11(() => String),
  _ts_metadata11("design:type", String)
], AgentStateMessageOutput.prototype, "nodeName", void 0);
_ts_decorate11([
  Field11(() => String),
  _ts_metadata11("design:type", String)
], AgentStateMessageOutput.prototype, "runId", void 0);
_ts_decorate11([
  Field11(() => Boolean),
  _ts_metadata11("design:type", Boolean)
], AgentStateMessageOutput.prototype, "active", void 0);
_ts_decorate11([
  Field11(() => MessageRole),
  _ts_metadata11("design:type", typeof MessageRole === "undefined" ? Object : MessageRole)
], AgentStateMessageOutput.prototype, "role", void 0);
_ts_decorate11([
  Field11(() => String),
  _ts_metadata11("design:type", String)
], AgentStateMessageOutput.prototype, "state", void 0);
_ts_decorate11([
  Field11(() => Boolean),
  _ts_metadata11("design:type", Boolean)
], AgentStateMessageOutput.prototype, "running", void 0);
AgentStateMessageOutput = _ts_decorate11([
  ObjectType2({
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
_ts_decorate11([
  Field11(() => String),
  _ts_metadata11("design:type", String)
], CopilotResponse.prototype, "threadId", void 0);
_ts_decorate11([
  Field11(() => ResponseStatusUnion),
  _ts_metadata11("design:type", Object)
], CopilotResponse.prototype, "status", void 0);
_ts_decorate11([
  Field11({
    nullable: true
  }),
  _ts_metadata11("design:type", String)
], CopilotResponse.prototype, "runId", void 0);
_ts_decorate11([
  Field11(() => [
    BaseMessageOutput
  ]),
  _ts_metadata11("design:type", Array)
], CopilotResponse.prototype, "messages", void 0);
CopilotResponse = _ts_decorate11([
  ObjectType2()
], CopilotResponse);

// src/graphql/resolvers/copilot.resolver.ts
import { Repeater } from "graphql-yoga";

// src/service-adapters/events.ts
import { of, concat, map, scan as scan2, concatMap, ReplaySubject as ReplaySubject2, firstValueFrom, from } from "rxjs";

// src/lib/telemetry-client.ts
import { TelemetryClient } from "@copilotkit/shared";
var packageJson = require_package();
var telemetryClient = new TelemetryClient({
  packageName: packageJson.name,
  packageVersion: packageJson.version
});
var telemetry_client_default = telemetryClient;

// src/agents/langgraph/event-source.ts
import { ReplaySubject, scan, mergeMap, catchError } from "rxjs";

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
import { randomId } from "@copilotkit/shared";
var RemoteLangGraphEventSource = class {
  eventStream$ = new ReplaySubject();
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
    return this.eventStream$.pipe(scan((acc, event) => {
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
    }), mergeMap((eventWithState) => {
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
    }), catchError((error) => {
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
      const messageId = randomId();
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
  RuntimeEventTypes2["ActionExecutionStart"] = "ActionExecutionStart";
  RuntimeEventTypes2["ActionExecutionArgs"] = "ActionExecutionArgs";
  RuntimeEventTypes2["ActionExecutionEnd"] = "ActionExecutionEnd";
  RuntimeEventTypes2["ActionExecutionResult"] = "ActionExecutionResult";
  RuntimeEventTypes2["AgentStateMessage"] = "AgentStateMessage";
})(RuntimeEventTypes || (RuntimeEventTypes = {}));
var RuntimeEventSubject = class extends ReplaySubject2 {
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
      map((event) => {
        if (event.type === "ActionExecutionStart") {
          if (event.scope !== "passThrough") {
            event.scope = serverSideActions.find((action) => action.name === event.actionName) ? "server" : "client";
          }
        }
        return event;
      }),
      // track state
      scan2((acc, event) => {
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
      concatMap((eventWithState) => {
        if (eventWithState.event.type === "ActionExecutionEnd" && eventWithState.callActionServerSide) {
          const toolCallEventStream$ = new RuntimeEventSubject();
          executeAction(toolCallEventStream$, guardrailsResult$ ? guardrailsResult$ : null, eventWithState.action, eventWithState.args, eventWithState.actionExecutionId, actionInputsWithoutAgents).catch((error) => {
            console.error(error);
          });
          telemetry_client_default.capture("oss.runtime.server_action_executed", {});
          return concat(of(eventWithState.event), toolCallEventStream$);
        } else {
          return of(eventWithState.event);
        }
      })
    );
  }
};
__name(RuntimeEventSource, "RuntimeEventSource");
async function executeAction(eventStream$, guardrailsResult$, action, actionArguments, actionExecutionId, actionInputsWithoutAgents) {
  var _a;
  if (guardrailsResult$) {
    const { status } = await firstValueFrom(guardrailsResult$);
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
    from(stream).subscribe({
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

// src/graphql/resolvers/copilot.resolver.ts
import { GraphQLJSONObject } from "graphql-scalars";
import { plainToInstance } from "class-transformer";
import { GraphQLError } from "graphql";
import { randomId as randomId2 } from "@copilotkit/shared";
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
        throw new GraphQLError("X-CopilotCloud-Public-API-Key header is required");
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
    const responseStatus$ = new ReplaySubject3();
    const interruptStreaming$ = new ReplaySubject3();
    const guardrailsResult$ = new ReplaySubject3();
    let outputMessages = [];
    let resolveOutputMessagesPromise;
    let rejectOutputMessagesPromise;
    const outputMessagesPromise = new Promise((resolve, reject) => {
      resolveOutputMessagesPromise = resolve;
      rejectOutputMessagesPromise = reject;
    });
    logger2.debug("Processing");
    const { eventSource, threadId = randomId2(), runId, serverSideActions, actionInputsWithoutAgents } = await copilotRuntime.processRuntimeRequest({
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
      status: firstValueFrom2(responseStatus$),
      messages: new Repeater(async (pushMessage, stopStreamingMessages) => {
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
                  plainToInstance(TextMessage, {
                    id: randomId2(),
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
          shareReplay(),
          finalize(() => {
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
                  skipWhile((e) => e !== event),
                  // take until the message end event
                  takeWhile((e) => e.type != RuntimeEventTypes.TextMessageEnd)
                );
                const streamingTextStatus = new Subject();
                const messageId = event.messageId;
                pushMessage({
                  id: messageId,
                  status: firstValueFrom2(streamingTextStatus),
                  createdAt: /* @__PURE__ */ new Date(),
                  role: MessageRole.assistant,
                  content: new Repeater(async (pushTextChunk, stopStreamingText) => {
                    logger2.debug("Text message content repeater created");
                    const textChunks = [];
                    let textSubscription;
                    interruptStreaming$.pipe(shareReplay(), take(1), tap(({ reason, messageId: messageId2 }) => {
                      logger2.debug({
                        reason,
                        messageId: messageId2
                      }, "Text streaming interrupted");
                      streamingTextStatus.next(plainToInstance(FailedMessageStatus, {
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
                        outputMessages.push(plainToInstance(TextMessage, {
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
                const actionExecutionArgumentStream = eventStream.pipe(skipWhile((e) => e !== event), takeWhile((e) => e.type != RuntimeEventTypes.ActionExecutionEnd));
                const streamingArgumentsStatus = new Subject();
                pushMessage({
                  id: event.actionExecutionId,
                  status: firstValueFrom2(streamingArgumentsStatus),
                  createdAt: /* @__PURE__ */ new Date(),
                  name: event.actionName,
                  scope: event.scope,
                  arguments: new Repeater(async (pushArgumentsChunk, stopStreamingArguments) => {
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
                        streamingArgumentsStatus.next(plainToInstance(FailedMessageStatus, {
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
                        outputMessages.push(plainToInstance(ActionExecutionMessage, {
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
                  id: randomId2(),
                  status: new SuccessMessageStatus(),
                  createdAt: /* @__PURE__ */ new Date(),
                  actionExecutionId: event.actionExecutionId,
                  actionName: event.actionName,
                  result: event.result
                });
                outputMessages.push(plainToInstance(ResultMessage, {
                  id: randomId2(),
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
                  id: randomId2(),
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
                outputMessages.push(plainToInstance(AgentStateMessage, {
                  id: randomId2(),
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
              await firstValueFrom2(guardrailsResult$);
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
_ts_decorate12([
  Query(() => String),
  _ts_metadata12("design:type", Function),
  _ts_metadata12("design:paramtypes", []),
  _ts_metadata12("design:returntype", Promise)
], CopilotResolver.prototype, "hello", null);
_ts_decorate12([
  Mutation(() => CopilotResponse),
  _ts_param(0, Ctx()),
  _ts_param(1, Arg("data")),
  _ts_param(2, Arg("properties", () => GraphQLJSONObject, {
    nullable: true
  })),
  _ts_metadata12("design:type", Function),
  _ts_metadata12("design:paramtypes", [
    typeof GraphQLContext === "undefined" ? Object : GraphQLContext,
    typeof GenerateCopilotResponseInput === "undefined" ? Object : GenerateCopilotResponseInput,
    typeof CopilotRequestContextProperties === "undefined" ? Object : CopilotRequestContextProperties
  ]),
  _ts_metadata12("design:returntype", Promise)
], CopilotResolver.prototype, "generateCopilotResponse", null);
CopilotResolver = _ts_decorate12([
  Resolver(() => CopilotResponse)
], CopilotResolver);

// src/lib/integrations/shared.ts
import { useDeferStream } from "@graphql-yoga/plugin-defer-stream";

// src/lib/logger.ts
import createPinoLogger from "pino";
import pretty from "pino-pretty";
function createLogger(options) {
  const { level, component } = options || {};
  const stream = pretty({
    colorize: true
  });
  const logger2 = createPinoLogger({
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
  const schema = buildSchemaSync({
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
      useDeferStream()
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
  const yoga = createYoga({
    ...commonConfig,
    graphqlEndpoint: options.endpoint
  });
  return yoga;
}
__name(copilotRuntimeNodeHttpEndpoint, "copilotRuntimeNodeHttpEndpoint");

export {
  telemetry_client_default,
  isLangGraphAgentAction,
  setupRemoteActions,
  RuntimeEventSource,
  createContext,
  buildSchema,
  getCommonConfig,
  copilotRuntimeNodeHttpEndpoint
};
//# sourceMappingURL=chunk-XUOROS5V.mjs.map