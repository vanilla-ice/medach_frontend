<template lang="pug">
  .popup
    .overlay(@click="popupVisible")
    .content
      .close(@click="popupVisible")
      mistake(v-if="type === 'mistake'" :text="text")


</template>

<script>
  import Mistake from '~/components/popups/Mistake'
  export default {
    components: {
      Mistake
    },

    props: {
      type: {
        type: String,
        validator: (value) => {
          return ['mistake'].indexOf(value) !== -1
        }
      },
      text: String,
      popupVisible: Function,
    }
  }
</script>

<style scoped lang="scss">
  .popup {
    position: fixed;
    z-index: 20;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: 100%;
  }

  .overlay {
    position: fixed;
    z-index: 21;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: #000;
    opacity: .5;
  }

  .content {
    position: relative;
    z-index: 22;
    display: flex;
    flex-flow: column nowrap;
    max-width: 550px;
    width: 100%;
    min-height: 200px;
    padding: 16px;
    margin: 30px auto;

    background: #ffffff;
    border-radius: 4px;
  }

  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 25px;
    height: 25px;

    cursor: pointer;

    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;

      display: block;
      width: 100%;
      height: 2px;
      background: #7198BA;
    }

     &::after {
       transform: translate(-50%, -50%) rotate(45deg)
     }

     &::before {
       transform: translate(-50%, -50%) rotate(-45deg)
     }
  }
</style>
