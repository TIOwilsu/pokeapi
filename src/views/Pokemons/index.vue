<template>
  <v-container>
    <v-row v-if="loaded">
      <v-col
        cols="12"
        sm="4"
        md="3"
        lg="2"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
      >
        <CardPokemon :data="pokemon" />
      </v-col>
    </v-row>
    <AppGroupSkeleton v-bind="propsGroupSkeleton" v-else />
    <AppPagination
      v-show="loaded"
      class="mt-5"
      @change="changePagination"
      :length="pagination.length"
      :limit="pagination.limit"
    />
  </v-container>
</template>
<script>
import AppPagination from "@/components/ui/AppPagination";
import AppGroupSkeleton from "@/components/ui/AppGroupSkeleton";
import CardPokemon from "./components/CardPokemon";
import { getPokemons, getPokemon } from "@/services/pokemons";
import { orderArray } from "@/utils";
export default {
  name: "Pokemons",
  components: {
    AppPagination,
    AppGroupSkeleton,
    CardPokemon
  },
  data: () => ({
    loaded: false,
    results: [],
    pokemons: [],
    propsGroupSkeleton: {
      cols: {
        col: "12",
        sm: "4",
        md: "3",
        lg: "2"
      },
      skeleton: {
        type: "card"
      },
      items: 12
    },
    pagination: {
      length: 0,
      limit: 12,
      offset: 0
    }
  }),
  created() {
    this.fetchPokemons();
  },
  methods: {
    async fetchPokemons() {
      try {
        const {
          pagination: { offset, limit },
          $route: { params }
        } = this;

        this.pokemons = [];
        this.loaded = false;

        if (params.pokemons) {
          this.results = params.pokemons.reduce((pokemons, pokemon, index) => {
            const isLimit = index > offset && pokemons.length < limit;
            isLimit && pokemons.push(pokemon);
            return pokemons;
          }, []);

          this.pagination.length = Math.ceil(params.pokemons.length / limit);
        } else {
          const { count, results } = await getPokemons(offset, limit);
          this.results = results;
          this.pagination.length = Math.ceil(count / limit);
        }

        this.results.map(async ({ name }) => await this.fetchPokemon(name));
      } catch (err) {
        console.log(err);
      } finally {
        this.loaded = true;
      }
    },
    async fetchPokemon(name) {
      try {
        const data = await getPokemon(name);
        const items = [...this.pokemons, data];
        this.pokemons = orderArray(items, "id");
      } catch (err) {
        console.log(err);
      }
    },
    async changePagination(offset) {
      this.pagination.offset = offset;
      await this.fetchPokemons();
    }
  }
};
</script>
