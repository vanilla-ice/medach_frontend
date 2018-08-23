<template lang="pug">
nuxt-link.card-wrapper(
  :to="'/'"
  :style="{background: `url(http://localhost:8080${image}) no-repeat center / cover`}"
)

  .gradient
  .content
    .tags
      .tag(v-for="tag in tags")
        | {{ tag }}
    .name
      | {{ name }}
</template>

<script>
export default {
  props: {
    name: String,
    tags: Array,
    image: String,
    id: String
  },
  name: 'MediaCard',
  mounted() {
    console.log('tags', this.tags, this.name, this.image, this.id)
  }
}
</script>

<style scoped lang="scss">
.card-wrapper {
  min-height: 400px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  position: relative;
  padding: 40px;
  border-radius: 3px;
  overflow: hidden;
}

.gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.90) 76%);
}

.content {
  z-index: 10;
}

.name {
  font-size: 24px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 32px;
  font-weight: 600;
}
</style>
