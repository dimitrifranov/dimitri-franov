<template>
  <baseComponent pk="contact" @heightChange="heightChange" @scroll="scroll">
    <template v-slot:title>CONTACT</template>
    <template v-slot:text>
      <div
        class="prose lg:prose-lg h-full"
        :style="{ fontSize: height / 34 + 'px', padding: height / 30 + 'px' }"
      >
        <h3>Hallo, ich bin erreichbar unter folgender Addresse:</h3>
        <p>
          Dimitri Franov <br />
          Mühlegasse 6 <br />
          4450 Sissach
        </p>
        <p>Email: dimitri@franov.ch</p>
      </div>
    </template>
  </baseComponent>
</template>

<script>
import baseComponent from './baseComponent.vue'
export default {
  components: { baseComponent },
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
