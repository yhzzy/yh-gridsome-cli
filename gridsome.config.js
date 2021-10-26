// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        // apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'gallary'],
        singleTypes: ['journal', 'global', 'homepage'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: '',
        },
      },
    },
  ],
  templates: {
    StrapiPost: [
      {
        path: '/journal-detail/:id',
        component: './src/templates/Post.vue'
      }
    ],
    StrapiGallary: [
      {
        path: '/projects/:id',
        component: './src/templates/Project.vue'
      }
    ]
  }
}
