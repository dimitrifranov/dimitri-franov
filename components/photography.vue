<template>
  <baseComponent pk="photo">
    <template v-slot:title>PHOTOGRAPHY</template>
    <template v-slot:next_page>
      <slot name="next_page" />
    </template>
    <template v-slot:text>
      <section class="grid grid-cols-3 m-1">
        <img
          v-for="(photo, id) in photos"
          :key="id"
          :src="photo.photo"
          :alt="photo.title"
        />
      </section>
    </template>
  </baseComponent>
</template>

<script>
import baseComponent from '@/components/baseComponent.vue'
export default {
  components: {
    baseComponent,
  },
  props: {
    photos: {
      type: Array,
      default() {
        return []
      },
    },
  },
  // async asyncData({ $content }) {
  //   const photos = await $content('photos').fetch()
  //   return { photos }
  // },
}
</script>

<style lang="scss" scoped></style>
