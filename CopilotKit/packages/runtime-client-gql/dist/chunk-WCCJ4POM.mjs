import {
  generateCopilotResponseMutation
} from "./chunk-2XHINFDL.mjs";

// src/client/CopilotRuntimeClient.ts
import { Client, cacheExchange, fetchExchange } from "@urql/core";

// package.json
var version = "1.3.15-pixil.3";

// src/client/CopilotRuntimeClient.ts
var CopilotRuntimeClient = class {
  constructor(options) {
    const headers = {};
    if (options.headers) {
      Object.assign(headers, options.headers);
    }
    if (options.publicApiKey) {
      headers["x-copilotcloud-public-api-key"] = options.publicApiKey;
    }
    this.client = new Client({
      url: options.url,
      exchanges: [cacheExchange, fetchExchange],
      fetchOptions: {
        headers: {
          ...headers,
          "X-CopilotKit-Runtime-Client-GQL-Version": version
        },
        ...options.credentials ? { credentials: options.credentials } : {}
      }
    });
  }
  generateCopilotResponse({
    data,
    properties,
    signal
  }) {
    const result = this.client.mutation(
      generateCopilotResponseMutation,
      { data, properties },
      { fetch: (url, opts) => fetch(url, { ...opts, signal }) }
    );
    return result;
  }
  static asStream(source) {
    return new ReadableStream({
      start(controller) {
        source.subscribe(({ data, hasNext }) => {
          controller.enqueue(data);
          if (!hasNext) {
            controller.close();
          }
        });
      }
    });
  }
};

export {
  CopilotRuntimeClient
};
//# sourceMappingURL=chunk-WCCJ4POM.mjs.map