//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  compatibilityDate: "2025-02-04",
  experimental: {
    openAPI: true,
  },
  routeRules: {
    "/api/**": {
      cors: true
    },
  },
});
