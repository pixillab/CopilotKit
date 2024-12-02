import {
  RemoteChain
} from "./chunk-3A7UROBK.mjs";
import {
  RuntimeEventSource,
  isLangGraphAgentAction,
  setupRemoteActions
} from "./chunk-XSG7SYVH.mjs";
import {
  ActionExecutionMessage,
  AgentStateMessage,
  ResultMessage,
  TextMessage
} from "./chunk-7E3RD6ZC.mjs";
import {
  __name
} from "./chunk-44O2JGUY.mjs";

// src/lib/runtime/copilot-runtime.ts
import { actionParametersToJsonSchema, randomId } from "@copilotkit/shared";

// src/service-adapters/conversion.ts
import { plainToInstance } from "class-transformer";
function convertGqlInputToMessages(inputMessages) {
  const messages = [];
  for (const message of inputMessages) {
    if (message.textMessage) {
      messages.push(plainToInstance(TextMessage, {
        id: message.id,
        createdAt: message.createdAt,
        role: message.textMessage.role,
        content: message.textMessage.content
      }));
    } else if (message.actionExecutionMessage) {
      messages.push(plainToInstance(ActionExecutionMessage, {
        id: message.id,
        createdAt: message.createdAt,
        name: message.actionExecutionMessage.name,
        arguments: JSON.parse(message.actionExecutionMessage.arguments),
        scope: message.actionExecutionMessage.scope
      }));
    } else if (message.resultMessage) {
      messages.push(plainToInstance(ResultMessage, {
        id: message.id,
        createdAt: message.createdAt,
        actionExecutionId: message.resultMessage.actionExecutionId,
        actionName: message.resultMessage.actionName,
        result: message.resultMessage.result
      }));
    } else if (message.agentStateMessage) {
      messages.push(plainToInstance(AgentStateMessage, {
        id: message.id,
        threadId: message.agentStateMessage.threadId,
        createdAt: message.createdAt,
        agentName: message.agentStateMessage.agentName,
        nodeName: message.agentStateMessage.nodeName,
        runId: message.agentStateMessage.runId,
        active: message.agentStateMessage.active,
        role: message.agentStateMessage.role,
        state: JSON.parse(message.agentStateMessage.state),
        running: message.agentStateMessage.running
      }));
    }
  }
  return messages;
}
__name(convertGqlInputToMessages, "convertGqlInputToMessages");

