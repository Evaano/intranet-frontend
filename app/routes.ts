import { route, type RouteConfig } from "@react-router/dev/routes";

export default [
  // auth routes
  // index("./routes/auth/index.tsx"), // Can make a "logged in as {user}" page ig
  // route("logout", "./routes/auth/logout.tsx"),
  // route("login", "./routes/auth/login.tsx"),
  // parent routes (within layout)
  route("", "./routes/layout.tsx", [
    route("home", "./routes/home.tsx"),
    // route("settings", "./routes/settings.tsx"),
    // route("pos", "./routes/pos/index.tsx", [
    //   route("register", "./routes/pos/register.tsx"),
    //   route("sessions", "./routes/pos/sessions.tsx"),
    // ]),
  ]),
] satisfies RouteConfig;
