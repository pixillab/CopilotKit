import {ContentMessage} from "@copilotkit/runtime-client-gql";
import { RenderMessageProps } from "../props";
import { Markdown } from "../Markdown";
import { useChatContext } from "../ChatContext";

export function RenderContentMessage(props: RenderMessageProps) {
  const { message, inProgress, index, isCurrentMessage } = props;
  const { icons } = useChatContext();
  if (message.isContentMessage()) {
    const content = message.content?.[0]?.textContent?.text || "No content available.";
    if (message.role === "user") {
      return (
        <div
          key={index}
          data-message-role="user"
          className="copilotKitMessage copilotKitUserMessage"
        >
          {content}
        </div>
      );
    } else if (message.role == "assistant") {
      return (
        <div
          key={index}
          data-message-role="assistant"
          className={`copilotKitMessage copilotKitAssistantMessage`}
        >
          {isCurrentMessage && inProgress && !message.content ? (
            icons.spinnerIcon
          ) : (
            <Markdown content={content} />
          )}
        </div>
      );
    }
  }
}
