<script src="../router/index.js"></script>
<template>

  <div id="brewTable">
    <!-- NAVBAR -->
    <nav>
      <ul>

        <li><a><router-link to="/home/">Home</router-link></a></li>
            <li><a><router-link to="/data" class="active"> Data</router-link></a></li>
            <li><a><router-link to="/builddrink">Brew A Cup</router-link></a></li>
            <li><a><router-link to="/lexbot">Voice Order</router-link></a></li>
      </ul>
    </nav>

    <div id = "dataContent">

    <div class="intbox leftBottomBox">
      <coffee-chart></coffee-chart>
    </div>

    <div class="intbox rightBottomBox">
      <tea-chart></tea-chart>
    </div>
  </div>
  </div>
</template>

<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.4/p5.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.4/addons/p5.dom.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/vue/2.1.4/vue.js"></script>


<script>
function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('#canvas');
}

function draw() {
	background(102);
  ellipse(50, 50, 80, 80);
}
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
        background(51);
      },
      draw(sketch) {
        

        fill(255);
        // We are going to draw a polygon out of the wave points
        beginShape();

        let xoff = 0; // Option #1: 2D Noise
        // let xoff = yoff; // Option #2: 1D Noise

        // Iterate over horizontal pixels
        for (let x = 0; x <= width; x += 10) {
          // Calculate a y value according to noise, map to

          // Option #1: 2D Noise
          let y = map(noise(xoff, yoff), 0, 1, 200, 300);

          // Option #2: 1D Noise
          // let y = map(noise(xoff), 0, 1, 200,300);

          // Set the vertex
          vertex(x, y);
          // Increment x dimension for noise
          xoff += 0.05;
        }
        // increment y dimension for noise
        yoff += 0.01;
        vertex(width, height);
        vertex(0, height);
        endShape(CLOSE);
      }
    }
  };
</script>
