<template>
  <v-card class="pt-4">
    <v-img class="mx-auto" :src="img" height="140" width="140"></v-img>
    <v-card-title class="text-capitalize text-center d-block" height="96">
      {{ name }}
    </v-card-title>
  </v-card>
</template>
<script>
export default {
  name: "CardPokemon",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    name() {
      return this.data.name;
    },
    img() {
      return this.data.sprites.front_default;
    }
  }
};
</script>
<style lang="scss" scoped>
.v-card__title {
  height: 96px;
}
</style>
