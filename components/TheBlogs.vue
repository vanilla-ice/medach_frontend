<template lang="pug">
.blogs__container
  .blogs__wrapper
    nuxt-link.blogs-tag(to="/categories/blogs")
      | Блоги
    .blogs__articles-wrapper
      nuxt-link(:to=" 'post/' + firstArticle.id ").blogs__articles-big
        .top
          .blogs__articles-big-text
            | {{ firstArticle.title }}
          .blogs__articles-description(v-if="firstArticle.shortDescription")
            | {{ firstArticle.shortDescription }}
        .footer
          .date
            | {{ currentDate(firstArticle.publish_on) }}
          .author
            | Автор:
            span
              | {{ firstArticle.author }}
      .blogs__articles-min-wrapper
        nuxt-link(
          v-for="(article, id) in otherArticles"
          :key="article.id"
          :to=" 'articles/' + article.id "
        ).blogs__articles-min-item
          .blogs__articles-min-item-text
            | {{ article.title }}
          .blogs__articles-min-item-text.min-descr
            | {{ article.shortDescription }}
          .footer
            .date
              | {{ currentDate(article.publish_on) }}
            .author
              | Автор:
              span
                | {{ article.author }}
</template>

<script>
import { format } from 'date-fns'
import ru from 'date-fns/locale/ru'

export default {
  props: {
    articles: Array
  },

  methods: {
    currentDate(date) {
      if (date) {
        let result = format(date, 'MMMM D, YYYY', { locale: ru });
        return result[0].toUpperCase() + result.slice(1);
      }
      return ""
    }
  },

  computed: {
    firstArticle() {
      return this.articles[0]
    },

    otherArticles() {
      return this.articles.filter((item, index) => index > 0 && index < 5)
    }
  }
}
</script>

<style lang="scss" scoped>
.blogs__container {
  padding-top: 15px;
  padding-bottom: 15px;

  background: #FDFDFD;
  box-shadow: 0 2px 4px 0 rgba(184,184,184,0.50);
  border-radius: 3px;
}

.blogs__wrapper {
  width: 100%;
  padding: 24px 24px 31px 24px;
  flex-wrap: nowrap;
}

.blogs-tag {
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  color: #AFB09A;
  letter-spacing: 0;
  border: 2px solid #AFB09A;
  border-radius: 3px;
  padding: 4px 8px;
}

.blogs__articles-wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-wrap: nowrap;
  justify-content: space-between;

  margin-top: 24px;
}

.blogs__articles-big {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 48%;
  min-height: 251px;
  margin-right: 25px;
  border-right: 1px solid #D8D8D8;
  padding-right: 35px;

  cursor: pointer;
  text-decoration: none;
}

.blogs__articles-big-text {
  font-size: 24px;
  color: #5B5B5B;
  letter-spacing: 0;
  line-height: 32px;
  font-weight: 500;
  text-decoration: none;
}

.blogs__articles-big-date {
  font-size: 16px;
  color: #ACACAC;
}

.blogs__articles-min-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 52%;
  min-height: 251px;
}

.blogs__articles-min-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100px;
  width: calc(50% - 12.5px);
  padding: 10px;

  font-size: 16px;

  cursor: pointer;

  &:nth-child(n+3) {
    margin-top: 25px;
  }

  &:nth-child(even) {
    margin-left: 25px;
  }
}

.blogs__articles-min-item-text {
  font-size: 16px;
  color: #5B5B5B;
  letter-spacing: 0;
  line-height: 22px;
  font-weight: 600;
}

.min-descr {
  font-size: 14px;
  font-weight: 400;
}

.blogs__articles-description {
  font-family: 'PTSerif', serif;
  font-size: 16px;
  color: #5B5B5B;
  letter-spacing: 0;
  line-height: 24px;
  font-weight: normal;
  margin-top: 25px;
}

.date {
  font-size: 12px;
  color: #A3A3A3;
  letter-spacing: 0;
  font-weight: 400;
  white-space: nowrap;
}

.footer {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.author {
  font-size: 12px;
  color: #A3A3A3;
  letter-spacing: 0;
  font-weight: 400;

  span {
    margin-left: 5px;
    font-weight: 600;
    color: #AFB09A;
  }
}

@media (min-width: 1024px) and (max-width: 1440px) {
  .blogs__wrapper {
    padding: 1.7vw 1.7vw 1.9vw 1.7vw;
  }
}

@media(max-width: 1250px) {
  .blogs__articles-big-text {
    font-size: 20px;
  }

  .blogs__articles-min-item {
    font-size: 14px;
  }
}

@media(max-width: 1024px) {
  .blogs__container {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .blogs__wrapper {
    display: flex;
    flex-direction: column;

    max-width: 675px;
    width: 100%;
    margin: 0 auto;
    padding: 15px;
    padding-left: 0;
    padding-right: 0;

    border-top: 2px solid #110F6C;
  }

  .blogs__articles-wrapper {
    flex-direction: column;
  }

  .blogs__articles-min-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .blogs-tag {
    padding: 0;
    padding-left: 12px;
    margin: 0;

    border: none;
    font-size: 17px;
    color: #939393;
  }

  .blogs__articles-big {
    width: 100%;
    margin-right: 0;
    min-height: 0;
    padding: 12px;
  }

  .blogs__articles-big-text {
    margin-bottom: 20px;
    font-size: 17px;

    font-family: Montserrat-Regular;
  }

  .blogs__articles-min-item {
    width: 100%;
    margin-right: 0;
    min-height: 0;
    padding: 12px;

    border-top: 1px solid #ececec;
  }

  .blogs__articles-min-item-text {
    margin-bottom: 20px;

    font-size: 17px;
    font-family: Montserrat-Regular;
  }

  .blogs__articles-big-date,
  .blogs__articles-min-item-date {
    font-family: Montserrat-Regular;
    font-size: 12px;;
  }
}

@media(max-width: 768px) {
  .blogs__wrapper {
    width: 100%;
    padding-left: 32px;
    padding-right: 32px;

    border-top: none;
  }

  .blogs-tag {
    display: inline-block;
    align-self: flex-start;

    font-weight: 500;
    font-size: 16px;
    color: #AFB09A;
    letter-spacing: 0;
    border: 2px solid #AFB09A;
    border-radius: 3px;
    padding: 4px 8px;
  }

  .blogs__articles-big {
    border: none;
    padding-right: 0;
    padding-left: 0;
  }

  .blogs__articles-min-item {
    padding-right: 0;
    padding-left: 0;

    &:nth-child(even) {
      margin-left: 0;
    }

    &:nth-child(n+3) {
      margin-top: 0;
    }
  }

  .blogs__articles-big-text {
    font-size: 14px;
    line-height: 20px;
  }

  .blogs__container {
    border-radius: 8px;
  }

  .blogs__articles-min-item-text {
    font-size: 14px;
    font-weight: normal;
  }

  .blogs__articles-min-wrapper {
    min-height: auto;
  }
}

@media(max-width: 500px) {
  .container {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
