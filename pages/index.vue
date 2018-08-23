<template lang="pug">
.wrapper
  .slider-section
    .slider-wrapper
      the-slider(:slides="slides")
    .news-wrapper
      the-hot-news(:news="news")
  
  .container
    .grid-section
      .top-articles
        .article(
          v-for="article in topPosts",
          :key="article.id",
          :style="{background: `url(${`http://localhost:8080${article.coverImage.url}`}) no-repeat center / cover`}"
        )
          .gradient

          .content

            .tag
              span(v-if="article.tags[0] && article.tags[0] !== ''")
                | {{ article.tags[0] }}
            
            .title
              | {{article.title}}
    
    .blogs-section
      the-blogs(:articles="blogs")


</template>

<script>
import TheSlider from '~/components/TheSlider'
import TheHotNews from '~/components/TheHotNews'
import TheBlogs from '~/components/TheBlogs'
import { mapGetters } from 'vuex'

export default {
  components: {
    TheSlider,
    TheHotNews,
    TheBlogs
  },

  async fetch({store}) {
    return store.dispatch('mainPage/fetchMainPageConfig')
  },

  mounted() {
    console.log('top posts', this.blogs)
  },

  updated() {
    console.log('top posts', this.blogs)
  },

  computed: {
    ...mapGetters({
      slides: 'mainPage/slides',
      news: 'mainPage/news',
      topPosts: 'mainPage/topPosts',
      blogs: 'mainPage/blogs'
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

.top-articles {
  display: flex;
  flex-flow: row nowrap;
  padding: 20px 0;
}

.article {
  flex: 1 1 50%;
  min-height: 250px;
  display: flex;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(184,184,184,0.50);
  border-radius: 3px;
  overflow: hidden;

  &:not(:first-child) {
    margin-left: 20px;
  }
}

.content {
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 auto;
  justify-content: space-between;
  z-index: 10;
  padding: 25px;
}

.gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.90) 76%);
}

.title {
  font-size: 24px;
  color: #FFFFFF;
  line-height: 29px;
  font-weight: 600;
}

.tag {
  span {
    border: 1px solid #A3A3A3;
    border-radius: 3px;
    font-size: 12px;
    color: #EDEADC;
    letter-spacing: 0;
    display: inline-block;
    padding: 4px 8px;
  }
}


</style>

