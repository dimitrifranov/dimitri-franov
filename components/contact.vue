<template>
  <baseComponent
    id="4"
    pk="contact"
    :windowstyle="windowstyle"
    @heightChange="heightChange"
    @scroll="scroll"
  >
    <template #title>KONTAKT</template>
    <template #text>
      <div class="h-full center-items flex flex-col font-thin">
        <p class="text-xs sm:text-base lg:text-xl 3xl:text-2xl">sag hallo:</p>
        <a
          href="mailto:dimitri@franov.ch"
          class="text-2xl sm:text-4xl lg:text-7xl 3xl:text-8xl"
          >dimitri@franov.ch</a
        >
        <div class="flex flex-row pt-2 lg:pt-4">
          <a href="https://www.instagram.com/dimitri.franov/">
            <img
              src="instagram.svg"
              alt="instagram"
              class="h-5 sm:h-7 lg:h-10 px-1 lg:px-2"
            />
          </a>
          <a href="https://twitter.com/dimitrifranov">
            <img
              src="twitter.svg"
              alt="twitter"
              class="h-5 sm:h-7 lg:h-10 px-1 lg:px-2"
          /></a>
          <a href="https://github.com/dimitrifranov">
            <img
              src="github.svg"
              alt="github"
              class="h-5 sm:h-7 lg:h-10 px-1 lg:px-2"
          /></a>
          <a href="https://ch.linkedin.com/in/dimitri-franov-73180b184"
            ><img
              src="linkedin.svg"
              alt="linkedin"
              class="h-5 sm:h-7 lg:h-10 px-1 lg:px-2"
          /></a>
        </div>
      </div>
    </template>
    <template #next_page>
      <div
        :style="{ fontSize: height / 30 + 'px' }"
        class="
          h-full
          w-full
          text-black
          bg-ligthBlue
          center-items
          cursor-pointer
        "
        @click="scroll(0)"
      >
        Zurück zum Anfang
      </div>
    </template>
  </baseComponent>
</template>

<script>
import baseComponent from './baseComponent.vue'
export default {
  components: { baseComponent },
  props: {
    windowstyle: {
      type: Object,
      default() {
        return {}
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
      this.height = e
    },
    scroll(e) {
      this.$emit('scroll', e)
    },
  },
}
</script>

<style lang="scss" scoped></style>
