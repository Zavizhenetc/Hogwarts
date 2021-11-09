<template>
  <ul class="nav">
    <li class="nav__item"
        v-for="item in navList" :key="item.id"
    >
      <router-link :to="{path:item.path}" class="nav__btn">
        <p class="nav__item-title">{{ item.title }} </p>
        <img class="nav__item-logo"
             v-if="item.img != null" :src="`${item.img}`"
             :alt="`${item.title}-logo`"
        >
      </router-link>
    </li>

  </ul>
</template>
<script>

export default {
  name: 'NavList',
  data() {
    return {}
  },
  computed: {
    navList() {
      return this.$store.getters.GET_NAV_LIST;
    },
  },
  methods: {},

  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/styles/vars';

.nav {

  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  padding: 0;
  justify-content: space-between;
  color: var(--color-text);
  list-style: none;


  &__btn {
    color: var(--color-text);
  }

  &__item {

  }

  &__item-title {
    @extend %font;
    font-size: 32px;
    letter-spacing: 2px;
    text-align: left;
    margin-right: 12px;
  }

  &__item a {
    text-decoration: none;
    display: flex;
    width: 100%;
  }

  &__item-logo {
    max-width: 38px;
    width: 100%;
    object-fit: contain;

  }


}


</style>