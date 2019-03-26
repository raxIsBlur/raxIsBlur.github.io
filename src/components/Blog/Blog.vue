<template>
  <div class="blog">
      placeholder blog
      <component :is="currentView"></component>
  </div>
</template>

<script>
import FirstPost from './Post/FirstPost'
import SecondPost from './Post/SecondPost'

export default {
  name: 'Blog',
  data: function () {
    return {
      currentView: 'firstPost'
    }
  },
  watch: {
    '$route': function () {
      if (this.$route.params.id === 'firstpost') {
        this.currentView = 'firstPost'
      } else if (this.$route.params.id === 'secondpost') {
        this.currentView = 'secondPost'
      }
    }
  },
  components: {
    'firstPost': FirstPost,
    'secondPost': SecondPost
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    font-weight: 200;
    color: red;
}
</style>
