"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  COPILOTKIT_VERSION: () => COPILOTKIT_VERSION,
  COPILOT_CLOUD_API_URL: () => COPILOT_CLOUD_API_URL,
  COPILOT_CLOUD_CHAT_URL: () => COPILOT_CLOUD_CHAT_URL,
  COPILOT_CLOUD_PUBLIC_API_KEY_HEADER: () => COPILOT_CLOUD_PUBLIC_API_KEY_HEADER,
  COPILOT_CLOUD_VERSION: () => COPILOT_CLOUD_VERSION,
  TelemetryClient: () => TelemetryClient,
  actionParametersToJsonSchema: () => actionParametersToJsonSchema,
  randomId: () => randomId
});
module.exports = __toCommonJS(src_exports);

// src/utils/json-schema.ts
function actionParametersToJsonSchema(actionParameters) {
  let parameters = {};
  for (let parameter of actionParameters || []) {
    parameters[parameter.name] = convertAttribute(parameter);
  }
  let requiredParameterNames = [];
  for (let arg of actionParameters || []) {
    if (arg.required !== false) {
      requiredParameterNames.push(arg.name);
    }
  }
  return {
    type: "object",
    properties: parameters,
    required: requiredParameterNames
  };
}
function convertAttribute(attribute) {
  var _a, _b, _c;
  switch (attribute.type) {
    case "string":
      return {
        type: "string",
        description: attribute.description,
        ...attribute.enum && { enum: attribute.enum }
      };
    case "number":
    case "boolean":
      return {
        type: attribute.type,
        description: attribute.description
      };
    case "object":
    case "object[]":
      const properties = (_a = attribute.attributes) == null ? void 0 : _a.reduce(
        (acc, attr) => {
          acc[attr.name] = convertAttribute(attr);
          return acc;
        },
        {}
      );
      const required = (_b = attribute.attributes) == null ? void 0 : _b.filter((attr) => attr.required !== false).map((attr) => attr.name);
      if (attribute.type === "object[]") {
        return {
          type: "array",
          items: {
            type: "object",
            ...properties && { properties },
            ...required && required.length > 0 && { required }
          },
          description: attribute.description
        };
      }
      return {
        type: "object",
        description: attribute.description,
        ...properties && { properties },
        ...required && required.length > 0 && { required }
      };
    default:
      if ((_c = attribute.type) == null ? void 0 : _c.endsWith("[]")) {
        const itemType = attribute.type.slice(0, -2);
        return {
          type: "array",
          items: { type: itemType },
          description: attribute.description
        };
      }
      return {
        type: "string",
        description: attribute.description
      };
  }
}

// src/utils/random-id.ts
var import_uuid = require("uuid");
function randomId() {
  return "ck-" + (0, import_uuid.v4)();
}

// src/constants/index.ts
var COPILOT_CLOUD_API_URL = "https://api.copilotkit.ai";
var COPILOT_CLOUD_VERSION = "v1";
var COPILOT_CLOUD_CHAT_URL = `${COPILOT_CLOUD_API_URL}/copilotkit/${COPILOT_CLOUD_VERSION}`;
var COPILOT_CLOUD_PUBLIC_API_KEY_HEADER = "X-CopilotCloud-Public-Api-Key";

// src/telemetry/telemetry-client.ts
var import_analytics_node = require("@segment/analytics-node");

// src/telemetry/utils.ts
var import_chalk = __toESM(require("chalk"));
function flattenObject(obj, parentKey = "", res = {}) {
  for (let key in obj) {
    const propName = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}

// src/telemetry/telemetry-client.ts
var import_uuid2 = require("uuid");
var TelemetryClient = class {
  constructor({
    packageName,
    packageVersion,
    telemetryDisabled,
    telemetryBaseUrl,
    sampleRate
  }) {
    this.globalProperties = {};
    this.cloudConfiguration = null;
    this.telemetryDisabled = false;
    this.sampleRate = 0.05;
    this.anonymousId = `anon_${(0, import_uuid2.v4)()}`;
    this.packageName = packageName;
    this.packageVersion = packageVersion;
    this.telemetryDisabled = telemetryDisabled || process.env.COPILOTKIT_TELEMETRY_DISABLED === "true" || process.env.COPILOTKIT_TELEMETRY_DISABLED === "1" || process.env.DO_NOT_TRACK === "true" || process.env.DO_NOT_TRACK === "1";
    if (this.telemetryDisabled) {
      return;
    }
    this.setSampleRate(sampleRate);
    const writeKey = process.env.COPILOTKIT_SEGMENT_WRITE_KEY || "n7XAZtQCGS2v1vvBy3LgBCv2h3Y8whja";
    this.segment = new import_analytics_node.Analytics({
      writeKey
    });
    this.setGlobalProperties({
      "copilotkit.package.name": packageName,
      "copilotkit.package.version": packageVersion
    });
  }
  shouldSendEvent() {
    const randomNumber = Math.random();
    return randomNumber < this.sampleRate;
  }
  async capture(event, properties) {
    if (!this.shouldSendEvent() || !this.segment) {
      return;
    }
    const flattenedProperties = flattenObject(properties);
    const propertiesWithGlobal = {
      ...this.globalProperties,
      ...flattenedProperties
    };
    const orderedPropertiesWithGlobal = Object.keys(propertiesWithGlobal).sort().reduce(
      (obj, key) => {
        obj[key] = propertiesWithGlobal[key];
        return obj;
      },
      {}
    );
    this.segment.track({
      anonymousId: this.anonymousId,
      event,
      properties: { ...orderedPropertiesWithGlobal }
    });
  }
  setGlobalProperties(properties) {
    const flattenedProperties = flattenObject(properties);
    this.globalProperties = { ...this.globalProperties, ...flattenedProperties };
  }
  setCloudConfiguration(properties) {
    this.cloudConfiguration = properties;
    this.setGlobalProperties({
      cloud: {
        publicApiKey: properties.publicApiKey,
        baseUrl: properties.baseUrl
      }
    });
  }
  setSampleRate(sampleRate) {
    let _sampleRate;
    _sampleRate = sampleRate ?? 0.05;
    if (process.env.COPILOTKIT_TELEMETRY_SAMPLE_RATE) {
      _sampleRate = parseFloat(process.env.COPILOTKIT_TELEMETRY_SAMPLE_RATE);
    }
    if (_sampleRate < 0 || _sampleRate > 1) {
      throw new Error("Sample rate must be between 0 and 1");
    }
    this.sampleRate = _sampleRate;
    this.setGlobalProperties({
      sampleRate: this.sampleRate,
      sampleRateAdjustmentFactor: 1 - this.sampleRate
    });
  }
};

// package.json
var version = "1.3.15-pixil.3";

// src/index.ts
var COPILOTKIT_VERSION = version;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  COPILOTKIT_VERSION,
  COPILOT_CLOUD_API_URL,
  COPILOT_CLOUD_CHAT_URL,
  COPILOT_CLOUD_PUBLIC_API_KEY_HEADER,
  COPILOT_CLOUD_VERSION,
  TelemetryClient,
  actionParametersToJsonSchema,
  randomId
});
//# sourceMappingURL=index.js.map