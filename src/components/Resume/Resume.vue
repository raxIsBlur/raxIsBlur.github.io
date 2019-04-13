<template>
  <v-layout row wrap>
    <v-flex d-flex xs8 offset-xs2>
        <div v-html="compiledMarkdown"></div>
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
      return marked(ResumeMD.source, { sanitize: true })
    }
  }
}
</script>

<style scoped>
.resume {
    /* color: green; */
}
</style>
