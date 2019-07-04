<!--主题背景组件-->
<template>
  <div class="bodyShow">
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
// 导航栏下面的主体背景
.bodyShow {
  width: 100%;
  height: 100vh;
  background: url('../assets/allbg.jpg') no-repeat fixed center;
  // background-image: url('../assets/allbg.jpg');
  background-size: 100% 100%;
  // display: flex;
  // justify-content: center;
  padding-top: 3%;
  overflow: auto;
  margin: auto;
}
</style>
