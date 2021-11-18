<template>
  <div class="char-description">
    <div class="overlay" @click="hideDescription"></div>
    <div class="char-description__item">
      <div class="blur"></div>
      <img class="char-description__close-btn" src="../assets/images/close_btn.svg" alt="закрыть"
           @click="hideDescription">
      <div class=" char-description__img-container">
        <img class="char-description__img" src="../assets/images/404.png" alt="нет изображения"
             v-if="!description.image">
        <img class="char-description__img" :src="`${description.image}`" :alt="`${description.name}`" v-else>
      </div>
      <div class="char-description__item-descriptions">
        <div class="description description__wizard" v-if="description.wizard"><span
            class="description__title">Wizard</span></div>
        <div class="description description__hogwarts-staff" v-if="description.hogwartsStaff">
          <span class="description__title">Hogwarts Staff</span></div>
        <div class="description description__hogwarts-student" v-if="description.hogwartsStudent">
          <span class="description__title">Hogwarts Student</span></div>
        <div class="description description__name" v-if="description.name"><span class="description__title">Name:</span>{{
            description.name
          }}
        </div>
        <div class="description description__species" v-if="description.species"><span class="description__title">Species:</span>{{
            description.species
          }}
        </div>
        <div class="description description__house" v-if="description.house"><span
            class="description__title">Faculty:</span>{{ description.house }}
        </div>
        <div class="description description__gender" v-if="description.gender">
          <span class="description__title">Gender: </span>{{ description.gender }}
        </div>
        <div class="description description__birth" v-if="description.dateOfBirth">
          <span class="description__title">Date of birth: </span>{{ description.dateOfBirth }}
        </div>
        <div class="description description__eye-color" v-if="description.eyeColour">
          <span class="description__title">Eye colour: </span>{{ description.eyeColour }}
        </div>
        <div class="description description__hair-color" v-if="description.hairColour">
          <span class="description__title">Hair colour: </span>{{ description.hairColour }}
        </div>
        <div class="description description__ancestry" v-if="description.ancestry">
          <span class="description__title">Ancestry: </span>{{ description.ancestry }}
        </div>
        <div class="description description__patronus" v-if="description.patronus">
          <span class="description__title">Patronus: </span>{{ description.patronus }}
        </div>
        <div class="description description__wand-core" v-if="description.wand.core">
          <span class="description__title">Wand core: </span>{{ description.wand.core }}
        </div>
        <div class="description description__wand-length" v-if="description.wand.length">
          <span class="description__title">Wand length: </span>{{ description.wand.length }}
        </div>
        <div class="description description__wand-wood" v-if="description.wand.wood">
          <span class="description__title">Wand wood: </span>{{ description.wand.wood }}
        </div>
        <div class="description description__alternative-name" v-for="item in description.alternate_names"
             :key="item.id"><span
            v-if="item" class="description__title">Alternative names: </span>{{ item }}
        </div>
        <div class="description description__alternative-name" v-for="item in description.alternate_actors"
             :key="item.id"><span
            v-if="item" class="description__title">Alternative actors: </span>{{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'CharDescription',
  data() {
    return {}
  },
  props: {
    description: {
      type: Object,
      required: true,
    }

  },
  computed: {},
  created() {
    console.log(this.description)
  },
  methods: {
    hideDescription() {
      this.$store.dispatch('showCharDescription', false)
    },
  },

  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/styles/vars';

.char-description {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  animation: blur 1.5s ease ;

  &__close-btn {
    object-fit: contain;
    max-width: 28px;
    max-height: 28px;
    position: absolute;
    right: 18px;
    top: 18px;
    transition: all .6s ease;

    &:hover {
      transition: all .6s ease;
      transform: scale3d(1.2, 1.2, 2) rotate(360deg);
    }

  }
  &__item {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: blur 1.5s ease;

    border-radius: 2%;
    box-shadow: 0px 0px 18px 4px rgb(0 0 0 / 95%);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3%;
  }

  &__img-container {
    max-width: 160px;
    margin-right: 38px;
  }

  &__img {
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0px 0px 13px 0px rgb(216 222 229 / 31%);
  }

  &__item-descriptions {
    text-align: center;
  }
}

.description {
  font-family: Moyenage, 'sans-serif';
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 1.5px;
  color: var(--color-text);
  opacity: .7;
  margin-bottom: 8px;
  &:last-child{
    margin-bottom: 0;
  }
  &__title{
    opacity: 1;

  }
}

.blur {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: var(--background);
  opacity: .85;

}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-text);
  opacity: .5;
  filter: blur(50px);
}

@keyframes blur {
  0% {
    opacity: .05;
    filter: blur(40px);
    transform: scale3d(.001, .001, 0);
  }
  50% {
    opacity: .5;
    filter: blur(20px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}

</style>