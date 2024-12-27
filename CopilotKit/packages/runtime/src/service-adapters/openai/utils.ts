import { Message } from "../../graphql/types/converted";
import { ActionInput } from "../../graphql/inputs/action.input";
import {
  ChatCompletionMessageParam,
  ChatCompletionTool,
  ChatCompletionUserMessageParam,
  ChatCompletionAssistantMessageParam,
  ChatCompletionSystemMessageParam,
} from "openai/resources";
import OpenAI from "openai";
import ChatCompletionContentPart = OpenAI.ChatCompletionContentPart;

export function limitMessagesToTokenCount(
  messages: any[],
  tools: any[],
  model: string,
  maxTokens?: number,
): any[] {
  maxTokens ||= maxTokensForOpenAIModel(model);

  const result: any[] = [];
  const toolsNumTokens = countToolsTokens(model, tools);
  if (toolsNumTokens > maxTokens) {
    throw new Error(`Too many tokens in function definitions: ${toolsNumTokens} > ${maxTokens}`);
  }
  maxTokens -= toolsNumTokens;

  for (const message of messages) {
    if (message.role === "system") {
      const numTokens = countMessageTokens(model, message);
      maxTokens -= numTokens;

      if (maxTokens < 0) {
        throw new Error("Not enough tokens for system message.");
      }
    }
  }

  let cutoff: boolean = false;

  const reversedMessages = [...messages].reverse();
  for (const message of reversedMessages) {
    if (message.role === "system") {
      result.unshift(message);
      continue;
    } else if (cutoff) {
      continue;
    }
    let numTokens = countMessageTokens(model, message);
    if (maxTokens < numTokens) {
      cutoff = true;
      continue;
    }
    result.unshift(message);
    maxTokens -= numTokens;
  }

  return result;
}

export function maxTokensForOpenAIModel(model: string): number {
  return maxTokensByModel[model] || DEFAULT_MAX_TOKENS;
}

const DEFAULT_MAX_TOKENS = 128000;

const maxTokensByModel: { [key: string]: number } = {
  // GPT-4
  "gpt-4o": 128000,
  "gpt-4o-2024-05-13": 128000,
  "gpt-4-turbo": 128000,
  "gpt-4-turbo-2024-04-09": 128000,
  "gpt-4-0125-preview": 128000,
  "gpt-4-turbo-preview": 128000,
  "gpt-4-1106-preview": 128000,
  "gpt-4-vision-preview": 128000,
  "gpt-4-1106-vision-preview": 128000,
  "gpt-4-32k": 32768,
  "gpt-4-32k-0613": 32768,
  "gpt-4-32k-0314": 32768,
  "gpt-4": 8192,
  "gpt-4-0613": 8192,
  "gpt-4-0314": 8192,

  // GPT-3.5
  "gpt-3.5-turbo-0125": 16385,
  "gpt-3.5-turbo": 16385,
  "gpt-3.5-turbo-1106": 16385,
  "gpt-3.5-turbo-instruct": 4096,
  "gpt-3.5-turbo-16k": 16385,
  "gpt-3.5-turbo-0613": 4096,
  "gpt-3.5-turbo-16k-0613": 16385,
  "gpt-3.5-turbo-0301": 4097,
};

function countToolsTokens(model: string, tools: any[]): number {
  if (tools.length === 0) {
    return 0;
  }
  const json = JSON.stringify(tools);
  return countTokens(model, json);
}

function countMessageTokens(model: string, message: any): number {
  return countTokens(model, message.content || "");
}

function countTokens(model: string, text: string): number {
  return text.length / 3;
}

export function convertActionInputToOpenAITool(action: ActionInput): ChatCompletionTool {
  return {
    type: "function",
    function: {
      name: action.name,
      description: action.description,
      parameters: JSON.parse(action.jsonSchema),
    },
  };
}

/**
 * Utility function to extract text and image URLs from a string.
 * @param content The content string to parse.
 * @returns An array of strings (text) and objects (image URLs).
 */
function extractTextAndImageUrls(content: string): Array<string | { url: string }> {
  const urlRegex = /(https?:\/\/[^\s]+)/g; // Basic regex to match URLs
  const parts: Array<string | { url: string }> = [];
  let lastIndex = 0;

  // Find all matches
  content.replace(urlRegex, (match, offset) => {
    // Add text before the URL
    if (offset > lastIndex) {
      parts.push(content.substring(lastIndex, offset).trim());
    }
    // Add the URL as an image object
    parts.push({ url: match });
    lastIndex = offset + match.length;
    return match;
  });

  // Add remaining text after the last URL
  if (lastIndex < content.length) {
    parts.push(content.substring(lastIndex).trim());
  }

  return parts.filter(part => (typeof part === "string" ? part.length > 0 : true));
}

export function convertMessageToOpenAIMessage(message: Message): ChatCompletionMessageParam {
  if (message.isTextMessage()) {
    const contentParts: ChatCompletionContentPart[] = [];

    // Split content into parts: text and image URLs
    const textAndUrls = extractTextAndImageUrls(message.content);

    // Convert each part to ChatCompletionContentPart
    textAndUrls.forEach(part => {
      if (typeof part === "string") {
        contentParts.push({
          type: "text",
          text: part,
        });
      } else {
        contentParts.push({
          type: "image_url",
          image_url: {
            url: part.url,
            detail: "auto", // Default to 'auto'; can be adjusted as needed
          },
        });
      }
    });

    return {
      role: message.role as ChatCompletionUserMessageParam["role"],
      content: contentParts,
    } satisfies
      | ChatCompletionUserMessageParam
      | ChatCompletionAssistantMessageParam
      | ChatCompletionSystemMessageParam;
  } else if (message.isActionExecutionMessage()) {
    return {
      role: "assistant",
      tool_calls: [
        {
          id: message.id,
          type: "function",
          function: {
            name: message.name,
            arguments: JSON.stringify(message.arguments),
          },
        },
      ],
    };
  } else if (message.isResultMessage()) {
    return {
      role: "tool",
      content: message.result,
      tool_call_id: message.actionExecutionId,
    };
  }
}

export function convertSystemMessageToAssistantAPI(message: ChatCompletionMessageParam) {
  return {
    ...message,
    ...(message.role === "system" && {
      role: "assistant",
      content: "THE FOLLOWING MESSAGE IS A SYSTEM MESSAGE: " + message.content,
    }),
  };
}
