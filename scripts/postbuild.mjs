import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.join(__dirname, "..", "dist", "client");
const assetsDir = path.join(clientDir, "assets");

// Find built assets
const files = fs.readdirSync(assetsDir);
const jsFiles = files.filter((f) => f.endsWith(".js"));
const cssFiles = files.filter((f) => f.endsWith(".css"));

// The entry point is the smaller index-*.js (route bundle), 
// the larger one is the shared vendor chunk.
const indexJsFiles = jsFiles.filter((f) => f.startsWith("index-"));
const entryJs = indexJsFiles
  .map((f) => ({ name: f, size: fs.statSync(path.join(assetsDir, f)).size }))
  .sort((a, b) => a.size - b.size)[0].name;

const cssLinks = cssFiles
  .map((f) => `    <link rel="stylesheet" href="/assets/${f}" />`)
  .join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>BAXLIS Real Estate — More Than an Agency</title>
    <meta name="description" content="BAXLIS is a new-age real estate agency discovering exceptional properties and sharing their stories." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
${cssLinks}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${entryJs}"></script>
  </body>
</html>
`;

fs.writeFileSync(path.join(clientDir, "index.html"), html);
console.log("✓ Generated dist/client/index.html");
