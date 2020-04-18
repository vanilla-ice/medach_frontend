<template lang="pug">
  .button
    nuxt-link(:to="link" :class="type")
      | {{ text }}

</template>

<script>
export default {
  props: {
    text: String,
    link: String,
    type: {
      required: true,
      validator: function (value) {
        return ['base', 'success', 'warning'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  a {
    display: block;

    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #ffffff;

    box-shadow: 0px 2px 4px rgba(184, 184, 184, 0.5);
    border-radius: 3px;
  }

  .success {
    background: #77D697;
    padding: 17px 20px;
  }

  .base {
    background: #7198BA;
    padding: 10px 37px;

    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }

  @media (max-width: 768px) {
    .success {
      padding: 13px 7px;

      font-size: 18px;
      line-height: 24px;
    }
  }
</style>
