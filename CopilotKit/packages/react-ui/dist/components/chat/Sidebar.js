"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/components/chat/Sidebar.tsx
var Sidebar_exports = {};
__export(Sidebar_exports, {
  CopilotSidebar: () => CopilotSidebar
});
module.exports = __toCommonJS(Sidebar_exports);
var import_react13 = require("react");

// src/components/chat/Modal.tsx
var import_react12 = __toESM(require("react"));

// src/components/chat/ChatContext.tsx
var import_react = __toESM(require("react"));

// src/components/chat/Icons.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var OpenIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "24",
    height: "24",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { transform: "translate(24, 0) scale(-1, 1)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        fillRule: "evenodd",
        d: "M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z",
        clipRule: "evenodd"
      }
    ) })
  }
);
var CloseIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    width: "24",
    height: "24",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" })
  }
);
var HeaderCloseIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    width: "24",
    height: "24",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" })
  }
);
var SendIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    width: "24",
    height: "24",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      }
    )
  }
);
var SpinnerIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    style: {
      animation: "copilotKitSpinAnimation 1s linear infinite",
      color: "rgb(107 114 128)"
    },
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "circle",
        {
          style: { opacity: 0.25 },
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          style: { opacity: 0.75 },
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }
      )
    ]
  }
);
var SmallSpinnerIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    style: {
      animation: "copilotKitSpinAnimation 1s linear infinite"
    },
    width: "13",
    height: "13",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "circle",
        {
          style: { opacity: 0.25 },
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          style: { opacity: 0.75 },
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }
      )
    ]
  }
);
var ActivityIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    style: {
      display: "inline-block",
      marginLeft: "0.25rem",
      marginRight: "0.25rem"
    },
    height: "24",
    width: "24",
    viewBox: "0 0 27 27",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { className: "copilotKitActivityDot1", cx: "4", cy: "12", r: "3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { className: "copilotKitActivityDot1 copilotKitActivityDot2", cx: "12", cy: "12", r: "3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { className: "copilotKitActivityDot1 copilotKitActivityDot3", cx: "20", cy: "12", r: "3" })
    ]
  }
);
function CheckIcon(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    __spreadProps(__spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      style: { height: "1rem", width: "1rem" },
      className
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" })
    })
  );
}
function DownloadIcon(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    __spreadProps(__spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      style: { height: "1rem", width: "1rem" },
      className
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0Zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 132.69V40a8 8 0 0 0-16 0v92.69l-26.34-26.35a8 8 0 0 0-11.32 11.32Z" })
    })
  );
}
function CopyIcon(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    __spreadProps(__spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      style: { height: "1rem", width: "1rem" },
      className
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" })
    })
  );
}
var StopIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 256",
    fill: "currentColor",
    style: { height: "1rem", width: "1rem" },
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm24-120h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8Zm-8 48h-32v-32h32Z" })
  }
);
var RegenerateIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 256",
    fill: "currentColor",
    style: { height: "1rem", width: "1rem" },
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M197.67 186.37a8 8 0 0 1 0 11.29C196.58 198.73 170.82 224 128 224c-37.39 0-64.53-22.4-80-39.85V208a8 8 0 0 1-16 0v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16H55.44C67.76 183.35 93 208 128 208c36 0 58.14-21.46 58.36-21.68a8 8 0 0 1 11.31.05ZM216 40a8 8 0 0 0-8 8v23.85C192.53 54.4 165.39 32 128 32c-42.82 0-68.58 25.27-69.66 26.34a8 8 0 0 0 11.3 11.34C69.86 69.46 92 48 128 48c35 0 60.24 24.65 72.56 40H168a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Z" })
  }
);
var PushToTalkIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
      }
    )
  }
);

// src/components/chat/ChatContext.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var ChatContext = import_react.default.createContext(void 0);
function useChatContext() {
  const context = import_react.default.useContext(ChatContext);
  if (context === void 0) {
    throw new Error(
      "Context not found. Did you forget to wrap your app in a <ChatContextProvider> component?"
    );
  }
  return context;
}
var ChatContextProvider = ({
  // temperature,
  // instructions,
  // maxFeedback,
  labels,
  icons,
  children,
  open,
  setOpen
}) => {
  const memoizedLabels = (0, import_react.useMemo)(
    () => __spreadValues(__spreadValues({}, {
      initial: "",
      title: "CopilotKit",
      placeholder: "Type a message...",
      error: "\u274C An error occurred. Please try again.",
      stopGenerating: "Stop generating",
      regenerateResponse: "Regenerate response"
    }), labels),
    [labels]
  );
  const memoizedIcons = (0, import_react.useMemo)(
    () => __spreadValues(__spreadValues({}, {
      openIcon: OpenIcon,
      closeIcon: CloseIcon,
      headerCloseIcon: HeaderCloseIcon,
      sendIcon: SendIcon,
      activityIcon: ActivityIcon,
      spinnerIcon: SpinnerIcon,
      stopIcon: StopIcon,
      regenerateIcon: RegenerateIcon,
      pushToTalkIcon: PushToTalkIcon
    }), icons),
    [icons]
  );
  const context = (0, import_react.useMemo)(
    () => ({
      labels: memoizedLabels,
      icons: memoizedIcons,
      open,
      setOpen
    }),
    [memoizedLabels, memoizedIcons, open, setOpen]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ChatContext.Provider, { value: context, children });
};

// src/components/chat/Window.tsx
var import_react2 = __toESM(require("react"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var Window = ({
  children,
  clickOutsideToClose,
  shortcut,
  hitEscapeToClose
}) => {
  const windowRef = import_react2.default.useRef(null);
  const { open, setOpen } = useChatContext();
  const handleClickOutside = (0, import_react2.useCallback)(
    (event) => {
      var _a;
      if (!clickOutsideToClose) {
        return;
      }
      const parentElement = (_a = windowRef.current) == null ? void 0 : _a.parentElement;
      let className = "";
      if (event.target instanceof HTMLElement) {
        className = event.target.className;
      }
      if (open && parentElement && !parentElement.contains(event.target) && // prevent closing the window when clicking on the debug menu
      !className.includes("copilotKitDebugMenu")) {
        setOpen(false);
      }
    },
    [clickOutsideToClose, open, setOpen]
  );
  const handleKeyDown = (0, import_react2.useCallback)(
    (event) => {
      var _a;
      const target = event.target;
      const isInput = target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable;
      const isDescendantOfWrapper = (_a = windowRef.current) == null ? void 0 : _a.contains(target);
      if (open && event.key === "Escape" && (!isInput || isDescendantOfWrapper) && hitEscapeToClose) {
        setOpen(false);
      } else if (event.key === shortcut && (isMacOS() && event.metaKey || !isMacOS() && event.ctrlKey) && (!isInput || isDescendantOfWrapper)) {
        setOpen(!open);
      }
    },
    [hitEscapeToClose, shortcut, open, setOpen]
  );
  const adjustForMobile = (0, import_react2.useCallback)(() => {
    const copilotKitWindow = windowRef.current;
    const vv = window.visualViewport;
    if (!copilotKitWindow || !vv) {
      return;
    }
    if (window.innerWidth < 640 && open) {
      copilotKitWindow.style.height = `${vv.height}px`;
      copilotKitWindow.style.left = `${vv.offsetLeft}px`;
      copilotKitWindow.style.top = `${vv.offsetTop}px`;
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = `${window.innerHeight}px`;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.body.addEventListener("touchmove", preventScroll, {
        passive: false
      });
    } else {
      copilotKitWindow.style.height = "";
      copilotKitWindow.style.left = "";
      copilotKitWindow.style.top = "";
      document.body.style.position = "";
      document.body.style.height = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.top = "";
      document.body.style.touchAction = "";
      document.body.removeEventListener("touchmove", preventScroll);
    }
  }, [open]);
  (0, import_react2.useEffect)(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", adjustForMobile);
      adjustForMobile();
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", adjustForMobile);
      }
    };
  }, [adjustForMobile, handleClickOutside, handleKeyDown]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `copilotKitWindow${open ? " open" : ""}`, ref: windowRef, children });
};
var preventScroll = (event) => {
  let targetElement = event.target;
  const hasParentWithClass = (element, className) => {
    while (element && element !== document.body) {
      if (element.classList.contains(className)) {
        return true;
      }
      element = element.parentElement;
    }
    return false;
  };
  if (!hasParentWithClass(targetElement, "copilotKitMessages")) {
    event.preventDefault();
  }
};
function isMacOS() {
  return /Mac|iMac|Macintosh/i.test(navigator.userAgent);
}

