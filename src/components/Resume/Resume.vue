<template>
  <v-layout row wrap>
    <v-flex d-flex xs8 offset-xs2>
        <div class="resume" v-html="compiledMarkdown"></div>
    </v-flex>
  </v-layout>
</template>

<script>
import marked from 'marked'
import ResumeMD from './Resume.md'

export default {
  name: 'Resume',
  data () {
    return {
      msg: 'Resume Page'
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(ResumeMD.source, { breaks: true, gfm: true })
    }
  }
}
</script>

<style>
.resume h2 {
  margin-top: 15px;
}

.resume ul {
  margin-bottom: 20px;
}

.resume li {
  margin: 5px 0;
}

.resume p {
  margin-bottom: 5px;
}

</style>
