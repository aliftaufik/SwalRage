<template>
  <b-form inline class="mb-3">
    <b-form-group label="Your Name:" label-for="username">
      <b-input-group class="mx-3" prepend="@">
        <b-form-input
          prepend="@"
          id="username"
          v-model="username"
          required
          placeholder="abcdefg"
          @input="onInput"
        ></b-form-input>
      </b-input-group>
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  methods: {
    onInput() {
      this.$store.commit("SET_USERNAME", this.username);
    }
  }
};
</script>

<style>
</style>