// src/components/chat/Button.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Button = ({}) => {
  const { open, setOpen, icons } = useChatContext();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { onClick: () => setOpen(!open), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "button",
    {
      className: `copilotKitButton ${open ? "open" : ""}`,
      "aria-label": open ? "Close Chat" : "Open Chat",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "copilotKitButtonIcon copilotKitButtonIconOpen", children: icons.openIcon }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "copilotKitButtonIcon copilotKitButtonIconClose", children: icons.closeIcon })
      ]
    }
  ) });
};

// src/components/chat/Header.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var Header = ({}) => {
  const { setOpen, icons, labels } = useChatContext();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "copilotKitHeader", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: labels.title }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { onClick: () => setOpen(false), "aria-label": "Close", children: icons.headerCloseIcon })
  ] });
};

// src/components/chat/Messages.tsx
var import_react3 = __toESM(require("react"));
var import_runtime_client_gql = require("@copilotkit/runtime-client-gql");
var import_jsx_runtime6 = require("react/jsx-runtime");
var Messages = ({
  messages,
  inProgress,
  children,
  RenderTextMessage: RenderTextMessage2,
  RenderContentMessage: RenderContentMessage2,
  RenderActionExecutionMessage: RenderActionExecutionMessage2,
  RenderAgentStateMessage: RenderAgentStateMessage2,
  RenderResultMessage: RenderResultMessage2
}) => {
  const context = useChatContext();
  const initialMessages = (0, import_react3.useMemo)(
    () => makeInitialMessages(context.labels.initial),
    [context.labels.initial]
  );
  messages = [...initialMessages, ...messages];
  const actionResults = {};
  for (let i = 0; i < messages.length; i++) {
    if (messages[i].isActionExecutionMessage()) {
      const id = messages[i].id;
      const resultMessage = messages.find(
        (message) => message.isResultMessage() && message.actionExecutionId === id
      );
      if (resultMessage) {
        actionResults[id] = import_runtime_client_gql.ResultMessage.decodeResult(resultMessage.result || "");
      }
    }
  }
  const messagesEndRef = import_react3.default.useRef(null);
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "auto"
      });
    }
  };
  (0, import_react3.useEffect)(() => {
    scrollToBottom();
  }, [messages]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "copilotKitMessages", children: [
    messages.map((message, index) => {
      const isCurrentMessage = index === messages.length - 1;
      if (message.isTextMessage()) {
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          RenderTextMessage2,
          {
            message,
            inProgress,
            index,
            isCurrentMessage
          },
          index
        );
      } else if (message.isContentMessage()) {
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          RenderContentMessage2,
          {
            message,
            inProgress,
            index,
            isCurrentMessage
          },
          index
        );
      } else if (message.isActionExecutionMessage()) {
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          RenderActionExecutionMessage2,
          {
            message,
            inProgress,
            index,
            isCurrentMessage,
            actionResult: actionResults[message.id]
          },
          index
        );
      } else if (message.isAgentStateMessage()) {
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          RenderAgentStateMessage2,
          {
            message,
            inProgress,
            index,
            isCurrentMessage
          },
          index
        );
      } else if (message.isResultMessage()) {
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          RenderResultMessage2,
          {
            message,
            inProgress,
            index,
            isCurrentMessage
          },
          index
        );
      }
    }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("footer", { ref: messagesEndRef, children })
  ] });
};
function makeInitialMessages(initial) {
  let initialArray = [];
  if (initial) {
    if (Array.isArray(initial)) {
      initialArray.push(...initial);
    } else {
      initialArray.push(initial);
    }
  }
  return initialArray.map(
    (message) => new import_runtime_client_gql.TextMessage({
      role: import_runtime_client_gql.Role.Assistant,
      content: message
    })
  );
}

// src/components/chat/Input.tsx
var import_react6 = require("react");

// src/components/chat/Textarea.tsx
var import_react4 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var AutoResizingTextarea = (0, import_react4.forwardRef)(
  ({ maxRows = 1, placeholder, value, onChange, onKeyDown, autoFocus }, ref) => {
    const internalTextareaRef = (0, import_react4.useRef)(null);
    const [maxHeight, setMaxHeight] = (0, import_react4.useState)(0);
    (0, import_react4.useImperativeHandle)(ref, () => internalTextareaRef.current);
    (0, import_react4.useEffect)(() => {
      const calculateMaxHeight = () => {
        const textarea = internalTextareaRef.current;
        if (textarea) {
          textarea.style.height = "auto";
          const singleRowHeight = textarea.scrollHeight;
          setMaxHeight(singleRowHeight * maxRows);
          if (autoFocus) {
            textarea.focus();
          }
        }
      };
      calculateMaxHeight();
    }, [maxRows]);
    (0, import_react4.useEffect)(() => {
      const textarea = internalTextareaRef.current;
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
      }
    }, [value, maxHeight]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "textarea",
      {
        ref: internalTextareaRef,
        value,
        onChange,
        onKeyDown,
        placeholder,
        style: {
          overflow: "auto",
          resize: "none",
          maxHeight: `${maxHeight}px`
        },
        rows: 1
      }
    );
  }
);
var Textarea_default = AutoResizingTextarea;

// src/hooks/use-push-to-talk.tsx
var import_react_core = require("@copilotkit/react-core");
var import_react5 = require("react");
var startRecording = (mediaStreamRef, mediaRecorderRef, audioContextRef, recordedChunks, onStop) => __async(void 0, null, function* () {
  if (!mediaStreamRef.current || !audioContextRef.current) {
    mediaStreamRef.current = yield navigator.mediaDevices.getUserMedia({ audio: true });
    audioContextRef.current = new window.AudioContext();
    yield audioContextRef.current.resume();
  }
  mediaRecorderRef.current = new MediaRecorder(mediaStreamRef.current);
  mediaRecorderRef.current.start(1e3);
  mediaRecorderRef.current.ondataavailable = (event) => {
    recordedChunks.push(event.data);
  };
  mediaRecorderRef.current.onstop = onStop;
});
var stopRecording = (mediaRecorderRef) => {
  if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
    mediaRecorderRef.current.stop();
  }
};
var transcribeAudio = (recordedChunks, transcribeAudioUrl) => __async(void 0, null, function* () {
  const completeBlob = new Blob(recordedChunks, { type: "audio/mp4" });
  const formData = new FormData();
  formData.append("file", completeBlob, "recording.mp4");
  const response = yield fetch(transcribeAudioUrl, {
    method: "POST",
    body: formData
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  const transcription = yield response.json();
  return transcription.text;
});
var playAudioResponse = (text, textToSpeechUrl, audioContext, contentMessages) => {
  const encodedText = encodeURIComponent(text);
  const url = `${textToSpeechUrl}?text=${encodedText}`;
  fetch(url).then((response) => response.arrayBuffer()).then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer)).then((audioBuffer) => {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start(0);
    contentMessages.forEach((contentMessage) => {
      console.log("Handling content message:", contentMessage.content[0].textContent);
    });
  }).catch((error) => {
    console.error("Error with decoding audio data", error);
  });
};
var usePushToTalk = ({
  sendFunction,
  inProgress
}) => {
  const [pushToTalkState, setPushToTalkState] = (0, import_react5.useState)("idle");
  const mediaStreamRef = (0, import_react5.useRef)(null);
  const audioContextRef = (0, import_react5.useRef)(null);
  const mediaRecorderRef = (0, import_react5.useRef)(null);
  const recordedChunks = (0, import_react5.useRef)([]);
  const generalContext = (0, import_react_core.useCopilotContext)();
  const messagesContext = (0, import_react_core.useCopilotMessagesContext)();
  const context = __spreadValues(__spreadValues({}, generalContext), messagesContext);
  const [startReadingFromMessageId, setStartReadingFromMessageId] = (0, import_react5.useState)(null);
  (0, import_react5.useEffect)(() => {
    if (pushToTalkState === "recording") {
      startRecording(
        mediaStreamRef,
        mediaRecorderRef,
        audioContextRef,
        recordedChunks.current,
        () => {
          setPushToTalkState("transcribing");
        }
      );
    } else {
      stopRecording(mediaRecorderRef);
      if (pushToTalkState === "transcribing") {
        transcribeAudio(recordedChunks.current, context.copilotApiConfig.transcribeAudioUrl).then(
          (transcription) => __async(void 0, null, function* () {
            recordedChunks.current = [];
            setPushToTalkState("idle");
            const message = yield sendFunction(transcription);
            setStartReadingFromMessageId(message.id);
          })
        );
      }
    }
    return () => {
      stopRecording(mediaRecorderRef);
    };
  }, [pushToTalkState]);
  (0, import_react5.useEffect)(() => {
    if (inProgress === false && startReadingFromMessageId) {
      const lastMessageIndex = context.messages.findIndex(
        (message) => message.id === startReadingFromMessageId
      );
      const messagesAfterLast = context.messages.slice(lastMessageIndex + 1);
      const textMessages = messagesAfterLast.filter(
        (message) => message.isTextMessage() && message.role === "assistant"
      );
      const contentMessages = messagesAfterLast.filter(
        (message) => message.isContentMessage()
      );
      const text = textMessages.map((message) => message.content).join("\n");
      playAudioResponse(
        text,
        context.copilotApiConfig.textToSpeechUrl,
        audioContextRef.current,
        contentMessages
      );
      setStartReadingFromMessageId(null);
    }
  }, [startReadingFromMessageId, inProgress]);
  return { pushToTalkState, setPushToTalkState };
};

