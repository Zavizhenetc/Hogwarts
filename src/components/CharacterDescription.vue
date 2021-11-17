<template>
  <div class="char-description">
    <div class="overlay" @click="hideDescription"></div>
    <div class="char-description__item"
    >
      <div class="blur"></div>
      <div class="description"  ></div>
      <img class="char-description__close-btn" src="../assets/images/close_btn.svg" alt="закрыть"
           @click="hideDescription">
      <div class=" char-description__img-container">
        <img class="char-description__img" src="../assets/images/404.png" alt="нет изображения"
             v-if="!description.image">
        <img class="char-description__img" :src="`${description.image}`" :alt="`${description.name}`" v-else>
      </div>
      <div class="char-description__item-descriptions">
        <div class="description description__house" v-if="description.house">{{ description.house }}</div>
        <div class="description description__name">{{ description.name }}</div>
        <div class="description description__alternative-name" v-for="item in description.alternate_names"
             :key="item.id"><span
            v-if="item" class="description__title">{{ description }}</span></div>
        <div class="description description__gender" v-if="description.gender"><span
            class="description__title">Gender: </span>{{
            description.gender
          }}
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
  animation: blur 1.5s ease;

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
    max-width: calc(70% - 300px);
    width: 100%;
    border-radius: 2%;
    box-shadow:0px 0px 18px 4px rgb(0 0 0 / 95%);
    overflow: hidden;
  }
}
.blur{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: var(--background);
  opacity: .65;
}
.description{

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