<template lang="pug">
.card-wrapper(:class="{'grid-card-wrapper': isGridCard, 'list-card-wrapper': isListCard}")
  nuxt-link.image-wrapper(:style="{height: isListCard ? '300px' : '240px'}" :to="'/'")
    image-component(:src="image")
  .content
    .top
      nuxt-link.name(:to="'/'")
        | {{ name }}

    .bottom
      .tags
        nuxt-link.tag(v-for="tag in tags" :key="`${id}-${tag}`" :to="'/'")
          | {{ tag }}
      .footer(v-if="isMetaVisible")
        .author
          | {{ author }}
        .date
          | {{ formattedDate }}
</template>

<script>
import ImageComponent from '~/components/ImageComponent'
import { format } from 'date-fns'
import ru from 'date-fns/locale/ru'

export default {
  props: {
    image: String,
    tags: Array,
    publicationDate: String,
    id: String,
    name: String,
    author: String,
    isGridCard: Boolean,
    isListCard: Boolean,
    isMetaVisible: Boolean
  },
  name: 'ArticleCard',
  components: {
    ImageComponent
  },
  mounted() {
  },
  computed: {
    formattedDate() {
      return format(this.publicationDate, 'D MMMM YYYY', { locale: ru });
    }
  }
}
</script>

<style lang="scss">

</style>

<style scoped lang="scss">
.card-wrapper {
  overflow: hidden;
}
.name {
  font-size: 16px;
  color: #000000;
  letter-spacing: 0;
  line-height: 22px;
  font-weight: 600;
  margin-top: 24px;
  display: block;
}

.tags {
  display: flex;
  flex-flow: row wrap;
  max-height: 62px;
  justify-content: flex-start;
}

.tag {
  display: inline-block;
  font-size: 12px;
  color: #A3A3A3;
  letter-spacing: 0;
  font-weight: 500;
  border: 1px solid #A3A3A3;
  border-radius: 3px;
  padding: 4px 8px;
  margin-top: 8px;
  margin-right: 8px;
  text-align: center;
}

.image-wrapper {
  display: block;
}

.bottom {
  margin-top: 8px;
}

.author {
  font-size: 12px;
  color: #5B5B5B;
  letter-spacing: 0;
  font-weight: 600;
}

.date {
  font-size: 12px;
  color: #5B5B5B;
  letter-spacing: 0;
}

.grid-card-wrapper{
  background: #F2F3EC;

  .content {
    min-height: 226px;
    padding: 0px 16px 16px 16px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }

  .tag {
    color: #7198BA;
    border-color: #7198BA;
  }
}

.footer {
  margin-top: 24px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.list-card-wrapper {
  .footer {
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 0;
    margin-left: 24px;
  }

  .bottom {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .tags {
    align-self: flex-start;
  }

  .date {
    margin-top: 8px;
    text-align: right;
  }

  .author {
    text-align: right;
  }

  .image-wrapper {
    border-radius: 3px;
    overflow: hidden;
  }
}


</style>
