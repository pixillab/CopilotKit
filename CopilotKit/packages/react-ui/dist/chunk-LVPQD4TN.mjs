import {
  CopilotModal
} from "./chunk-22XHZ4BP.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/components/chat/Sidebar.tsx
import { useState } from "react";
import { jsx } from "react/jsx-runtime";
function CopilotSidebar(props) {
  props = __spreadProps(__spreadValues({}, props), {
    className: props.className ? props.className + " copilotKitSidebar" : "copilotKitSidebar"
  });
  const [expandedClassName, setExpandedClassName] = useState(
    props.defaultOpen ? "sidebarExpanded" : ""
  );
  const onSetOpen = (open) => {
    var _a;
    (_a = props.onSetOpen) == null ? void 0 : _a.call(props, open);
    setExpandedClassName(open ? "sidebarExpanded" : "");
  };
  return /* @__PURE__ */ jsx("div", { className: `copilotKitSidebarContentWrapper ${expandedClassName}`, children: /* @__PURE__ */ jsx(CopilotModal, __spreadProps(__spreadValues(__spreadValues({}, props), { onSetOpen }), { children: props.children })) });
}

export {
  CopilotSidebar
};
//# sourceMappingURL=chunk-LVPQD4TN.mjs.map