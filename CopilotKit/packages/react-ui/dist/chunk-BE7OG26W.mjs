import {
  __async
} from "./chunk-MRXNTQOX.mjs";

// src/components/dev-console/utils.ts
import {
  defaultCopilotContextCategories
} from "@copilotkit/react-core";
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
  const readables = context.getContextString([], defaultCopilotContextCategories).trim();
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

export {
  shouldShowDevConsole,
  getPublishedCopilotKitVersion,
  logReadables,
  logActions,
  logMessages
};
//# sourceMappingURL=chunk-BE7OG26W.mjs.map