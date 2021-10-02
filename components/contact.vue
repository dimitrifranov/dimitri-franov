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
      <div
        class="prose lg:prose-lg h-full"
        :style="{ fontSize: height / 40 + 'px', padding: height / 30 + 'px' }"
      >
        <h3>Ich bin erreichbar unter folgender Addresse:</h3>
        <p>
          Dimitri Franov <br />
          Mühlegasse 6 <br />
          4450 Sissach
        </p>
        <p>Email: dimitri@franov.ch</p>
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
