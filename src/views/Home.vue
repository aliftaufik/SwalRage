<template>
  <div>
    <b-jumbotron bg-variant="primary" text-variant="white" fluid>
      <template slot="header">Reem List</template>
      <template slot="lead">Pick a room or create new one!</template>
    </b-jumbotron>
    <b-container>
      <UserForm></UserForm>
      <RoomList></RoomList>
      <RoomForm></RoomForm>
    </b-container>
  </div>
</template>

<script>
import RoomList from "@/components/RoomList";
import UserForm from "@/components/UserForm";
import RoomForm from "@/components/RoomForm";

export default {
  name: "home",
  components: {
    RoomList,
    UserForm,
    RoomForm
  }
};
</script>
