<template lang="pug">
  .wrapper(@click="scrollTo")
    .arrow
      img.arrow-img(src="~/assets/images/arrow-to-top.svg")
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
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 60px 60px 0;
    border-color: transparent transparent rgba(91,91,91,0.9) transparent;
    text-align: center;
    opacity: .8;
    transition: opacity .2s ease;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .arrow-img {
    position: absolute;
    top: 34px;
    right: -27px;
    width: 15px;
    height: 15px;
    transform: rotate(-90deg);
  }
</style>