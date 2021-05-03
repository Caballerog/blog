import {
  Middleware,
  RoleMiddleware,
  ThrottlingMiddleware,
  UserExistsMiddleware,
} from "./middlewares";
import { REQUEST_PER_MINUTE, USERS } from "./app.constants";

import { Server } from "./server";

const readline = require("readline-sync");

const server = new Server();
server.register(USERS.ADMIN.email, USERS.ADMIN.password);
server.register(USERS.USER.email, USERS.USER.password);

const middleware: Middleware = new ThrottlingMiddleware(REQUEST_PER_MINUTE);
middleware
  .setNextMiddleware(new UserExistsMiddleware(server))
  .setNextMiddleware(new RoleMiddleware());

server.setMiddleware(middleware);

while (true) {
  let success = false;

  do {
    console.log("....Autentication Software....");
    const email = readline.question("Email: ");
    const password = readline.question("Password: ", { hideEchoBack: true });
    success = server.logIn(email, password);
  } while (!success);
}
