<template>
  <div>
    <b-jumbotron bg-variant="primary" text-variant="white" fluid>
      <template slot="header">Room List</template>
      <template slot="lead">Pick a room or create new one!</template>
    </b-jumbotron>
    <div class="container">
      <RoomList></RoomList>
      <b-form inline @submit.prevent="onSubmit">
        <b-form-group label="Create New Room:" label-for="room_name">
          <b-input-group class="mx-3" prepend="@">
            <b-form-input
              prepend="@"
              id="room_name"
              v-model="room_name"
              required
              placeholder="swalisdangerous"
            ></b-form-input>
          </b-input-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RoomList from "@/components/RoomList";

export default {
  name: "home",
  components: {
    RoomList
  },
  data() {
    return {
      room_name: ""
    };
  },
  methods: {
    onSubmit() {
      this.$store.commit("addRoom", this.room_name); // Commit untuk nambah room baru. Harusnya dispatch
      // this.$router.push("/gameroom"); Ketika bikin room langsung masuk ke room
    },
    onReset() {}
  }
};
</script>
