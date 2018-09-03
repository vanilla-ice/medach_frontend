<template lang="pug">
.wrapper
  .container.row
    .articles
      .header
        .top
          .search-wrapper
            input(type="text" placeholder="Поиск по тегам и ключевым словам…")
        .bottom
          .left
            .sort-button(:class="{'active': isPopular }" @click="sortByPopular")
              | Популярное
            .sort-button(:class="{'active': !isPopular }" @click="sortByDate")
              | Свежее
          .right
            .switch-grid(@click="switchView")
              .icon.icon-grid(v-if="isList")
              .icon.icon-list(v-else)

      .articles-view
        list-articles-view(v-if="isList" :articles="articles" key="list-view")
        grid-articles-view(v-else :articles="articles" key="grid-view")
    
    .promo-wrapper
      the-popular-authors(:articles="dummyAuthors")

  .load-more(v-if="nextPage" @click="getNextPage")
    | Больше статей

  .interested-wrapper
    .container
      interested-articles(:articles="interested")
</template>

<script>
const ARTICLES_PER_PAGE_LIST = 2
const ARTICLES_PER_PAGE_GRID = 3

import ListArticlesView from '~/components/ListArticlesView'
import GridArticlesView from '~/components/GridArticlesView'
import InterestedArticles from '~/components/InterestedArticles'
import ThePopularAuthors from '~/components/ThePopularAuthors'

import { mapGetters } from 'vuex'

export default {
  components: {
    ListArticlesView,
    GridArticlesView,
    InterestedArticles,
    ThePopularAuthors
  },
  async fetch({store, params}) {
    switch(params.id) {
      case 'blogs':
        return store.dispatch('categoryPage/fetchBlogsInOrder', { page: 1, perPage: ARTICLES_PER_PAGE_LIST })
          .then(() => store.dispatch('interestedArticles/fetchInterestedArticles'))
      case 'translated':
        return store.dispatch('categoryPage/fetchTranslatedInOrder', { page: 1, perPage: ARTICLES_PER_PAGE_LIST })
          .then(() => store.dispatch('interestedArticles/fetchInterestedArticles'))
      case 'news':
        return store.dispatch('categoryPage/fetchNews', { page: 1, perPage: ARTICLES_PER_PAGE_LIST })
          .then(() => store.dispatch('interestedArticles/fetchInterestedArticles'))
    }
    
  },
  data() {
    return {
      isList: true,
      isPopular: false,
      dummyAuthors: [
        {
          publicationDate: new Date(),
          title: 'Владимир Владимирович',
          author: 'Владимирович',
          id: 1
        },
        {
          publicationDate: new Date(),
          title: 'Много Много',
          author: 'Подливы',
          id: 2
        },
        {
          publicationDate: new Date(),
          title: 'Владимирович Путин',
          author: 'Владимир',
          id: 3
        }
      ]
    }
  },
   computed: {
    ...mapGetters({
      articles: 'categoryPage/articles',
      interested: 'interestedArticles/articles',
      nextPage: 'categoryPage/nextPage'
    }),
    perPage() {
      return this.isList ? ARTICLES_PER_PAGE_LIST : ARTICLES_PER_PAGE_GRID
    },
    currentCategory() {
      return this.$route.params.id || null
    }
  },
  methods: {
    switchView() {
      this.isList = !this.isList

      switch(this.currentCategory) {
        case 'blogs':
          return this.$store.dispatch('categoryPage/fetchBlogsInOrder', { page: 1, perPage: this.perPage })
        case 'translated':
          return this.$store.dispatch('categoryPage/fetchTranslatedInOrder', { page: 1, perPage: this.perPage })
        case 'news':
          return this.$store.dispatch('categoryPage/fetchNews', { page: 1, perPage: this.perPage })
      }
    },

    sortByDate() {
      this.isPopular = false
    },

    sortByPopular() {
      this.isPopular = true
    },

    getNextPage() {
      return this.$store.dispatch('categoryPage/fetchNextPage', { perPage: this.perPage, category: this.currentCategory })
    }
  }
}
</script>

<style scoped lang="scss">
.icon {
  width: 16px;
  height: 16px;

  &-grid {
    background: url('~/assets/images/grid-icon.svg') no-repeat center / contain;
  }

  &-list {
    background: url('~/assets/images/list-icon.svg') no-repeat center / contain;
  }
}

.articles {
  max-width: 880px;
  flex: 1 1 auto;
}

.header {
  margin-top: 24px;
}

.switch-grid {
  cursor: pointer;
  user-select: none;
}

.bottom {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
}

.left {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.sort-button {
  font-size: 16px;
  color: #5B5B5B;
  letter-spacing: 0;
  cursor: pointer;
  border-bottom: 2px solid rgba(0,0,0,0);

  &:not(:first-child) {
    margin-left: 16px;
  }

  &.active {
    font-weight: 600;
    color: #7198BA;
    letter-spacing: 0;
    border-color: #7198BA;
  }
}

.search-wrapper {
  display: flex;

  input {
    flex: 1 1 auto;
    border: 2px solid #DBDBDB;
    border-radius: 3px;
    padding: 8px 20px 6px 20px;
    outline: none;

    &::placeholder {
      font-size: 16px;
      color: #7198BA;
      letter-spacing: 0;
    }
  }
}

.load-more {
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  padding: 24px;
  background: #7198BA;
  box-shadow: 0 2px 4px 0 rgba(184,184,184,0.50);
  text-align: center;
  margin-top: 60px;
  cursor: pointer;
  user-select: none;
}

.interested-wrapper {
  padding: 40px 0;
}

.row {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
}

.promo-wrapper {
  margin-left: 80px;
  max-width: 400px;
  flex: 1 1 auto;
  margin-top: 24px;
}
</style>

