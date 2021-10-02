<template>
  <baseComponent
    id="coding"
    pk="coding"
    :windowstyle="windowstyle"
    @heightChange="heightChange"
    @scroll="scroll"
  >
    <template #title>TSCHAU.APP</template>
    <template #next_page>
      <slot name="next_page" />
    </template>
    <template #text>
      <section
        :style="{
          fontSize: height / 60 + 'px',
        }"
        class="prose lg:prose-lg lg:mx-2 lg:my-2 mx-1 my-1"
      >
        <h2>
          Die Social Media Platform Tschau.app habe ich als meine Maturarbeit
          programmiert
        </h2>
        <p>
          Tschau.app ist eine neue Social Media Platform auf der du Gruppen mit
          deinen Freunden erstellen kannst und darin verschiedene Bilder posten
          kannst.
        </p>
        <p :style="{ paddingBottom: height / 20 + 'px' }">
          Mehr Informationen über die Webseite Tschau.app findet sich unter dem
          Info-Abschnitt der App. Dazu gehört auch der schriftliche Teil meiner
          Maturarbeit
        </p>
        <a
          :style="{
            padding: height / 50 + 'px',
          }"
          class="bg-orange link"
          href="https://tschau.app"
          >Zur App</a
        >
      </section>
    </template>
    <template #content> </template>
  </baseComponent>
</template>

<script>
import baseComponent from '@/components/baseComponent.vue'
export default {
  components: {
    baseComponent,
  },
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

<style scoped>
.link:hover {
  transform: scale(1.2);
}
.link {
  transition: all 200ms;
}
</style>
