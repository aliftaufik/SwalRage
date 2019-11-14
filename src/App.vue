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
$primary: #8e66a4;
$secondary: #8a3d9b;
$success: #01baef;
$light: #f2f4f6;
$dark: #282c34;

@import "~bootstrap";
@import "~bootstrap-vue";
</style>
