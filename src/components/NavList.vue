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
  height: 80%;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  color: var(--color-text);
  list-style: none;


  &__btn {
    color: var(--color-text);
  }

  &__item {
    opacity: .2;
    transition: all .6s ease;
    transform: scale3d(.75, 2, 2.2);
    filter: blur(2px);

    &:hover {
      transition: all .6s ease;
      opacity: 1;
      filter: blur(0);
      transform: scale3d(1.3, 1, 2.2) translate(20%, 0) ;
    }
  }

  &__item-title {
    @extend %font;
    font-size: 28px;
    letter-spacing: 2px;
    text-align: left;
    margin: 0;
    margin-right: 12px;
  }

  &__item a {
    text-decoration: none;
    display: flex;
    width: 100%;
    height: auto;
    cursor: var(--cursor);

  }

  &__item-logo {
    max-width: 38px;
    width: 100%;
    object-fit: contain;

  }


}


</style>