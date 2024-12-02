import { GenerateCopilotResponseMutationVariables, GenerateCopilotResponseMutation, Exact, GenerateCopilotResponseInput, InputMaybe, Scalars } from '../graphql/@generated/graphql.js';
import { Client } from '@urql/core';
import { OperationResultSource, OperationResult } from 'urql';
import '@graphql-typed-document-node/core';

interface CopilotRuntimeClientOptions {
    url: string;
    publicApiKey?: string;
    headers?: Record<string, string>;
    credentials?: RequestCredentials;
}
declare class CopilotRuntimeClient {
    client: Client;
    constructor(options: CopilotRuntimeClientOptions);
    generateCopilotResponse({ data, properties, signal, }: {
        data: GenerateCopilotResponseMutationVariables["data"];
        properties?: GenerateCopilotResponseMutationVariables["properties"];
        signal?: AbortSignal;
    }): OperationResultSource<OperationResult<GenerateCopilotResponseMutation, Exact<{
        data: GenerateCopilotResponseInput;
        properties?: InputMaybe<Scalars["JSONObject"]["input"]>;
    }>>>;
    static asStream<S, T>(source: OperationResultSource<OperationResult<S, {
        data: T;
    }>>): ReadableStream<S>;
}

export { CopilotRuntimeClient };
