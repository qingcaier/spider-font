<template>
  <div class="pageMain">
    <show-board
      :index="pageIndex"
      :specialLogo="logo"
      :introduction="introductionMsg"
      :anchorClass="huyaClass"
    ></show-board>
  </div>
</template>

<script>
import ShowBoard from '../components/Showboard.vue'
import { liveClasses, introduction } from '../js/config.js'
export default {
  components: {
    ShowBoard
  },
  data() {
    return {
      pageIndex: 4,
      logo: 'huya',
      introductionMsg: introduction.huya,

      huyaClass: liveClasses.huya
    }
  }
}
</script>

<style lang="stylus" src="../css/pageMain.styl"></style>