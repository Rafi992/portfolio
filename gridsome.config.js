module.exports = {
  templates: {
    // Add templates for content types here.
    // Read more: https://gridsome.org/docs/templates/
  },
  plugins: [
    {
      use: '@gridsome/source-datocms',
      options: {
        apiToken: process.env.DCMS_TOKEN, // required
        previewMode: false,
        apiUrl: 'https://site-api.datocms.com',
        typeName: 'DatoCms',
      },
    },
  ],
  templates: {
    DatoCmsPost: [
      {
        path: '/blog/:title',
        component: './src/templates/DatoPost.vue',
      },
    ],
  },
};
