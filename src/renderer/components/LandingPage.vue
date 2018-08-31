<template>
  <div id="wrapper" @click="open('https://electron.atom.io/docs/')">
  </div>
</template>

<script>
  export default {
    name: 'landing-page',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
    width: 100%
  }
  body {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.0);
  }

  #wrapper {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.0);
  }

</style>
