module.exports = {
  apps: [
    {
      name: "nuxt-app",
      script: "node",
      args: ".output/server/index.mjs",
      env: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    }
  ]
};
