<template>
  <div>
    <RoomList></RoomList>
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
    return {};
  }
};
</script>
