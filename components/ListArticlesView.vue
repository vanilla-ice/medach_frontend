<template lang="pug">
.articles-wrapper
  .article-wrapper(v-for="article in articles" :key="article.id")
    article-card(
      :name="article.title"
      :id="article.id"
      :image="article.cover_image ? article.cover_image.url : null "
      :publicationDate="article.publication_date"
      :author="article.author"
      :tags="article.tags"
      :link="getLink"
      isMetaVisible
      isListCard
    )
</template>

<script>
import ArticleCard from '~/components/cards/ArticleCard'

export default {
  name: 'ListArticlesView',

  props: {
    articles: Array
  },

  data() {
    return {
      link: null
    }
  },

  computed: {
    getLink() {
      if (this.$router.currentRoute.params.id === 'news') {
        return "news-post"
      } else if (this.$router.currentRoute.params.id === 'blogs') {
        return "blog-post"
      } else {
        return 'post'
      }
    }
  },

  components: {
    ArticleCard
  }
}
</script>

<style scoped lang="scss">
.article-wrapper {
  margin-top: 40px;
}

@media(max-width: 768px) {
  .article-wrapper {
    margin-top: 16px;
  }
}
</style>
