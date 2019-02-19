<template lang="pug">
  div.mistake
    form(@submit.prevent="send")
      .title
        | Ошибка
      .text-mistake
        | {{ text }}
      textarea.comment(v-model="textarea" placeholder="Ваш комментарий")
      button
        | Отправить

</template>

<script>
  import { postMistakeArticle } from '~/utils/requests'

  export default {
    props: {
      text: String,
      popupVisible: Function
    },

    data() {
      return {
        textarea: ''
      }
    },

    methods: {
      send() {
        if (this.textarea.length === 0) return
        postMistakeArticle(this.$route.params.id, this.text, this.textarea).then()
        this.popupVisible()
      }
    }
  }
</script>

<style scoped lang="scss">
  form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;

    font-family: 'PTSerif', serif;
  }

  .title {
    margin-bottom: 30px;
    font-size: 18px;
  }

  .text-mistake {
    margin-bottom: 20px;
    font-weight: bold;
  }

  .comment {
    min-height: 80px;
    padding: 7px;
    margin-bottom: 15px;

    outline: none;
    resize: none;
  }

  button {
    display: inline-block;
    align-self: flex-start;
    padding: 10px 20px;

    background: none;
    border: 1px solid #A3A3A3;
    border-radius: 3px;

    cursor: pointer;

    transition: background 0.3s linear, border 0.3s linear, color 0.3s linear;

    &:hover {
      background: #7198BA;
      border: 1px solid #7198BA;
      color: #ffffff;
    }
  }
</style>
