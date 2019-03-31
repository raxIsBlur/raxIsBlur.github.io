<template>
  <div class="blog">
      placeholder blog
      <div v-html="compiledMarkdown"></div>
      <!-- <component :is="postTitle"></component> -->
  </div>
</template>

<script>
import marked from 'marked'
import Posts from './Post/CompiledPost'

export default {
  name: 'Blog',
  data: function () {
    return {
      postTitle: ''
    }
  },
  computed: {
    compiledMarkdown: function () {
      var mdContent = '# No content'
      if (Posts) {
        if (this.postTitle) {
          mdContent = Posts[this.postTitle].source
        } else {
          var postKeys = Object.keys(Posts)
          mdContent = Posts[postKeys[0]].source
        }
      }
      return marked(mdContent, { sanitize: true })
    }
  },
  watch: {
    '$route': function () {
      switch (this.$route.params.id && this.$route.params.id.toUpperCase()) {
        case 'SECOND':
        case 'SECONDPOST': this.postTitle = 'Second'; break
        case 'FIRST':
        case 'FIRSTPOST': this.postTitle = 'First'; break
        default: this.postTitle = 'First'
      }

      // if (this.$route.params.id.toUpperCase() === 'FIRSTPOST') {
      //   this.postTitle = 'First'
      // } else if (this.$route.params.id.toUpperCase() === 'SECONDPOST') {
      //   this.postTitle = 'Second'
      // }
    }
  }
  // ,
  // components: {
  //   'firstPost': FirstPost,
  //   'secondPost': SecondPost
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    font-weight: 200;
    color: red;
}
</style>
