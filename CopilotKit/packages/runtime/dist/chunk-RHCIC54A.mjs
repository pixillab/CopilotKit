import {
  copilotRuntimeNodeHttpEndpoint,
  telemetry_client_default
} from "./chunk-AWAZOJV4.mjs";
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
//# sourceMappingURL=chunk-RHCIC54A.mjs.map