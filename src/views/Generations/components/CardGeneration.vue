<template>
  <v-card>
    <v-card-title v-if="name" class="text-h5 text-capitalize">
      {{ name }}
    </v-card-title>
    <v-card-text>
      <p>
        This generation happen in
        <strong class="text-capitalize">{{ region.name }}</strong> region.
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="primary" @click="to('pokemons')">
        {{ pokemons.length }} Pokemon(s)</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "CardGeneration",
  data: () => ({
    show: false
  }),
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    name() {
      const [first, last] = this.data.name.split("-");
      return `${first} ${last.toUpperCase()}`;
    },
    region() {
      return this.data.main_region;
    },
    pokemons() {
      return this.data.pokemon_species;
    }
  },
  methods: {
    to(type) {
      this.$router.push({
        name: type,
        params: {
          [type]: this[type],
          generation: this.name
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.v-card__title::last-word {
  text-transform: uppercase;
}
</style>
