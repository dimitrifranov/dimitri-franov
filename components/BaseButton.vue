<template>
  <div>
    <button
      :type="type"
      name="button"
      v-bind="$attrs"
      :class="buttonClass"
      class="font-light bg-transparent h-10 hover:bg-white text-white hover:text-grey py-2 px-4 mt-2 border border-white hover:border-transparent transition-colors duration-200 disabled:opacity-75 disbaled:text-error"
      @click="$emit('clicked')"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'button',
    },
    buttonClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
