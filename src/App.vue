<template>
  <div id="app">
    <Header />
    <div class="content">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './layouts/Header';

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
}

#app {
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  height: 60px;
}

.content {
  height: calc(100vh - 60px);
  overflow-y: auto;
  padding: 20px 40px;
}
</style>
