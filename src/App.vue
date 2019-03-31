<template>
  <div id="app">
    <v-app dark>
      <app-header :title="title"></app-header>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <app-footer :author="author"></app-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    title: function () { return 'raxIsBlur' },
    author: function () { return { hyperlink: '/', name: 'Sarkunan' } }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}
</style>
