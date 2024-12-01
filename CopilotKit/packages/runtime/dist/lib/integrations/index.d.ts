import { c as CreateCopilotRuntimeServerOptions, G as GraphQLContext } from '../../copilot-runtime-416b9eb9.js';
export { g as CommonConfig, b as CopilotRequestContextProperties, e as buildSchema, d as createContext, h as getCommonConfig } from '../../copilot-runtime-416b9eb9.js';
import * as graphql_yoga from 'graphql-yoga';
import { YogaServerInstance } from 'graphql-yoga';
export { copilotRuntimeNodeHttpEndpoint } from './node-http/index.js';
export { copilotRuntimeNodeExpressEndpoint } from './node-express/index.js';
export { copilotRuntimeNestEndpoint } from './nest/index.js';
import '@copilotkit/shared';
import '../../langserve-68a14520.js';
import '../../index-b3d1da4c.js';
import '../../graphql/types/base/index.js';
import 'rxjs';
import 'graphql';
import 'pino';
import '../cloud/index.js';

declare function copilotRuntimeNextJSAppRouterEndpoint(options: CreateCopilotRuntimeServerOptions): {
    handleRequest: graphql_yoga.YogaServerInstance<{}, Partial<GraphQLContext>>;
    GET: any;
    POST: any;
    OPTIONS: any;
};

declare const config: {
    api: {
        bodyParser: boolean;
    };
};
type CopilotRuntimeServerInstance<T> = YogaServerInstance<T, Partial<GraphQLContext>>;

declare function copilotRuntimeNextJSPagesRouterEndpoint(options: CreateCopilotRuntimeServerOptions): CopilotRuntimeServerInstance<GraphQLContext>;

export { CopilotRuntimeServerInstance, CreateCopilotRuntimeServerOptions, GraphQLContext, config, copilotRuntimeNextJSAppRouterEndpoint, copilotRuntimeNextJSPagesRouterEndpoint };
