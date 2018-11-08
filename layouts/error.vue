<template lang="pug">
.inner
  the-header
  .content
    .title
      | Упс...
      .status-code
        | {{error.statusCode}}
      |Кажется Вы не там ищете, попробуйте еще раз с 
      nuxt-link.link(to="/") главной
</template>

<script>
import TheHeader from '~/components/TheHeader';

export default {
  props: ['error'],
  components: {
    TheHeader
  }
}
</script>

<style scoped lang="scss">
.inner {
  min-height: calc(100vh - 104px);
  display: flex;
  flex-flow: column nowrap;
} 

.content {
  display: flex;
  flex-flow: row nowrap;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
}

.title {
  text-align: center;
  font-size: 32px;
}

.link {
  display: block;
  text-align: center;
  color: #7198BA;
}

.status-code {
  font-size: 82px;
  color: #7198BA;
  font-weight: bold;
  margin: 20px 0;
}
</style>