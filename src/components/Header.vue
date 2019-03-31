<template>
  <v-toolbar class="">
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat white>Test 1</v-btn>
      <v-btn flat white>Test 2</v-btn>
      <v-btn flat white>Test 3</v-btn>
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

</style>
