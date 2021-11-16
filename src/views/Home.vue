<template>
  <div class="home">
    <Aside/>
    <div class="home__characters">
      <AllCharacters/>
    </div>


  </div>
</template>

<script>
import Aside from '@/components/Aside.vue';
import AllCharacters from '@/components/AllCharacters.vue';

export default {
  name: 'Home',
  components: {
    Aside,
    AllCharacters
  }
}
</script>
<style lang="scss">
.home {
  position: relative;
  z-index: 1;
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
</style>
