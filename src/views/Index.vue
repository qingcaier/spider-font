<template>
  <div class="index">
    <header-nav></header-nav>

    <show-body></show-body>
  </div>
</template>

<script>
import HeaderNav from '../components/Headernav.vue'
import ShowBody from '../components/Showbody.vue'
export default {
  components: {
    HeaderNav,
    ShowBody
  },
  name: 'Help',
  data() {
    return {}
  }
  // methods: {
  //   getPageIndex: function(childValue) {
  //     this.pageIndex = childValue
  //   }
  // }
}
</script>

<style>
</style>
