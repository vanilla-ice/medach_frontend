<template lang="pug">
.wrapper
  the-header
  .list
    div(v-for="(blogger, id) in bloggers" :key="id")
      | {{blogger}}

  .promo-wrapper
    the-popular-authors(:articles="dummyAuthors")

  .load-more-wrapper
    .load-more(v-if="nextPage" @click="getNextPage")
      | Больше блоггеров

  .interested-wrapper
    .container
      interested-articles(:articles="interested")
</template>

<script>
const BLOGGERS_PER_PAGE = 10

import InterestedArticles from '~/components/InterestedArticles'
import ThePopularAuthors from '~/components/ThePopularAuthors'
import TheHeader from '~/components/TheHeader'

import { mapGetters } from 'vuex'

export default {
  components: {
    InterestedArticles,
    ThePopularAuthors,
    TheHeader
  },
  fetch({store}) {
    return store.dispatch('profilePage/fetchBloggers', {
      page: 1,
      per_page: BLOGGERS_PER_PAGE
    })
      .then(() => store.dispatch('interestedArticles/fetchInterestedArticles'))
  },
  data() {
    return {
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
      bloggers: 'profilePage/bloggers',
      interested: 'interestedArticles/articles',
      nextPage: 'profilePage/bloggersNextPage'
    }),
  },
  methods: {
    getNextPage() {
      return this.$store.dispatch('categoryPage/fetchNextBloggers', {
        perPage: BLOGGERS_PER_PAGE
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

.profile-img {
  min-height: 320px;
  background: url('~/assets/images/profile.jpg') no-repeat center / cover;
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

