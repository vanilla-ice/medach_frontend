<template lang="pug">
.container
  .wrapper
    .articles
      .header
        .left
          .sort-button
            | Популярное
          .sort-button
            | Свежее
        .right
          .switch-grid(@click="switchView")
            .icon.icon-grid(v-if="isList")
            .icon.icon-list(v-else)

      list-articles-view(v-if="isList" :articles="articles" key="list-view")
      grid-articles-view(v-else :articles="articles" key="grid-view")

    .promo
</template>

<script>
const ARTICLES_PER_PAGE = 5
const ARTICLES_PER_PAGE_GRID = 12

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
      return store.dispatch('categoryPage/fetchBlogsInOrder', { page: 1, perPage: ARTICLES_PER_PAGE })
    }
  },
  data() {
    return {
      isList: true,
      isPopular: false
    }
  },
   computed: {
    ...mapGetters({
      articles: 'categoryPage/articles',
    }),
  },
  methods: {
    switchView() {
      console.log('switch view', this.isList)
      this.isList = !this.isList
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

.wrapper {
  max-width: 880px;
}

.switch-grid {
  cursor: pointer;
}
</style>

