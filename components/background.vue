<template>
  <canvas id="background" class="fixed h-screen w-screen"></canvas>
</template>

<script>
const Complex = require('complex.js')
export default {
  mounted() {
    // const heigth = 10
    const canvas = document.getElementById('background')
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'blue'
    // ctx.fillRect(0, 0, canvas.width, canvas.height)
    class RobinsonTriangle {
      constructor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
      }

      centre() {
        return this.a.add(this.b).div(2)
      }

      path() {
        // const ab = this.b.sub(this.a)
        // const bc = this.c.sub(this.b)
        const xy = (c) => {
          return [c.re, c.im]
        }
        console.log(xy(this.a))
      }
    }
    const tri = new RobinsonTriangle(
      new Complex(5, 1),
      new Complex(4, 3),
      new Complex(2, 1)
    )
    console.log(tri.path())
  },
}
</script>

<style lang="scss" scoped></style>
