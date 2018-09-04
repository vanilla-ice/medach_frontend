<template lang="pug">
nuxt-link.card-wrapper(
  :to="'/'"
  :style="{background: `url(http://localhost:8080${image}) no-repeat center / cover`}"
)

  .gradient
  .content
    .tags
      .tag(v-for="tag in tags" :key="`${id}-${tag}`")
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
    id: [String, Number]
  },
  name: 'MediaCard'
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

.tags {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  margin-bottom: 25px;
}

.tag {
  font-size: 12px;
  color: #7198BA;
  letter-spacing: 0;
  font-weight: 500;
  padding: 4px 8px;
  border: 1px solid #7198BA;
  border-radius: 3px;

  &:not(:first-child) {
    margin-left: 10px;
  }

  &:first-child {
    font-size: 16px;
    color: #AFB09A;
    letter-spacing: 0;
    border: 2px solid #AFB09A;
  }
}
</style>
