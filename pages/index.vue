<template>
  <div>
    <!-- <canvas
      id="background"
      class="fixed w-screen h-screen top-0 bottom-0"
    ></canvas> -->
    <background />
    <div class="flex justify-center background">
      <div class="containing page">
        <div id="home" class="contain" :style="windowStyle">
          <section :style="{ fontSize: height / 10 + 'px' }" class="title">
            <h1>{{ height }}</h1>
          </section>
          <section class="equation">
            <h2>equation</h2>
          </section>
          <section class="new_page">
            <coding>
              <!-- <template v-slot:next_page>
                <baseComponent>
                  <template v-slot:next_page>
                    <baseComponent>
                      <template v-slot:next_page>
                        <baseComponent></baseComponent>
                      </template>
                    </baseComponent>
                  </template>
                </baseComponent>
              </template> -->
            </coding>
          </section>
          <section class="text">
            <!-- <li v-for="post of posts" :key="post.slug" class="prose font-red">
              <h2>{{ post.title }}</h2>
              <nuxt-content :document="post"></nuxt-content>
            </li> -->
          </section>
          <div class="content"></div>
        </div>
      </div>
      <!-- <div class="block w-screen spacer"></div> -->
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger'
import coding from '@/components/coding.vue'
import Background from '~/components/background.vue'
export default {
  components: {
    coding,
    Background,
  },
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()

    return {
      posts,
    }
  },
  data() {
    return {
      width: 0,
      height: 0,
      windowWidth: 0,
      windowHeight: 0,
    }
  },
  computed: {
    // post() {
    //   return this.posts[1]
    // },
    isTooWide() {
      if (this.windowHeight * 1.61803 < this.windowWidth) return true
      else return false
    },
    phiWidth() {
      return this.windowHeight * 1.61803
    },
    phiHeight() {
      return this.windowWidth / 1.61803
    },
    phiMobileHeight() {
      return this.windowWidth * 1.61803
    },
    windowStyle() {
      if (this.windowWidth < 640) {
        return {
          width: '100vw',
          height: this.phiMobileHeight + 'px',
          fontSize: '0.001vw',
        }
      } else if (this.isTooWide)
        return {
          height: '100vh',
          width: this.phiWidth + 'px',
          fontSize: '0.00618vh',
          // width: 'auto',
        }
      else
        return {
          width: '100vw',
          height: this.phiHeight + 'px',
          fontSize: '0.001vw',
          // height: 'auto',
        }
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight
    window.onresize = () => {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    }
    setTimeout(() => {
      this.width = document.getElementById('home').clientWidth
      this.height = document.getElementById('home').clientHeight
      window.addEventListener('resize', () => {
        setTimeout(() => {
          this.width = document.getElementById('home').clientWidth
          this.height = document.getElementById('home').clientHeight
          // console.log(this.width, this.height)
        }, 1)
      })
    }, 1)

    // const canvas = document.getElementById('background')
    // const ctx = canvas.getContext('2d')
    // ctx.fillStyle = 'blue'
    // ctx.fillRect(0, 0, canvas.width, canvas.height)

    gsap.defaults({ duration: 1, ease: 'none' })
    gsap.registerPlugin(scrollTrigger)
    const tl = gsap.timeline()
    const pages = gsap.utils.toArray('.page')
    for (const id in pages) {
      tl.addLabel(id)
      // console.log(tl.previousLabel(id + 0.1))
      // tl.to(pages[id + 1], {
      //   scale: 1.61803 ** 2,
      //   opacity: 1,
      //   // css: { filter: 'blur(0' },
      //   // duration: 3,
      // })
      // console.log(pages[id].querySelector('.content'))
      tl.to(
        pages[id],
        {
          scale: 1.61803 ** 2,
          // opacity: 0,
        }
        // '<'
      )
      // if (pages[id - 1]) {
      //   tl.to(
      //     pages[id - 1].querySelector('.content'),
      //     {
      //       // scale: 2 * 1.61803 ** 2,
      //       opacity: 0,
      //       duration: 0.1,
      //       ease: 'none',
      //     },
      //     '<'
      //   )
      // }
    }
    // const proxy = { blur: 0 }
    // // const blurSetter = gsap.quickSetter('.new_page', 'filter': 'blur', 'px') // fast
    // const clamp = gsap.utils.clamp(0, 1) // don't let the skew go beyond 20 degrees.

    scrollTrigger.create({
      animation: tl,
      // onUpdate: (self) => {
      //   console.log(self.progress)
      //   const blur = clamp(Math.abs(self.getVelocity() / 300))
      //   // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
      //   if (blur > proxy.blur) {
      //     proxy.blur = blur
      //     gsap.to(proxy, {
      //       blur: 0,
      //       duration: 0.8,
      //       ease: 'power3',
      //       overwrite: true,
      //       onUpdate: () =>
      //         gsap.set(pages, {
      //           filter: 'blur(' + proxy.blur.toString() + 'px)',
      //         }),
      //     })
      //   }
      // },
      trigger: '.background',
      scrub: 0.5,
      pin: true,
      anticipatePin: 1,
      snap: {
        // snapTo: 1 / (pages.length - 1), // snap to the closest label in the timeline
        // snapTo: [0, 0.1, 0.5, 0.8, 1], // snap to the closest label in the timeline
        snapTo: 'labels', // snap to the closest label in the timeline
        duration: { min: 0.5, max: 1 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
      },
      end: () => '+=' + pages.length * this.windowWidth,
      // end: '+=10000',
    })
    // gsap.set('.new_page', { force3D: true })
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>

<style scoped>
.spacer {
  height: 400px;
}
.background {
  /* overflow: scroll; */
  /* background-color: #efe2bf; */
  height: 100vh;
  width: 100vw;
  transform-origin: top right;
}
@media only screen and (min-width: 640px) {
  .contain {
    /* width: 100%; */
    /* height: 100%; */
    display: grid;
    grid-template-columns: 1.61803fr 1fr 1.61803fr;
    grid-template-rows: 1fr 1.61803fr;
    grid-template-areas:
      'title equation new_page'
      'text text content';
  }
}

@media only screen and (max-width: 640px) {
  .contain {
    /* width: 100%; */
    /* height: 100%; */
    display: grid;
    grid-template-columns: 1.61803fr 1fr;
    grid-template-rows: 1.61803fr 1fr 1.61803fr;
    grid-template-areas:
      'title new_page'
      'text equation'
      'text content';
  }
}
.title {
  color: #000000;
  background-color: #8aaca3;
  font-size: 5rem;
  /* position: relative; */
  grid-area: title;
}

.content {
  color: aqua;
  background-color: #db6b0e;
  grid-area: content;
  font-size: 12px;
}

.equation {
  color: black;
  background-color: #0d1f2f;
  grid-area: equation;
}

.text {
  /* font-size: 20px; */
  background-color: #3b6670;
  grid-area: text;
}

.page {
  transform-origin: top right;
}

.new_page {
  color: black;
  /* background-color: #0d1f2f; */
  transform-origin: top right;

  /* position: relative; */
  /* padding-top: 61.8%; */
  /* opacity: 0.8; */
  grid-area: new_page;
}
html,
body {
  /* overflow: hidden; */
}
</style>
