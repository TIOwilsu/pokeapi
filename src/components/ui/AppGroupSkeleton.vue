<template>
  <v-sheet color="grey lighten-4" class="pa-5">
    <v-row>
      <v-col
        v-for="(item, index) in items"
        :cols="cols.col"
        :lg="cols.lg"
        :md="cols.md"
        :sm="cols.sm"
        :key="index"
      >
        <v-skeleton-loader
          :type="skeleton.type"
          :height="skeleton.height"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
export default {
  name: "AppCardSkeleton",
  props: {
    cols: {
      type: Object,
      required: true,
      default: () => ({
        col: "",
        xl: "",
        lg: "",
        md: "",
        sm: ""
      })
    },
    skeleton: {
      type: Object,
      required: true,
      default: () => ({
        height: "",
        type: ""
      })
    },
    items: {
      type: [Number, String],
      required: true
    }
  }
};
</script>
