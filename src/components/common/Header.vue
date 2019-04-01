<template>
  <v-toolbar class="toolbar">
    <v-toolbar-title>
      <router-link to="/">{{ title }}</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon @click.stop="emitDrawerUpdate"></v-toolbar-side-icon>
    <!-- <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat white>
        <router-link to="/resume">Resume</router-link>
      </v-btn>
      <v-btn flat white>
        <router-link to="/contact">Contact</router-link>
      </v-btn>
    </v-toolbar-items> -->
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  // data () {
  //   return {
  //     isDrawerOpen: false
  //   }
  // },
  methods: {
    emitDrawerUpdate: function (event) {
      this.$emit('update-drawer', !this.drawer)
    }
  },
  props: ['title', 'drawer']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

.toolbar {
  background-color: inherit;
  box-shadow: none;
}

</style>
