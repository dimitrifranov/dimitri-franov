<template>
  <baseComponent pk="blog" @heightChange="heightChange">
    <template v-slot:title>BLOG</template>
    <template v-slot:next_page>
      <slot name="next_page" />
    </template>
    <template v-slot:text>
      <article
        class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-2 h-5/6 w-full articles lg:p-4 lg:pb-2 pb-2"
      >
        <nuxt-link
          v-for="article in articles"
          :key="article.slug"
          :style="{ borderWidth: '10%' }"
          class="article px-1 py-1 lg:px-3 lg:py-2 mx-2 mt-2 font-light bg-blue"
          :to="articleLink(article.slug)"
        >
          <p :style="{ fontSize: height / 50 + 'px' }">sohn</p>
          <h3
            class="uppercase truncate"
            :style="{ fontSize: height / 35 + 'px' }"
          >
            {{ article.title }}
          </h3>
        </nuxt-link>
      </article>
      <nuxt-link
        to="/blog"
        :style="{ fontSize: height / 45 + 'px' }"
        class="text-white h-1/6 border border-white font-light px-2 py-1 mb-2 mr-6 float-right more"
      >
        more
      </nuxt-link>
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
.article {
  border-width: 0.01rem;
  transition: all 200ms ease;
}
.article:hover {
  z-index: 10;
  /* position: fixed; */
  transform: scale(1.5);
}
.uppercase {
  text-transform: uppercase;
}
.word-wrap {
  word-wrap: break-word;
  word-break: break-all;
}
.more {
  transition: all 200ms ease;
}
.more:hover {
  transform: scale(1.1);
}
</style>
