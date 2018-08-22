<template lang="pug">
.wrapper
  .slider-section
    .slider-wrapper
      the-slider(:slides="slides")
    .news-wrapper
      the-hot-news(:news="news")
</template>

<script>
import TheSlider from '~/components/TheSlider'
import TheHotNews from '~/components/TheHotNews'
import { mapGetters } from 'vuex'

export default {
  components: {
    TheSlider,
    TheHotNews
  },

  async fetch({store}) {
    return store.dispatch('mainPage/fetchMainPageConfig')
  },

  computed: {
    ...mapGetters({
      slides: 'mainPage/slides',
      news: 'mainPage/news'
    }),
  }
}
</script>

<style scoped lang="scss">
.slider-section {
  position: relative;
}

.news-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  width: 35%;
  height: 100%;
}
</style>

