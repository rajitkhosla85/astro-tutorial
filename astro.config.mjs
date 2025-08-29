// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "http://example.com",
  env: {
    schema: {
      TEST_URL: envField.string({
        context: "server",
        access: "public",
        optional: false,
      }),
    },
  },
  server: ({ command }) => ({ port: command === "dev" ? 7777 : 4000 }),
});
