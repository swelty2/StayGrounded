<template>

  <vue-p5 id="vueBrew"  @sketch="sketch" @setup="setup" @draw="draw">
    

  </vue-p5>
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
            yoff : 1,
            xoff : 1,
            width : 600,
            height : 700,
            drinkWidth : 225,
            drinkHeight : 625

        }),
        methods: {
            sketch(sketch) {
                sketch.draw = () => {
                    sketch.background(20, 30, 20, 0.35);
                    sketch.textSize(25);
                    sketch.text('Hover over the cup', 15, 30);
                };
            },
            setup(sketch) {
                sketch.createCanvas(this.width, this.height, this.WEBGL);
                sketch.stroke(2);
            },
            draw(sketch) {
                sketch.push();
                sketch.ellipse(35, 80, 370, 60);
                //sketch.ellipse(95, 80, 60, 60);
                //sketch.ellipse(150, 80, 60, 60);
                //sketch.ellipse(200, 80, 60, 60);
                //sketch.ellipse(250, 80, 60, 60);
                //sketch.ellipse(300, 80, 45, 60);
                // sketch.pop();
                // sketch.push();
                sketch. translate(350, 160);
                sketch.rotate(sketch.radians(sketch.frameCount));
                sketch.line(0, -60, 0, -40);
                sketch.line(0, 40, 0, 60);
                sketch.line(-45, -45, -30, -30);
                sketch.line(45, -45, 30, -30);
                sketch. line(-60, 0, -40, 0);
                sketch.line(60, 0, 40, 0);
                sketch.line(-45, 45, -30, 30);
                sketch.line(0, 40, 0, 40);
                sketch.line(45, 45, 30, 30);
                sketch.pop();

                let barWidth = 0.2 ;
                let lastBar = -1;
                sketch.colorMode(sketch.HSB,this.drinkWidth,this.drinkHeight,40);
                let whichBar = sketch.mouseX / barWidth;
                if (whichBar !== lastBar) {
                    let barX = whichBar * barWidth;
                    sketch.fill(barX, sketch.mouseY, 10);
                    lastBar = whichBar;
                }
                sketch.beginShape();
                // Iterate over horizontal pixels
                for (let x = 2; x <= this.drinkWidth; x += 5) {
                    // Calculate a y value according to noise, map to
                    // 2D Noise
                    let y = sketch.map(sketch.noise(this.xoff, this.yoff), 1, 4,100,200);
                    // Set the vertex
                    sketch.vertex(x, y);
                    // Increment x dimension for noise
                    this.xoff += 0.35;
                }
                // increment y dimension for noise
                this.yoff += 0.51;
                sketch.vertex(this.drinkWidth, this.height);
                sketch.vertex(0, this.drinkHeight);
                sketch.endShape(sketch.CLOSE);
            }
        }
    };
</script>
<!--<script type="text/javascript">
    $(document).ready(function(){
        loader();
    });
</script>-->
