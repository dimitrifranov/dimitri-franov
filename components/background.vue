<template>
  <canvas id="background" class="fixed h-screen w-screen"></canvas>
</template>

<script>
export default {
  mounted() {
    const heigth = 10
    const canvas = document.getElementById('background')
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'blue'
    // ctx.fillRect(0, 0, canvas.width, canvas.height)
    class Tile {
      constructor() {
        this.height = heigth
      }
    }
    class Kite extends Tile {
      constructor(height, x, y) {
        super(height)
        this.x = x
        this.y = y
      }

      draw() {
        ctx.strokeStyle = 'red'
        ctx.beginPath()
        ctx.lineWidth = '1'
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(250, 75)
        ctx.stroke()
      }
    }
    const firstKite = new Kite(10, 0, 0)
    firstKite.draw()
  },
}
</script>

<style lang="scss" scoped></style>
