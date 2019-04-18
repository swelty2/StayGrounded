<template>
  <b-container>
      <h2>{{ title }}</h2>
      <div class="split left">
        <div class="centered">
          <Userform></Userform>
        </div>
      </div>

      <div class="split right">
        <div class="centered">
          <Speechform></Speechform>
        </div>
      </div>
  </b-container>

</template>

<script>
  import Userform from "./userform";
  import Speechform from "./speechform";
    export default {
        name: "design",
      components: {Speechform, Userform},
      data() {
          return {
            title : 'Build your own drink!!!!!'
          }
        }
    }
</script>

<style scoped>

</style>
