<template>
  <Layout>
    <div>
      <g-image class="hero-image" :src="$page.post.heroImage.url" />
      <h1>{{ $page.post.title }}</h1>
      <p>{{ $page.post.content }}</p>
    </div>
  </Layout>
</template>

<page-query>
query Post($id: ID!) {
  post: datoCmsPost(id: $id) {
    id
    title
    slug
    content
    heroImage {
      url
    }
  }
}
</page-query>
<script>
export default {};
</script>

<style>
.hero-image {
  width: 500px;
  height: auto;
}
</style>
