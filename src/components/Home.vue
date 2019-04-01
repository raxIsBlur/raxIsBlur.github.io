<template>
  <v-layout row wrap>
    <v-flex d-flex xs12>
      <v-card flat class="text-container center-align-all">
        <p>
          Hello
        </p>
      </v-card>
    </v-flex>
     <v-flex d-flex xs12>
        <v-card flat class="text-container center-align-all">
          <p>Hellooooo...</p>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12>
        <v-card flat class="text-container center-align-all">
          <p>
            Hello, <br />
            I'm currently building out a simple portfolio page using VueJS. <br />
            Tweet at me
            <a href="https://twitter.com/raxIsBlur">@raxIsBlur</a>
            or you can find me on
            <a href="https://github.com/raxIsBlur">Github</a>
          </p>
        </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Some random message'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  font-weight: 200;
  color: rgb(233, 233, 233);
}

.text-container {
  background-color: #303030;
  /* box-shadow: none; */
  text-align: center;
  display: flex;

}

.center-align-all {
  align-items: center;
  justify-content: center;
}
</style>
