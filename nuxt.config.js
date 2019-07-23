export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Easy Read Time",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Easily generate Medium like read times"
      }
    ],
    link: [{
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Merriweather|Montserrat:900|Ubuntu+Mono&display=swap"
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/styles/global.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    transpile: ["easy-read-time"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
