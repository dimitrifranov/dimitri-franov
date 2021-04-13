<template>
  <baseComponent pk="photo" @heightChange="heightChange" @scroll="scroll">
    <template v-slot:title>FOTOGRAFIE</template>
    <template v-slot:next_page>
      <slot name="next_page" />
    </template>
    <template v-slot:text>
      <div>
        <section class="grid md:grid-cols-3 grid-cols-1 md:m-1">
          <img
            v-for="(photo, id) in photos"
            :key="id"
            :style="{
              paddingLeft: height / 50 + 'px',
              paddingRight: height / 50 + 'px',
            }"
            :src="photo.photo"
            :alt="photo.title"
          />
        </section>
        <baseButton :height="height / 10">Mehr</baseButton>
      </div>
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
  data() {
    return {
      height: 0,
    }
  },
  methods: {
    heightChange(e) {
      if (e < 640) {
        this.photos.length = 3
      }
      this.height = e
    },
    scroll(e) {
      this.$emit('scroll', e)
    },
  },
  // async asyncData({ $content }) {
  //   const photos = await $content('photos').fetch()
  //   return { photos }
  // },
}
</script>

<style lang="scss" scoped></style>
