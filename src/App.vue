<template>
  <div id="app">
    <div class="blur"></div>
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

:root {
  --color-text: #ffffff;
  --background: #1f2024;
  --cursor: url('./assets/images/cursor_harry.png'), auto;
  --bgimg: url('./assets/images/hogwarts-background.jpg')
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-color: var(--background);
  cursor: var(--cursor);
  position: relative;


  //background-: blur(10px);
}

.blur {
  backdrop-filter: blur(8px); // This be the blur
  background-image: var(--bgimg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  opacity: .1;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

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
