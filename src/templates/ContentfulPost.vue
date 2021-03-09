<template>
  <Layout>
    <div>
      <g-image class="hero-image" :src="$page.post.heroImage.file.url" />
      <h1>{{ $page.post.title }}</h1>
      <p>{{ $page.post.description }}</p>
      <p v-html="$page.post.tags" />
    </div>
  </Layout>
</template>

<page-query>
query Post($id: ID!) {
  post: contentfulBlogPost(id: $id) {
    title
    description
    tags
    slug
    heroImage {
      file {
        url
      }
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
