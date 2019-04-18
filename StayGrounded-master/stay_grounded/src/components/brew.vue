
<script src="../router/index.js"></script>
<template>

  <div id="brewTable">
    <!-- NAVBAR -->
    <nav>
      <ul>

        <li><a><router-link to="/home/Donna">Home</router-link></a></li>
        <li><a><router-link to="/data"> Data</router-link></a></li>

        <li><a><router-link to="/menu">Brew A Cup</router-link></a></li>
        <li><a><router-link to="/speechform">Voice Order</router-link></a></li>
      </ul>
    </nav>
    <div id = "dataContent">
      <!--
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
        <g id="a" class="a">
          <path class="g" d="M0 0h1920v1080H0z"/>
          <g class="b" transform="translate(1045 431)">
            <ellipse class="e saucer-outer" cx="172.5" cy="64" rx="172.5" ry="64"/>
            <ellipse class="f saucer-outer" cx="172.5" cy="64" rx="169.5" ry="61"/>
          </g>
          <g class="b" transform="translate(1119 459)">
            <ellipse class="e saucer-inner" cx="99" cy="36.5" rx="99" ry="36.5"/>
            <ellipse class="f saucer-inner" cx="99" cy="36.5" rx="96" ry="33.5"/>
          </g>
          <path class="c cup-handle" d="M1350.34 310.417s256.374-52.02 158.415 43.032-165.78 73.42-165.78 73.42"/>
          <path class="c cup-handle" d="M1349.27 327.323s164.368-34.213 101.497 28.08-106.318 48.17-106.318 48.17"/>
          <path class="d  cup-body" d="M1009 221.998s83.082 297.808 219.69 282.915c62.564-6.82 136.586-79.785 219-278.245"/>
          <g class="d" transform="translate(1009 162)">
            <ellipse class="e cup-top" cx="219.816" cy="59.998" rx="219.816" ry="59.998"/>
            <ellipse class="f cup-top" cx="219.816" cy="59.998" rx="217.316" ry="57.498"/>
          </g>
        </g>
      </svg>


-->
      <div class="intbox leftTopBox">
        <h3 class="alert-heading">Drag Options Into Cup</h3>
        <vue-p5 @sketch="sketch" @setup="setup" @draw="draw"></vue-p5>

      </div>
    </div>
  </div>
</template>



<script>
  import VueP5 from "vue-p5";
  import coffeeChart from '../components/coffee-chart'
  import teaChart from '../components/tea-chart'

  export default {

    name: "p5-example",
    components: {
      "vue-p5": VueP5,
      coffeeChart,
      teaChart
    },
    data: () => ({
       yoff : 0.0,
       xoff : 0,
       width : 310,
       height : 400
    }),
    methods: {
      sketch(sketch) {
        sketch.draw = () => {
        
        
        };
      },
      setup(sketch) {
        sketch.createCanvas(this.width, this.height);
        sketch.fill(255);
        sketch.stroke(200);
      },
      draw(sketch) {
        sketch.beginShape();
        let c = sketch.color('brown');
        sketch.fill(c);
        // Iterate over horizontal pixels
        for (let x = 0; x <= this.width; x += 10) {
          // Calculate a y value according to noise, map to
          // 2D Noise
          let y = sketch.map(sketch.noise(this.xoff, this.yoff), 0, 1, 100,200);
          // Set the vertex
          sketch.vertex(x, y);
          // Increment x dimension for noise
          this.xoff += 0.05;
        }
        // increment y dimension for noise
        this.yoff += 0.01;
        sketch.vertex(this.width, this.height);
        sketch.vertex(0, this.height);
        sketch.endShape(sketch.CLOSE);
      }
    }
  };
</script>
