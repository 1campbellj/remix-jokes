import { LiveReload, Outlet, Links } from "@remix-run/react";

import styles from "./styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
	<Links />
      </head>
      <body className="bg-purple-600 text-white">
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
