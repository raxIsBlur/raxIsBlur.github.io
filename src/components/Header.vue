<template>
  <v-toolbar class="">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>
      <router-link to="/">{{ title }}</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <!-- <v-btn flat white>
        <router-link to="/portfolio">Portfolio</router-link>
      </v-btn>
      <v-btn flat white>
        <router-link to="/blog">Blog</router-link>
      </v-btn> -->
      <v-btn flat white>
        <router-link to="/resume">Resume</router-link>
      </v-btn>
      <v-btn flat white>
        <router-link to="/contact">Contact</router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
