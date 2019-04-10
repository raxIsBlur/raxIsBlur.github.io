<template>
  <v-layout row wrap>
    <!-- <v-flex d-flex xs12>
      <v-card flat class="text-container center-align-all">
        <p>
          Hmm
        </p>
      </v-card>
    </v-flex> -->
     <v-flex d-flex xs12>
        <v-card flat style="" class="text-container center-align-all">
          <p>Waiting for something amazing to put here.</p>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12>
        <v-card flat class="text-container center-align-all">
          <!-- <div>
            <div class="circle">

            </div>
          </div> -->
          <div style="text-align: left;">
            <p style="font-size: 30px;">
              <span style="display: block; margin-bottom: -10px;">Sarkunan V.</span>
              <span style="font-size: 18px;">Software Engineer</span>
            </p>
            <p>
              Hello, <br />
              I'm currently building out a simple portfolio page using VueJS. <br />
              Tweet at me
              <a href="https://twitter.com/raxIsBlur">@raxIsBlur</a>
              or you can find me on
              <a href="https://github.com/raxIsBlur">Github</a>
            </p>
            <p>
              <v-icon size="36px">{{ "fa fa-github" }}</v-icon>
            </p>
          </div>
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

.circle {
  width: 100px;
  height: 100px;
  background: blue;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50%;
}
</style>
