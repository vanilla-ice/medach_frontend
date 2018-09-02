<template lang="pug">
.articles-wrapper
  .article-wrapper(v-for="article in articles" :key="article.id")
    article-card(
      :name="article.title"
      :id="article.id"
      :image="article.coverImage ? article.coverImage.url : null "
      :publicationDate="article.publish_on"
      :author="article.author"
      :tags="article.tags"
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
  components: {
    ArticleCard
  },
  mounted() {
    console.log(this.articles)
  }
}
</script>

<style scoped lang="scss">
.article-wrapper {
  margin-top: 40px;
}
</style>
