<template>


    <div class="aside">
      <div class="aside__nav">
        <NavList/>

      </div>
    </div>
<!--    <div class="aside_mob">-->
<!--      <div class="overlay" @click="hideDescription"></div>-->
<!--      <div class="aside__btn"></div>-->
<!--      <div class="aside__nav">-->
<!--        <NavList/>-->

<!--      </div>-->
<!--    </div>-->



</template>
<script>
import NavList from "@/components/NavList.vue"

export default {
  name: 'Aside',
  components: {
    NavList,
  },
  data() {
    return {}
  },

  methods: {},
  computed: {},

  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/styles/vars';

.aside {
  @extend %font;
  display: flex;
  max-width: 300px;
  width: 100%;
  height: 100vh;
  padding: 0 28px;
  align-items: center;
  justify-content: space-between;
  color: var(--color-text);
  animation: blur 3s ease;

  &__nav {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  &_mob {
    display: none;
  }

}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-text);
  opacity: .56;
  filter: blur(50px);
}


@keyframes blur {
  0% {
    opacity: .01;
    filter: blur(30px);
    transform: scale3d(0, 0, 0);
  }
  50% {
    opacity: .5;
    filter: blur(5px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}


@media screen and (max-width: 1024px) {
  .asides {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
  }
  .aside {
    //display: none;
    position: fixed;
    top: 0;
    max-width: 100%;
    height: 82px;
    &_mob {
      display: initial;
      border-radius: 2%;
      box-shadow: 0px 0px 18px 4px rgb(0 0 0 / 95%);
      animation: blur 1.5s ease;
    }
  }
}
</style>