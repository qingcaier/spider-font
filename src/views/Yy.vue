<template>
  <div class="pageMain">
    <show-board
      :index="pageIndex"
      :specialLogo="logo"
      :introduction="introductionMsg"
      :anchorClass="yyClass"
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
      pageIndex: 7,
      logo: 'yy',
      introductionMsg: introduction.yy,
      yyClass: liveClasses.yy
    }
  }
}
</script>

<style lang="stylus" src="../css/pageMain.styl"></style>
