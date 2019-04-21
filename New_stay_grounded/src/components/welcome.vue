<template>
  <b-container>
    <!-- NAVBAR -->
    <nav>
      <ul>

        <li><a><router-link to="/home/">Home</router-link></a></li>
        <li><a><router-link to="/data"> Data</router-link></a></li>

        <li><a><router-link to="/builddrink">Brew A Cup</router-link></a></li>
        <li><a><router-link to="/speechform">Voice Order</router-link></a></li>
      </ul>
    </nav>

    <!-- LOGO -->
    <div class="content-row">
      <div id="logo">
        <img src="../assets/logo.png">
      </div>
    </div>
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="824"
        img-height="280"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide img-src="https://images.pexels.com/photos/414720/pexels-photo-414720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></b-carousel-slide>
        <b-carousel-slide img-src="https://www.bravotv.com/sites/bravo/files/field_blog_image/2016/05/the-feast-creative-coffees.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="http://images.unsplash.com/photo-1521012012373-6a85bade18da?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.ndtvimg.com/i/2016-11/chamomile-tea_620x350_61479884270.jpg
"></b-carousel-slide>



        <b-carousel-slide img-src="https://storage.googleapis.com/smstl/2018419/193/lacosecha_small.jpg"></b-carousel-slide>
      </b-carousel>


    </div>

    <div class="content-row" id="explore">
      <router-link class="explore-button"  to="/home">Click to Explore</router-link>

    </div>

  </b-container>

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
