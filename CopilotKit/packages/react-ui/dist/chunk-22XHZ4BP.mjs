import {
  Window
} from "./chunk-YAGE7RCE.mjs";
import {
  Button
} from "./chunk-RQNJNK2W.mjs";
import {
  CopilotChat
} from "./chunk-P7UVDUSK.mjs";
import {
  Messages
} from "./chunk-Z4PIJ57Y.mjs";
import {
  ResponseButton
} from "./chunk-3XAXY2Z3.mjs";
import {
  Header
} from "./chunk-VEC45H6Q.mjs";
import {
  Input
} from "./chunk-DYXDQS3E.mjs";
import {
  ChatContextProvider
} from "./chunk-CBBFRI3Q.mjs";

// src/components/chat/Modal.tsx
import React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var CopilotModal = ({
  instructions,
  defaultOpen = false,
  clickOutsideToClose = true,
  hitEscapeToClose = true,
  onSetOpen,
  onSubmitMessage,
  shortcut = "/",
  icons,
  labels,
  makeSystemMessage,
  showResponseButton = true,
  onInProgress,
  Window: Window2 = Window,
  Button: Button2 = Button,
  Header: Header2 = Header,
  Messages: Messages2 = Messages,
  Input: Input2 = Input,
  ResponseButton: ResponseButton2 = ResponseButton,
  className,
  children
}) => {
  const [openState, setOpenState] = React.useState(defaultOpen);
  const setOpen = (open) => {
    onSetOpen == null ? void 0 : onSetOpen(open);
    setOpenState(open);
  };
  return /* @__PURE__ */ jsxs(ChatContextProvider, { icons, labels, open: openState, setOpen, children: [
    children,
    /* @__PURE__ */ jsxs("div", { className, children: [
      /* @__PURE__ */ jsx(Button2, {}),
      /* @__PURE__ */ jsxs(
        Window2,
        {
          clickOutsideToClose,
          shortcut,
          hitEscapeToClose,
          children: [
            /* @__PURE__ */ jsx(Header2, {}),
            /* @__PURE__ */ jsx(
              CopilotChat,
              {
                instructions,
                onSubmitMessage,
                makeSystemMessage,
                showResponseButton,
                onInProgress,
                Messages: Messages2,
                Input: Input2,
                ResponseButton: ResponseButton2
              }
            )
          ]
        }
      )
    ] })
  ] });
};

export {
  CopilotModal
};
//# sourceMappingURL=chunk-22XHZ4BP.mjs.map