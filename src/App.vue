<template>
  <div id="app">
    <div class="blur">
    </div>
    <transition name="fade" mode="out-in"
    v-if="!splash">
      <router-view/>
    </transition>


  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return{
      splash: true,
    }
  },
  mounted() {
    this.hideSplash();
  },
  methods:{
    hideSplash(){
      setTimeout(()=> this.splash = false, 1300 )
    }
  },
}
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
  cursor: var(--cursor);
  background: var(--bgimg) no-repeat center;
  background-size: cover;
}

:root {
  --color-text: #ffffff;
  --background: #1f2024;
  --cursor: url('./assets/images/cursor_harry.png'), auto;
  //--bgimg: url('./assets/images/hogwarts-background.jpg');
  --bgimg: url('./assets/images/bg_hogwarts.jpg');
}





.fade-enter-active {
  transition: all .6s, opacity .8s ease-in;
}

.fade-leave-active {
  transition: all .6s, opacity .8s ease-out;
}

.fade-enter {
  opacity: .05;
  filter: blur(10px);

}

.fade-leave-to {
  opacity: .05;
  filter: blur(10px);
}


</style>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  position: relative;
  background-color: var(--background);
  animation: blur 1.7s ease;
}
.blur {
  background: var(--bgimg) no-repeat center;
  background-size: cover;
  filter: blur(6px);
  width: 100%;
  opacity: .35;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  animation: splashStart 1.7s ease;
}
@keyframes splashStart {
  0% {
    opacity: 0;
    filter: blur(0);
  }
  50% {
    opacity: .17;
    filter: blur(3px);

  }
  100% {
    opacity: .35;
    filter: blur(6px);
  }
}
@keyframes blur {
  0% {
    opacity: 0;
    filter: blur(6px);
  }
  50% {
    opacity: .5;
    filter: blur(3px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
</style>
