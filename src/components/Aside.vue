<template>

  <div class="aside">
    <div class="aside__nav">
      <NavList/>

    </div>

  </div>


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

}

@keyframes blur {
  0% {
    opacity: .01;
    filter: blur(30px);
    transform: scale3d(0, 0, 0) ;
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

</style>