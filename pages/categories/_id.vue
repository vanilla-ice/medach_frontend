<template lang="pug">

.wrapper
  .container
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

  .load-more(@click="getNextPage")
    | Больше статей
</template>

<script>
const ARTICLES_PER_PAGE_LIST = 2
const ARTICLES_PER_PAGE_GRID = 4

import ListArticlesView from '~/components/ListArticlesView'
import GridArticlesView from '~/components/GridArticlesView'
import { mapGetters } from 'vuex'

export default {
  components: {
    ListArticlesView,
    GridArticlesView
  },
  async fetch({store, params}) {
    if (params.id === 'blogs') {
      return store.dispatch('categoryPage/fetchBlogsInOrder', { page: 1, perPage: ARTICLES_PER_PAGE_LIST })
    }
  },
  data() {
    return {
      isList: true,
      isPopular: false,
      currentPage: 1
    }
  },
   computed: {
    ...mapGetters({
      articles: 'categoryPage/articles',
    }),
    perPage() {
      return this.isList ? ARTICLES_PER_PAGE_LIST : ARTICLES_PER_PAGE_GRID
    }
  },
  methods: {
    switchView() {
      this.isList = !this.isList

      return this.$store.dispatch('categoryPage/fetchBlogsInOrder', {
        page: 1,
        perPage: this.perPage
      })
    },

    sortByDate() {
      this.isPopular = false
    },

    sortByPopular() {
      this.isPopular = true
    },

    getNextPage() {
      return this.$store.dispatch('categoryPage/fetchNextPage', {perPage: this.perPage})
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
</style>

