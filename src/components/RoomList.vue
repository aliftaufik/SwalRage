<template>
  <b-table
    show-empty
    :striped="true"
    :bordered="true"
    :borderless="true"
    :small="true"
    :hover="true"
    :fixed="true"
    :fields="fields"
    :items="roomList"
    head-variant="dark"
  >
    <template v-slot:cell(no)="row">{{ row.value }} {{ row.value }}</template>

    <template v-slot:cell(join)="row">
      <b-button size="sm" @click="join(row.item, row.index, $event.target)" class="mr-1">Join Room</b-button>
    </template>
  </b-table>
</template>

<script>
export default {
  data() {
    return {
      fields: [{ key: "id", label: "No." }, "roomName", "join"]
    };
  },
  methods: {
    join(item, index, button) {
      if (!this.$store.state.username)
        return console.log("Please type username!");
      this.$store.dispatch("joinRoom", item.roomName).then(room => {
        this.$router.push(`/rooms/${room.id}`);
      });
    }
  },
  computed: {
    roomList() {
      return this.$store.state.roomList.map((room, index) => {
        return { id: index + 1, roomName: room.roomName };
      });
    }
  },
  created() {
    this.$store.dispatch("loadRooms");
  }
};
</script>

<style>
</style>