<template lang="pug">
.wrapper
  the-header
  .container
    .title
      | Результаты по запросу "{{searchQuery}}":
    .title(v-if="articles.length === 0")
      | Ничего не найдено :(
    .articles-view
      grid-articles-view(:articles="articles")

  .load-more-wrapper
    .load-more(v-if="nextPage" @click="getNextPage")
      | Больше статей

</template>

<script>
const ARTICLES_PER_PAGE = 24
const SEARCH_INTERVAL = 300

import { debounce } from 'lodash'

import ListArticlesView from '~/components/ListArticlesView'
import GridArticlesView from '~/components/GridArticlesView'
import InterestedArticles from '~/components/InterestedArticles'
import ThePopularAuthors from '~/components/ThePopularAuthors'
import TheHeader from '~/components/TheHeader'

import { mapGetters } from 'vuex'

export default {
  components: {
    ListArticlesView,
    GridArticlesView,
    InterestedArticles,
    ThePopularAuthors,
    TheHeader
  },
  fetch({store, query}) {
    return store.dispatch('searchPage/search', {
      page: 1,
      perPage: ARTICLES_PER_PAGE,
      query: query.query
    })
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      articles: 'searchPage/articles',
      nextPage: 'searchPage/nextPage'
    }),
    searchQuery() {
      return this.$route.query.query || null
    }
  },
  methods: {
    getNextPage() {
      return this.$store.dispatch('searchPage/fetchNextPage', {
        page: this.nextPage,
        perPage: ARTICLES_PER_PAGE,
        query: this.searchQuery === '' ? null : this.searchQuery
      })
    },
  },

  watch: {
    searchQuery: function(e) {
      return this.$store.dispatch('searchPage/search', {
        page: 1,
        perPage: ARTICLES_PER_PAGE,
        query: this.searchQuery
      })
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

.wrapper .container {
  min-height: calc(100vh - 383px);
}

.title {
  font-size: 42px;
  color: #5B5B5B;
  letter-spacing: 2px;
  margin-top: 20px;
}

.articles {
  max-width: 880px;
  flex: 1 1 auto;
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

.heading {
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

.load-more-wrapper {
  margin-top: 60px;
}

.load-more {
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  background: #7198BA;
  box-shadow: 0 2px 4px 0 rgba(184,184,184,0.50);
  text-align: center;
  cursor: pointer;
  user-select: none;
  padding: 24px;
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


@media (max-width: 1024px) {
  .promo-wrapper {
    display: none;
  }
}

@media(max-width: 768px) {
  .load-more-wrapper {
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #AFB09A;
  }

  .load-more {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  .interested-wrapper {
    padding-top: 16px;
    padding-bottom: 0;
  }
}
</style>