// src/components/chat/Input.tsx
var import_react_core2 = require("@copilotkit/react-core");
var import_jsx_runtime8 = require("react/jsx-runtime");
var Input = ({ inProgress, onSend, isVisible = false }) => {
  const context = useChatContext();
  const copilotContext = (0, import_react_core2.useCopilotContext)();
  const pushToTalkConfigured = copilotContext.copilotApiConfig.textToSpeechUrl !== void 0 && copilotContext.copilotApiConfig.transcribeAudioUrl !== void 0;
  const textareaRef = (0, import_react6.useRef)(null);
  const handleDivClick = (event) => {
    var _a;
    if (event.target !== event.currentTarget)
      return;
    (_a = textareaRef.current) == null ? void 0 : _a.focus();
  };
  const [text, setText] = (0, import_react6.useState)("");
  const send = () => {
    var _a;
    if (inProgress)
      return;
    onSend(text);
    setText("");
    (_a = textareaRef.current) == null ? void 0 : _a.focus();
  };
  (0, import_react6.useEffect)(() => {
    var _a;
    if (isVisible) {
      (_a = textareaRef.current) == null ? void 0 : _a.focus();
    }
  }, [isVisible]);
  const { pushToTalkState, setPushToTalkState } = usePushToTalk({
    sendFunction: onSend,
    inProgress
  });
  const sendIcon = inProgress || pushToTalkState === "transcribing" ? context.icons.activityIcon : context.icons.sendIcon;
  const showPushToTalk = pushToTalkConfigured && (pushToTalkState === "idle" || pushToTalkState === "recording") && !inProgress;
  const sendDisabled = inProgress || text.length === 0 || pushToTalkState !== "idle";
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "copilotKitInput", onClick: handleDivClick, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      Textarea_default,
      {
        ref: textareaRef,
        placeholder: context.labels.placeholder,
        autoFocus: true,
        maxRows: 5,
        value: text,
        onChange: (event) => setText(event.target.value),
        onKeyDown: (event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            send();
          }
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "copilotKitInputControls", children: [
      showPushToTalk && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          onClick: () => setPushToTalkState(pushToTalkState === "idle" ? "recording" : "transcribing"),
          className: pushToTalkState === "recording" ? "copilotKitPushToTalkRecording" : "",
          children: context.icons.pushToTalkIcon
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          disabled: sendDisabled,
          onClick: send,
          "data-copilotkit-in-progress": !!inProgress,
          "data-testid": inProgress ? "copilot-chat-request-in-progress" : void 0,
          children: sendIcon
        }
      )
    ] })
  ] });
};

// src/components/chat/Response.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var ResponseButton = ({ onClick, inProgress }) => {
  const context = useChatContext();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("button", { onClick, className: "copilotKitResponseButton", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: inProgress ? context.icons.stopIcon : context.icons.regenerateIcon }),
    inProgress ? context.labels.stopGenerating : context.labels.regenerateResponse
  ] });
};

// src/components/chat/Markdown.tsx
var import_react8 = require("react");
var import_react_markdown = __toESM(require("react-markdown"));

// src/components/chat/CodeBlock.tsx
var import_react7 = require("react");
var import_react_syntax_highlighter = require("react-syntax-highlighter");

// src/hooks/use-copy-to-clipboard.tsx
var React6 = __toESM(require("react"));
function useCopyToClipboard({ timeout = 2e3 }) {
  const [isCopied, setIsCopied] = React6.useState(false);
  const copyToClipboard = (value) => {
    var _a;
    if (typeof window === "undefined" || !((_a = navigator.clipboard) == null ? void 0 : _a.writeText)) {
      return;
    }
    if (!value) {
      return;
    }
    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    });
  };
  return { isCopied, copyToClipboard };
}

