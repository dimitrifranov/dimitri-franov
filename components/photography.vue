<template>
  <baseComponent pk="photo">
    <template v-slot:title>PHOTOGRAPHY</template>
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
