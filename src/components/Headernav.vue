<!-- 头部导航栏组件，负责路由的跳转 -->

<template>
  <div class="layout header">
    <div class="layout navigateBar">
      <img class="logo" :src="logo" />
      <div class="layout subNav">
        <div
          style="cursor:pointer;"
          :class="(pageIndex === item.id ? 'selectedPage':'page') + ' ' + item.navigateTo"
          v-for="(item,idx) in navigatePages"
          :key="idx"
          @click="navigate(item)"
        >{{item.title}}</div>
      </div>
      <div class="layout search">
        <Input
          v-show="showSearch"
          type="text"
          search
          placeholder="请输入关键词"
          v-model="value"
          size="large"
          style="width:100%"
          @on-search="sendKeyword"
        />
      </div>
    </div>
    <div class="layout navigateList" v-show="isShow">
      <div
        style="cursor:pointer;"
        :class="(pageIndex === item.id ? 'selectedItem':'item') + ' ' + item.route"
        v-for="(item, idx) in websites"
        :key="idx"
        @click="router(item)"
      >
        <div>{{item.name}}</div>
        <svg-icon :icon-class="item.route"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../js/bus'
import { websites, navigatePages } from '../js/config'
// import { constants } from 'crypto'
export default {
  data() {
    return {
      navigatePages: navigatePages, // 第一导航栏
      websites: websites, // 第二导航栏

      pageIndex: '', // 当前路由对应的页面

      value: '', // 搜索字段
      showSearch: '', // 是否显示搜索栏
      isShow: '', // 是否显示直播平台导航栏

      logo: require('@/assets/logo.png')
    }
  },
  methods: {
    // 第一导航栏跳转
    navigate(item) {
      this.$router.push('/' + item.navigateTo)
      this.pageIndex = item.id

      // console.log(this.pageIndex)
      // console.log('----------')
      // this.$emit('getPageIndex', item.id)
    },

    // 第二导航栏跳转
    router(item) {
      this.$router.push('/home/' + item.route)
      this.pageIndex = item.id

      // this.$emit('getPageIndex', item.id)
    },

    // 根据路由变化更新对应页面
    updateRouter: function() {
      let pagePath = this.$route.path
      switch (pagePath) {
        case '/home':
          this.pageIndex = 0
          this.showSearch = false
          this.isShow = true
          break
        case '/aboutus':
          this.pageIndex = 1
          this.showSearch = false
          this.isShow = false
          break
        case '/help':
          this.pageIndex = 2
          this.showSearch = false
          this.isShow = false
          break
        case '/home/douyu':
          this.pageIndex = 3
          this.showSearch = true
          this.isShow = true
          break
        case '/home/huya':
          this.pageIndex = 4
          this.showSearch = true
          this.isShow = true
          break
        case '/home/qie':
          this.pageIndex = 5
          this.showSearch = true
          this.isShow = true
          break
        case '/home/chushou':
          this.pageIndex = 6
          this.showSearch = true
          this.isShow = true
          break
        case '/home/yy':
          this.pageIndex = 7
          this.showSearch = true
          this.isShow = true
          break
      }
    },
    sendKeyword: function() {
      bus.$emit('getKeyword', this.value)
    }

    // isShowSearch:function(){
    //   switch(this.pageIndex){
    //     case (0||1||2):
    //       this.showSearch = false
    //       break
    //     case (3||4||5||6||7):
    //       this.showSearch = true
    //       break
    //   }
    // }
  },
  watch: {
    // 监听路由变化并更新对应所在页面(浏览器前进或后退)
    $route: function(to, from) {
      console.log('kkkkkkkkkkkkkkkkkkkkkkk')
      console.log(to.path)

      this.updateRouter()

      // console.log(this.pageIndex)
      // this.isShowSearch()
    }
  },

  beforeMount() {
    // 刷新页面时根据路由刷新

    // console.log('bbbbbbbbbbbbbb')
    // console.log(this.$route.path)
    // console.log(this)

    this.updateRouter()

    // console.log('-----------------')
    // console.log(this.pageIndex)
    // this.isShowSearch()
  }
}
</script>

<style lang='stylus' src="../css/header.styl" scoped></style>































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































// @import '../icon/iconfont.css';































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































</style>