// src/components/chat/CodeBlock.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var programmingLanguages = {
  javascript: ".js",
  python: ".py",
  java: ".java",
  c: ".c",
  cpp: ".cpp",
  "c++": ".cpp",
  "c#": ".cs",
  ruby: ".rb",
  php: ".php",
  swift: ".swift",
  "objective-c": ".m",
  kotlin: ".kt",
  typescript: ".ts",
  go: ".go",
  perl: ".pl",
  rust: ".rs",
  scala: ".scala",
  haskell: ".hs",
  lua: ".lua",
  shell: ".sh",
  sql: ".sql",
  html: ".html",
  css: ".css"
  // add more file extensions here, make sure the key is same as language prop in CodeBlock.tsx component
};
var generateRandomString = (length, lowercase = false) => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXY3456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return lowercase ? result.toLowerCase() : result;
};
var CodeBlock = (0, import_react7.memo)(({ language, value }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2e3 });
  const downloadAsFile = () => {
    if (typeof window === "undefined") {
      return;
    }
    const fileExtension = programmingLanguages[language] || ".file";
    const suggestedFileName = `file-${generateRandomString(3, true)}${fileExtension}`;
    const fileName = window.prompt("Enter file name", suggestedFileName);
    if (!fileName) {
      return;
    }
    const blob = new Blob([value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  const onCopy = () => {
    if (isCopied)
      return;
    copyToClipboard(value);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "copilotKitCodeBlock", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "copilotKitCodeBlockToolbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "copilotKitCodeBlockToolbarLanguage", children: language }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "copilotKitCodeBlockToolbarButtons", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", { className: "copilotKitCodeBlockToolbarButton", onClick: downloadAsFile, children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(DownloadIcon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "sr-only", children: "Download" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", { className: "copilotKitCodeBlockToolbarButton", onClick: onCopy, children: [
          isCopied ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CheckIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CopyIcon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "sr-only", children: "Copy code" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      import_react_syntax_highlighter.Prism,
      {
        language,
        style: highlightStyle,
        PreTag: "div",
        customStyle: {
          margin: 0,
          borderBottomLeftRadius: "0.375rem",
          borderBottomRightRadius: "0.375rem"
        },
        children: value
      }
    )
  ] });
});
CodeBlock.displayName = "CodeBlock";
var highlightStyle = {
  'pre[class*="language-"]': {
    color: "#d4d4d4",
    fontSize: "13px",
    textShadow: "none",
    fontFamily: 'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    background: "#1e1e1e"
  },
  'code[class*="language-"]': {
    color: "#d4d4d4",
    fontSize: "13px",
    textShadow: "none",
    fontFamily: 'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none"
  },
  'pre[class*="language-"]::selection': {
    textShadow: "none",
    background: "#264F78"
  },
  'code[class*="language-"]::selection': {
    textShadow: "none",
    background: "#264F78"
  },
  'pre[class*="language-"] *::selection': {
    textShadow: "none",
    background: "#264F78"
  },
  'code[class*="language-"] *::selection': {
    textShadow: "none",
    background: "#264F78"
  },
  ':not(pre) > code[class*="language-"]': {
    padding: ".1em .3em",
    borderRadius: ".3em",
    color: "#db4c69",
    background: "#1e1e1e"
  },
  ".namespace": {
    Opacity: ".7"
  },
  "doctype.doctype-tag": {
    color: "#569CD6"
  },
  "doctype.name": {
    color: "#9cdcfe"
  },
  comment: {
    color: "#6a9955"
  },
  prolog: {
    color: "#6a9955"
  },
  punctuation: {
    color: "#d4d4d4"
  },
  ".language-html .language-css .token.punctuation": {
    color: "#d4d4d4"
  },
  ".language-html .language-javascript .token.punctuation": {
    color: "#d4d4d4"
  },
  property: {
    color: "#9cdcfe"
  },
  tag: {
    color: "#569cd6"
  },
  boolean: {
    color: "#569cd6"
  },
  number: {
    color: "#b5cea8"
  },
  constant: {
    color: "#9cdcfe"
  },
  symbol: {
    color: "#b5cea8"
  },
  inserted: {
    color: "#b5cea8"
  },
  unit: {
    color: "#b5cea8"
  },
  selector: {
    color: "#d7ba7d"
  },
  "attr-name": {
    color: "#9cdcfe"
  },
  string: {
    color: "#ce9178"
  },
  char: {
    color: "#ce9178"
  },
  builtin: {
    color: "#ce9178"
  },
  deleted: {
    color: "#ce9178"
  },
  ".language-css .token.string.url": {
    textDecoration: "underline"
  },
  operator: {
    color: "#d4d4d4"
  },
  entity: {
    color: "#569cd6"
  },
  "operator.arrow": {
    color: "#569CD6"
  },
  atrule: {
    color: "#ce9178"
  },
  "atrule.rule": {
    color: "#c586c0"
  },
  "atrule.url": {
    color: "#9cdcfe"
  },
  "atrule.url.function": {
    color: "#dcdcaa"
  },
  "atrule.url.punctuation": {
    color: "#d4d4d4"
  },
  keyword: {
    color: "#569CD6"
  },
  "keyword.module": {
    color: "#c586c0"
  },
  "keyword.control-flow": {
    color: "#c586c0"
  },
  function: {
    color: "#dcdcaa"
  },
  "function.maybe-class-name": {
    color: "#dcdcaa"
  },
  regex: {
    color: "#d16969"
  },
  important: {
    color: "#569cd6"
  },
  italic: {
    fontStyle: "italic"
  },
  "class-name": {
    color: "#4ec9b0"
  },
  "maybe-class-name": {
    color: "#4ec9b0"
  },
  console: {
    color: "#9cdcfe"
  },
  parameter: {
    color: "#9cdcfe"
  },
  interpolation: {
    color: "#9cdcfe"
  },
  "punctuation.interpolation-punctuation": {
    color: "#569cd6"
  },
  variable: {
    color: "#9cdcfe"
  },
  "imports.maybe-class-name": {
    color: "#9cdcfe"
  },
  "exports.maybe-class-name": {
    color: "#9cdcfe"
  },
  escape: {
    color: "#d7ba7d"
  },
  "tag.punctuation": {
    color: "#808080"
  },
  cdata: {
    color: "#808080"
  },
  "attr-value": {
    color: "#ce9178"
  },
  "attr-value.punctuation": {
    color: "#ce9178"
  },
  "attr-value.punctuation.attr-equals": {
    color: "#d4d4d4"
  },
  namespace: {
    color: "#4ec9b0"
  },
  'pre[class*="language-javascript"]': {
    color: "#9cdcfe"
  },
  'code[class*="language-javascript"]': {
    color: "#9cdcfe"
  },
  'pre[class*="language-jsx"]': {
    color: "#9cdcfe"
  },
  'code[class*="language-jsx"]': {
    color: "#9cdcfe"
  },
  'pre[class*="language-typescript"]': {
    color: "#9cdcfe"
  },
  'code[class*="language-typescript"]': {
    color: "#9cdcfe"
  },
  'pre[class*="language-tsx"]': {
    color: "#9cdcfe"
  },
  'code[class*="language-tsx"]': {
    color: "#9cdcfe"
  },
  'pre[class*="language-css"]': {
    color: "#ce9178"
  },
  'code[class*="language-css"]': {
    color: "#ce9178"
  },
  'pre[class*="language-html"]': {
    color: "#d4d4d4"
  },
  'code[class*="language-html"]': {
    color: "#d4d4d4"
  },
  ".language-regex .token.anchor": {
    color: "#dcdcaa"
  },
  ".language-html .token.punctuation": {
    color: "#808080"
  },
  'pre[class*="language-"] > code[class*="language-"]': {
    position: "relative",
    zIndex: "1"
  },
  ".line-highlight.line-highlight": {
    background: "#f7ebc6",
    boxShadow: "inset 5px 0 0 #f7d87c",
    zIndex: "0"
  }
};

// src/components/chat/Markdown.tsx
var import_remark_gfm = __toESM(require("remark-gfm"));
var import_remark_math = __toESM(require("remark-math"));
var import_jsx_runtime11 = require("react/jsx-runtime");
var MemoizedReactMarkdown = (0, import_react8.memo)(
  import_react_markdown.default,
  (prevProps, nextProps) => prevProps.children === nextProps.children && prevProps.className === nextProps.className
);
var Markdown = ({ content }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "copilotKitMarkdown", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(MemoizedReactMarkdown, { components, remarkPlugins: [import_remark_gfm.default, import_remark_math.default], children: content }) });
};
var components = {
  p({ children }) {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { children });
  },
  a(_a) {
    var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "a",
      __spreadProps(__spreadValues({
        style: { color: "blue", textDecoration: "underline" }
      }, props), {
        target: "_blank",
        rel: "noopener noreferrer",
        children
      })
    );
  },
  code(_c) {
    var _d = _c, { children, className, inline } = _d, props = __objRest(_d, ["children", "className", "inline"]);
    if (children.length) {
      if (children[0] == "\u258D") {
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "span",
          {
            style: {
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              marginTop: "0.25rem"
            },
            children: "\u258D"
          }
        );
      }
      children[0] = children[0].replace("`\u258D`", "\u258D");
    }
    const match = /language-(\w+)/.exec(className || "");
    if (inline) {
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("code", __spreadProps(__spreadValues({ className }, props), { children }));
    }
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      CodeBlock,
      __spreadValues({
        language: match && match[1] || "",
        value: String(children).replace(/\n$/, "")
      }, props),
      Math.random()
    );
  }
};

// src/components/chat/messages/RenderTextMessage.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function RenderTextMessage(props) {
  const { message, inProgress, index, isCurrentMessage } = props;
  const { icons } = useChatContext();
  if (message.isTextMessage()) {
    if (message.role === "user") {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        "div",
        {
          "data-message-role": "user",
          className: "copilotKitMessage copilotKitUserMessage",
          children: message.content
        },
        index
      );
    } else if (message.role == "assistant") {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        "div",
        {
          "data-message-role": "assistant",
          className: `copilotKitMessage copilotKitAssistantMessage`,
          children: isCurrentMessage && inProgress && !message.content ? icons.spinnerIcon : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Markdown, { content: message.content })
        },
        index
      );
    }
  }
}

