<template lang="pug">
  div
    .ad(v-if="type === 'google'")
      google-ad(adSlot="2334561718" :style="getGoogleStyles()")
    .ad(v-if="type === 'custom'")
      custom-ad(:position="position")
</template>

<script>
  import GoogleAd from '~/components/ads/GoogleAd'
  import CustomAd from '~/components/ads/CustomAd'

  export default {
    props: {
      type: {
        type: String,
        validator: (value) => {
          return ['google', 'custom'].indexOf(value) !== -1
        }
      },
      position: {
        type: String,
        validator: (value) => {
          return ['adSidebar', 'adMiddle', 'adTop', 'adBottom'].indexOf(value) !== -1
        }
      }
    },

    components: {
      GoogleAd,
      CustomAd
    },

    data() {
      return {
        googleDesktopStyles: {
          adSidebar: "display: block; height: 600px; width: 300px",
          adMiddle: "display: block; height: 250px; width: 300px",
          adTop:  "display: block; height: 90px; width: 728px",
          adBottom: "display: block; height: 90px; width: 728px",
        },
        googleMobileStyles: {
          adSidebar: "display: block; height: 250px; width: 300px",
          adMiddle: "display: block; height: 250px; width: 300px",
          adTop:  "display: block; height: 250px; width: 300px",
          adBottom: "display: block; height: 250px; width: 300px",
        }
      }
    },

    methods: {

      getGoogleStyles() {
        if (process.browser) {
          const width =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth

          if (width >= 768) {
            return this.googleDesktopStyles[this.position]
            } else {
            return this.googleMobileStyles[this.position]
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
