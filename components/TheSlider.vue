<template lang="pug">
.wrapper
  .slider
    transition-group(name="TheSlider")
      .slide(
        v-for="(slide, index) in slides",
        :key="slide.id",
        :style="{background: `url(http://localhost:8080${slide.coverImage.url}) no-repeat center / cover`}"
        v-if="currentSlide === index"
      )
        .content
          .title
            | {{ slide.title }}
          .bottom
            .date
              | {{ formatDate(slide.publicationDate) }}

            .author
              | Автор:
              span
                | {{ slide.author }}

</template>

<script>
import format from 'date-fns/format'
import ru from 'date-fns/locale/ru'

export default {
  name: 'TheSlider',
  props: {
    slides: Array
  },
  data () {
    return {
      currentSlide: 0,
      slidesCount: this.slides.length
    }
  },
  methods: {
    formatDate(date) {
      return format(date, 'MMMM DD, YYYY', {locale: ru})
    }
  }
}
</script>

<style>

.TheSlider-enter-active, .TheSlider-leave-active {
  transition: opacity .5s;
}
.TheSlider-enter, .TheSlider-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

</style>

<style scoped lang="scss">
.wrapper {
  height: 680px;
  position: relative;
}
.slide {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #ccc;
  padding: 40px;
}

.content {
  max-width: 850px;
  flex: 1 1 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
}

.title {
  font-size: 54px;
  color: #FDFDFD;
  letter-spacing: 0;
  line-height: 66px;
}

.bottom {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
}

.date {
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-transform: capitalize;
}

.author {
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;

  span {
    font-weight: bold;
    margin-left: 10px;
  }
}
</style>