// src/components/chat/messages/RenderContentMessage.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function RenderContentMessage(props) {
  var _a, _b, _c;
  const { message, inProgress, index, isCurrentMessage } = props;
  const { icons } = useChatContext();
  if (message.isContentMessage()) {
    const content = ((_c = (_b = (_a = message.content) == null ? void 0 : _a[0]) == null ? void 0 : _b.textContent) == null ? void 0 : _c.text) || "No content available.";
    if (message.role === "user") {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "div",
        {
          "data-message-role": "user",
          className: "copilotKitMessage copilotKitUserMessage",
          children: content
        },
        index
      );
    } else if (message.role == "assistant") {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "div",
        {
          "data-message-role": "assistant",
          className: `copilotKitMessage copilotKitAssistantMessage`,
          children: isCurrentMessage && inProgress && !message.content ? icons.spinnerIcon : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Markdown, { content })
        },
        index
      );
    }
  }
}

// src/components/chat/messages/RenderActionExecutionMessage.tsx
var import_runtime_client_gql2 = require("@copilotkit/runtime-client-gql");
var import_react_core3 = require("@copilotkit/react-core");
var import_jsx_runtime14 = require("react/jsx-runtime");
function RenderActionExecutionMessage(props) {
  const { message, inProgress, index, isCurrentMessage, actionResult } = props;
  const { chatComponentsCache } = (0, import_react_core3.useCopilotContext)();
  const { icons } = useChatContext();
  if (message.isActionExecutionMessage()) {
    if (chatComponentsCache.current !== null && chatComponentsCache.current.actions[message.name]) {
      const render = chatComponentsCache.current.actions[message.name];
      if (typeof render === "string") {
        if (isCurrentMessage && inProgress) {
          return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: [
            icons.spinnerIcon,
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "inProgressLabel", children: render })
          ] }, index);
        } else {
          return null;
        }
      } else {
        const args = message.arguments;
        let status = "inProgress";
        if (actionResult !== void 0) {
          status = "complete";
        } else if (message.status.code !== import_runtime_client_gql2.MessageStatusCode.Pending) {
          status = "executing";
        }
        try {
          const toRender = render({
            status,
            args,
            result: actionResult
          });
          if (!toRender && status === "complete") {
            return null;
          }
          if (typeof toRender === "string") {
            return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: [
              isCurrentMessage && inProgress && icons.spinnerIcon,
              " ",
              toRender
            ] }, index);
          } else {
            return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              "div",
              {
                "data-message-type": "action-render",
                className: "copilotKitCustomAssistantMessage",
                children: toRender
              },
              index
            );
          }
        } catch (e) {
          console.error(`Error executing render function for action ${message.name}: ${e}`);
          return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: [
            isCurrentMessage && inProgress && icons.spinnerIcon,
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("b", { children: [
              "\u274C Error executing render: ",
              message.name
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
            e instanceof Error ? e.message : String(e)
          ] }, index);
        }
      }
    } else if (!inProgress || !isCurrentMessage) {
      return null;
    } else {
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: icons.spinnerIcon }, index);
    }
  }
}

// src/components/chat/messages/RenderResultMessage.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function RenderResultMessage(props) {
  const { message, inProgress, index, isCurrentMessage } = props;
  const { icons } = useChatContext();
  if (message.isResultMessage() && inProgress && isCurrentMessage) {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: icons.spinnerIcon }, index);
  }
}

// src/components/chat/messages/RenderAgentStateMessage.tsx
var import_react_core4 = require("@copilotkit/react-core");
var import_jsx_runtime16 = require("react/jsx-runtime");
function RenderAgentStateMessage(props) {
  const { message, inProgress, index, isCurrentMessage } = props;
  const { chatComponentsCache } = (0, import_react_core4.useCopilotContext)();
  const { icons } = useChatContext();
  if (message.isAgentStateMessage()) {
    let render;
    if (chatComponentsCache.current !== null) {
      render = chatComponentsCache.current.coAgentStateRenders[`${message.agentName}-${message.nodeName}`] || chatComponentsCache.current.coAgentStateRenders[`${message.agentName}-global`];
    }
    if (render) {
      if (typeof render === "string") {
        if (isCurrentMessage && inProgress) {
          return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: [
            icons.spinnerIcon,
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "inProgressLabel", children: render })
          ] }, index);
        } else {
          return null;
        }
      } else {
        const state = message.state;
        let status = message.active ? "inProgress" : "complete";
        const toRender = render({
          status,
          state,
          nodeName: message.nodeName
        });
        if (!toRender && status === "complete") {
          return null;
        }
        if (!toRender && isCurrentMessage && inProgress) {
          return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: icons.spinnerIcon }, index);
        } else if (!toRender) {
          return null;
        }
        if (typeof toRender === "string") {
          return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: [
            isCurrentMessage && inProgress && icons.spinnerIcon,
            " ",
            toRender
          ] }, index);
        } else {
          return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "copilotKitCustomAssistantMessage", children: toRender }, index);
        }
      }
    } else if (!inProgress || !isCurrentMessage) {
      return null;
    } else {
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: icons.spinnerIcon }, index);
    }
  }
}

// src/components/chat/Suggestion.tsx
var import_react_core5 = require("@copilotkit/react-core");
var import_shared = require("@copilotkit/shared");
var import_runtime_client_gql3 = require("@copilotkit/runtime-client-gql");
var import_jsx_runtime17 = require("react/jsx-runtime");
function Suggestion({ title, message, onClick, partial, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    "button",
    {
      disabled: partial,
      onClick: (e) => {
        e.preventDefault();
        onClick(message);
      },
      className: className || "suggestion",
      children: [
        partial && SmallSpinnerIcon,
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: title })
      ]
    }
  );
}
var reloadSuggestions = (context, chatSuggestionConfiguration, setCurrentSuggestions, abortControllerRef) => __async(void 0, null, function* () {
  const abortController = abortControllerRef.current;
  const tools = JSON.stringify(
    Object.values(context.actions).map((action) => ({
      name: action.name,
      description: action.description,
      jsonSchema: JSON.stringify((0, import_shared.actionParametersToJsonSchema)(action.parameters))
    }))
  );
  const allSuggestions = [];
  for (const config of Object.values(chatSuggestionConfiguration)) {
    try {
      const numOfSuggestionsInstructions = config.minSuggestions === 0 ? `Produce up to ${config.maxSuggestions} suggestions. If there are no highly relevant suggestions you can think of, provide an empty array.` : `Produce between ${config.minSuggestions} and ${config.maxSuggestions} suggestions.`;
      const result = yield (0, import_react_core5.extract)({
        context,
        instructions: "Suggest what the user could say next. Provide clear, highly relevant suggestions. Do not literally suggest function calls. ",
        data: config.instructions + "\n\n" + numOfSuggestionsInstructions + "\n\nAvailable tools: " + tools + "\n\n",
        requestType: import_runtime_client_gql3.CopilotRequestType.Task,
        parameters: [
          {
            name: "suggestions",
            type: "object[]",
            attributes: [
              {
                name: "title",
                description: "The title of the suggestion. This is shown as a button and should be short.",
                type: "string"
              },
              {
                name: "message",
                description: "The message to send when the suggestion is clicked. This should be a clear, complete sentence and will be sent as an instruction to the AI.",
                type: "string"
              }
            ]
          }
        ],
        include: {
          messages: true,
          readable: true
        },
        abortSignal: abortController == null ? void 0 : abortController.signal,
        stream: ({ status, args }) => {
          const suggestions = args.suggestions || [];
          const newSuggestions = [];
          for (let i = 0; i < suggestions.length; i++) {
            if (config.maxSuggestions !== void 0 && i >= config.maxSuggestions) {
              break;
            }
            const { title, message } = suggestions[i];
            const partial = i == suggestions.length - 1 && status !== "complete";
            newSuggestions.push({
              title,
              message,
              partial,
              className: config.className
            });
          }
          setCurrentSuggestions([...allSuggestions, ...newSuggestions]);
        }
      });
      allSuggestions.push(...result.suggestions);
    } catch (error) {
      console.error("Error loading suggestions", error);
    }
  }
  if (abortControllerRef.current === abortController) {
    abortControllerRef.current = null;
  }
});

