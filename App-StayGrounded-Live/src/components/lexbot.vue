<template>
<b-container fluid>
    <!-- NAVBAR -->
    <nav>
        <ul>
            <li><a><router-link to="/home/" class="active">Home</router-link></a></li>
            <li><a><router-link to="/builddrink">Brewmaker 1.0</router-link></a></li>
            <li><a><router-link to="/lexbot" class="active">Voice Order</router-link></a></li>
            <li><a><router-link to="/menu">Explore Drinks</router-link></a></li>
            <li><a><router-link to="/data">Fun Facts</router-link></a></li>
        </ul>
    </nav>

    <div id= 'centerContainer'>




        <div id="centerContent">
            <h1>Coffee Bot</h1>
            <div id="lexBot">
                <b-row>

                    <b-col md="3" id="botTitle">
                        <div class="audio-control1">
                            <h1 hidden>Coffee Bot</h1>

                            <div>
                                <input type="text" id="BOT" name="BOT" placeholder="BOT" value="CoffeeOrderingBot" hidden/>
                            </div>

                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="3">
                        <div class="audio-control3">

                            <!--<h1>Speak</h1>-->
                            <img id="audio-control" class="white-circle"src="../assets/microphone.png">

                        </div>
                    </b-col>


                </b-row>
                <b-row>

                    <b-col md="3">
                        <div class="audio-control2">
                            <span>Status:</span><span id="message">

                            </span>



                        </div>
                    </b-col>
                </b-row>
                <b-row md="3" id="robot"><img src="../assets/red-robot-l.gif"/> </b-row>

            </div>
            <canvas class="visualizer"></canvas>

        </div>
    </div>

</b-container>



</template>

