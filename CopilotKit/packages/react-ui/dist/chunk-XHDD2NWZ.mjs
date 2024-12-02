import {
  getPublishedCopilotKitVersion,
  logActions,
  logMessages,
  logReadables,
  shouldShowDevConsole
} from "./chunk-BE7OG26W.mjs";
import {
  SmallSpinnerIcon
} from "./chunk-FZC7X5PK.mjs";
import {
  CheckIcon,
  ChevronDownIcon,
  CopilotKitIcon,
  ExclamationMarkIcon,
  ExclamationMarkTriangleIcon
} from "./chunk-OTPAZXVR.mjs";

// src/components/dev-console/console.tsx
import { useCopilotContext, useCopilotMessagesContext } from "@copilotkit/react-core";
import { useEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { COPILOTKIT_VERSION } from "@copilotkit/shared";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function CopilotDevConsole() {
  const currentVersion = COPILOTKIT_VERSION;
  const context = useCopilotContext();
  const [showDevConsole, setShowDevConsole] = useState(false);
  useEffect(() => {
    setShowDevConsole(shouldShowDevConsole(context.showDevConsole));
  }, [context.showDevConsole]);
  const dontRunTwiceInDevMode = useRef(false);
  const [versionStatus, setVersionStatus] = useState("unknown");
  const [latestVersion, setLatestVersion] = useState("");
  const consoleRef = useRef(null);
  const [debugButtonMode, setDebugButtonMode] = useState("full");
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
  useEffect(() => {
    if (dontRunTwiceInDevMode.current === true) {
      return;
    }
    dontRunTwiceInDevMode.current = true;
    checkForUpdates();
  }, []);
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: consoleRef,
      className: "copilotKitDevConsole " + (versionStatus === "update-available" ? "copilotKitDevConsoleUpgrade" : "") + (versionStatus === "outdated" ? "copilotKitDevConsoleWarnOutdated" : ""),
      children: [
        /* @__PURE__ */ jsx("div", { className: "copilotKitDevConsoleLogo", children: /* @__PURE__ */ jsx("a", { href: "https://copilotkit.ai", target: "_blank", children: CopilotKitIcon }) }),
        /* @__PURE__ */ jsx(
          VersionInfo,
          {
            showDevConsole: context.showDevConsole,
            versionStatus,
            currentVersion,
            latestVersion
          }
        ),
        /* @__PURE__ */ jsx(
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
  const [copyStatus, setCopyStatus] = useState("");
  let versionLabel = "";
  let versionIcon = "";
  let currentVersionLabel = currentVersion;
  if (versionStatus === "latest") {
    versionLabel = "latest";
    versionIcon = CheckIcon;
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
  return /* @__PURE__ */ jsxs("div", { className: "copilotKitVersionInfo", children: [
    /* @__PURE__ */ jsxs("header", { children: [
      "COPILOTKIT DEV CONSOLE",
      showDevConsole === "auto" && /* @__PURE__ */ jsx("aside", { children: asideLabel })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      "Version: ",
      versionLabel,
      " (",
      currentVersionLabel,
      ") ",
      versionIcon
    ] }),
    (versionStatus === "update-available" || versionStatus === "outdated") && /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx("button", { onClick: handleCopyClick, children: copyStatus || installCommand }) })
  ] });
}
function DebugMenuButton({
  setShowDevConsole,
  checkForUpdates,
  mode
}) {
  const context = useCopilotContext();
  const messagesContext = useCopilotMessagesContext();
  return /* @__PURE__ */ jsx("div", { className: "bg-black top-24 w-52 text-right", children: /* @__PURE__ */ jsxs(Menu, { children: [
    /* @__PURE__ */ jsx(MenuButton, { className: `copilotKitDebugMenuButton ${mode === "compact" ? "compact" : ""}`, children: mode == "compact" ? "Debug" : /* @__PURE__ */ jsxs(Fragment, { children: [
      "Debug ",
      ChevronDownIcon
    ] }) }),
    /* @__PURE__ */ jsxs(
      MenuItems,
      {
        transition: true,
        anchor: "bottom end",
        className: "copilotKitDebugMenu",
        style: { zIndex: 40 },
        children: [
          /* @__PURE__ */ jsx(MenuItem, { children: /* @__PURE__ */ jsx("button", { className: "copilotKitDebugMenuItem", onClick: () => logReadables(context), children: "Log Readables" }) }),
          /* @__PURE__ */ jsx(MenuItem, { children: /* @__PURE__ */ jsx("button", { className: "copilotKitDebugMenuItem", onClick: () => logActions(context), children: "Log Actions" }) }),
          /* @__PURE__ */ jsx(MenuItem, { children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "copilotKitDebugMenuItem",
              onClick: () => logMessages(messagesContext),
              children: "Log Messages"
            }
          ) }),
          /* @__PURE__ */ jsx(MenuItem, { children: /* @__PURE__ */ jsx("button", { className: "copilotKitDebugMenuItem", onClick: () => checkForUpdates(true), children: "Check for Updates" }) }),
          /* @__PURE__ */ jsx("hr", {}),
          /* @__PURE__ */ jsx(MenuItem, { children: /* @__PURE__ */ jsx("button", { className: "copilotKitDebugMenuItem", onClick: () => setShowDevConsole(false), children: "Hide Dev Console" }) })
        ]
      }
    )
  ] }) });
}

export {
  CopilotDevConsole,
  DebugMenuButton
};
//# sourceMappingURL=chunk-XHDD2NWZ.mjs.map