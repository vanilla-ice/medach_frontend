<template lang="pug">
.wrapper
  .image(v-if="src" :style="{background: `url(http://medach.pro${src}) no-repeat center / cover`}")
  .placeholder(v-else)
    span
      | MEDACH
</template>

<script>
export default {
  props: {
    src: String
  },
  name: 'ImageComponent',
  data() {
    return {
      BASE_URL: process.env.BASE_URL
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  width: 100%;
  position: relative;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #F2F3EC;

  span {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: #A3A3A3;
    letter-spacing: 2px;
    font-weight: 500;
  }
}
</style>
