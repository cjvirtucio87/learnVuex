<template>
  <div id="app">
    <img src="./assets/logo.png">
    <post-list></post-list>
    <!-- <hello></hello> -->
  </div>
</template>

<script>
import Hello from './components/Hello';
import PostList from './components/posts/post_list';

export default {
  name: 'app',
  components: {
    Hello,
    PostList,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
