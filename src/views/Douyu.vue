<!--斗鱼直播平台-->
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
  // 引入ShowBoard子组件
  components: {
    ShowBoard
  },
  data() {
    return {
      pageIndex: 3, //平台页面
      logo: 'douyu', // logo图标
      introductionMsg: introduction.douyu, // 介绍信息

      douyuClass: liveClasses.douyu // 部分展示的直播类型
    }
  }
}
</script>

<style lang="stylus" src="../css/pageMain.styl" scoped></style>

