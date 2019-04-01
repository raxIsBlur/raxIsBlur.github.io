<template>
  <div id="app">
    <v-app dark>
      <app-header :title="title" :drawer="drawer" @update-drawer="updateDrawer"></app-header>
      <v-content>
        <v-container fluid fill-height>
          <router-view></router-view>
        </v-container>
      </v-content>
      <app-nav-drawer :drawer="drawer" @update-drawer="updateDrawer"></app-nav-drawer>
      <app-footer :author="author"></app-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    title: function () { return 'raxIsBlur' },
    author: function () { return { hyperlink: '/', name: 'Sarkunan' } }
  },
  methods: {
    updateDrawer (val) {
      this.drawer = val
    }
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
