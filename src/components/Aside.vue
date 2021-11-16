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
<style lang="scss">
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

  &__nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

}


</style>