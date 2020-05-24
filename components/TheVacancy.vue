<template lang="pug">
  .vacancy
    .employer
      | {{vacancy.employer}}
    .title
      | {{vacancy.title}}
    //- .tags
    //-   a.tag(href="#")
    //-     | Текст хештега
    //-   a.tag(href="#")
    //-     | Текст хештега
    .vacancy__footer
      .vacancy__footer-text
        .vacancy__footer-top
          .location(v-if="vacancy.location")
            | {{vacancy.location}}
          .dot(v-if="vacancy.location && vacancy.experience")
          .experience(v-if="vacancy.experience")
            | {{vacancy.experience}}
        .salary
          | {{vacancy.salary}}
      .vacancy__footer-button
        TheButton(type="base" text="Подробнее" :link="`/vacancy/${vacancy.id}`")
          | Подробнее
</template>

<script>
import TheButton from '~/components/TheButton'

export default {
  components: {
    TheButton
  },

  props: {
    vacancy: Object
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
}

.dot {
  display: block;
  width: 3px;
  height: 3px;
  margin: 0 16px;

  border-radius: 50%;
  background: #5B5B5B;
}

@media (max-width: 580px) {
  .vacancy {
    padding: 16px 14px 16px 14px;
  }

  .employer {
    font-size: 16px;
    line-height: 22px;
  }

  .title {
    font-size: 24px;
    line-height: 30px;
  }

  .vacancy__footer {
    flex-flow: column wrap;
    margin-top: 25px;

    font-size: 16px;
    line-height: 20px;
  }

  .vacancy__footer-top {
    flex-flow: column wrap;
    align-items: flex-start;
    margin-bottom: 5px;
  }

  .location {
    margin-bottom: 5px;
  }

  .location:after {
    display: none;
  }

  .vacancy__footer-button {
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;
  }
}
</style>
