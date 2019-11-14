<template>
  <b-table
    :striped="striped"
    :bordered="bordered"
    :borderless="borderless"
    :outlined="outlined"
    :small="small"
    :hover="hover"
    :dark="dark"
    :fixed="fixed"
    :foot-clone="footClone"
    :no-border-collapse="noCollapse"
    :items="items"
    :fields="fields"
    :head-variant="headVariant"
    :table-variant="tableVariant"
  ></b-table>
</template>

<script>
export default {
  data() {
    return {
      fields: ["first_name", "last_name", "age"],
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" }
      ],
      tableVariants: [
        "primary",
        "secondary",
        "info",
        "danger",
        "warning",
        "success",
        "light",
        "dark"
      ],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: "",
      noCollapse: false
    };
  }
};
</script>

<style>
</style>