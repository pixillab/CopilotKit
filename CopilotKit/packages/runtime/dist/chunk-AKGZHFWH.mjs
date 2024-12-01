import {
  copilotRuntimeNodeHttpEndpoint,
  telemetry_client_default
} from "./chunk-AWAZOJV4.mjs";
import {
  __name
} from "./chunk-44O2JGUY.mjs";

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

export {
  copilotRuntimeNestEndpoint
};
//# sourceMappingURL=chunk-AKGZHFWH.mjs.map