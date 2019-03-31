<template>
  <div class="hello">
      <p>Hello, I'm currently building out a simple portfolio page using VueJS</p>
      <p>
          Tweet at me <a href="https://twitter.com/raxIsBlur">@raxIsBlur</a>
          or you can find me on <a href="https://github.com/raxIsBlur">Github</a>
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
    color: rgb(233, 233, 233);
}
</style>
