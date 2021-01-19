<template>
  <div :id="pk" class="contain new_page page">
    <section
      class="title center-items font-display"
      :style="{ fontSize: height / 16 + 'px' }"
    >
      <slot name="title" />
    </section>
    <section class="equation">
      <slot name="equation" />
    </section>
    <section class="next_page">
      <slot name="next_page" />
    </section>
    <section class="text">
      <slot name="text" />
    </section>
    <section class="content">
      <slot name="content" />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    pk: {
      type: String,
      default: 'index',
    },
  },
  data() {
    return {
      width: 0,
      height: 0,
    }
  },
  mounted() {
    const pk = this.pk
    setTimeout(() => {
      this.width = document.getElementById(pk).clientWidth
      this.height = document.getElementById(pk).clientHeight
      window.addEventListener('resize', () => {
        setTimeout(() => {
          this.width = document.getElementById(pk).clientWidth
          this.height = document.getElementById(pk).clientHeight
        }, 1)
      })
    }, 1)
  },
}
</script>

<style scoped>
/* .contain {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1.61803fr 1fr 1.61803fr;
  grid-template-rows: 1fr 1.61803fr;
  grid-template-areas:
    'title equation new_page'
    'text text content';
} */
.title {
  color: #000000;
  background-color: #8aaca3;
  /* font-size: 5px; */
  /* position: relative; */
  grid-area: title;
}

.content {
  font-size: 1px;
  /* color: aqua; */
  color: black;
  background-color: #db6b0e;
  grid-area: content;
}

.equation {
  color: black;
  background-color: #0d1f2f;
  grid-area: equation;
}

.text {
  color: beige;
  background-color: #3b6670;
  grid-area: text;
}
.page {
  width: 100%;
  height: 100%;
  transform-origin: top right;
}

.new_page {
  color: black;
  /* filter: blur(1px); */
  background-color: black;
  transform-origin: top right;
  /* position: relative; */
  /* padding-top: 61.8%; */
  /* opacity: 0.8; */
  grid-area: new_page;
}
</style>
