import { Message } from '@copilotkit/runtime-client-gql';

interface ButtonProps {
}
interface WindowProps {
    clickOutsideToClose: boolean;
    hitEscapeToClose: boolean;
    shortcut: string;
    children?: React.ReactNode;
}
interface HeaderProps {
}
interface SuggestionsProps {
    title: string;
    message: string;
    partial?: boolean;
    className?: string;
    onClick: (message: string) => void;
}
interface MessagesProps {
    messages: Message[];
    inProgress: boolean;
    children?: React.ReactNode;
    RenderTextMessage: React.ComponentType<RenderMessageProps>;
    RenderContentMessage: React.ComponentType<RenderMessageProps>;
    RenderActionExecutionMessage: React.ComponentType<RenderMessageProps>;
    RenderAgentStateMessage: React.ComponentType<RenderMessageProps>;
    RenderResultMessage: React.ComponentType<RenderMessageProps>;
}
interface RenderMessageProps {
    message: Message;
    inProgress: boolean;
    index: number;
    isCurrentMessage: boolean;
    actionResult?: string;
}
interface InputProps {
    inProgress: boolean;
    onSend: (text: string) => Promise<Message>;
    isVisible?: boolean;
}
interface ResponseButtonProps {
    onClick: () => void;
    inProgress: boolean;
}

export { ButtonProps, HeaderProps, InputProps, MessagesProps, RenderMessageProps, ResponseButtonProps, SuggestionsProps, WindowProps };
