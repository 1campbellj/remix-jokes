import { LiveReload, Outlet } from "@remix-run/react";

export default function Jokes() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        <h1>JOKES</h1>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
