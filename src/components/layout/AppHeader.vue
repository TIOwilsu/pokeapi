<template>
  <v-app-bar class="app-header" app color="primary" dark>
    <div class="d-flex align-center">
      <v-app-bar-nav-icon
        @click.stop="toogleAside(getAside)"
      ></v-app-bar-nav-icon>
      <v-img
        :src="require('@/assets/logos/pokeapi.png')"
        class="shrink ml-md-none mx-2"
        contain
        height="200"
        transition="scale-transition"
        alt="pokeapi"
        width="105"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn href="https://pokeapi.co/" target="_blank" text>
      <span class="mr-2">Api</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "AppHeader",
  computed: {
    ...mapGetters(["getAside"])
  },
  methods: {
    ...mapMutations(["toogleAside"])
  }
};
</script>
