<template>
  <div id="app" class="app">
    <div class="blur">
    </div>
    <Aside/>
    <div class="app__characters">
      <transition name="fade" mode="out-in"
                  v-if="!splash">
        <router-view/>
      </transition>
    </div>


  </div>
</template>

<script>
import Aside from '@/components/Aside.vue';

export default {
  name: 'app',
  components: {
    Aside,
  },
  data() {
    return {
      splash: true,
    }
  },
  mounted() {
    this.hideSplash();
  },
  methods: {
    hideSplash() {
      setTimeout(() => this.splash = false, 1300)
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
  --bgimg: url('./assets/images/bg_hogwarts.jpg');
}


.fade-enter-active {
  transition: all .6s ease-in;
}

.fade-leave-active {
  transition: all .6s ease-out;
}

.fade-enter {
  opacity: .08;
  filter: blur(40px);
  transform: translateY(50%) scale3d(.01, .01, 1);

}

.fade-leave {

}

.fade-leave-to {
  opacity: .08;
  filter: blur(40px);
  transform: translateY(-50%) scale3d(.01, .01, 1);
}

</style>
<style scoped lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  position: relative;
  background-color: var(--background);
  display: flex;

  &__characters {
    display: flex;
    max-width: calc(100% - 400px);
    width: 100%;
    max-height: 100vh;
    overflow: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      width: 0;
    }
  }

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
  animation: splashStart 1s ease;
}

@keyframes splashStart {
  0% {
    opacity: 0;
    filter: blur(0);
  }
  100% {
    opacity: .35;
    filter: blur(4px);
  }
}

@keyframes blur {
  0% {
    opacity: .08;
    filter: blur(40px);
    transform: scale3d(.01, .01, 1);
  }


  100% {
    opacity: 1;
    filter: blur(0);
  }
}
</style>
