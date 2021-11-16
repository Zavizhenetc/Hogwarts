<template>
  <div class="characters">
    <div class="characters__item"
         v-for="item in allCharacters"
         :key="item.id"
    @click="showDescription(item)">
      <div class="characters__img-container">
        <img class="characters__img" src="../assets/images/404.png" alt="нет изображения" v-if="!item.image">
        <img class="characters__img" :src="`${item.image}`" :alt="`${item.name}`" v-else>
      </div>
      <div class="characters__item-descriptions">
        <div class="characters__item-house" v-if="item.house">{{item.house}}</div>
        <div class="characters__item-name">{{ item.name }}</div>
        <div class="characters__item-alternative-name" v-for="item in item.alternate_names" :key="item.id"> <span v-if="item">{{ item}}</span></div>
        <div class="characters__item-gender" v-if="item.gender"><span>Gender: </span>{{item.gender}}</div>
      </div>

    </div>
  </div>
</template>
<script>

export default {
  name: 'AllCharacters',
  data() {
    return {}
  },
  computed: {
    allCharacters() {
      return this.$store.getters.GET_HARRY_CHARACTERS;
    }
  },
  created() {
    this.$store.dispatch('fetchHarry');
  },
  methods: {
    showDescription(item){
      console.log(item)
    }
  },

  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/styles/vars';

.characters {
  padding: 60px 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 18px;
  grid-row-gap: 40px;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 280px;
    width: 100%;
    height: 340px;
    border-radius: 3%;

    &:hover{
      .characters__img-container {
        transition: all .8s ease;
        box-shadow: 0px 0px 13px 0px rgb(216 222 229);
      }
      .characters__item-descriptions{
        transition: all .8s ease;
        opacity: 1;
      }
    }
  }

  &__img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    object-fit: contain;
    border-radius: 2%;

  }

  &__img-container {
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    transition: all .8s ease;
    box-shadow: 0px 0px 13px 0px rgb(216 222 229 / 31%);
  }
  &__item-descriptions{
    display: flex;
    flex-direction: column;
    color: var(--color-text);
    opacity: .2;
    transition: all .8s ease;

  }
}


</style>