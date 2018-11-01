<template lang="pug">
nuxt-link.wrapper(:to="`/profile/${profile.id}`")
  .avatar(:style="{'background': `url(${BASE_URL}${profile.user_profile ? profile.user_profile.avatar.url : ''}) no-repeat center / cover`}")
  .info
    .title
      | {{ profile.full_name }}
    .about
      | {{ profile.user_profile ? profile.user_profile.about : 'описание' }}



</template>

<script>
import { format } from 'date-fns'
import ru from 'date-fns/locale/ru'

const BASE_URL = process.env.BASE_URL

export default {
  name: 'TheBloggerCard',

  props: {
    profile: Object
  },

  data() {
    return {
      BASE_URL: BASE_URL
    }
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
.wrapper {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-right: 26px;
}

.title {
  font-size: 24px;
  color: #5B5B5B;
  letter-spacing: 0;
}
.about {
  margin-top: 5px;
  font-size: 16px;
  color: #5B5B5B;
  letter-spacing: 0;
  line-height: 22px;
}
</style>
