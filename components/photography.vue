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
            class="image"
            :style="{
              paddingLeft: height / 50 + 'px',
              paddingRight: height / 50 + 'px',
              paddingBottom: height / 50 + 'px',
            }"
            :src="photo.photo"
            :alt="photo.title"
          />
        </section>
        <nuxt-link
          to="/photos"
          :style="{ fontSize: height / 45 + 'px', padding: height / 50 + 'px' }"
          class="text-white bg-orange font-light mr-2 float-right more"
        >
          mehr Fotos </nuxt-link
        >>
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
      // if (e < 640) {
      //   this.photos.length = 3
      // }
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

<style scoped>
.image:hover {
  transform: scale(1.1);
}
.image {
  transition: all 200ms;
}
</style>
