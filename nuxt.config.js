export default {
  mode: "universal",
  target: "static",
  head: {
    htmlAttrs: {
      lang: "pl",
      class: "has-smooth-scrolling"
    },
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: process.env.npm_package_description || "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" }
    ]
  },
  css: ["~/assets/scss/main.scss"],
  plugins: ["~/plugins/toast.js"],
  components: true,
  buildModules: [],
  modules: ["nuxt-buefy", "@nuxtjs/axios", "@nuxt/content", "@nuxtjs/proxy", "@nuxtjs/style-resources"],
  proxy: {
    // "/api/contact": {
    //   target: "http://localhost:80/api/contact",
    //   pathRewrite: {
    //     "^/api/contact": "/"
    //   }
    // },
    // "/api/signup": {
    //   target: "http://localhost:80/api/signup",
    //   pathRewrite: {
    //     "^/api/signup": "/"
    //   }
    // }
  },
  axios: {
    baseURL: "/"
  },
  content: {},
  build: {}
};
