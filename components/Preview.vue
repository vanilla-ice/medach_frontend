<template lang="pug">
  .preview(v-if="currentImg")
    .close(@click="close")
    .preview-wrapper
      .opacity(@click="close")
      img(:class="{increase: isIncrease}" :src="currentImg" @click="increase")
</template>

<script>
  export default {
    props: {
      currentImg: String,
      close: Function
    },

    data() {
      return {
        isIncrease: false
      }
    },

    methods: {
      increase(evt) {
        console.log('log')
        this.isIncrease = !this.isIncrease
      }
    }
  }
</script>

<style scoped lang="scss">
  .preview {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.7);
    z-index: 3000;
    overflow: auto;
    img {
      position: relative;

      max-width: 92%;
      display: block;
      margin: 0 auto;
      z-index: 5;
    }
  }

  .preview-wrapper {
    margin: 30px auto;
  }

  .opacity {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .close {
    position: fixed;
    top: 20px;
    right: 20px;

    width: 30px;
    height: 30px;
    z-index: 6;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;

      display: block;
      width: 30px;
      height: 3px;
      background: rgb(88, 88, 88);

      transform: rotate(45deg);
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;

      display: block;
      width: 30px;
      height: 3px;
      background: rgb(88, 88, 88);

      transform: rotate(-45deg);
    }
  }

  .preview .increase {
    width: 100%;
  }

  @media(max-width: 768px) {
    .preview .increase {
      max-width: 150%;
      width: 150%;
    }
  }
</style>
