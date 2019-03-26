<template>
  <div class="hello">
      <p>Hello, this is currently just for testing :)</p>
      <p>
          Don't really post often but leave me a message on twitter <a href="https://twitter.com/raxIsBlur">@raxIsBlur</a>
          or you can find me through <a href="https://github.com/raxIsBlur">Github</a>
      </p>
  </div>
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
    color: red;
}
</style>
