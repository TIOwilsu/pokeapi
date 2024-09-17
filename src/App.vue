<template>
  <v-app>
    <Header />
    <Aside />
    <v-main>
      <AppTitle v-if="!isHome" />
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppTitle from "@/components/layout/AppTitle";
import Header from "@/components/layout/AppHeader";
import Aside from "@/components/layout/AppAside";
import AppFooter from "@/components/layout/AppFooter";

export default {
  name: "App",
  components: {
    AppTitle,
    Aside,
    AppFooter,
    Header
  },
  computed: {
    isHome() {
      return this.$route.name === "home";
    }
  }
};
</script>
