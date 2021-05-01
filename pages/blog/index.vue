<template>
  <div class="h-screen">
    <nav class="flex h-16 w-full fixed bg-blue z-10">
      <nuxt-link class="h-full center-items w-24" to="/#1">
        <svg
          class="arrow w-12"
          width="790"
          height="393"
          viewBox="0 0 790 393"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="43" y="181" width="747" height="30" />
          <rect
            x="22"
            y="175.294"
            width="247.903"
            height="30"
            transform="rotate(-45 22 175.294)"
          />
          <rect
            x="197.294"
            y="392.507"
            width="277.62"
            height="30"
            transform="rotate(-135 197.294 392.507)"
          />
        </svg>
      </nuxt-link>
      <h1 class="text-4xl text-white ml-24">Blog</h1>
    </nav>
    <article
      class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-6 h-full w-full articles p-4 pb-2 pt-16"
    >
      <nuxt-link
        v-for="article in articles"
        :key="article.slug"
        :style="{ borderWidth: '10%' }"
        class="article border px-3 py-2 mx-2 mt-2 font-light"
        :to="articleLink(article.slug)"
      >
        <p>{{ article.category }}</p>
        <h2 class="uppercase text-2xl">
          {{ article.title }}
        </h2>
        <p class="text-lg">
          {{ article.subtitle }}
        </p>
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

<style scoped>
.arrow:hover {
  fill: orange;
  transform: scale(1.1);
  transition: all 200ms ease;
  /* box-shadow: 0.5vmin -0.5vmin 0 white; */
}
</style>
