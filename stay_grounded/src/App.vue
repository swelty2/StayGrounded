<template>
    <div id="app">
       <!-- <router-link class="link" to="/">{{ title }}</router-link>-->
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App",
        data: {
         // return {
            title : 'Stay Grounded'
          //}
        },
        template: '<div>{{ title }}</div>'
    }
</script>

<style scoped>

</style>
