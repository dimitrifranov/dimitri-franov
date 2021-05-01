<template>
  <div class="pb-24 overflow-hidden">
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
      <h1 class="text-4xl text-white ml-24">{{ article.title }}</h1>
    </nav>
    <article class="w-screen lg:px-64 lg:my-15 md:px-20 md:my-10 px-10">
      <h2 class="text-xl font-display w-full mt-24 opacity-75">
        {{ article.subtitle }}
      </h2>
      <nuxt-content
        class="prose lg:prose-lg text-black mt-8"
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
  // transition: 'article',
}
</script>

<style scoped>
.arrow:hover {
  fill: orange;
  transform: scale(1.1);
  transition: all 200ms ease;
  /* box-shadow: 0.5vmin -0.5vmin 0 white; */
}

.article-enter-active,
.article-leave-active {
  transition: all 0.3s;
  /* transition: color 0.5s; */
}
.article-enter,
.article-leave-active {
  transform: scale(0);
  opacity: 0;
  /* background: transparent; */
}
</style>
