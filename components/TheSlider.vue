<template lang="pug">
.wrapper.desctop(v-if="showCarousel")
  carousel.slider(
    :perPage="1"
  )
    slide.slide(
      v-for="(slide, index) in slides",
      :key="slide.id",
      :style="{background: `url(http://medach.pro${slide.coverImage.url}) no-repeat center / cover`}"
    )
      nuxt-link.content(:to="`/articles/${slide.id}`")
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
      slidesCount: this.slides.length,
      showCarousel: false,
      BASE_URL: process.env.BASE_URL
    }
  },
  mounted() {
    this.showCarousel = true
  },
  methods: {
    formatDate(date) {
      return format(date, 'MMMM DD, YYYY', {locale: ru})
    }
  }
}
</script>

<style lang="scss">
.VueCarousel-wrapper {
  height: 100%;
}

.VueCarousel-inner {
  height: 100%;
}

.VueCarousel-pagination {
  position: absolute;
  bottom: 20px;
  left: 40px;
  width: auto !important;

  li:first-child {
    padding-left: 0 !important;
  }
}

.VueCarousel-dot {
  .VueCarousel-dot-button {
    background: #ffffff !important;
    opacity: .3;
  }


  &--active .VueCarousel-dot-button {
    background: #ffffff !important;
    opacity: 1;
  }
}
</style>

<style scoped lang="scss">
.wrapper {
  height: 680px;
  position: relative;
}
.slider {
  height: 100%;
}

.slide {
  height: 100%;
  padding: 40px 40px 84px 40px;
  display: flex;
}

.content {
  max-width: 65%;
  flex: 1 1 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  padding-right: 50px;
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
