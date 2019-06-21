<template>
  <div class="pageMain">
    <show-board
      :index="pageIndex"
      :specialLogo="logo"
      :introduction="introductionMsg"
      :anchorClass="qieClass"
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
      pageIndex: 5,
      logo: 'qie',
      introductionMsg: introduction.qie,

      qieClass: liveClasses.qie
    }
  }
}
</script>

<style lang="stylus" src="../css/pageMain.styl"></style>
