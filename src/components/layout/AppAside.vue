<template>
  <v-navigation-drawer
    class="app-aside"
    :value="getAside"
    fixed
    top
    temporary
    @input="input"
  >
    <v-list nav dense>
      <v-list-item
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        active-class="primary--text text--accent-4"
      >
        <v-list-item-title>{{ link.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Aside",
  data: () => ({
    show: false,
    links: [
      { name: "Home", to: "/" },
      { name: "Generations", to: "/generations" },
      { name: "Pokemons", to: "/pokemons" }
    ]
  }),
  created() {
    this.show = this.getAside;
  },
  computed: {
    ...mapGetters(["getAside"])
  },
  methods: {
    ...mapMutations(["toogleAside"]),
    input(value) {
      if (!value) this.toogleAside(!value);
    }
  }
};
</script>
