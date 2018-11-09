<template lang="pug">
.wrapper(v-if="article")
  the-header
  scroll-top
  .container
    .title
      | {{article.title}}
    .tags
      nuxt-link.tag(v-for="tag in article.tags" :key="`${article.id}-${tag}`" :to="`/search?query=${tag}`")
        | {{ tag }}

    .info
      .info-item
        span(v-if="article.author")
         | Автор: {{article.author}}
      .info-item
        span(v-if="article.redaction")
         | Редакция: {{article.redaction}}
      .info-item
        span(v-if="article.infographic")
         | Оформление: {{article.infographic}}
      .info-item.origin
        span(v-if="article.origin && article.origin !== ''")
         | Оригинал: {{article.origin}}
      .info-item
        span(v-if="article.translate && article.translate !== ''")
         | Перевод: {{article.translate}}

    .article-wrapper
      .article.content-article-wrapper(v-html="articleBody" ref="articleData")
    .preview(v-if="currentImg" @click="close")
      .preview-wrapper
        .opacity
        .close(@click="close")
        img(:src="currentImg")
    .interested-wrapper
      interested-articles(:articles="interested")
</template>

<script>
import InterestedArticles from '~/components/InterestedArticles'
import ImageComponent from '~/components/ImageComponent'
import ThePopularAuthors from '~/components/ThePopularAuthors'
import TheHeader from '~/components/TheHeader'
import ScrollTop from '~/components/ScrollTop'

import { mapGetters } from 'vuex'

export default {
  name: 'Articles page',
  components: {
    InterestedArticles,
    ImageComponent,
    ThePopularAuthors,
    TheHeader,
    ScrollTop
  },
  fetch({store, params}) {
    return store.dispatch('articlePage/fetchArticle', {
      id: params.id
    })
      .then(() => store.dispatch('interestedArticles/fetchInterestedArticles'))
  },

  data() {
    return {
      BASE_URL: process.env.BASE_URL,
      currentImg: ''
    }
  },
  head () {
    const meta = () => {
      if (this.article.coverImage.url) {
        return [
          {
            property: 'og:image',
            content: this.BASE_URL+this.article.coverImage.url
          },
          {
            property: "og:image:type",
            content: "image/jpeg"
          },
          {
            property: "og:image:width",
            content: "675"
          },
          {
            property: "og:image:height",
            content: "475"
          }
        ]
      } else {
        return []
      }
    }
    return {
      title: this.article.title,
      meta: meta()
    }
  },
  computed: {
    ...mapGetters({
      article: 'articlePage/article',
      interested: 'interestedArticles/articles',
    }),

    articleBody() {
      return this.article.body.replace('<img src="', `<img src="${this.BASE_URL}`)
    }
  },

  mounted() {
    const images = Array.from(this.$refs.articleData.querySelectorAll('img'))
    images.map(img => {
      img.addEventListener('click', () => this.renderPreviewImage(img))
    })
  },

  beforeDestroy() {
    const images = Array.from(this.$refs.articleData.querySelectorAll('img'))
    images.map(img => {
      img.removeEventListener('click', () => this.renderPreviewImage(img))
    })
  },

  methods: {
    renderPreviewImage(image) {
      this.currentImg = image.getAttribute('src')
      document.body.classList.add('scroll-del')
    },

    close() {
      document.body.classList.remove('scroll-del')
      this.currentImg = null;
    },
  }
}
</script>

<style scoped lang="scss">
.info {
  margin-top: 50px;
  padding-left: 80px;
}

.tags {
  padding-left: 80px;
}

.info-item {
  font-size: 16px;
  color: #9b9b9b;
  padding: 5px 0;
}
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
  padding-left: 80px;
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
  max-width: 980px;

  img {
    width: 100%;
  }
}

.article-wrapper {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  margin-top: 40px;
  padding-left: 80px;
}

.article {
  font-family: 'PTSerif', serif;
  max-width: 800px;
  width: 100%;
}

.promo {
  flex: 1 1 auto;
  margin-left: 80px;
}

.preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.7);
  z-index: 3000;
  overflow: auto;
  img {
    position: relative;
    max-width: 92%;
    display: block;
    margin: 0 auto;
    z-index: 5;
  }
}

.preview-wrapper {
  margin: 30px auto;
}

.opacity {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

@media (max-width: 768px) {
  .title {
    font-size: 18px;
    line-height: 26px;
  }

  .tags {
    margin-top: 8px;
  }

  .tag {
    margin-left: 4px;
    margin-top: 8px;
  }

  .article-wrapper {
    margin-top: 16px;
    padding-left: 0;
  }

  .info,
  .tags,
  .title {
    padding-left: 0;
  }

  .info-item.origin {
    word-wrap: break-word;
  }
}

</style>

<style lang="scss">
.scroll-del {
  overflow: hidden !important;
}

.content-article-wrapper {
  p {
    font-size: 18px !important;
    color: #000000 !important;
    letter-spacing: 0;
    line-height: 29px;
    margin-top: 24px !important;
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

  ol, ul {
    margin-top: 24px
  }

  li {
    font-size: 16px;
    padding: 2px;
    line-height: 29px;
    font-size: 18px;
  }

  img {
    display: block;
    max-width: 100%;
    margin: 22px 0;
    cursor: pointer;
  }

  h2, h3 {
    margin: 25px 0 15px 0;
    word-wrap: break-word;
  }

  a {
    color: #7198BA !important;
  }

  li {
    p {
      line-height: 1.3;
    }
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

