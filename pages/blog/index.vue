<template>
  <div>
    <nav class="flex h-16 w-full fixed bg-blue z-10">
      <nuxt-link class="h-full center-items w-24" to="/#1"
        ><img class="w-12" src="/arrow.svg" alt="back"
      /></nuxt-link>
      <h1 class="text-4xl text-white ml-24">Blog</h1>
    </nav>
    <article
      class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-2 h-5/6 w-full articles p-4 pb-2 pt-16"
    >
      <nuxt-link
        v-for="article in articles"
        :key="article.slug"
        :style="{ borderWidth: '10%' }"
        class="article border px-3 py-2 mx-2 mt-2 font-light"
        :to="articleLink(article.slug)"
      >
        <p :style="{ fontSize: height / 50 + 'px' }">sohn</p>
        <h3 class="uppercase" :style="{ fontSize: height / 35 + 'px' }">
          {{ article.title }}
        </h3>
      </nuxt-link>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('blog').fetch()
    return {
      articles,
    }
  },
  methods: {
    articleLink(slug) {
      return '/blog/' + slug
    },
  },
}
</script>

<style lang="scss" scoped></style>
