<template lang="pug">
.articles-wrapper
  .article-wrapper(v-for="article in articles" :key="article.id")
    article-card(
      :name="article.title"
      :id="article.id"
      :image="article.coverImage.url"
      :publicationDate="article.publicationDate"
      :tags="article.tags"
      :author="article.author"
      isGridCard
      isMetaVisible
    )
</template>

<script>
import ArticleCard from '~/components/cards/ArticleCard'

export default {
  name: 'GridArticlesView',
  props: {
    articles: Array
  },
  components: {
    ArticleCard
  },
  data() {
    return {
    }
  },
  mounted() {
    console.log('grid', this.articles)
  },
  updated() {
    console.log('grid')
  }
}
</script>

<style scoped lang="scss">
.articles-wrapper {
  display: flex;
  flex-flow: row wrap;
}

.article-wrapper {
  width: calc(33.33% - 14px);
  box-shadow: 0 2px 4px 0 rgba(184,184,184,0.50);
  overflow: hidden;
  border-radius: 3px;

  &:nth-child(3n - 1) {
    margin: 0 20px;
  }

  &:nth-child(n + 4) {
    margin-top: 20px;
  }
}
</style>
