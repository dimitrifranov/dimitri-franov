<template>
  <div
    :style="articleStyle"
    class="
      article
      h-16
      sm:h-28
      md:h-36
      2xl:h-56
      mx-3
      mt-3
      relative
      text-black
      bg-white
    "
    :to="articleLink"
    @click="toggle"
  >
    <div
      :style="bgStyle"
      class="bg-fixed bg absolute opacity-50 h-full w-full"
    ></div>
    <article>
      <div :style="whiteBg" class="block relative w-full z-10">
        <p
          class="
            text-xs
            sm:text-base
            md:text-xl
            lg:text-xs
            2xl:text-lg
            relative
            z-10
          "
        >
          {{ article.category }}
        </p>
        <h3
          class="
            relative
            z-10
            uppercase
            text-base
            sm:text-2xl
            md:text-3xl
            lg:text-xl
            2xl:text-4xl
            break-word
            leading-none
          "
        >
          {{ article.title }}
        </h3>
      </div>
      <p
        v-if="expanded"
        :style="whiteBg"
        class="text-black text-base w-full relative z-10 px-3 py-2 my-3"
      >
        {{ article.description }}
      </p>
      <div class="z-10 relative hide">
        <nuxt-link
          to="/"
          class="
            h-6
            2xl:h-12
            w-16
            2xl:w-32
            bg-darkBlue
            block
            text-xs
            2xl:text-lg
            text-center text-white
          "
          >lesen -></nuxt-link
        >
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      expanded: false,
    }
  },
  computed: {
    whiteBg() {
      return this.expanded ? { backgroundColor: 'white' } : {}
    },
    articleStyle() {
      if (this.expanded)
        return {
          height: '16rem',
        }
      else return {}
    },
    articleLink() {
      return '/blog/' + this.article.slug
    },
    bgStyle() {
      let style = {
        background: 'url(' + this.article.image + ') 50% 50% no-repeat',
        backgroundSize: 'cover',
      }
      if (this.expanded) style = { opacity: '100%', ...style }
      return {
        ...style,
      }
    },
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded
    },
  },
}
</script>

<style scoped>
.article,
.bg {
  border-width: 1px;
  transition: all 200ms ease;
  /* z-index: 10; */
}
.uppercase {
  text-transform: uppercase;
}
.article:focus {
  @apply h-64;
}
@media only screen and (max-width: 1024px) {
  .hide {
    display: none;
  }
}
</style>
