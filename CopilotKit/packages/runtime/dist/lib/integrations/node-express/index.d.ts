import * as graphql_yoga from 'graphql-yoga';
import { c as CreateCopilotRuntimeServerOptions, G as GraphQLContext } from '../../../copilot-runtime-416b9eb9.js';
import '@copilotkit/shared';
import '../../../langserve-68a14520.js';
import '../../../index-b3d1da4c.js';
import '../../../graphql/types/base/index.js';
import 'rxjs';
import 'graphql';
import 'pino';
import '../../cloud/index.js';

declare function copilotRuntimeNodeExpressEndpoint(options: CreateCopilotRuntimeServerOptions): graphql_yoga.YogaServerInstance<{}, Partial<GraphQLContext>>;

export { copilotRuntimeNodeExpressEndpoint };
