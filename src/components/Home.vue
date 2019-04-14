<template>
  <v-layout row wrap>
    <!-- <v-flex d-flex xs12>
      <v-card flat class="text-container center-align-all">
        <p>
          Hmm
        </p>
      </v-card>
    </v-flex>-->
    <v-flex d-flex xs12>
      <v-card flat style class="text-container center-align-all">
        <p class="hello">Hello</p>
        <p class="other-text">Waiting for something amazing to put here.</p>
      </v-card>
    </v-flex>
    <v-flex d-flex xs12>
      <v-card flat class="text-container center-align-all">
        <!-- <div>
            <div class="circle">

            </div>
        </div>-->
        <div style="text-align: left;">
          <p style="font-size: 30px;">
            <span style="display: block; margin-bottom: -10px;">Sarkunan V.</span>
            <span style="font-size: 18px;">Software Engineer</span>
            <span style="color: gray; text-decoration: unset; font-size: 12px;">
              <a style="color: inherit;" href="/#/resume">(Resume)</a>
            </span>
          </p>
          <p>
            Hello,
            <br>
            I'm currently building out a simple portfolio page using VueJS.
          </p>
          <p>Find me on one of these</p>
          <div>
            <v-btn v-for="icon in icons" :key="icon.name" :href="icon.link" class="" small dark style="height: 15px!important;">
              <v-icon size="36px" :title="icon.title">{{ icon.name }}</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { SOCIAL_LINKS } from './common/Constants.js'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Some random message',
      icons: [
        {
          name: SOCIAL_LINKS.github.icon,
          link: SOCIAL_LINKS.github.url,
          title: SOCIAL_LINKS.github.title
        },
        {
          name: SOCIAL_LINKS.twitter.icon,
          link: SOCIAL_LINKS.twitter.url,
          title: SOCIAL_LINKS.twitter.title
        },
        {
          name: SOCIAL_LINKS.linkedin.icon,
          link: SOCIAL_LINKS.linkedin.url,
          title: SOCIAL_LINKS.linkedin.title
        }
        // {
        //   name: 'fa fa-file',
        //   link: '/#/resume',
        //   title: 'Resume'
        // }
      ]
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
