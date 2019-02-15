<template lang="pug">
  div(
    :class="{'contents': true, 'stycky': isSticky}"
    :style="{'top': `${stickyPosition}px`}"
    ref="contents"
    v-if="isBrowser && contents.length"
    )
    ul
      li(v-for="(content, index) in contents" @click="scrollTo(content)" :class="getClass(content, index)")
        | {{ content.textContent }}
</template>

<script>
  import VueScrollTo from 'vue-scrollto'

  export default {
    data() {
      return {
        contents: null,
        isBrowser: null,
        isSticky: false,
        stickyPosition: null,
        headerBottomPosition: null,
        footerHeight: null,
        contentIndex: null,
        contentsPositions: null
      }
    },

    mounted() {
      if (process.browser) {
        window.addEventListener('scroll', this.scrollHandler)
        this.contents = Array.from(this.$parent.$refs.articleData.querySelectorAll('h2, h3'))
        this.headerBottomPosition = document.querySelector('.header').offsetHeight
        this.footerTopPosition = document.body.scrollHeight - (document.querySelector('.footer').offsetHeight + window.innerHeight)
        this.stickyPosition = this.headerBottomPosition

        this.contentsPositions = this.contents.map((el) => Number(el.getBoundingClientRect().top) + pageYOffset)

        this.isBrowser = true
      }
    },

    beforeDestroy() {
      window.removeEventListener('scroll', this.scrollHandler)
    },

    methods: {
      getClass(el, index) {
        return {
          'h2': el.tagName.toLowerCase() === 'h2',
          'h3': el.tagName.toLowerCase() === 'h3',
          'active': Number(index) === this.contentIndex
        }
      },

      scrollTo(node) {
        VueScrollTo.scrollTo(node, 1000, {
          easing: 'easeInOutQuart'
        })
      },

      scrollHandler() {
        // sticky
        if (pageYOffset >= this.headerBottomPosition && pageYOffset <= this.footerTopPosition) {
          this.isSticky = true
          this.stickyPosition = 0
        } else if (pageYOffset <= this.headerBottomPosition) {
          this.isSticky = false;
          this.stickyPosition = this.headerBottomPosition
        }
        else if (pageYOffset >= this.footerTopPosition) {
          this.isSticky = false
          this.stickyPosition = this.footerTopPosition
        }

        // active contents
        this.contentsPositions.map((el, index) => {
          if (pageYOffset >= el && pageYOffset <= this.contentsPositions[index + 1]) {
            console.log('this.contentIndex', this.contentIndex)
            this.contentIndex = index
          }
        })

      }
    }
  }
</script>

<style scoped lang="scss">
.contents {
  position: absolute;
  left: 0;
  z-index: 2;

  width: 300px;
  height: 100vh;
  padding: 20px;
  overflow: hidden;

  background: #f8f8f8;
}

.contents.stycky {
  position: fixed;
  top: 0;
  left: 0;
}

.contents ul {
  padding-left: 0;
  list-style: none;
}

.contents li {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.contents li.active {
  text-decoration: underline;
}

.contents li.h2 {
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 16px;
}

.contents li.h3 {
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  font-size: 14px;
}
</style>
