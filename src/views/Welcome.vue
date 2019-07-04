<template>
  <div class="hello">
    <div class="welcomeMain">
      <div class="ghost">
        <div class="ghostBody"></div>
        <div class="ghostEye left"></div>
        <div class="ghostEye right"></div>
        <div class="ghostMouth"></div>
        <div class="ghostWave"></div>
        <div class="shadow"></div>
      </div>
      <div class="welcome">
        <router-link to="/home">{{ msg }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      msg: 'Welcome!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" src="../css/welcome.styl" scoped></style>
