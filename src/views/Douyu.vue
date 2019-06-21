<template>
  <div class="pageMain">
    <show-board
      :index="pageIndex"
      :specialLogo="logo"
      :introduction="introductionMsg"
      :anchorClass="douyuClass"
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
      pageIndex: 3,
      logo: 'douyu',
      introductionMsg: introduction.douyu,

      douyuClass: liveClasses.douyu
    }
  }
}
</script>

<style lang="stylus" src="../css/pageMain.styl" scoped></style>

