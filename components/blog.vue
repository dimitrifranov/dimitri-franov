<template>
  <baseComponent pk="blog" @heightChange="heightChange">
    <template v-slot:title>BLOG</template>
    <template v-slot:next_page>
      <slot name="next_page" />
    </template>
    <template v-slot:text>
      <article class="grid h-full w-full articles p-3">
        <!-- {{ articles }} -->
        <nuxt-link
          v-for="article in articles"
          :key="article.slug"
          :style="{ borderWidth: '10%' }"
          class="article"
          to="/blog/article"
        >
          <p :style="{ fontSize: height / 20 + 'px' }">politics</p>
          <h3></h3>
        </nuxt-link>
      </article>
    </template>
  </baseComponent>
</template>

<script>
import baseComponent from '@/components/baseComponent.vue'
export default {
  components: {
    baseComponent,
  },
  async asyncData({ $content }) {
    const articles = await $content('blog').fetch()
    return {
      articles,
    }
  },
  data() {
    return {
      height: 0,
    }
  },
  methods: {
    heightChange(e) {
      this.height = e
      console.log(e)
      console.log(this.articles)
    },
  },
}
</script>

<style scoped>
.articles {
  grid-template-columns: 1fr 1fr;
}
.article {
  @apply border-white text-xs m-1;
  border-width: 0.01rem;
}
</style>
