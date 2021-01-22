<template>
  <baseComponent pk="coding">
    <template v-slot:title>PROGRAMMING</template>
    <template v-slot:next_page>
      <slot name="next_page" />
    </template>
  </baseComponent>
</template>

<script>
import baseComponent from '@/components/baseComponent.vue'
export default {
  components: {
    baseComponent,
  },
}
</script>

<style lang="scss" scoped></style>
