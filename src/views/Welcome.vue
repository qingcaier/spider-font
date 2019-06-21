<template>
  <div class="hello">
    <img :src="imgUrl">
    <h1>
      <router-link to="/home">{{ msg }}</router-link>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      imgUrl: require('../assets/logo.png'),
      msg: 'Welcome!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
