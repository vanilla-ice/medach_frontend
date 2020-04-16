<template lang="pug">
  .container
    a.back-link(href="javascript:history.back()")
      img.back-arrow(src='~/assets/images/back-arrow.svg')
      | Назад

    .apply-content__wrapper
      .apply-block__wrapper
        .apply-left.empty
        .apply-right
          .apply-title
            | Откликнуться на вакансию 
            span
              | Врач-рентгенолог
    .apply-content__wrapper
      .apply-block__wrapper
        .apply-left
          .info-left_title
            | Общая информация
          .info-left_subtitle 
            | Расскажите о себе

        .apply-right.human-info
          .input_item
            .info-label
              | Имя и фамилия 
            input(type="text" name="name" autocomplete="off")    
          .input_item
            .info-label
              | Номер телефона
            input(type="tel" name="phone" autocomplete="off")  
          .input_item
            .info-label
              | Контактный e-mail
            input(type="email" name="email" autocomplete="off")  

      .apply-block__wrapper.resume
        .apply-left
          .info-left_title
            | Резюме
          .info-left_subtitle
            | Загрузите файл резюме
        .apply-right
          .input__wrapper
            <input type="file" name="file" id="input__file" class="input input__file">
            <label for="input__file" class="input__file-button">
              span.input__file-button-text
                | Добавить файл
            </label>    

      .apply-block__wrapper.letter
        .apply-left
          .info-left_title
            | Сопроводительное письмо
          .info-left_subtitle
            | Расскажите, почему вы хотите работать у нас
        .apply-right
          <textarea name="text"></textarea>

          <input type="submit" class="apply-submit">    
          
</template>
<script>
import TheHeader from "~/components/TheHeader";
</script>

<style scoped lang="scss">
.back-link {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 130%;
  color: #a3a3a3;
  img {
    margin-right: 12px;
  }
}

.apply-title {
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 130%;
  color: #5b5b5b;
  span {
    display: block;
    color: #7198ba;
  }
}
.apply-content__wrapper {
  margin-left: 50px;
  margin-top: 40px;

  textarea {
    display: block;
    padding: 29px 36px 48px 32px;
    width: 811px;
    height: 600px;
    background: #ffffff;
    border: 1px solid rgba(151, 151, 151, 0.4);
    border-radius: 3px;
    outline: none;
  }
}
.apply-block__wrapper {
  display: flex;
}

.apply-block__wrapper.resume,
.apply-block__wrapper.letter {
  margin-top: 48px;
}

.apply-left {
  width: 309px;
}
.info-left_title {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 130%;
  color: #5b5b5b;
}

.info-left_subtitle {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 130%;
  color: rgba(91, 91, 91, 0.6);
  margin-top: 14px;
}

.apply-right {
  width: 811px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 56px;
}
.apply-right.human-info {
  input {
    width: 386px;
    height: 60px;
    padding-left: 20px;
    background: #ffffff;
    border: 1px solid rgba(151, 151, 151, 0.4);
    border-radius: 3px;
    outline: none;
    margin-top: 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #5b5b5b;
  }
}

.input_item {
  max-width: 385px;
}
.input_item:nth-child(2n) {
  margin-left: 41px;
}

.input_item:nth-child(3n) {
  margin-top: 32px;
}
.info-label {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 130%;
  color: #5b5b5b;
}

input.apply-submit {
  display: block;
  margin-left: auto;
  padding-left: 0;
  margin-top: 32px;
  margin-bottom: 100px;
  width: 240px;
  height: 60px;
  border: none;
  cursor: pointer;
  background: #7198ba;
  box-shadow: 0px 2px 4px rgba(184, 184, 184, 0.5);
  border-radius: 3px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
}

.input__wrapper {
  position: relative;
  margin: 15px 0;
  text-align: center;
  input {
    width: 50%;
  }
}

.input__file {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}

.input__file-icon-wrapper {
  height: 60px;
  width: 60px;
  margin-right: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-right: 1px solid #fff;
}

.input__file-button-text {
  line-height: 1;
  margin-top: 1px;
  margin: auto;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
}

.input__file-button {
  width: 290px;
  height: 60px;
  background: #7198ba;
  box-shadow: 0px 2px 4px rgba(184, 184, 184, 0.5);
  border-radius: 3px;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 700;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  cursor: pointer;
}

@media (max-width: 1200px) {
  .apply-left.empty {
    display: none;
  }

  .apply-content__wrapper {
    margin-left: 0;
  }

  .input_item:nth-child(2n) {
    margin-left: 0;
  }

  .apply-right {
    max-width: 811px;
    textarea {
      width: 100%;
    }
  }
}

@media (max-width: 992px) {
  .apply-block__wrapper {
    display: block;
    width: 100%;
  }
  .apply-left {
    width: inherit;
  }
  .apply-right {
    margin-left: 0;
    margin-top: 10px;
    display: block;
  }

  .input_item {
    margin-top: 10px;
    max-width: 100%;
  }

  .apply-right {
    width: 100%;
  }
  .apply-right.human-info {
    input {
      width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .apply-title {
    font-size: 30px;
    span {
      font-size: 20px;
    }
  }
  .input__file-button {
    width: 238px;
  }
}
</style>