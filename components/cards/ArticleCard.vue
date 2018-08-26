<template lang="pug">
.card-wrapper
  nuxt-link.image-wrapper(:style="{height: isBigCard ? '300px' : '240px'}" :to="'/'")
    image-component(:src="image")
  .content
    nuxt-link.name(:to="'/'")
      | {{ name }}

    .tags
      .tag(v-for="tag in tags" :key="`${id}-${tag}`")
        | {{ tag }}
</template>

<script>
import ImageComponent from '~/components/ImageComponent'

export default {
  props: {
    image: String,
    tags: Array,
    publicationDate: String,
    id: String,
    name: String,
    isBigCard: Boolean,
    customBackground: String
  },
  name: 'ArticleCard',
  components: {
    ImageComponent
  }
}
</script>

<style scoped lang="scss">
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
  margin-top: 8px;
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
</style>
