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
      fields: [{ key: "id", label: "No." }, "room_name", "join"]
    };
  },
  methods: {
    join(item, index, button) {
      // Update data room yang ada di db, id room ada di item.id
      // Pindah masuk ke dalem room (belum kebayang caranya)
      // console.log("item:", item);
      // console.log("item id:", item.id);
      // console.log("index:", index);
      // console.log("button:", button);
    }
  },
  computed: {
    roomList() {
      // Dapetin semua data room yang ada
      return this.$store.state.room_list;
    }
  }
};
</script>

<style>
</style>