<template>
  <div>
    <article>
      <nuxt-content
        class="h-screen w-screen prose lg:prose-lg mx-20 my-20 overflow-hidden text-black"
        :document="article"
      />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog')
      .where({ slug: params.slug })
      .fetch()[0]
    return {
      article,
    }
  },
}
</script>

<style lang="scss" scoped></style>
