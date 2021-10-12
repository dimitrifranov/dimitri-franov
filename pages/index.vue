<template>
  <div>
    <background />
    <div class="flex justify-center background">
      <div class="containing page">
        <div id="home" class="contain" :style="windowStyle">
          <header class="title center-items">
            <img
              src="logo.svg"
              alt="logo"
              class="h-24 sm:h-36 2xl:h-40 3xl:h-56"
            />
            <h1
              class="
                leading-none
                name
                text-2xl
                sm:text-4xl
                2xl:text-5xl
                3xl:text-7xl
              "
            >
              <p class="font-semibold">DIMITRI</p>
              <p class="font-light">FRANOV</p>
            </h1>
          </header>
          <section class="equation center-items">
            <img
              src="equation.png"
              alt="equation"
              class="h-24 sm:h-36 2xl:h-40 3xl:h-56"
            />
          </section>
          <section class="new_page">
            <blog
              :articles="articles"
              :windowstyle="windowStyle"
              @scroll="scrollTo"
            >
              <template #next_page>
                <coding :windowstyle="windowStyle" @scroll="scrollTo">
                  <template #next_page>
                    <photography
                      :photos="photos"
                      :windowstyle="windowStyle"
                      @scroll="scrollTo"
                    >
                      <template #next_page>
                        <contact :windowstyle="windowStyle" @scroll="scrollTo">
                          <!-- <template v-slot:next_page>
                            <div
                              class="h-full w-full text-white bg-ligthBlue"
                              @click="scrollTo(0)"
                            >
                              Zurück zum Anfang
                            </div>
                          </template> -->
                        </contact>
                      </template>
                    </photography>
                  </template>
                </coding>
              </template>
            </blog>
          </section>
          <section class="text">
            <article
              class="
                prose-sm
                sm:prose
                xl:prose-lg
                2xl:prose-xl
                3xl:prose-2xl
                mx-10
                my-10
                overflow-hidden
              "
            >
              <h3>Hallo, ich bin Dimitri Franov</h3>
              <p>
                Und dies ist meine Homepage. Um zum nächsten Abschnitt zu
                gelangen kannst du gerne scrollen oder auf das
                Inhaltsverzeichnis rechts drücken.
              </p>
              <!-- <p>
                Auf der Webseite findest du verschiedene Blogbeiträge zu
                verschiedenen Themen, meine Projekte und Fotografien.
              </p> -->
            </article>
          </section>
          <div class="content center-items">
            <ul
              class="
                text-black text-lg
                sm:text-2xl
                xl:text-3xl
                2xl:text-4xl
                3xl:text-5xl
              "
            >
              <li
                class="cursor-pointer hover:text-white md:pb-1 3xl:pb-2"
                @click="scrollTo(0)"
              >
                Home
              </li>
              <li
                class="cursor-pointer hover:text-white md:pb-1 3xl:pb-2"
                @click="scrollTo(1)"
              >
                Blog
              </li>
              <li
                class="cursor-pointer hover:text-white md:pb-1 3xl:pb-2"
                @click="scrollTo(2)"
              >
                Projekte
              </li>
              <li
                class="cursor-pointer hover:text-white md:pb-1 3xl:pb-2"
                @click="scrollTo(3)"
              >
                Fotografie
              </li>
              <li
                class="cursor-pointer hover:text-white md:pb-1 3xl:pb-2"
                @click="scrollTo(4)"
              >
                Kontakt
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="block w-screen spacer"></div> -->
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger'
import scrollToPlugin from 'gsap/ScrollToPlugin'
import coding from '@/components/coding.vue'
// import '@/scripts/background.js'
import Background from '~/components/background.vue'
import Photography from '~/components/photography.vue'
import contact from '~/components/contact.vue'
import Blog from '~/components/blog.vue'
export default {
  components: {
    coding,
    Background,
    Photography,
    contact,
    Blog,
  },
  async asyncData({ $content }) {
    const articles = await $content('blog').limit(6).fetch()
    const photos = await $content('photos').limit(6).fetch()

    return {
      articles,
      photos,
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
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
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
      if (this.windowWidth <= 1024) {
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
    // console.log(this.$route.hash[1])
    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight
    window.onresize = () => {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    }
    if (this.windowWidth < this.windowHeight) this.articles.length = 4
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
    gsap.registerPlugin(scrollTrigger, scrollToPlugin)
    const tl = gsap.timeline()
    const pages = gsap.utils.toArray('.page')
    let scale = 2.61803
    for (const id in pages) {
      tl.addLabel(id)
      tl.to(pages[0], {
        scale,
      })
      scale *= 2.61803
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
      scrub: 0,
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
    this.scrollToInstant(parseInt(this.$route.hash[1]))
  },
  methods: {
    scrollTo(section) {
      gsap.to(window, { duration: 0.5, scrollTo: section * this.windowWidth })
    },
    scrollToInstant(section) {
      gsap.to(window, { duration: 0.001, scrollTo: section * this.windowWidth })
    },
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
@media only screen and (min-width: 1024px) {
  .contain {
    display: grid;
    grid-template-columns: 1.61803fr 1fr 1.61803fr;
    grid-template-rows: 1fr 1.61803fr;
    grid-template-areas:
      'title equation new_page'
      'text text content';
  }
}

@media only screen and (max-width: 1024px) {
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
/* li:hover {
  margin-left: 10px;
  transform: translate(10px);
  transform: scale(1.1);
} */
</style>
