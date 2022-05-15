import { LiveReload, Outlet } from "@remix-run/react";

export default function Jokes() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        <h1 className="text-orange-600 text-xl font-medium">JOKES</h1>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
