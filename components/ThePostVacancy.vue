<template lang="pug">
  .post-vacancy__wrapper
    .post-vacancy__text
      | Размещение на 45 дней + посты в социальных сетях
    TheButton(text="Разместить вакансию", link="#", type="success")
</template>

<script>
import TheButton from '~/components/TheButton'

export default {
  components: {
    TheButton
  }
}
</script>

<style scoped lang="scss">
.post-vacancy__wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 24px;
  margin-bottom: 40px;

  border: 1px solid #DCDCDC;
  box-shadow: 0px 2px 4px rgba(184, 184, 184, 0.5);
  border-radius: 3px;
}

.post-vacancy__text {
  margin-right: 20px;

  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
}

@media (max-width: 1140px) {
  .post-vacancy__wrapper {
    flex-flow: column wrap;
  }

  .post-vacancy__text {
    margin-bottom: 20px;

    text-align: center;
  }
}

@media (max-width: 768px) {
  .post-vacancy__wrapper {
    padding: 15px 15px;
  }

  .post-vacancy__text {
    font-size: 18px;
    line-height: 24px;
  }
}
</style>
