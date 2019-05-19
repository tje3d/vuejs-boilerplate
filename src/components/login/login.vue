<template lang="pug">
  .container test
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  computed: {
    ...mapState(["auth"])
  },

  data() {
    return {
      name: "Dax"
    };
  },

  methods: {
    increment() {
      this.$store.commit("increment");
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  color: blue;
}
</style>
