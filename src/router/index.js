import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home")
  },
  {
    path: "/generations",
    name: "generations",
    meta: {
      description:
        "A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released."
    },
    component: () =>
      import(/* webpackChunkName: "generations" */ "@/views/Generations")
  },
  {
    path: "/pokemons",
    name: "pokemons",
    meta: {
      description:
        "Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings."
    },
    component: () =>
      import(/* webpackChunkName: "generations" */ "@/views/Pokemons")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
