<template>
  <div id="app">
    <router-view v-setTitle="$route.meta.pageTitle" />
  </div>
</template>

<style lang="scss">
@import "./style/reset.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
