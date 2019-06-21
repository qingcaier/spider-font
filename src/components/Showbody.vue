<template>
  <div class="bodyShow">
    <router-view/>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.bodyShow {
  width: 100%;
  height: 600px;
  background: url('../assets/allbg.jpg') repeat fixed center;
  // background-image: url('../assets/allbg.jpg');
  // background-size: 100% 100%;
  // display: flex;
  // justify-content: center;
  padding-top: 3%;
  overflow: auto;
}
</style>
