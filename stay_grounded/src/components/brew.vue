<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">
        <h3>Actions</h3>
        <div class="list-group">
          <a class="list-group-item clearfix" onclick="alert('Action1 -> Details');">
            Action1

          </a>
          <a class="list-group-item clearfix" onclick="alert('Action2 -> Details');">
            Action2
          </a>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" id="chart">
        <rect v-bind:width="width" v-bind:height="height" v-bind:x="x" v-bind:key="y" fill="#f0b375"/>
      </svg>

    </div>
  </div>
</template>

<script>
  import VueP5 from 'vue-p5'
    export default {
        name: "brew",
        data() {
          return {
            width: 200,
            height: 200,
            x: 10,
            y: 10
          }
        },
        created: {
        setup(sketch) {
          sketch.background('green');
          sketch.text('Hello p5!', 20, 20);
        }
      },
      render(h) {
        return h(VueP5, {on: this});
      }

    }


</script>

<style scoped>

</style>
