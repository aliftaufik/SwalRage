<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
$primary: #5fb1f3;
$secondary: #3085d6;
$success: #a38fbd;
$light: #e2e5e8;
$dark: #282c34;

body {
  background-color: $light;
}

@import "~bootstrap";
@import "~bootstrap-vue";
</style>
