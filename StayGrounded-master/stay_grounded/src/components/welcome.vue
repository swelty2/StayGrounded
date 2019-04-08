<template>

<div class="container">
  <img src=
"../assets/logo.jpg"  alt="Stay Grounded Logo Image" class="image" >
  <div class="middle">
    <div class="text">
 <router-link class="text"  to="/home/Donna">Explore</router-link>
    <router-view></router-view></div>
  </div>
</div>
    <!--<div class="text-center font-italic text-primary">
      Lorem ipsum dolor sit amet. Phasellus tincidunt pulvinar dapibus diam mollis urna, eleifend mauris donec litora rhoncus nisl, porta nibh velit accumsan justo. Senectus mollis dictum elementum rutrum congue scelerisque varius conubia, tristique justo sagittis vestibulum duis dapibus convallis, nec vel orci curabitur ad fusce lectus.
      <form class="form-inline">
        <div class="form-group mb-2">
          <input type="text" readonly class="form-control-plaintext" value="Enter your name">
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <label class="sr-only">User Name</label>
          <input v-model="userName" class="form-control" id="userName" placeholder="Name">
        </div>
      </form>
    </div>
    <router-link class="btn btn secondary"  to="/home/Donna">Explore</router-link>
    <router-view></router-view>
    <figure class="figure">
      <img src="../assets/coffee-beans.jpg" class="intro-img img-fluid mb-3 mb-lg-0 rounded" alt="A generic square placeholder image with rounded corners in a figure.">
      <figcaption class="figure-caption text-center">Freshly brewed</figcaption>
    </figure>
    -->
  </div>
</template>

<script>
    export default {
        name: "welcome",
        data() {
          return {
            userName: '',
            title : 'Stay Grounded - A unique experience'
          }
        }
    }
</script>

<style scoped>
</style>
