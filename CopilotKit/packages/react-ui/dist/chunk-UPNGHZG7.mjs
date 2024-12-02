import {
  Markdown
} from "./chunk-YQ3D5IQV.mjs";
import {
  useChatContext
} from "./chunk-CBBFRI3Q.mjs";

// src/components/chat/messages/RenderContentMessage.tsx
import { jsx } from "react/jsx-runtime";
function RenderContentMessage(props) {
  var _a, _b, _c;
  const { message, inProgress, index, isCurrentMessage } = props;
  const { icons } = useChatContext();
  if (message.isContentMessage()) {
    const content = ((_c = (_b = (_a = message.content) == null ? void 0 : _a[0]) == null ? void 0 : _b.textContent) == null ? void 0 : _c.text) || "No content available.";
    if (message.role === "user") {
      return /* @__PURE__ */ jsx(
        "div",
        {
          "data-message-role": "user",
          className: "copilotKitMessage copilotKitUserMessage",
          children: content
        },
        index
      );
    } else if (message.role == "assistant") {
      return /* @__PURE__ */ jsx(
        "div",
        {
          "data-message-role": "assistant",
          className: `copilotKitMessage copilotKitAssistantMessage`,
          children: isCurrentMessage && inProgress && !message.content ? icons.spinnerIcon : /* @__PURE__ */ jsx(Markdown, { content })
        },
        index
      );
    }
  }
}

export {
  RenderContentMessage
};
//# sourceMappingURL=chunk-UPNGHZG7.mjs.map