// src/lib/runtime/copilot-runtime.ts
import { from } from "rxjs";
var CopilotRuntime = class {
  actions;
  remoteActionDefinitions;
  langserve = [];
  onBeforeRequest;
  onAfterRequest;
  constructor(params) {
    var _a, _b;
    this.actions = (params == null ? void 0 : params.actions) || [];
    for (const chain of (params == null ? void 0 : params.langserve) || []) {
      const remoteChain = new RemoteChain(chain);
      this.langserve.push(remoteChain.toAction());
    }
    this.remoteActionDefinitions = (params == null ? void 0 : params.remoteActions) || [];
    this.onBeforeRequest = (_a = params == null ? void 0 : params.middleware) == null ? void 0 : _a.onBeforeRequest;
    this.onAfterRequest = (_b = params == null ? void 0 : params.middleware) == null ? void 0 : _b.onAfterRequest;
  }
  async processRuntimeRequest(request) {
    var _a;
    const { serviceAdapter, messages: rawMessages, actions: clientSideActionsInput, threadId, runId, outputMessagesPromise, graphqlContext, forwardedParameters, agentSession, url } = request;
    if (agentSession) {
      return this.processAgentRequest(request);
    }
    const messages = rawMessages.filter((message) => !message.agentStateMessage);
    const inputMessages = convertGqlInputToMessages(messages);
    const serverSideActions = await this.getServerSideActions(request);
    const serverSideActionsInput = serverSideActions.map((action) => ({
      name: action.name,
      description: action.description,
      jsonSchema: JSON.stringify(actionParametersToJsonSchema(action.parameters))
    }));
    const actionInputs = flattenToolCallsNoDuplicates([
      ...serverSideActionsInput,
      ...clientSideActionsInput
    ]);
    await ((_a = this.onBeforeRequest) == null ? void 0 : _a.call(this, {
      threadId,
      runId,
      inputMessages,
      properties: graphqlContext.properties,
      url
    }));
    try {
      const eventSource = new RuntimeEventSource();
      const result = await serviceAdapter.process({
        messages: inputMessages,
        actions: actionInputs,
        threadId,
        runId,
        eventSource,
        forwardedParameters
      });
      outputMessagesPromise.then((outputMessages) => {
        var _a2;
        (_a2 = this.onAfterRequest) == null ? void 0 : _a2.call(this, {
          threadId: result.threadId,
          runId: result.runId,
          inputMessages,
          outputMessages,
          properties: graphqlContext.properties,
          url
        });
      }).catch((_error) => {
      });
      return {
        threadId: result.threadId,
        runId: result.runId,
        eventSource,
        serverSideActions,
        actionInputsWithoutAgents: actionInputs.filter((action) => (
          // TODO-AGENTS: do not exclude ALL server side actions
          !serverSideActions.find((serverSideAction) => serverSideAction.name == action.name)
        ))
      };
    } catch (error) {
      console.error("Error getting response:", error);
      throw error;
    }
  }
  async processAgentRequest(request) {
    var _a;
    const { messages: rawMessages, outputMessagesPromise, graphqlContext, agentSession } = request;
    const { threadId = randomId(), agentName, nodeName } = agentSession;
    const serverSideActions = await this.getServerSideActions(request);
    const messages = convertGqlInputToMessages(rawMessages);
    const agent = serverSideActions.find((action) => action.name === agentName && isLangGraphAgentAction(action));
    if (!agent) {
      throw new Error(`Agent ${agentName} not found`);
    }
    const serverSideActionsInput = serverSideActions.filter((action) => !isLangGraphAgentAction(action)).map((action) => ({
      name: action.name,
      description: action.description,
      jsonSchema: JSON.stringify(actionParametersToJsonSchema(action.parameters))
    }));
    const actionInputsWithoutAgents = flattenToolCallsNoDuplicates([
      ...serverSideActionsInput,
      ...request.actions
    ]);
    await ((_a = this.onBeforeRequest) == null ? void 0 : _a.call(this, {
      threadId,
      runId: void 0,
      inputMessages: messages,
      properties: graphqlContext.properties
    }));
    try {
      const eventSource = new RuntimeEventSource();
      const stream = await agent.langGraphAgentHandler({
        name: agentName,
        threadId,
        nodeName,
        actionInputsWithoutAgents
      });
      eventSource.stream(async (eventStream$) => {
        from(stream).subscribe({
          next: (event) => eventStream$.next(event),
          error: (err) => console.error("Error in stream", err),
          complete: () => eventStream$.complete()
        });
      });
      outputMessagesPromise.then((outputMessages) => {
        var _a2;
        (_a2 = this.onAfterRequest) == null ? void 0 : _a2.call(this, {
          threadId,
          runId: void 0,
          inputMessages: messages,
          outputMessages,
          properties: graphqlContext.properties
        });
      }).catch((_error) => {
      });
      return {
        threadId,
        runId: void 0,
        eventSource,
        serverSideActions: [],
        actionInputsWithoutAgents
      };
    } catch (error) {
      console.error("Error getting response:", error);
      throw error;
    }
  }
  async getServerSideActions(request) {
    const { messages: rawMessages, graphqlContext, agentStates, url } = request;
    const inputMessages = convertGqlInputToMessages(rawMessages);
    const langserveFunctions = [];
    for (const chainPromise of this.langserve) {
      try {
        const chain = await chainPromise;
        langserveFunctions.push(chain);
      } catch (error) {
        console.error("Error loading langserve chain:", error);
      }
    }
    const remoteActions = await setupRemoteActions({
      remoteActionDefinitions: this.remoteActionDefinitions,
      graphqlContext,
      messages: inputMessages,
      agentStates,
      frontendUrl: url
    });
    const configuredActions = typeof this.actions === "function" ? this.actions({
      properties: graphqlContext.properties,
      url
    }) : this.actions;
    return [
      ...configuredActions,
      ...langserveFunctions,
      ...remoteActions
    ];
  }
};
__name(CopilotRuntime, "CopilotRuntime");
function flattenToolCallsNoDuplicates(toolsByPriority) {
  let allTools = [];
  const allToolNames = [];
  for (const tool of toolsByPriority) {
    if (!allToolNames.includes(tool.name)) {
      allTools.push(tool);
      allToolNames.push(tool.name);
    }
  }
  return allTools;
}
__name(flattenToolCallsNoDuplicates, "flattenToolCallsNoDuplicates");

export {
  CopilotRuntime,
  flattenToolCallsNoDuplicates
};
//# sourceMappingURL=chunk-PRPTQLXJ.mjs.map