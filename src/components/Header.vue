<template>

  <div class="header">
    <div class="header__nav">
    </div>


    <div class="header__weather">
      Здесь будет погода
    </div>
  </div>


</template>
<script>


export default {
  name: 'Header',
  components:{
  },
  data() {
    return {

    }
  },
  methods: {},

  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/styles/vars';

.header {
  @extend %font;
  display: flex;
  min-height: 90px;
  max-width: 100%;
  padding: 1%;
  align-items: center;
  justify-content: space-between;
  color: var(--color-text);

  &__nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  &__btn {
    color: var(--color-text);
  }

  &__weather {
    font-size: 28px;
    flex-grow: 0;
    flex-shrink: 0;
    margin-left: 28px;
  }
}


</style>