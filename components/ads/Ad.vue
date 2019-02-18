<template lang="pug">
  .ad(v-if="type === 'google'")
     GoogleAd(adSlot="2334561718" :styles="getGoogleStyles()")
</template>

<script>
 import GoogleAd from '~/components/ads/GoogleAd'
import { switchCase, breakStatement } from 'babel-types';

  export default {
    props: {
      type: String,
      position: String
    },

    components: {
      GoogleAd
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