// src/components/chat/Chat.tsx
var import_react11 = __toESM(require("react"));
var import_react_core8 = require("@copilotkit/react-core");
var import_runtime_client_gql4 = require("@copilotkit/runtime-client-gql");
var import_shared3 = require("@copilotkit/shared");

// src/components/dev-console/utils.ts
var import_react_core6 = require("@copilotkit/react-core");
function shouldShowDevConsole(showDevConsole) {
  if (typeof showDevConsole === "boolean") {
    return showDevConsole;
  }
  return getHostname() === "localhost" || getHostname() === "127.0.0.1" || getHostname() === "0.0.0.0" || getHostname() === "::1";
}
function getHostname() {
  if (typeof window !== "undefined" && window.location) {
    return window.location.hostname;
  }
  return "";
}
function getPublishedCopilotKitVersion(current, forceCheck = false) {
  return __async(this, null, function* () {
    const LOCAL_STORAGE_KEY = "__copilotkit_version_check__";
    const serializedVersion = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (serializedVersion && !forceCheck) {
      try {
        const parsedVersion = JSON.parse(serializedVersion);
        const oneHour = 60 * 60 * 1e3;
        const now = (/* @__PURE__ */ new Date()).getTime();
        if (parsedVersion.current === current && now - new Date(parsedVersion.lastChecked).getTime() < oneHour) {
          return parsedVersion;
        }
      } catch (error) {
        console.error("Failed to parse CopilotKitVersion from localStorage", error);
      }
    }
    try {
      const response = yield fetch("https://api.cloud.stagingcopilotkit.ai/check-for-updates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          packages: [
            {
              packageName: "@copilotkit/shared",
              packageVersion: current
            }
          ]
        })
      });
      const data = yield response.json();
      const version = {
        current,
        lastChecked: (/* @__PURE__ */ new Date()).getTime(),
        latest: data.packages[0].latestVersion,
        severity: data.packages[0].severity,
        advisory: data.packages[0].advisory || null
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(version));
      return version;
    } catch (error) {
      console.error("Failed to check for updates", error);
      throw error;
    }
  });
}
function logReadables(context) {
  console.log("%cCurrent Readables:", "font-size: 16px; font-weight: bold;");
  const readables = context.getContextString([], import_react_core6.defaultCopilotContextCategories).trim();
  if (readables.length === 0) {
    console.log("No readables found");
    return;
  }
  console.log(readables);
}
function logActions(context) {
  console.log("%cCurrent Actions:", "font-size: 16px; font-weight: bold;");
  if (Object.values(context.actions).length === 0) {
    console.log("No actions found");
    return;
  }
  for (const action of Object.values(context.actions)) {
    console.group(action.name);
    console.log("name", action.name);
    console.log("description", action.description);
    console.log("parameters", action.parameters);
    console.groupEnd();
  }
}
function logMessages(context) {
  console.log("%cCurrent Messages:", "font-size: 16px; font-weight: bold;");
  if (context.messages.length === 0) {
    console.log("No messages found");
    return;
  }
  const tableData = context.messages.map((message) => {
    if (message.isTextMessage()) {
      return {
        id: message.id,
        type: "TextMessage",
        role: message.role,
        name: void 0,
        scope: void 0,
        content: message.content
      };
    } else if (message.isActionExecutionMessage()) {
      return {
        id: message.id,
        type: "ActionExecutionMessage",
        role: void 0,
        name: message.name,
        scope: message.scope,
        content: message.arguments
      };
    } else if (message.isResultMessage()) {
      return {
        id: message.id,
        type: "ResultMessage",
        role: void 0,
        name: message.actionName,
        scope: message.actionExecutionId,
        content: message.result
      };
    } else if (message.isAgentStateMessage()) {
      return {
        id: message.id,
        type: `AgentStateMessage (running: ${message.running})`,
        role: message.role,
        name: void 0,
        scope: message.threadId,
        content: message.state
      };
    } else if (message.isContentMessage()) {
      const contentSummary = message.content.map((item) => {
        if (item.textContent) {
          return `Text: "${item.textContent.text}"`;
        } else if (item.imageURLContent) {
          return `Image URL: "${item.imageURLContent.image_url.url}"`;
        } else {
          return `Unknown Content Type`;
        }
      }).join("; ");
      return {
        id: message.id,
        type: "ContentMessage",
        role: message.role,
        name: void 0,
        scope: void 0,
        content: contentSummary
        // Provide a summary of the content array
      };
    } else {
      return {
        id: message.id,
        type: "UnknownMessageType",
        role: void 0,
        name: void 0,
        scope: void 0,
        content: "Unknown content"
      };
    }
  });
  console.table(tableData);
}

// src/components/dev-console/console.tsx
var import_react_core7 = require("@copilotkit/react-core");
var import_react9 = require("react");

// src/components/dev-console/icons.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var ExclamationMarkTriangleIcon = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
  "svg",
  {
    width: "13.3967723px",
    height: "12px",
    viewBox: "0 0 13.3967723 12",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("g", { id: "exclamation-triangle", fill: "#CD2121", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      "path",
      {
        d: "M5.39935802,0.75 C5.97670802,-0.25 7.42007802,-0.25 7.99742802,0.75 L13.193588,9.75 C13.770888,10.75 13.049288,12 11.894588,12 L1.50223802,12 C0.34753802,12 -0.37414898,10.75 0.20319802,9.75 L5.39935802,0.75 Z M6.69838802,2.5 C7.11260802,2.5 7.44838802,2.83579 7.44838802,3.25 L7.44838802,6.25 C7.44838802,6.66421 7.11260802,7 6.69838802,7 C6.28417802,7 5.94838802,6.66421 5.94838802,6.25 L5.94838802,3.25 C5.94838802,2.83579 6.28417802,2.5 6.69838802,2.5 Z M6.69838802,10.5 C7.25067802,10.5 7.69838802,10.0523 7.69838802,9.5 C7.69838802,8.9477 7.25067802,8.5 6.69838802,8.5 C6.14610802,8.5 5.69838802,8.9477 5.69838802,9.5 C5.69838802,10.0523 6.14610802,10.5 6.69838802,10.5 Z",
        id: "Shape"
      }
    ) }) })
  }
);
var ExclamationMarkIcon = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
  "svg",
  {
    width: "14px",
    height: "14px",
    viewBox: "0 0 14 14",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("g", { id: "exclamation-circle", fill: "#EC662C", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      "path",
      {
        d: "M7,14 C10.866,14 14,10.866 14,7 C14,3.13401 10.866,0 7,0 C3.13401,0 0,3.13401 0,7 C0,10.866 3.13401,14 7,14 Z M7,3 C7.41421,3 7.75,3.33579 7.75,3.75 L7.75,6.75 C7.75,7.16421 7.41421,7.5 7,7.5 C6.58579,7.5 6.25,7.16421 6.25,6.75 L6.25,3.75 C6.25,3.33579 6.58579,3 7,3 Z M7,11 C7.55228,11 8,10.5523 8,10 C8,9.4477 7.55228,9 7,9 C6.44772,9 6,9.4477 6,10 C6,10.5523 6.44772,11 7,11 Z",
        id: "Shape"
      }
    ) }) })
  }
);
var ChevronDownIcon = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("svg", { width: "7px", height: "4px", viewBox: "0 0 7 4", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("g", { id: "Group", fill: "#000000", fillRule: "nonzero", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
  "path",
  {
    d: "M3.71690723,3.90271086 C3.59268176,4.03242971 3.39143629,4.03242971 3.26721082,3.90271086 L0.0853966595,0.57605615 C-0.0314221035,0.444981627 -0.0279751448,0.240725043 0.0931934622,0.114040675 C0.214362069,-0.0126436935 0.409725445,-0.0162475626 0.535093061,0.105888951 L3.49205902,3.19746006 L6.44902499,0.105888951 C6.52834574,0.0168884389 6.64780588,-0.0197473458 6.7605411,0.0103538404 C6.87327633,0.0404550266 6.96130636,0.132492308 6.99009696,0.250359396 C7.01888756,0.368226483 6.98384687,0.493124608 6.89872139,0.57605615 L3.71690723,3.90271086 Z",
    id: "Path"
  }
) }) }) });
var CheckIcon2 = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
  "svg",
  {
    width: "14px",
    height: "14px",
    viewBox: "0 0 14 14",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("g", { id: "Group-2", transform: "translate(-118, 0)", fill: "#1BC030", fillRule: "nonzero", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("g", { id: "Group", transform: "translate(118, 0)", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      "path",
      {
        d: "M0,7 C0,3.13384615 3.13384615,0 7,0 C10.8661538,0 14,3.13384615 14,7 C14,10.8661538 10.8661538,14 7,14 C3.13384615,14 0,10.8661538 0,7 Z M9.59179487,5.69764103 C9.70905818,5.54139023 9.73249341,5.33388318 9.65303227,5.15541491 C9.57357113,4.97694665 9.40367989,4.85551619 9.20909814,4.83811118 C9.01451638,4.82070616 8.82577109,4.91005717 8.71589744,5.07158974 L6.39261538,8.32389744 L5.22666667,7.15794872 C5.01450582,6.96025518 4.68389046,6.9660885 4.47883563,7.17114332 C4.27378081,7.37619815 4.26794748,7.70681351 4.46564103,7.91897436 L6.08102564,9.53435897 C6.19289944,9.64614839 6.3482622,9.70310251 6.50588106,9.69010587 C6.66349993,9.67710922 6.80743532,9.59547613 6.89948718,9.46687179 L9.59179487,5.69764103 L9.59179487,5.69764103 Z",
        id: "Shape"
      }
    ) }) }) })
  }
);
var CopilotKitIcon = /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
  "svg",
  {
    width: "33px",
    height: "35px",
    viewBox: "0 0 33 35",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("title", { children: "bd5c9079-929b-4d55-bdc9-16d1c8181b71" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "image",
        {
          x: "0",
          y: "0",
          width: "33",
          height: "35",
          xlinkHref: "data:image/png;base64,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"
        }
      ) })
    ]
  }
);

