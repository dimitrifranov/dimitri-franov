<template>
  <div>
    <button
      :type="type"
      :style="{ height: height }"
      name="button"
      v-bind="$attrs"
      :class="buttonClass"
      class="font-light bg-darkBlue hover:bg-darkBlue text-white hover:text-grey transition-colors duration-200 disabled:opacity-75 disbaled:text-error"
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
    height: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped></style>
