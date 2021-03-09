<template>
  <Layout>
    <h1>Witaj na blogu</h1>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <g-link :to="'blog/' + edge.node.slug">
        <h2>{{ edge.node.title }}</h2>
      </g-link>
      <p>{{ edge.node.description }}</p>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allDatoCmsPost {
    edges {
      node {
        title
        slug
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>
