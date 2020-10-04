<template>
  <div>
    <div class="flex justify-center background">
      <div class="containing new_page">
        <div class="contain" :style="windowStyle">
          <section class="title">
            <h1>Dimitri Franov</h1>
          </section>
          <section class="equation">
            <h2>equation</h2>
          </section>
          <section class="">
            <baseComponent>
              <baseComponent
                ><baseComponent
                  ><baseComponent
                    ><baseComponent
                      ><baseComponent
                        ><baseComponent></baseComponent></baseComponent></baseComponent></baseComponent></baseComponent
              ></baseComponent>
            </baseComponent>
          </section>
          <section class="text">text</section>
          <section class="content">content</section>
        </div>
      </div>
      <!-- <div class="block w-screen spacer"></div> -->
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger'
import baseComponent from '@/components/baseComponent.vue'
export default {
  components: {
    baseComponent,
  },
  data() {
    return {
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
    windowStyle() {
      if (this.isTooWide)
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

    gsap.defaults({ duration: 1, ease: 'none' })
    gsap.registerPlugin(scrollTrigger)
    const tl = gsap.timeline()
    const sections = gsap.utils.toArray('.new_page')
    for (const id in sections) {
      tl.addLabel(id)
      tl.to(sections[id + 1], {
        scale: 2 + 1 / 1.61803,
        opacity: 1,
        // duration: 3,
      })
      tl.to(
        sections[id],
        {
          scale: 2 + 1 / 1.61803,
          // opacity: 0,
        },
        '<'
      )
    }
    // const proxy = { blur: 0 }
    // // const blurSetter = gsap.quickSetter('.new_page', 'filter': 'blur', 'px') // fast
    // const clamp = gsap.utils.clamp(0, 1) // don't let the skew go beyond 20 degrees.

    scrollTrigger.create({
      animation: tl,
      // onUpdate: (self) => {
      //   // console.log(self.progress)
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
      //         gsap.set(sections, {
      //           filter: 'blur(' + proxy.blur.toString() + 'px)',
      //         }),
      //     })
      //   }
      // },
      trigger: '.background',
      scrub: true,
      pin: true,
      anticipatePin: 1,
      snap: {
        snapTo: 'labels', // snap to the closest label in the timeline
        duration: { min: 0.5, max: 1 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
      },
      end: () => '+=' + sections.length * this.windowWidth,
      // end: '+=10000',
    })
    // gsap.set('.new_page', { force3D: true })
  },
}
</script>

<style scoped>
/* .contain {
  height: 100vh;
  margin: 0;
  padding: 0;
} */
.spacer {
  height: 400px;
}
.background {
  background-color: #efe2bf;
  height: 100vh;
  width: 100vw;
  transform-origin: top right;
}

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
.title {
  color: #000000;
  background-color: #8aaca3;
  /* position: relative; */
  grid-area: title;
}

.content {
  color: aqua;
  background-color: #db6b0e;
  grid-area: content;
}

.equation {
  color: black;
  background-color: #0d1f2f;
  grid-area: equation;
}

.text {
  color: beige;
  background-color: #3b6670;
  grid-area: text;
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
</style>
