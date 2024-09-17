<template>
  <v-pagination
    v-model="page"
    :length="length"
    :total-visible="totalVisible"
  ></v-pagination>
</template>
<script>
export default {
  name: "AppPagination",
  props: {
    length: {
      type: [String, Number],
      default: 6
    },
    limit: {
      type: [String, Number],
      default: 10
    },
    totalVisible: {
      type: [String, Number],
      default: 5
    }
  },
  data() {
    return {
      page: 1,
      offset: 0
    };
  },
  watch: {
    page(value) {
      const page = value - 1;
      this.offset = page * this.limit;
      this.$emit("change", this.offset);
    }
  }
};
</script>
