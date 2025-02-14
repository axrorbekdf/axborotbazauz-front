
module.exports = {
    apps: [
      {
        name: "nuxt-app",
        script: ".output/server/index.mjs",
        env: {
          PORT: 3000, // Nuxt serveri shu portda ishlaydi
          NODE_ENV: "production"
        }
      }
    ]
  };
  