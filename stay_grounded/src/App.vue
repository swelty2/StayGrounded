<template>
    <div id="app">
        <router-link class="link" to="/">{{ title }}</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
  import welcome from './components/welcome'
    export default {
        name: "App",
        data() {
          return {
            title : 'Stay Grounded - A unique experience for coffee lovers'
          }
        },
        components: {
          welcome
        }
    }
</script>

<style scoped>

</style>
