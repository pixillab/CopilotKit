import {
  getCommonConfig,
  telemetry_client_default
} from "./chunk-UFW7HT57.mjs";
import {
  __name
} from "./chunk-44O2JGUY.mjs";

// src/lib/integrations/nextjs/app-router.ts
import { createYoga } from "graphql-yoga";
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
  const logger = commonConfig.logging;
  logger.debug("Creating NextJS App Router endpoint");
  const yoga = createYoga({
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
import { createYoga as createYoga2 } from "graphql-yoga";
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
  const logger = commonConfig.logging;
  logger.debug("Creating NextJS Pages Router endpoint");
  const yoga = createYoga2({
    ...commonConfig,
    graphqlEndpoint: options.endpoint
  });
  return yoga;
}
__name(copilotRuntimeNextJSPagesRouterEndpoint, "copilotRuntimeNextJSPagesRouterEndpoint");

export {
  copilotRuntimeNextJSAppRouterEndpoint,
  config,
  copilotRuntimeNextJSPagesRouterEndpoint
};
//# sourceMappingURL=chunk-LJ2E7FZ7.mjs.map