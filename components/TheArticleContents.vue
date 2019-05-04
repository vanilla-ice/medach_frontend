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
    props: {
      contents: Array
    },

    data() {
      return {
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
        setTimeout(() => {
          window.addEventListener('scroll', this.scrollHandler)
          this.headerBottomPosition = document.querySelector('.header').offsetHeight + 20
          this.footerTopPosition = document.body.scrollHeight - (document.querySelector('.footer').offsetHeight + window.innerHeight)
          this.stickyPosition = this.headerBottomPosition

          this.contentsPositions = this.contents.map((el) => Number(el.getBoundingClientRect().top) + pageYOffset)

          this.isBrowser = true
        }, 300)
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
        if (pageYOffset >= this.headerBottomPosition - 20 && pageYOffset <= this.footerTopPosition) {
          this.isSticky = true
          this.stickyPosition = 20
        } else if (pageYOffset <= this.headerBottomPosition) {
          this.isSticky = false;
          this.stickyPosition = this.headerBottomPosition
        } else if (pageYOffset >= this.footerTopPosition) {
          this.isSticky = false
          this.stickyPosition = -600
        }

        // active contents
        this.contentsPositions.map((elPosition, index) => {
          if (pageYOffset >= elPosition - 10) {
            this.contentIndex = index
          } else if (this.contentsPositions[0] > pageYOffset) {
            this.contentIndex = null
          }
        })

      }
    }
  }
</script>

<style scoped lang="scss">
.contents {
  position: absolute;
  z-index: 13;
  left: 20px;
  z-index: 2;
  overflow: auto;

  width: 320px;
  min-height: 360px;
  max-height: 600px;
  padding: 10px 17px 14px 20px;
  background: #ffffff;

  border: 1px solid #DBDBDB;
  border-radius: 6px;

  transition: all 0.2s linear;
}

.contents.stycky {
  position: fixed;
  top: 20px;
  left: 20px;
}

.contents ul {
  overflow: auto;
  padding-left: 0;
  list-style: none;
}

.contents li {
  position: relative;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.contents li.h2 {
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 18px;
}

.contents li.h3 {
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 6px;
  font-size: 16px;
}

.contents li.active {
  color: #7198BA;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    display: block;
    height: 80%;
    width: 1px;
    background: #7198BA;
  }
}

.contents li.h2.active {
  padding-left: 10px;
}

.contents li.h3.active {
  padding-left: 12px;
}

@media (max-width: 1024px) {
  .contents {
    top: 0 !important;
    left: 0 !important;
    z-index: 13;
    border: 0;
    border-radius: 0;

    width: 280px;
    height: 100%;
    min-height: 0;
    max-height: 100%;
  }

  .contents li.h2 {
    font-size: 16px;
  }

  .contents li.h3 {
    font-size: 14px;
  }
}
</style>

