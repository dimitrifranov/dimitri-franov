<template>
  <div class="contain new_page">
    <section class="title">
      <h1>Dimitri Franov</h1>
    </section>
    <section class="equation">
      <h2>equation</h2>
    </section>
    <section class="">
      <slot />
    </section>
    <section class="text">text</section>
    <section class="content">{{ message }}</section>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.contain {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1.61803fr 1fr 1.61803fr;
  grid-template-rows: 1fr 1.61803fr;
  grid-template-areas:
    'title equation new_page'
    'text text content';
}
.title {
  color: #000000;
  background-color: #8aaca3;
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

.new_page {
  color: black;
  filter: blur(1px);
  /* background-color: #0d1f2f; */
  transform-origin: top right;
  /* position: relative; */
  /* padding-top: 61.8%; */
  /* opacity: 0.8; */
  grid-area: new_page;
}
</style>
