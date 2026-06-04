// Edge Function fallback - serves static index.html for all routes
// This bypasses the broken SSR server

export const config = {
  runtime: 'edge',
};

export default function handler() {
  return new Response(
    `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>BAXLIS Real Estate — More Than an Agency</title>
<meta name="description" content="BAXLIS is a new-age real estate agency discovering exceptional properties."/>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0f1012; color: #fff; }
  .container { text-align: center; padding: 2rem; }
  h1 { font-size: 2rem; margin-bottom: 1rem; }
  p { color: #888; }
</style>
</head>
<body>
<div class="container">
  <h1>BAXLIS</h1>
  <p>Loading...</p>
</div>
</body>
</html>`,
    {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    }
  );
}