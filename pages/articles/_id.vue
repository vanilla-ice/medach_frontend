<template lang="pug">
.wrapper
  the-header
  .container
    .title
      | {{article.title}}
    .tags
      .tag(v-for="tag in article.tags" :key="`${article.id}-${article.tag}`")
        | {{ tag }}
    .image-wrapper
      img(:src="`http://medach.pro${article.coverImage.url}`")

    .article-wrapper
      .article.content-article-wrapper(v-html="article.body")
      .promo
       


    .interested-wrapper
      interested-articles(:articles="interested")
</template>

<script>
import InterestedArticles from '~/components/InterestedArticles'
import ImageComponent from '~/components/ImageComponent'
import ThePopularAuthors from '~/components/ThePopularAuthors'
import TheHeader from '~/components/TheHeader'

import { mapGetters } from 'vuex'

export default {
  components: {
    InterestedArticles,
    ImageComponent,
    ThePopularAuthors,
    TheHeader
  },
  fetch({store, params}) {
    return store.dispatch('articlePage/fetchArticle', {
      id: params.id
    })
      .then(() => store.dispatch('interestedArticles/fetchInterestedArticles'))
  },
  data() {
    return {
      BASE_URL: process.env.BASE_URL
    }
  },
  computed: {
    ...mapGetters({
      article: 'articlePage/article',
      interested: 'interestedArticles/articles',
    })
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.interested-wrapper{
  margin-top: 42px;
}
.wrapper {
  padding-bottom: 40px;
}

.title {
  font-family: 'PTSerif', serif;
  font-size: 54px;
  color: #5B5B5B;
  letter-spacing: 0;
  margin-top: 36px;
  max-width: 900px;
}

.tags {
  margin-top: 39px;
}

.tag {
  font-size: 12px;
  color: #7198BA;
  letter-spacing: 0;
  font-weight: 500;
  border: 1px solid #7198BA;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  margin-left: 10px;

  &:first-child {
    border-color: #A3A3A3;
    color: #A3A3A3;
    margin: 0;
  }
}

.image-wrapper {
  margin-top: 40px;
}

.article-wrapper {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  margin-top: 40px;
}

.article {
  font-family: 'PTSerif', serif;
  max-width: 800px;
  margin-left: 80px;
  width: 100%;
}

.promo {
  flex: 1 1 auto;
  margin-left: 80px;
}

</style>

<style lang="scss">
.content-article-wrapper {
  p {
    font-size: 20px;
    color: #5B5B5B;
    letter-spacing: 0;
    line-height: 29px;
    margin-top: 24px;
  }
}
</style>

