<template>
  <div class="app-title py-5">
    <v-container>
      <h1 class="mb-5 text-capitalize">{{ title }}</h1>
      <v-divider class="mb-5"></v-divider>
      <p class="mb-0">{{ $route.meta.description }}</p>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AppTitle",
  computed: {
    title() {
      return this.$route.params.generation
        ? `${this.$route.params.generation} - ${this.$route.name}`
        : `${this.$route.name}`;
    }
  }
};
</script>
