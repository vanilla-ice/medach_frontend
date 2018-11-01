<template lang="pug">
.wrapper
  .head
    .title
      | Новости
    .flag
  .inner
    nuxt-link.news-item(
      v-for="item in news"
      :key="item.id"
      :to="`/articles/${item.id}`"
    )
      .name
        | {{ item.title }}
      .date
        | {{ formatDate(item.publicationDate) }}
</template>

<script>
import distanceInWords from 'date-fns/distance_in_words'
import ru from 'date-fns/locale/ru'
import { format } from 'date-fns'

export default {
  name: 'TheHotNews',
  props: {
    news: Array
  },
  methods: {
    formatDate(date) {
      return format(date, 'D MMMM YYYY', { locale: ru })
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
  display: block;

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
  white-space: nowrap;
}

@media (max-width: 768px) {
  .wrapper {
    background: #ffffff;
  }

  .inner {
    padding: 0 32px;
    background: #FDFDFD;
    box-shadow: 0 2px 2px 0 rgba(219,219,219,0.50);
    border-radius: 8px;
  }

  .news-item {
    padding: 12px 0;
  }

  .head {
    padding-left: 32px;
    margin-bottom: 4px;
  }

  .title {
    font-size: 16px;
    font-weight: bold;
    color: #5B5B5B;
  }

  .name {
    font-size: 14px;
    color: #5B5B5B;
  }

  .date {
    margin-top: 8px;

    font-size: 12px;
    color: #A3A3A3;
  }

  .flag {
    width: 20px;
    height: 16px;
  }

}
</style>
