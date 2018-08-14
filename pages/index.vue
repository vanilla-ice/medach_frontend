<template lang="pug">
.wrapper
  .slider-section
    the-slider(:slides="slides")
</template>

<script>
import TheSlider from '~/components/TheSlider'
import { mapGetters } from 'vuex'

export default {
  components: {
    TheSlider
  },

  fetch({store}) {
    return store.dispatch('mainPage/fetchMainPageConfig')
  },

  created() {
    this.$store.dispatch('mainPage/fetchMainPageConfig')
  },

  mounted() {
    console.log(this.$store, this)
  },

  computed: {
    slides() {
      console.log('slides', this.$store.state.mainPage.slider)
      return this.$store.state.mainPage.slider
    }
  }
}
</script>

<style scoped lang="scss">

</style>

