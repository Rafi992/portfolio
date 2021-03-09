<template>
  <Layout>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <g-link :to="'blog/' + edge.node.slug">
        <h1>Blog website</h1>
        <h2>{{ edge.node.title }}</h2>
      </g-link>
      <p>{{ edge.node.description }}</p>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allContentfulBlogPost {
    edges {
      node {
        title
        slug
        description
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>
