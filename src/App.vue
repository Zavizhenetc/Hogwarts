<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {

  }
}
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-color: var(--background);
  cursor: var(--cursor);
}

:root {
  --color-text: #ffffff;
  --background: #1F2123;
  --cursor: url('./assets/images/cursor_harry.png'), auto;
}

.fade-enter-active {
  transition: transform .6s, opacity .8s ease-in;
}

.fade-leave-active {
  transition: transform .6s, opacity .8s ease-out;
}

.fade-enter {
  opacity: .05;
  transform: translate(100%)
}

.fade-leave-to {
  opacity: .05;
  transform: translate(-100%)
}
</style>
