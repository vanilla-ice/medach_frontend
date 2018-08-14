<template lang="pug">
.header
  .container
    .left
      nuxt-link.logo(to="/")
        | MEDACH

    .right
      .categories(:class="{visible: isOpen}")
        .category
          nuxt-link.category-name(to="/cases") Кейсы
        .category
          nuxt-link.category-name(to="/guides") Руководства 
        .category
          nuxt-link.category-name(to="/posts") Авторские статьи
        .category
          nuxt-link.category-name(to="/translated") Переводы
        .category
          nuxt-link.category-name(to="/media") Медиа
        .category
          nuxt-link.category-name(to="/blogs") Блоги
        .category
          nuxt-link.category-name(to="/news") Новости
        .search-wrapper
          label
            form(@submit.prevent="search")
              .search-icon
              input(type="text" class="search" name="search" autocomplete="off" placeholder = "поиск..." v-model="query")
          .search-buffer
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      query: '',
      isOpen: true
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(184,184,184,0.50);
  z-index: 1;
}

.container {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.categories {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  font-size: 24px;
  color: #A3A3A3;
  letter-spacing: 2px;
  font-weight: 700;
  text-decoration: none;
}

.category-name {
  font-size: 16px;
  color: #5B5B5B;
  letter-spacing: 0;
  text-decoration: none;
  padding: 25px 20px;
  display: inline-block;
  transition: color .2s ease;

  &:hover {
    color: #7198BA;
  }
}

.search-wrapper {
  position: relative;
  margin-left: 20px;
  max-width: 200px;
}

.search {
  border: 2px solid #DBDBDB;
  border-radius: 3px;
  font-size: 16px;
  letter-spacing: 0;
  padding: 5px 30px 5px 10px;
  outline: none;
  display: block;
  width: 100%;

  &::placeholder {
    color: #7198BA;
  }
}

.search-icon {
  width: 16px;
  height: 16px;
  background: url('~/assets/images/search.svg') no-repeat center / contain;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
