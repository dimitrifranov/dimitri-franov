<template>
  <div>
    <nav class="flex h-16 w-full fixed bg-blue z-10">
      <nuxt-link class="h-full center-items w-24" to="/#3">
        <svg
          class="arrow w-12"
          width="790"
          height="393"
          viewBox="0 0 790 393"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="43" y="181" width="747" height="30" />
          <rect
            x="22"
            y="175.294"
            width="247.903"
            height="30"
            transform="rotate(-45 22 175.294)"
          />
          <rect
            x="197.294"
            y="392.507"
            width="277.62"
            height="30"
            transform="rotate(-135 197.294 392.507)"
          />
        </svg>
      </nuxt-link>
      <h1 class="text-4xl text-white ml-24">Fotos</h1>
    </nav>
    <section class="grid md:grid-cols-3 grid-cols-1 p-4 pt-20 gap-2">
      <img
        v-for="(photo, id) in photos"
        :key="id"
        class="image"
        :src="photo.photo"
        :alt="photo.title"
      />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const photos = await $content('photos').fetch()
    return { photos }
  },
}
</script>

<style scoped>
.arrow:hover {
  fill: orange;
  transform: scale(1.1);
  transition: all 200ms ease;
  /* box-shadow: 0.5vmin -0.5vmin 0 white; */
}
</style>
