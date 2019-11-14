<template>
  <b-form inline @submit.prevent="onSubmitRoom">
    <b-form-group label="Create New Room:" label-for="room_name">
      <b-input-group class="mx-3">
        <b-form-input id="room_name" v-model="room_name" required placeholder="swalisdangerous"></b-form-input>
      </b-input-group>
    </b-form-group>

    <b-button type="submit" variant="primary">Submit</b-button>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      room_name: ""
    };
  },
  methods: {
    onSubmitRoom() {
      if (!this.$store.state.username)
        return console.log("Please type username!");
      this.$store.dispatch("joinRoom", this.room_name).then(room => {
        this.$router.push(`/rooms/${room.id}`);
      });
    }
  }
};
</script>

<style>
</style>