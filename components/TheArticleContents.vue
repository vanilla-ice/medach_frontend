<template lang="pug">
  div(
    :class="{'contents': true, 'stycky': isSticky}"
    :style="{'top': `${stickyPosition}px`}"
    ref="contents"
    v-if="isBrowser && contents.length"
    )
    .ul-content__wrapper
      ul
        li(v-for="(content, index) in contents" @click="scrollTo(content)" :class="getClass(content, index)")
          | {{ content.textContent }}
    //- .banners-wrapper__left-wrapper
    .banners-wrapper__left
      template(v-for = "banner in bannersLeft")
        .banner-wrapper
          img.banner-img(:src = "BASE_URL + banner.image.url")
          .banner-description {{banner.description}}
</template>

<script>
  import VueScrollTo from 'vue-scrollto'
  import { mapGetters } from 'vuex'

  export default {
    props: {
      contents: Array
    },

    data() {
      return {
        BASE_URL: process.env.BASE_URL,
        isBrowser: null,
        isSticky: false,
        stickyPosition: null,
        headerBottomPosition: null,
        footerHeight: null,
        contentIndex: null,
        contentsPositions: null,

        scrollToOffset: 0,
      }
    },

    mounted() {
      if (process.browser) {
        setTimeout(() => {
          this.scrollToOffset = window.innerWidth > 768 ? 68 : 45
          window.addEventListener('scroll', this.scrollHandler)
          this.headerBottomPosition = document.querySelector('.header').offsetHeight + 20
          this.footerTopPosition = document.querySelector('.interested-wrapper').getBoundingClientRect().top + pageYOffset - window.innerHeight
          this.stickyPosition = this.headerBottomPosition

          this.contentsPositions = this.contents.map((el) => Number(el.getBoundingClientRect().top) + pageYOffset - this.scrollToOffset)

          this.isBrowser = true
        }, 500)
      }
    },

    beforeDestroy() {
      window.removeEventListener('scroll', this.scrollHandler)
    },

    computed: {
      ...mapGetters({
        bannersLeft: 'articlePage/leftBanners'
      })
    },

    methods: {
      getClass(el, index) {
        return {
          'h1': el.tagName.toLowerCase() === 'h1',
          'h2': el.tagName.toLowerCase() === 'h2',
          'active': Number(index) === this.contentIndex
        }
      },

      scrollTo(node) {
        VueScrollTo.scrollTo(node, 1000, {
          easing: 'easeInOutQuart',
          offset: -this.scrollToOffset
        })
      },

      scrollHandler() {
        // sticky
        if (pageYOffset >= this.headerBottomPosition - 20 && pageYOffset <= this.footerTopPosition) {
          this.isSticky = true
          this.stickyPosition = this.headerBottomPosition
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
          } else if (this.contentsPositions[0] - 10 > pageYOffset) {
            this.contentIndex = null
          }
        })

      }
    }
  }
</script>

<style lang="scss">

.ul-content__wrapper {
  border: 1px solid #DBDBDB;
  border-radius: 6px;
  padding: 10px 17px 14px 20px;
}
.contents {
  position: absolute;
  z-index: 13;
  left: 55px;
  z-index: 2;
  // overflow: auto;

  width: 320px;
  min-height: 360px;
  max-height: 600px;
  
  background: #ffffff;

  

  transition: all 0.2s linear;
}

.contents.stycky {
  position: fixed;
  top: 20px;
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

.contents li.h1 {
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 14px;
}

.contents li.h2 {
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 6px;
  font-size: 14px;
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

.contents li.h1.active {
  padding-left: 10px;
}

.contents li.h2.active {
  padding-left: 12px;
}


.banner-inText__wrapper {
  width: 100%;
  position: relative;
}

.banner-intext__img {
 width: 100%;
 border-radius: 4px
}

.banner-inText__description {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  color: #FFFFFF;
}

.banners-wrapper__left {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  // min-height: 260px;
  
  
}



.banner-wrapper {
  position: relative;
  margin-top: 20px;
  
}
img.banner-img {
  width: 100%;
  border-radius: 4px;
}

.banner-description {
  max-width: 248px;
  position: absolute;
  bottom: 10px;
  left: 16px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  color: #FFFFFF;
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

  .contents li.h1 {
    font-size: 16px;
  }

  .contents li.h2 {
    font-size: 14px;
  }
}
</style>
