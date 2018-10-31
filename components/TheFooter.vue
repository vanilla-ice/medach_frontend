<template lang="pug">
.footer
  .container
    .left
      .footer-item
        .title
          | Информация
        .links
          .link
            | О проекте
          .link
            | Контакты
          .link
            | Партнеры
          nuxt-link.link(to="/bloggers") Блоггеры

    .right
      .social-items
        .social.social-youtube
        .social.social-vk
        .social.social-telegram
        .social.social-instagram
        .social.social-twitter

</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped lang="scss">
.footer {
  background: #000000;
  padding: 24px 0 40px 0;

  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
}

.social-items {
  display: flex;
  flex-flow: row nowrap;
}

.social {
  width: 40px;
  height: 40px;
  display: block;
  cursor: pointer;

  &-youtube {
    background: url('~/assets/images/youtube.svg') no-repeat center / contain;
  }
  &-vk {
    background: url('~/assets/images/vk.svg') no-repeat center / contain;
  }
  &-telegram {
    background: url('~/assets/images/telegram.svg') no-repeat center / contain;
  }
  &-instagram {
    background: url('~/assets/images/instagram.svg') no-repeat center / contain;
  }
  &-twitter {
    background: url('~/assets/images/twitter.svg') no-repeat center / contain;
  }

  &:not(:first-child) {
    margin-left: 16px;
  }
}

.left {
  display: flex;
  flex-flow: row nowrap;
}

.title {
  font-size: 16px;
  color: #EEDD;
  letter-spacing: 0;
  font-weight: 500;
  padding-bottom: 16px;
  border-bottom: 1px solid #AFB09A;
}

.footer-item {
  &:not(:first-child) {
    margin-left: 40px;
  }
}

.link {
  display: block;
  margin-top: 16px !important;
  font-size: 16px !important;
  color: #7198BA !important;
  letter-spacing: 0 !important;
  cursor: pointer;
}

@media (max-width: 768px) {
  .footer .container {
    flex-flow: column nowrap;
  }

  .title {
    padding-bottom: 8px;

    font-size: 14px;
  }

  .link {
    margin-top: 4px;

    font-size: 14px;
  }

  .social-items {
    margin-top: 24px;
  }

  .social {
    width: 24px;
    height: 24px;
    &:not(:first-child) {
      margin-left: 8px;
    }
  }

  .footer-item:not(:first-child) {
    margin-left: 32px;
  }
}
</style>
