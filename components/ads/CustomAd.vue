<template lang="pug">
  div(:class="['custom-ad', position]")
    a.image(
      href="#"
      :style="{backgroundImage: `url(${image})`}"
    )
</template>

<script>
  export default {
    props: {
      position: String
    },

    data() {
      return {
        image: require('~/assets/images/logo.svg')
      }
    }
  }
</script>

<style scoped lang="scss">
  .custom-ad {
    position: relative;
  }

  .image {
    position: absolute;

    display: block;
    width: 100px;
    height: 100px;
    background-size: cover;
  }

  .adSidebar {
    height: 600px;
    width: 300px;
  }

  .adMiddle {
    height: 250px;
    width: 300px
  }

  .adTop {
    height: 90px;
    width: 728px
  }

  .adBottom {
    height: 90px;
    width: 728px
  }

</style>
