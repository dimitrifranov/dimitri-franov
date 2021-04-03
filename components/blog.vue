<template>
  <baseComponent pk="blog" @heightChange="heightChange">
    <template v-slot:title>BLOG</template>
    <template v-slot:next_page>
      <slot name="next_page" />
    </template>
    <template v-slot:text>
      <article class="grid h-full w-full articles p-4">
        <nuxt-link
          v-for="article in articles"
          :key="article.slug"
          :style="{ borderWidth: '10%' }"
          class="article px-4 py-2 mx-3 my-2 font-light"
          :to="articleLink(article.slug)"
        >
          <p :style="{ fontSize: height / 50 + 'px' }">politics</p>
          <h3 class="uppercase" :style="{ fontSize: height / 30 + 'px' }">
            {{ article.title }}
          </h3>
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
  props: {
    articles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  // async asyncData({ $content }) {
  //   const articles = await $content('blog').without('body').fetch()
  //   return {
  //     articles,
  //   }
  // },
  data() {
    return {
      height: 0,
    }
  },
  methods: {
    heightChange(e) {
      this.height = e
    },
    articleLink(slug) {
      return '/blog/' + slug
    },
  },
}
</script>

<style scoped>
.articles {
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
.article {
  @apply border-white text-xs;
  border-width: 0.01rem;
}
.uppercase {
  text-transform: uppercase;
}
</style>
