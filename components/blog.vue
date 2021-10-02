<template>
  <baseComponent id="1" pk="blog" :windowstyle="windowstyle" @scroll="scroll">
    <template #title>BLOG</template>
    <template #next_page>
      <slot
        name="next_page"
        @scroll="scroll"
        @heightChange="heightChange"
        @widthChange="widthChange"
      />
    </template>
    <template #text>
      <article
        class="
          grid
          lg:grid-cols-3
          md:grid-cols-2
          grid-cols-1 grid-rows-2
          h-5/6
          w-full
          articles
          lg:p-4 lg:pb-2
          pb-2
        "
      >
        <nuxt-link
          v-for="article in articles"
          :key="article.slug"
          :style="{ borderWidth: '10%' }"
          class="article px-2 py-2 lg:px-3 lg:py-2 mx-2 mt-2 font-light bg-blue"
          :to="articleLink(article.slug)"
        >
          <p class="text-sm">
            {{ article.category }}
          </p>
          <h3 class="uppercase truncate text-lg">
            {{ article.title }}
          </h3>
        </nuxt-link>
      </article>
      <nuxt-link
        to="/blog"
        class="
          text-base text-white
          h-1/6
          border border-white
          font-light
          px-2
          py-1
          mb-2
          mr-6
          float-right
          more
        "
      >
        mehr Artikel
      </nuxt-link>
    </template>
    <template #content>
      <!-- <div id="canvas"></div>    :style="{ height: height + 'px', width: width + 'px' }"     
-->
      <!-- <canvas id="canvas" :height="height" :width="width"></canvas> -->
    </template>
  </baseComponent>
</template>

<script>
import baseComponent from '@/components/baseComponent.vue'
// import P5 from 'p5'
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
    windowstyle: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      height: 0,
      width: 0,
    }
  },
  mounted() {
    // const canvas = document.getElementById('canvas')
    // const ctx = canvas.getContext('2d')
    // ctx.fillStyle = 'green'
    // // ctx.fillRect(10, 10, 150, 100)
    // const collatz = (n) => {
    //   return n % 2 === 0 ? n / 2 : (n * 3 + 1) / 2
    // }
    // for (let i = 1; i < 1000; i++) {
    //   const sequence = []
    //   let n = i
    //   do {
    //     sequence.push(n)
    //     n = collatz(n)
    //   } while (n !== 1)
    //   sequence.push(1)
    //   sequence.reverse()
    //   const len = 5
    //   let angle = 0.2
    //   let x = canvas.height / 2
    //   let y = canvas.height / 2
    //   ctx.beginPath()
    //   ctx.lineWidth = 1
    //   ctx.moveTo(x, y)
    //   for (let j = 0; j < sequence.length; j++) {
    //     const value = sequence[j]
    //     if (value % 2 === 0) {
    //       x -= len * Math.sin(angle)
    //       y -= len * Math.cos(angle)
    //       angle++
    //     } else {
    //       x -= len * Math.sin(-angle)
    //       y -= len * Math.cos(-angle)
    //       angle--
    //     }
    //     ctx.lineTo(x, y)
    //     ctx.stroke()
    //   }
    // }
    //
    //
    //
    //
    // const script = (p5) => {
    //   p5.setup = () => {
    //     p5.createCanvas(this.height / 1.618, this.height / 1.618)
    //     const collatz = (n) => {
    //       return n % 2 === 0 ? n / 2 : (n * 3 + 1) / 2
    //     }
    //     for (let i = 1; i < 10000; i++) {
    //       const sequence = []
    //       let n = i
    //       do {
    //         sequence.push(n)
    //         n = collatz(n)
    //       } while (n !== 1)
    //       sequence.push(1)
    //       sequence.reverse()
    //       const len = 5
    //       const angle = 0.15
    //       p5.resetMatrix()
    //       p5.translate(0, p5.height)
    //       for (let j = 0; j < sequence.length; j++) {
    //         const value = sequence[j]
    //         value % 2 === 0 ? p5.rotate(angle) : p5.rotate(-angle)
    //         p5.strokeWeight(2)
    //         p5.stroke(255, 10)
    //         p5.line(0, 0, 0, -len)
    //         p5.translate(0, -len)
    //       }
    //     }
    //   }
    //   p5.draw = () => {
    //     // p5.clear()
    //     // p5.ellipse(p5.mouseX, p5.mouseY, 40, 40)
    //   }
    // }
    // // eslint-disable-next-line no-unused-vars
    // const p5canvas = new P5(script, 'canvas')
  },
  methods: {
    heightChange(e) {
      this.height = e
    },
    scroll(e) {
      this.$emit('scroll', e)
    },
    widthChange(e) {
      this.width = e
    },
    articleLink(slug) {
      return '/blog/' + slug
    },
  },
}
</script>

<style scoped>
.article {
  border-width: 1px;
  transition: all 200ms ease;
  /* z-index: 10; */
}
.article:hover {
  /* position: fixed; */
  transform: scale(1.2);
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

#canvas {
  transform: scale(0.618);
}
</style>
