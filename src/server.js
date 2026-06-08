import express from "express";
import { fileURLToPath } from "node:url";

export function createApp() {
  const app = express();

  app.get("/", (_req, res) => {
    res.type("text/plain").send("Hello Node.js Hello Jason");
  });

  app.get("/healthz", (_req, res) => {
    res.type("text/plain").send("ok");
  });

  return app;
}

if (fileURLToPath(import.meta.url) === process.argv[1]) {
  const port = process.env.PORT || 8080;
  const app = createApp();

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
