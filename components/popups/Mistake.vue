<template lang="pug">
  div.mistake
    form
      .title
        | Ошибка
      .text-mistake
        | {{ text }}
      textarea.comment(placeholder="Ваш комментарий")
      button
        | Отправить

</template>

<script>
  export default {
    props: {
      text: String
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
