<template>
  <div id="app">
    <Header />
    <!-- <div style='margin-top: 70px'> -->
    <router-view />
    <!-- </div> -->
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
