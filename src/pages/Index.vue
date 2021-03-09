<template>
  <Layout>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
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
        description
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>
