<template>
  <div class="hamburger">
    <div id="topBread" :style="topBread" class="ham transition-all"></div>
    <div id="ham" :style="ham" class="ham transition-all"></div>
    <div id="botBread" :style="botBread" class="ham transition-all"></div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    topBread() {
      if (this.open)
        return {
          transform: 'rotate(45deg)',
          transformOrigin: 'left',
          marginBottom: '7.66px',
        }
      else return {}
    },
    botBread() {
      if (this.open)
        return {
          transform: 'rotate(-45deg)',
          transformOrigin: 'left',
          marginBottom: '7.66px',
        }
      else return {}
    },
    ham() {
      if (this.open)
        return {
          opacity: '0',
          marginBottom: '7.66px',
        }
      else return {}
    },
  },
}
</script>

<style scoped>
.ham {
  display: block;
  background-color: white;
  height: 3px;
  width: 30px;
  margin-bottom: 5px;
}
.hamburger {
  margin: 16px;
}
/* #botBread {
  transform: rotate(-45deg);
  transform-origin: left;
}
#topBread {
  transform: rotate(45deg);
  transform-origin: left;
}
#ham {
  opacity: 0;
} */
</style>
