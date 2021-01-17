<template>
  <div id="canvas" class="fixed"></div>
</template>

<script>
import P5 from 'p5'

export default {
  mounted() {
    const script = (p5) => {
      p5.setup = () => {
        p5.createCanvas(window.innerWidth, window.innerHeight)
        p5.background(51)
      }
      p5.draw = () => {
        p5.clear()
        p5.ellipse(p5.mouseX, p5.mouseY, 40, 40)
      }
    }
    // eslint-disable-next-line no-unused-vars
    const p5canvas = new P5(script, 'canvas')
  },
}
</script>

<style lang="scss" scoped></style>
