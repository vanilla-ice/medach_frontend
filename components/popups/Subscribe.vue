<template lang="pug">
  .subscribe
    | {{ text }}
</template>

<script>
  import { postMistakeArticle } from '~/utils/requests'

  export default {
    props: {
      text: String
    }
  }
</script>

<style scoped lang="scss">
  .subscribe {
    margin-top: 62px;

    font-size: 26px;
    text-align: center;
  }

</style>
