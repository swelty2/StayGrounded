<template>
  <div class="container">
    <h3 class="font-italic">{{title}}</h3>
    <p class="text-center font-italic text-primary">
      Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit, vitae aenean fusce vehicula scelerisque integer rhoncus. Phasellus tincidunt pulvinar dapibus diam mollis urna, eleifend mauris donec litora rhoncus nisl, porta nibh velit accumsan justo. Senectus mollis dictum elementum rutrum congue scelerisque varius conubia, tristique justo sagittis vestibulum duis dapibus convallis, nec vel orci curabitur ad fusce lectus.
      Praesent erat etiam interdum nostra taciti in vestibulum, pellentesque pharetra blandit magna ante dui suspendisse suscipit, hac phasellus natoque ligula aenean dictum. Ac dui velit felis facilisis per eu taciti quisque, condimentum malesuada pretium neque rhoncus curae elementum at urna, mattis tellus cras facilisi enim nisl molestie. Donec bibendum platea luctus nam cubilia etiam ac erat feugiat varius, sociosqu senectus porta netus ligula nulla morbi massa scelerisque sapien aliquet, lobortis cras hac tristique taciti vitae dictum magna lacinia.
    </p>
    <router-link class="btn btn primary" to='/home'>Explore</router-link>
    <router-view></router-view>
    <figure class="figure">
      <img src="../assets/aroma-aromatic-art-434213.jpg" class="figure-img rounded-circle" alt="A generic square placeholder image with rounded corners in a figure.">
      <figcaption class="figure-caption text-center">Freshly brewed</figcaption>
    </figure>
  </div>

</template>

<script>
    export default {
        name: "welcome",
        title : 'Stay Grounded - A unique experience for coffee lovers'
    }
</script>

<style scoped>
</style>
