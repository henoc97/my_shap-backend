import "reflect-metadata";

import "./repositories.container";
import { container } from './repositories.container';

import "./services.container";
import "./use-cases.container/main.use-cases.container";
import "./controller.container";

export { container };
