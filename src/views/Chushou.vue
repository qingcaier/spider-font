<template>
  <div class="pageMain">
    <show-board
      :index="pageIndex"
      :specialLogo="logo"
      :introduction="introductionMsg"
      :anchorClass="chushouClass"
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
      pageIndex: 6,
      logo: 'chushou',
      introductionMsg: introduction.chushou,

      chushouClass: liveClasses.chushou
    }
  }
}
</script>

<style lang="stylus" src="../css/pageMain.styl"></style>
