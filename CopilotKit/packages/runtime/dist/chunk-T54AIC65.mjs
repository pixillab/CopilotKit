import {
  copilotRuntimeNodeHttpEndpoint,
  telemetry_client_default
} from "./chunk-NJN56U66.mjs";
import {
  __name
} from "./chunk-44O2JGUY.mjs";

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

export {
  copilotRuntimeNodeExpressEndpoint
};
//# sourceMappingURL=chunk-T54AIC65.mjs.map