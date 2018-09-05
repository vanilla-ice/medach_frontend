<template lang="pug">
.wrapper
  interested-articles(:articles="interested")
</template>

<script>
import InterestedArticles from '~/components/InterestedArticles'

import { mapGetters } from 'vuex'

export default {
  components: {
    InterestedArticles
  },
  fetch({store, params}) {
    return store.dispatch('articlePage/fetchArticle', {
      id: params.id
    })
      .then(() => store.dispatch('interestedArticles/fetchInterestedArticles'))
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      article: 'articlePage/article',
      interested: 'interestedArticles/articles',
    })
  },
  methods: {
  },
}
</script>

<style scoped lang="scss">

</style>

