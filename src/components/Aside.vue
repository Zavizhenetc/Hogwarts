<template>

  <div class="aside">
    <div class="aside__nav">
      <NavList/>
      <div v-for="item in allCharacters  " :key="item.id">{{item.actor}}</div>
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
  computed: {
    allCharacters() {
      return this.$store.getters.GET_HARRY_CHARACTERS;
    }
  },
  created() {
    this.$store.dispatch('fetchHarry');
  },
  mounted() {
    console.log(this.allCharacters)
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
  padding: 0 2%;
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