<template>
  <div>
    <article class="w-screen h-screen overflow-hidden">
      <h1 class="text-6xl font-display w-full text-center uppercase mt-4">
        {{ article.title }}
      </h1>
      <nuxt-content
        class="prose lg:prose-lg mx-64 my-20 text-black"
        :document="article"
      />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return {
      article,
    }
  },
}
</script>

<style scoped>
.uppercase {
  text-transform: uppercase;
}
</style>
