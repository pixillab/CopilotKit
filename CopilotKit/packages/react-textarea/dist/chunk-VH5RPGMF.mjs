import {
  useMakeStandardAutosuggestionFunction
} from "./chunk-BG4GF6PP.mjs";
import {
  useMakeStandardInsertionOrEditingFunction
} from "./chunk-VPGMB7K3.mjs";
import {
  BaseCopilotTextarea
} from "./chunk-B7VHFDUU.mjs";
import {
  defaultAutosuggestionsConfig
} from "./chunk-ZTYA6QOT.mjs";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/components/copilot-textarea/copilot-textarea.tsx
import React from "react";
import merge from "lodash.merge";
import { Fragment, jsx } from "react/jsx-runtime";
var CopilotTextarea = React.forwardRef(
  (props, ref) => {
    const _a = props, { autosuggestionsConfig: autosuggestionsConfigUserSpecified } = _a, forwardedProps = __objRest(_a, ["autosuggestionsConfig"]);
    const autosuggestionsConfig = merge(
      defaultAutosuggestionsConfig,
      autosuggestionsConfigUserSpecified
    );
    const autosuggestionsFunction = useMakeStandardAutosuggestionFunction(
      autosuggestionsConfig.textareaPurpose,
      autosuggestionsConfig.contextCategories,
      autosuggestionsConfig.chatApiConfigs.suggestionsApiConfig
    );
    const insertionOrEditingFunction = useMakeStandardInsertionOrEditingFunction(
      autosuggestionsConfig.textareaPurpose,
      autosuggestionsConfig.contextCategories,
      autosuggestionsConfig.chatApiConfigs.insertionApiConfig,
      autosuggestionsConfig.chatApiConfigs.editingApiConfig
    );
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
      BaseCopilotTextarea,
      __spreadProps(__spreadValues({
        ref
      }, forwardedProps), {
        baseAutosuggestionsConfig: __spreadProps(__spreadValues({}, autosuggestionsConfig), {
          apiConfig: {
            insertionOrEditingFunction,
            autosuggestionsFunction
          }
        })
      })
    ) });
  }
);

export {
  CopilotTextarea
};
//# sourceMappingURL=chunk-VH5RPGMF.mjs.map