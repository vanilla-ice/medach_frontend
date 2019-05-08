<template lang="pug">
  .wrapper(@click="scrollTo" v-if="visible")
    img.arrow-img(src="~/static/arrow-to-top.svg")
</template>

<script>
  import VueScrollTo from 'vue-scrollto'

  export default {
    data() {
      return {
        visible: true,
        footerPosition: 0
      }
    },

    mounted() {
    },

    methods: {
      scrollTo() {
        VueScrollTo.scrollTo(document.body, 400)
      }
    },

  }
</script>

<style scoped lang="scss">
  .wrapper {
    position: fixed;
    z-index: 9;
    width: 30px;
    height: 100%;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,.2);
    opacity: 0.7;
    cursor: pointer;
    transition: opacity .2s ease;

    &:hover {
      opacity: 1;
    }
  }

  .arrow-img {
    position: absolute;
    left: 5px;
    bottom: 14px;
    width: 18px;
    height: 18px;
    transform: rotate(-90deg);
    z-index: 9;
  }

  @media(max-width: 768px) {
    .wrapper {
      display: none;
    }
  }
</style>