// src/components/dev-console/console.tsx
var import_react10 = require("@headlessui/react");
var import_shared2 = require("@copilotkit/shared");
var import_jsx_runtime19 = require("react/jsx-runtime");
function CopilotDevConsole() {
  const currentVersion = import_shared2.COPILOTKIT_VERSION;
  const context = (0, import_react_core7.useCopilotContext)();
  const [showDevConsole, setShowDevConsole] = (0, import_react9.useState)(false);
  (0, import_react9.useEffect)(() => {
    setShowDevConsole(shouldShowDevConsole(context.showDevConsole));
  }, [context.showDevConsole]);
  const dontRunTwiceInDevMode = (0, import_react9.useRef)(false);
  const [versionStatus, setVersionStatus] = (0, import_react9.useState)("unknown");
  const [latestVersion, setLatestVersion] = (0, import_react9.useState)("");
  const consoleRef = (0, import_react9.useRef)(null);
  const [debugButtonMode, setDebugButtonMode] = (0, import_react9.useState)("full");
  const checkForUpdates = (force = false) => {
    setVersionStatus("checking");
    getPublishedCopilotKitVersion(currentVersion, force).then((v) => {
      setLatestVersion(v.latest);
      let versionOk = false;
      if (v.current === v.latest) {
        versionOk = true;
      } else if (/[a-zA-Z]/.test(v.current)) {
        versionOk = true;
      }
      if (versionOk) {
        setVersionStatus("latest");
      } else if (v.severity !== "low") {
        setVersionStatus("outdated");
      } else {
        setVersionStatus("update-available");
      }
    }).catch((e) => {
      console.error(e);
      setVersionStatus("unknown");
    });
  };
  (0, import_react9.useEffect)(() => {
    if (dontRunTwiceInDevMode.current === true) {
      return;
    }
    dontRunTwiceInDevMode.current = true;
    checkForUpdates();
  }, []);
  (0, import_react9.useEffect)(() => {
    const handleResize = (entries) => {
      for (let entry of entries) {
        if (entry.target === consoleRef.current) {
          const width = entry.contentRect.width;
          if (width < 400) {
            setDebugButtonMode("compact");
          } else {
            setDebugButtonMode("full");
          }
        }
      }
    };
    const observer = new ResizeObserver(handleResize);
    if (consoleRef.current) {
      observer.observe(consoleRef.current);
      const initialWidth = consoleRef.current.getBoundingClientRect().width;
      if (initialWidth < 400) {
        setDebugButtonMode("compact");
      } else {
        setDebugButtonMode("full");
      }
    }
    return () => {
      if (consoleRef.current) {
        observer.unobserve(consoleRef.current);
      }
    };
  }, [consoleRef.current]);
  if (!showDevConsole) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    "div",
    {
      ref: consoleRef,
      className: "copilotKitDevConsole " + (versionStatus === "update-available" ? "copilotKitDevConsoleUpgrade" : "") + (versionStatus === "outdated" ? "copilotKitDevConsoleWarnOutdated" : ""),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "copilotKitDevConsoleLogo", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { href: "https://copilotkit.ai", target: "_blank", children: CopilotKitIcon }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          VersionInfo,
          {
            showDevConsole: context.showDevConsole,
            versionStatus,
            currentVersion,
            latestVersion
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          DebugMenuButton,
          {
            setShowDevConsole,
            checkForUpdates,
            mode: debugButtonMode
          }
        )
      ]
    }
  );
}
function VersionInfo({
  showDevConsole,
  versionStatus,
  currentVersion,
  latestVersion
}) {
  const [copyStatus, setCopyStatus] = (0, import_react9.useState)("");
  let versionLabel = "";
  let versionIcon = "";
  let currentVersionLabel = currentVersion;
  if (versionStatus === "latest") {
    versionLabel = "latest";
    versionIcon = CheckIcon2;
  } else if (versionStatus === "checking") {
    versionLabel = "checking";
    versionIcon = SmallSpinnerIcon;
  } else if (versionStatus === "update-available") {
    versionLabel = "update available";
    versionIcon = ExclamationMarkIcon;
    currentVersionLabel = `${currentVersion} \u2192 ${latestVersion}`;
  } else if (versionStatus === "outdated") {
    versionLabel = "outdated";
    versionIcon = ExclamationMarkTriangleIcon;
    currentVersionLabel = `${currentVersion} \u2192 ${latestVersion}`;
  }
  let asideLabel = "";
  if (showDevConsole === "auto") {
    asideLabel = "(localhost only)";
  } else if (showDevConsole === true) {
    asideLabel = "(always on)";
  }
  const installCommand = [
    `npm install`,
    `@copilotkit/react-core@${latestVersion}`,
    `@copilotkit/react-ui@${latestVersion}`,
    `@copilotkit/react-textarea@${latestVersion}`
  ].join(" ");
  const handleCopyClick = () => {
    navigator.clipboard.writeText(installCommand.trim()).then(() => {
      setCopyStatus("Command copied to clipboard!");
      setTimeout(() => setCopyStatus(""), 1e3);
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "copilotKitVersionInfo", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("header", { children: [
      "COPILOTKIT DEV CONSOLE",
      showDevConsole === "auto" && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("aside", { children: asideLabel })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { children: [
      "Version: ",
      versionLabel,
      " (",
      currentVersionLabel,
      ") ",
      versionIcon
    ] }),
    (versionStatus === "update-available" || versionStatus === "outdated") && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("footer", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { onClick: handleCopyClick, children: copyStatus || installCommand }) })
  ] });
}
function DebugMenuButton({
  setShowDevConsole,
  checkForUpdates,
  mode
}) {
  const context = (0, import_react_core7.useCopilotContext)();
  const messagesContext = (0, import_react_core7.useCopilotMessagesContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "bg-black top-24 w-52 text-right", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_react10.Menu, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react10.MenuButton, { className: `copilotKitDebugMenuButton ${mode === "compact" ? "compact" : ""}`, children: mode == "compact" ? "Debug" : /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
      "Debug ",
      ChevronDownIcon
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
      import_react10.MenuItems,
      {
        transition: true,
        anchor: "bottom end",
        className: "copilotKitDebugMenu",
        style: { zIndex: 40 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react10.MenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "copilotKitDebugMenuItem", onClick: () => logReadables(context), children: "Log Readables" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react10.MenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "copilotKitDebugMenuItem", onClick: () => logActions(context), children: "Log Actions" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react10.MenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            "button",
            {
              className: "copilotKitDebugMenuItem",
              onClick: () => logMessages(messagesContext),
              children: "Log Messages"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react10.MenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "copilotKitDebugMenuItem", onClick: () => checkForUpdates(true), children: "Check for Updates" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("hr", {}),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react10.MenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "copilotKitDebugMenuItem", onClick: () => setShowDevConsole(false), children: "Hide Dev Console" }) })
        ]
      }
    )
  ] }) });
}

