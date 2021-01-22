<template>
  <canvas id="background" class="fixed h-screen w-screen"></canvas>
</template>

<script>
export default {
  mounted() {
    const canvas = document.getElementById('background')
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'blue'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  },
}
</script>

<style lang="scss" scoped></style>
