import {
  defaultEditingApiConfig
} from "./chunk-EJGGLWWR.mjs";
import {
  defaultInsertionsApiConfig
} from "./chunk-MCNXIA4Q.mjs";
import {
  defaultSuggestionsApiConfig
} from "./chunk-GUZIMGGZ.mjs";
import {
  defaultBaseAutosuggestionsConfig
} from "./chunk-4CVSOOJY.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/types/autosuggestions-config/autosuggestions-config.tsx
import { defaultCopilotContextCategories } from "@copilotkit/react-core";
var defaultAutosuggestionsConfig = __spreadProps(__spreadValues({}, defaultBaseAutosuggestionsConfig), {
  contextCategories: defaultCopilotContextCategories,
  chatApiConfigs: {
    suggestionsApiConfig: defaultSuggestionsApiConfig,
    insertionApiConfig: defaultInsertionsApiConfig,
    editingApiConfig: defaultEditingApiConfig
  }
});

export {
  defaultAutosuggestionsConfig
};
//# sourceMappingURL=chunk-ZTYA6QOT.mjs.map