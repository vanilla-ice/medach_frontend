<template lang="pug">
  .wrapper
    the-header
    nuxt
</template>

<script>
import 'normalize.css'
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">
@font-face {
	font-family: 'Montserrat';
	src: url('~/assets/fonts/Montserrat-Bold.eot');
	src: url('~/assets/fonts/Montserrat-Bold.eot?#iefix') format('embedded-opentype'),
		url('~/assets/fonts/Montserrat-Bold.woff') format('woff'),
		url('~/assets/fonts/Montserrat-Bold.ttf') format('truetype');
	font-weight: 700;
	font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
	src: url('~/assets/fonts/Montserrat-Medium.eot');
	src: url('~/assets/fonts/Montserrat-Medium.eot?#iefix') format('embedded-opentype'),
		url('~/assets/fonts/Montserrat-Medium.woff') format('woff'),
		url('~/assets/fonts/Montserrat-Medium.ttf') format('truetype');
	font-weight: 500;
	font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
	src: url('~/assets/fonts/Montserrat-Regular.eot');
	src: url('~/assets/fonts/Montserrat-Regular.eot?#iefix') format('embedded-opentype'),
		url('~/assets/fonts/Montserrat-Regular.woff') format('woff'),
		url('~/assets/fonts/Montserrat-Regular.ttf') format('truetype');
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
	src: url('~/assets/fonts/Montserrat-SemiBold.eot');
	src: url('~/assets/fonts/Montserrat-SemiBold.eot?#iefix') format('embedded-opentype'),
		url('~/assets/fonts/Montserrat-SemiBold.woff') format('woff'),
		url('~/assets/fonts/Montserrat-SemiBold.ttf') format('truetype');
	font-weight: 600;
	font-style: normal;
}

html {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-weight: 400;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  width: 100%;
  max-width: 1420px;
  padding: 0 30px;
  margin: 0 auto;
}
</style>

