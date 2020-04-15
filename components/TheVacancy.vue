<template lang="pug">
  .vacancy
    .employer
      | НЦЗД РАМН
    a(href="#").title
      | Врач-рентгенолог
    .tags
      a.tag(href="#")
        | Текст хештега
      a.tag(href="#")
        | Текст хештега
    .vacancy__footer
      .vacancy__footer-text
        .vacancy__footer-top
          .location
            | Москва
          .experience
            | Стаж от 3-х лет
        .salary
          | От 100 000 на руки
      .vacancy__footer-button
        TheButton(type="base" text="Подробнее" link="#")
          | Подробнее
</template>

<script>
import TheButton from '~/components/TheButton'

export default {
  components: {
    TheButton
  }
}
</script>

<style lang="scss" scoped>
.vacancy {
  padding: 32px 24px 32px 40px;
  margin-bottom: 20px;

  border: 1px solid #DCDCDC;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(184, 184, 184, 0.5);
  border-radius: 3px;
}

.employer {
  margin-bottom: 8px;

  font-size: 20px;
  line-height: 24px;
  color: #7198BA;
}

.title {
  margin-bottom: 16px;

  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
}

.tags {
  max-width: 600px;
}

.vacancy__footer {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  margin-top: 48px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}

.vacancy__footer-button {
  display: flex;
  align-items: flex-end;

  max-width: 186px;
  width: 100%;
  margin-top: 10px;
}

.vacancy__footer-top {
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  margin-bottom: 8px;
}

.location {
  position: relative;
  margin-right: 35px;


  &:after {
    content: '';
    position: absolute;
    top: 11px;
    right: -19px;

    display: block;
    width: 3px;
    height: 3px;

    border-radius: 50%;
    background: #5B5B5B;
  }
}
</style>
