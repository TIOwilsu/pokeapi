<template>
  <v-container class="generations">
    <v-row v-if="loaded">
      <v-col
        cols="12"
        sm="6"
        lg="4"
        v-for="generation in generations"
        :key="generation.id"
      >
        <CardGeneration :data="generation" />
      </v-col>
    </v-row>
    <AppGroupSkeleton v-bind="propsGroupSkeleton" v-else />
  </v-container>
</template>
<script>
import AppGroupSkeleton from "@/components/ui/AppGroupSkeleton";
import CardGeneration from "./components/CardGeneration";
import { getGenerations, getGeneration } from "@/services/games";
import { orderArray } from "@/utils";

export default {
  name: "Generations",
  components: {
    AppGroupSkeleton,
    CardGeneration
  },
  data: () => ({
    generations: [],
    loaded: false,
    limit: 10,
    offset: 0,
    propsGroupSkeleton: {
      cols: {
        col: "12",
        sm: "6",
        lg: "4"
      },
      skeleton: {
        type: "card",
        height: "170"
      },
      items: 8
    }
  }),
  async created() {
    await this.fetchGenerations();
  },
  methods: {
    async fetchGenerations() {
      try {
        const { limit, offset } = this;
        const { results } = await getGenerations(offset, limit);
        results.map(async ({ name }) => await this.fetchGeneration(name));
      } catch (err) {
        console.log(err);
      } finally {
        this.loaded = true;
      }
    },
    async fetchGeneration(name) {
      try {
        const data = await getGeneration(name);
        const items = [...this.generations, data];
        this.generations = orderArray(items, "id");
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
