<template>
  <div class="pb-24 overflow-hidden">
    <nav
      :style="nav"
      class="
        transition-all
        text-xl text-white
        absolute
        flex flex-col
        z-20
        center
        font-light
      "
    >
      <nuxt-link to="/">home</nuxt-link>
      <nuxt-link to="/">blog</nuxt-link>
      <nuxt-link to="/">projekte</nuxt-link>
      <nuxt-link to="/">fotografie</nuxt-link>
      <nuxt-link to="/">kontakt</nuxt-link>
    </nav>
    <div :style="circle" class="circle transition-all"></div>
    <div @click="open = !open">
      <hamburger :open="open" class="hamburger" />
    </div>
    <nuxt-link to="/">
      <img class="logo" src="/logo.svg" alt="logo"
    /></nuxt-link>
    <img :src="article.image" alt="article cover image" />
    <article class="w-screen lg:px-64 lg:my-15 md:px-20 md:my-10 px-6">
      <h1 class="text-4xl text-black">{{ article.title }}</h1>
      <h2 class="text-xl font-display w-full mt-12 opacity-75">
        {{ article.subtitle }}
      </h2>
      <nuxt-content
        class="prose lg:prose-lg text-black mt-8 font-body"
        :document="article"
      />
    </article>
  </div>
</template>

<script>
import hamburger from '@/components/hamburger.vue'

export default {
  components: {
    hamburger,
  },
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return {
      article,
    }
  },
  data() {
    return {
      open: false,
    }
  },
  computed: {
    nav() {
      if (this.open)
        return {
          marginTop: '100px',
          gap: '10px',
        }
      else
        return {
          opacity: '0',
          marginTop: '0',
          gap: '0',
          left: '0',
          zIndex: '0',
          transform: 'scale(0.1)',
        }
    },
    circle() {
      if (this.open)
        return {
          height: '160vh',
          width: '160vh',
          left: '-80vh',
          top: '-80vh',
        }
      else return {}
    },
  },
  // transition: 'article',
}
</script>

<style scoped>
.circle {
  height: 140px;
  width: 140px;
  background-color: #3b6670;
  border-radius: 50%;
  display: inline-block;
  position: fixed;
  left: -70px;
  top: -70px;
  z-index: 10;
}
.logo {
  margin-top: 10px;
  margin-right: 10px;
  height: 30px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
}
.center {
  left: 50%;
  transform: translate(-50%, 0);
}
.hamburger {
  /* height: 30px;
  width: 30px; */
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
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
