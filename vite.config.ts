import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const nitroConfig = {
  preset: "static" as string,
  prerender: {
    routes: ["/", "/about", "/agents", "/contact", "/listings"],
    crawlLinks: true,
  },
};

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: nitroConfig as any,
});
