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
      .article.content-article-wrapper(v-html="articleBody")
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
    }),

    articleBody() {
      return this.article.body.replace('<img src="', '<img src="http://medach.pro')
    }
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

@media (max-width: 768px) {
  .article-wrapper {
    margin-top: 16px;
  }
}

</style>

<style lang="scss">
.content-article-wrapper {
  p {
    font-size: 18px;
    color: #000000;
    letter-spacing: 0;
    line-height: 29px;
    margin-top: 24px;
  }

  .editor_img-title {
    width: 100%;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    font-size: 18px;
    background: #30312f;
    border-top: 2px solid #000;
    border-left: 2px solid #000;
    border-right: 2px solid #000;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    padding: 10px 10px 10px 20px;
    line-height: 20px;
  }

  .editor_img-content {
    margin-bottom: 20px;
    font-size: 14px;
    color: #30312f;
    border-left: 2px solid #000;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    padding: 10px 10px 10px 20px;
    line-height: 20px;
  }

  li {
    font-size: 16px;
    padding: 10px;
  }
}

@media (max-width: 768px) {
  .image-wrapper img {
    width: 100%;
  }

  .content-article-wrapper {
    margin-left: 0 !important;
  }

  .content-article-wrapper img {
    width: 100% !important;
    height: auto !important;
  }
  .promo {
    display: none;
  }

  .content-article-wrapper p {
    margin-top: 16px;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>

