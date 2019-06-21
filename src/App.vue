<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
war = #2c3e50;

* {
  padding: 0;
  margin: 0;
}

#app {
  // width: 1550px;
  // height: 2000px;
  // width: 100%;
  // height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: war;
  // overflow: auto;
}

#nav {
  // padding 30px
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
