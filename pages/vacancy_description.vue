<template lang="pug">

  .container
    .breadcrumb
      ul
        li
          a(href='#') Вакансии
          |  >      
        li.active 
          | Врач-рентгенолог


    .vacancy_description__wrapper
      .vacancy_description-left 
        .vacancy-info-block__title
          | НЦЗД РАМН
        .vacancy-info_item
          .vacancy-info_question
            | Занятость:
          .vacancy-info_answer
            | полный день       
        .vacancy-info_item
          .vacancy-info_question
            | Локация:
          .vacancy-info_answer
            | Москва       
        .vacancy-info_item
          .vacancy-info_question
            | Требуемый стаж:
          .vacancy-info_answer
            | от 3-х лет       
        .vacancy-info_item
          .vacancy-info_question
            | Контакты работодателя:
          .vacancy-info_answer
            a(href="contact@gmail.com")  
              | contact@gmail.com  
        .vacancy-posting-date
          | Вакансия размещена: 21 января 2020       
      .vacancy_description-right
        .vacancy_description__title
          | Врач - рентгенолог 
        .vacancy_description-text
          | fsjfaksjgfjasdgfa
        .vacancy_description-btn
          | Откликнуться     

</template>


<style scoped lang="scss">
.breadcrumb {
  margin-top: 20px;
  ul {
    display: flex;
    align-items: center;
    padding-left: 0;
    li {
      text-decoration: none;
      list-style-type: none;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: #7198ba;
    }
  }
}
.vacancy_description__wrapper {
  display: flex;
  padding-bottom: 90px;
  margin-top: 28px;
}

.vacancy_description-left {
  width: 400px;
  height: 476px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(184, 184, 184, 0.5);
  border-radius: 3px;
  padding-top: 37px;
  padding-left: 32px;
  padding-bottom: 32px;
  padding-right: 32px;
}
.vacancy-info-block__title {
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  color: #5b5b5b;
}

.vacancy-info_item {
  margin-top: 21px;
}

.vacancy-info_question {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #7198ba;
}

.vacancy-info_answer {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #5b5b5b;
  margin-top: 10px;
}

.vacancy-posting-date {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #a3a3a3;
  margin-top: 36px;
}

.vacancy_description-right {
  width: 936px;
  height: fit-content;
  margin-left: 24px;
  padding-top: 36px;
  padding-left: 56px;
  padding-right: 56px;
  padding-bottom: 32px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(184, 184, 184, 0.5);
  border-radius: 3px;
}

.vacancy_description__title {
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  color: #7198ba;
}
.vacancy_description-text {
  margin-top: 32px;
  word-wrap: break-word;
  line-height: 130%;
}
.vacancy_description-btn {
  width: 240px;
  height: 60px;
  background: #7198ba;
  box-shadow: 0px 2px 4px rgba(184, 184, 184, 0.5);
  border-radius: 3px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-left: auto;
  margin-top: 20px;
  cursor: pointer;
}

@media (max-width: 1200px) {
  .vacancy_description-right {
    width: 666px;
  }
}

@media (max-width: 992px) {
  .vacancy_description__wrapper {
    flex-direction: column;
  }

  .vacancy_description-left {
    width: 100%;
  }
  .vacancy_description-right {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }
}

@media (max-width: 768px) {
  .vacancy_description__title {
    font-size: 28px;
  }
}

@media (max-width: 576px) {
  .breadcrumb {
    ul {
      li {
        font-size: 15px;
      }
    }
  }
  .vacancy_description-left {
    padding: 10px;
  }
  .vacancy_description-right {
    padding: 10px;
  }
  .vacancy_description__title {
    font-size: 22px;
  }
  .vacancy_description-btn {
    width: 200px;
    margin: 20px auto;
  }
}
</style>