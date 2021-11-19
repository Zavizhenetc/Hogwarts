<template>
  <div class="characters">
    <CharDescription :description="description"
                     v-if="descriptionState"/>
    <div class="characters__item"
         v-for="item in allCharacters"
         :key="item.id"
         @click="showDescription(item)">
      <div class="characters__img-container">
        <img class="characters__img" src="../assets/images/404.png" alt="нет изображения" v-if="!item.image">
        <img class="characters__img" :src="`${item.image}`" :alt="`${item.name}`" v-else>
      </div>
      <div class="characters__item-descriptions">
        <div class="description description__house" v-if="item.house"><span class="description__title">Faculty:</span>
          {{ item.house }}
        </div>
        <div class="description description__name"><span class="description__title">Name: </span>{{ item.name }}</div>
        <div class="description description__gender" v-if="item.gender"><span class="description__title">Gender: </span>{{
            item.gender
          }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CharDescription from "@/components/CharacterDescription.vue";
export default {
  name: 'AllCharacters',
  components: {CharDescription},
  data() {
    return {
      description: {},
    }
  },
  computed: {
    allCharacters() {
      return this.$store.getters.GET_HARRY_CHARACTERS;
    },
    descriptionState() {
      return this.$store.getters.SHOW_DESCRIPTION;
    },
  },
  created() {
    this.$store.dispatch('fetchHarry' );
  },
  methods: {
    showDescription(item) {
      this.description = item;
      this.$store.dispatch('showCharDescription', true);
    }
  },

  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/styles/vars';

.characters {
  //position: relative;
  padding: 60px 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 18px;
  grid-row-gap: 40px;
  animation: blur 3s ease;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 280px;
    width: 100%;
    height: 340px;
    border-radius: 3%;


    &:hover {
      .characters__img-container {
        transition: all .8s ease;
        box-shadow: 0px 0px 13px 0px rgb(216 222 229);
      }

      .characters__item-descriptions {
        transition: all .8s ease;
        opacity: 1;
        transform: scale3d(1.1, 1.2, 1);
        filter: blur(0);

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
    margin-bottom: 30px;

  }

  &__item-descriptions {
    font-family: Moyenage, 'sans-serif';
    letter-spacing: 1.5px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: var(--color-text);
    opacity: .2;
    transition: all .8s ease;
    filter: blur(2px);
  }

  .description {
    margin-bottom: 8px;

    &__title {
      text-transform: uppercase;
    }
  }
}
@keyframes blur {
  0% {
    opacity: .05;
    filter: blur(40px);
    //transform: scale3d(.01, .01, 1);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}


</style>