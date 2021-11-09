<template>
  <div class="home">
    <Aside/>


  </div>
</template>

<script>
import Aside from  '@/components/Aside.vue'
export default {
  name: 'Home',
  components: {

    Aside
  }
}
</script>
<style>
.home{
  z-index: 1;
}
</style>
