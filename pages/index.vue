<template>
  <div>
    <background />
    <div class="flex justify-center background">
      <div class="containing page">
        <div id="home" class="contain" :style="windowStyle">
          <header
            :style="{ fontSize: height / 19 + 'px' }"
            class="title font-display center-items"
          >
            <img
              src="logo.png"
              alt="logo"
              class="h-32 sm:h-40"
              :style="{ height: height / 6 + 'px' }"
            />
            <h1 class="leading-none">
              <p class="font-semibold">DIMITRI</p>
              <p class="font-light">FRANOV</p>
            </h1>
          </header>
          <section class="equation center-items">
            <img
              src="equation.png"
              alt="equation"
              :style="{ height: height / 6 + 'px' }"
            />
          </section>
          <section class="new_page">
            <blog :articles="articles">
              <template v-slot:next_page>
                <coding>
                  <template v-slot:next_page>
                    <photography>
                      <template v-slot:next_page>
                        <physics></physics>
                      </template>
                    </photography>
                  </template>
                </coding>
              </template>
            </blog>
          </section>
          <section class="text">
            <article class="prose lg:prose-lg mx-20 my-20 overflow-hidden">
              <h2>Hallo Ich bin Dimitri</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
              <!-- <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p> -->
            </article>
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
// import '@/scripts/background.js'
// import Background from '~/components/background.vue'
import Photography from '~/components/photography.vue'
import physics from '~/components/physics.vue'
import Blog from '~/components/blog.vue'
export default {
  components: {
    coding,
    // Background,
    Photography,
    physics,
    Blog,
  },
  async asyncData({ $content }) {
    const articles = await $content('blog').fetch()

    return {
      articles,
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
        }
      else
        return {
          width: '100vw',
          height: this.phiHeight + 'px',
          fontSize: '0.001vw',
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
    let scale = 2.61803
    for (const id in pages) {
      tl.addLabel(id)
      tl.to(pages[0], {
        scale,
      })
      scale *= 2.61802
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
        snapTo: 'labels', // snap to the closest label in the timeline
        duration: 0.2, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
      },
      end: () => '+=' + pages.length * this.windowWidth,
    })
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
  height: 100vh;
  width: 100vw;
  transform-origin: top right;
}
@media only screen and (min-width: 640px) {
  .contain {
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
  background-color: #3b6670;
  grid-area: text;
}

.page {
  transform-origin: top right;
}

.new_page {
  color: black;
  transform-origin: top right;
  grid-area: new_page;
}
</style>