// src/components/chat/Chat.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function CopilotChat({
  instructions,
  onSubmitMessage,
  makeSystemMessage,
  showResponseButton = true,
  onInProgress,
  Messages: Messages2 = Messages,
  RenderTextMessage: RenderTextMessage2 = RenderTextMessage,
  RenderContentMessage: RenderContentMessage2 = RenderContentMessage,
  RenderActionExecutionMessage: RenderActionExecutionMessage2 = RenderActionExecutionMessage,
  RenderAgentStateMessage: RenderAgentStateMessage2 = RenderAgentStateMessage,
  RenderResultMessage: RenderResultMessage2 = RenderResultMessage,
  Input: Input2 = Input,
  ResponseButton: ResponseButton2 = ResponseButton,
  className,
  icons,
  labels
}) {
  const context = (0, import_react_core8.useCopilotContext)();
  (0, import_react11.useEffect)(() => {
    context.setChatInstructions(instructions || "");
  }, [instructions]);
  const {
    visibleMessages,
    isLoading,
    currentSuggestions,
    sendMessage,
    stopGeneration,
    reloadMessages
  } = useCopilotChatLogic(makeSystemMessage, onInProgress, onSubmitMessage);
  const chatContext = import_react11.default.useContext(ChatContext);
  const isVisible = chatContext ? chatContext.open : true;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(WrappedCopilotChat, { icons, labels, className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(CopilotDevConsole, {}),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      Messages2,
      {
        RenderTextMessage: RenderTextMessage2,
        RenderActionExecutionMessage: RenderActionExecutionMessage2,
        RenderAgentStateMessage: RenderAgentStateMessage2,
        RenderResultMessage: RenderResultMessage2,
        messages: visibleMessages,
        inProgress: isLoading,
        RenderContentMessage: RenderContentMessage2,
        children: [
          currentSuggestions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h6", { children: "Suggested:" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "suggestions", children: currentSuggestions.map((suggestion, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
              Suggestion,
              {
                title: suggestion.title,
                message: suggestion.message,
                partial: suggestion.partial,
                className: suggestion.className,
                onClick: (message) => sendMessage(message)
              },
              index
            )) })
          ] }),
          showResponseButton && visibleMessages.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            ResponseButton2,
            {
              onClick: isLoading ? stopGeneration : reloadMessages,
              inProgress: isLoading
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Input2, { inProgress: isLoading, onSend: sendMessage, isVisible })
  ] });
}
function WrappedCopilotChat({
  children,
  icons,
  labels,
  className
}) {
  const chatContext = import_react11.default.useContext(ChatContext);
  if (!chatContext) {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ChatContextProvider, { icons, labels, open: true, setOpen: () => {
    }, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: `copilotKitChat ${className}`, children }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, { children });
}
var SUGGESTIONS_DEBOUNCE_TIMEOUT = 1e3;
var useCopilotChatLogic = (makeSystemMessage, onInProgress, onSubmitMessage) => {
  const { visibleMessages, appendMessage, reloadMessages, stopGeneration, isLoading } = (0, import_react_core8.useCopilotChat)({
    id: (0, import_shared3.randomId)(),
    makeSystemMessage
  });
  const [currentSuggestions, setCurrentSuggestions] = (0, import_react11.useState)([]);
  const suggestionsAbortControllerRef = (0, import_react11.useRef)(null);
  const debounceTimerRef = (0, import_react11.useRef)();
  const abortSuggestions = () => {
    var _a;
    (_a = suggestionsAbortControllerRef.current) == null ? void 0 : _a.abort();
    suggestionsAbortControllerRef.current = null;
  };
  const generalContext = (0, import_react_core8.useCopilotContext)();
  const messagesContext = (0, import_react_core8.useCopilotMessagesContext)();
  const context = __spreadValues(__spreadValues({}, generalContext), messagesContext);
  (0, import_react11.useEffect)(() => {
    onInProgress == null ? void 0 : onInProgress(isLoading);
    abortSuggestions();
    debounceTimerRef.current = setTimeout(
      () => {
        if (!isLoading && Object.keys(context.chatSuggestionConfiguration).length !== 0) {
          suggestionsAbortControllerRef.current = new AbortController();
          reloadSuggestions(
            context,
            context.chatSuggestionConfiguration,
            setCurrentSuggestions,
            suggestionsAbortControllerRef
          );
        }
      },
      currentSuggestions.length == 0 ? 0 : SUGGESTIONS_DEBOUNCE_TIMEOUT
    );
    return () => {
      clearTimeout(debounceTimerRef.current);
    };
  }, [isLoading, context.chatSuggestionConfiguration]);
  const sendMessage = (messageContent) => __async(void 0, null, function* () {
    abortSuggestions();
    setCurrentSuggestions([]);
    const message = new import_runtime_client_gql4.TextMessage({
      content: messageContent,
      role: import_runtime_client_gql4.Role.User
    });
    if (onSubmitMessage) {
      try {
        yield onSubmitMessage(messageContent);
      } catch (error) {
        console.error("Error in onSubmitMessage:", error);
      }
    }
    appendMessage(message);
    return message;
  });
  return {
    visibleMessages,
    isLoading,
    currentSuggestions,
    sendMessage,
    stopGeneration,
    reloadMessages
  };
};

// src/components/chat/Modal.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
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
  const [openState, setOpenState] = import_react12.default.useState(defaultOpen);
  const setOpen = (open) => {
    onSetOpen == null ? void 0 : onSetOpen(open);
    setOpenState(open);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(ChatContextProvider, { icons, labels, open: openState, setOpen, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className, children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Button2, {}),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
        Window2,
        {
          clickOutsideToClose,
          shortcut,
          hitEscapeToClose,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Header2, {}),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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

// src/components/chat/Sidebar.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
function CopilotSidebar(props) {
  props = __spreadProps(__spreadValues({}, props), {
    className: props.className ? props.className + " copilotKitSidebar" : "copilotKitSidebar"
  });
  const [expandedClassName, setExpandedClassName] = (0, import_react13.useState)(
    props.defaultOpen ? "sidebarExpanded" : ""
  );
  const onSetOpen = (open) => {
    var _a;
    (_a = props.onSetOpen) == null ? void 0 : _a.call(props, open);
    setExpandedClassName(open ? "sidebarExpanded" : "");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: `copilotKitSidebarContentWrapper ${expandedClassName}`, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CopilotModal, __spreadProps(__spreadValues(__spreadValues({}, props), { onSetOpen }), { children: props.children })) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CopilotSidebar
});
//# sourceMappingURL=Sidebar.js.map