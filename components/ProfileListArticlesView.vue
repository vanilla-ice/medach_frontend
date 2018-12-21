<template lang="pug">
.articles-wrapper
  .article-wrapper(v-for="article in articles" :key="article.id")
    profile-card(
      :name="article.title"
      :id="article.id"
      :image="article.cover_image ? article.cover_image.url : null "
      :short_description= "article.short_description"
      :profile="profile"
    )
</template>

<script>
import ProfileCard from '~/components/cards/ProfileCard'

export default {
  name: 'ListArticlesView',

  props: {
    articles: Array,
    profile: Object
  },

  mounted() {
    console.log('this.articles', this.articles)
  },

  components: {
    ProfileCard
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
