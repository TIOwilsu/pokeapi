<template>
  <v-footer class="mt-5" padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Pokeapi</strong>
    </v-col>
  </v-footer>
</template>
<script>
export default {
  name: "AppFooter"
};
</script>
