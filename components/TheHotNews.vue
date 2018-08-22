<template lang="pug">
.wrapper
  .head
    .title
      | Новости
    .flag
  .inner
    .news-item(
      v-for="item in news",
      :key="item.id"
    )
      .name
        | {{ item.title }}
      .date
        | {{ formatDate(item.publicationDate) }} назад
</template>

<script>
import distanceInWords from 'date-fns/distance_in_words'
import ru from 'date-fns/locale/ru'

export default {
  name: 'TheHotNews',
  props: {
    news: Array
  },
  methods: {
    formatDate(date) {
      const currentDate = new Date()
      return distanceInWords(date, currentDate, {locale: ru})
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  background: rgba(91,91,91,0.65);
  height: 100%;
  padding: 40px 0;
}

.head {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
}

.title {
  font-size: 24px;
  color: #AFB09A;
  letter-spacing: 0;
}

.flag {
  width: 36px;
  height: 29px;
  background: url('~/assets/images/news-flag.svg') no-repeat center / contain;
}

.inner {
  padding: 0 40px;
}

.news-item {
  padding: 40px 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(151,151,151,0.4);
  }
}

.name {
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 22px;
  font-weight: 600;
}

.date {
  font-size: 12px;
  color: #FFFFFF;
  letter-spacing: 0;
  margin-top: 25px;
}
</style>
