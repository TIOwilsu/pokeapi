<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/logos/pokeapi.png')"
          class="my-3"
          contain
          height="103"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to PokeApi</h1>

        <p class="subheading font-weight-regular">
          The RESTful Pokémon API,
          <br />Serving over <strong>60,000,000</strong> API calls each month!
        </p>
        <p class="subheading font-weight-regular">
          All the Pokémon data you'll ever need in one place, <br />easily
          accessible through a modern RESTful API.
        </p>
        <a
          href="https://pokeapi.co/docs/v2"
          class="subheading mx-3"
          target="_blank"
        >
          Check out the docs!
        </a>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">What is this?</h2>

        <p class="subheading font-weight-regular">
          This is a full RESTful API linked to an extensive<br />
          database detailing everything about the Pokémon main game series.
          <br />We've covered everything from Pokémon to Berry Flavors.
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Where do I start?</h2>

        <p class="subheading font-weight-regular">
          We have awesome
          <a
            href="https://pokeapi.co/docs/v2"
            class="subheading"
            target="_blank"
          >
            documentation
          </a>
          on how to use this API. <br />It takes minutes to get started.<br />
          This API will always be publicly available <br />and will never
          require any extensive setup process to consume.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
};
</script>
