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
      overflow-hidden
    "
    :to="articleLink"
    @click="toggleSmall"
    @mouseenter="toggleBig"
    @mouseleave="expanded = false"
  >
    <div :style="bgStyle" class="bg-fixed bg absolute h-full w-full"></div>
    <article class="h-full">
      <div :style="titleBG" class="block relative w-full z-10 px-3 py-2 trans">
        <p
          :style="themeStyle"
          class="
            trans
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
          :style="headingStyle"
          class="
            trans
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
        :style="{ backgroundColor: 'rgba(255,255,255,0.5)' }"
        class="text-black text-base w-full relative z-10 px-3 py-2 my-3"
      >
        {{ article.description }}
      </p>
      <div v-if="expanded" class="z-10 relative">
        <nuxt-link
          :to="articleLink"
          class="
            h-8
            2xl:h-12
            w-24
            2xl:w-32
            bg-darkBlue
            block
            text-base
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
      windowWidth: 0,
    }
  },
  computed: {
    headingStyle() {
      if (this.expanded && this.windowWidth > 1024)
        return {
          fontSize: '1rem',
        }
      else return {}
    },
    titleBG() {
      if (this.expanded && this.windowWidth > 1024)
        return {
          paddingTop: '0',
          paddingBottom: '0',
          backgroundColor: 'rgba(255,255,255,0.5)',
          height: '30%',
        }
      else if (!this.expanded && this.windowWidth > 1024)
        return {
          backgroundColor: 'rgba(255,255,255,0.3)',
          height: '100%',
        }
      else return { backgroundColor: 'rgba(255,255,255,0.3)' }
    },
    themeStyle() {
      if (this.expanded && this.windowWidth > 1024)
        return {
          fontSize: '0.5rem',
        }
      else return {}
    },
    articleStyle() {
      if (this.expanded && this.windowWidth < 1024)
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
  mounted() {
    this.windowWidth = window.innerWidth
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
  methods: {
    toggleSmall() {
      if (this.windowWidth < 1024) this.expanded = !this.expanded
    },
    toggleBig() {
      if (this.windowWidth >= 1024) this.expanded = !this.expanded
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
.trans {
  transition-property: height, font-size, padding;
  transition-duration: 250ms;
}
</style>
