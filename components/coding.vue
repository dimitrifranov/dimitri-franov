<template>
  <baseComponent pk="coding" @heightChange="heightChange" @scroll="scroll">
    <template v-slot:title>TSCHAU.APP</template>
    <template v-slot:next_page>
      <slot name="next_page" />
    </template>
    <template v-slot:text>
      <section
        :style="{ fontSize: height / 50 + 'px' }"
        class="prose lg:prose-lg lg:mx-2 lg:my-2 mx-1 my-1"
      >
        <h2>
          Die Social Media Platform Tschau.app habe ich als meine Maturarbeit
          programmiert
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <a class="bg-orange" href="https://tschau.app">Zur App</a>
      </section>
    </template>
    <template v-slot:content> </template>
  </baseComponent>
</template>

<script>
import baseComponent from '@/components/baseComponent.vue'
export default {
  components: {
    baseComponent,
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
