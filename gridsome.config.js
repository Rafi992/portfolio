module.exports = {
  templates: {
    // Add templates for content types here.
    // Read more: https://gridsome.org/docs/templates/
  },
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'dd9zc6ksxqgv', // required
        accessToken: 'iX6aZlthHci4T7HiU2jsNlKw6Iz9aSw3DQOj9wTMjwk', // required
        typeName: 'Contentful',
      },
    },
  ],
  templates: {
    ContentfulBlogPost: [
      {
        path: '/blog/:title',
        component: './src/templates/ContentfulPost.vue',
      },
    ],
  },
};
