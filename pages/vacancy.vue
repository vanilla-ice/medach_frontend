<template lang="pug">
  .wrapper
    the-header
    .container
      .post-vacancy__wrapper
        .post-vacancy__text
          | Размещение на 45 дней + посты в социальных сетях
        TheButton(text="Разместить вакансию", link="#", type="success")
      .content
        .apply__wrapper
          .apply__title
            | Получайте уведомления о новых вакансиях
          form(@submit.prevent="apply")
            .apply__input-wrapper
              .apply__icon
              input(type="email" class="apply__input" name="apply" autocomplete="off" placeholder="medach@gmail.com" v-model="subscribeQuery" required )
            button.apply__button
              | Подписаться
        .vacancies__wrapper
          .vacancies__title
            | Вакансии
          .vacancies(v-if="vacancies.length !== 0")
            TheVacancy(
              v-for="vacancy in vacancies",
              :key="vacancy.id",
              :vacancy="vacancy"
            )
            .load-more
              button(v-if="nextPage" @click="getNextPage")
                | Загрузить еще
          .not-vacancies(v-else)
            | Нет вакансий
    transition(name="fade")
      Popup(
        v-if="openPopup"
        type="subscribe",
        text="Вы подписаны",
        :popupVisible="popupVisible"
      )
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheVacancy from '~/components/TheVacancy'
import TheButton from '~/components/TheButton'
import Popup from '~/components/popups/Popup'

import { mapGetters } from 'vuex'
import { postSubscribe } from '~/utils/requests'

const VACANCIES_PER_PAGE = 3

export default {
  components: {
    TheHeader,
    TheVacancy,
    TheButton,
    Popup
  },

  fetch({store}) {
    return store.dispatch('vacansyPage/getVacancies', {
      page: 1,
      perPage: VACANCIES_PER_PAGE
    })
  },

  data() {
    return {
      subscribeQuery: "",
      openPopup: false
    }
  },

  computed: {
    ...mapGetters({
      vacancies: 'vacansyPage/vacancies',
      nextPage: 'vacansyPage/nextPage'
    }),
  },
  methods: {
    apply(event) {
      postSubscribe(this.subscribeQuery)
        .then(response => {
          if (response.data.is_subscribed) {
            this.subscribeMessage = "Вы подписаны"
            this.popupVisible()
          }
        })
        .catch(err => {
          console.log('err', err)
          this.popupVisible()
        })
    },

    popupVisible() {
      this.openPopup = !this.openPopup;
    },

    getNextPage() {
      return this.$store.dispatch('vacansyPage/fetchNextPage', {
        perPage: VACANCIES_PER_PAGE
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 40px;
  color: #5B5B5B;
}

.post-vacancy__wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 32px 24px 24px 24px;
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

.content {
  display: grid;
  grid-template-columns: minmax(200px, 348px) minmax(400px, 972px);
  grid-column-gap: 40px;
  padding-bottom: 100px;
}

.apply__title {
  max-width: 300px;

  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #7198BA;
}

.apply__input-wrapper {
  position: relative;
  width: 100%;
  margin-top: 16px;
}

.apply__input {
  display: block;
  width: 100%;
  padding: 17px 10px 17px 52px;

  font-size: 18px;
  line-height: 22px;
}

.apply__icon {
  position: absolute;
  left: 14px;
  top: 22px;

  width: 24px;
  height: 18px;
  background: url('~/assets/images/email.svg') no-repeat center / contain;
}

.apply__button {
  width: 100%;
  padding: 15px 10px;
  margin-top: 16px;

  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;

  background: #7198BA;
  border: none;
}

.vacancies__title {
  margin-bottom: 32px;

  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
}

.tags {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.load-more button {
  display: block;
  max-width: 348px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding: 15px 10px;

  background: #7198BA;
  box-shadow: 0px 2px 4px rgba(184, 184, 184, 0.5);
  border: none;
  border-radius: 3px;

  color: #ffffff;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
}

</style>
