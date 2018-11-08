<template lang="pug">
  .wrapper(@click="scrollTo")
    img.arrow-img(src="~/static/arrow-to-top.svg")
</template>

<script>
  import VueScrollTo from 'vue-scrollto'

  export default {
    methods: {
      scrollTo() {
        VueScrollTo.scrollTo(document.body, 400)
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrapper {
    position: fixed;
    z-index: 999;
    width: 70px;
    height: 70px;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.7);
    opacity: 0.7;
    cursor: pointer;
    transform: translateY(50%) rotate(45deg);
    transition: opacity .2s ease;

    &:hover {
      opacity: 1;
    }
  }

  .arrow-img {
    position: absolute;
    top: 0%;
    left: 50%;
    width: 15px;
    height: 15px;
    transform: rotate(-135deg) translate(-5%, -156%);
    z-index: 999;
  }
</style>