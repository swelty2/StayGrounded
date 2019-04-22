<template>
<b-container fluid>
    <!-- NAVBAR -->
    <nav>
        <ul>

            <li><a><router-link to="/home/">Home</router-link></a></li>
            <li><a><router-link to="/data"> Data</router-link></a></li>

            <li><a><router-link to="/builddrink">Brew A Cup</router-link></a></li>
            <li><a><router-link to="/lexbot">Voice Order</router-link></a></li>
        </ul>
    </nav>

    <div id= 'centerContainer'>

        <div id="centerContent">
            <b-row>

                <b-col md="3">
                    <div class="audio-control1">
                        <h1>Speak</h1>
                        <img id="audio-control" class="white-circle"src="../assets/microphone.png">

                    </div>
                </b-col>


                <b-col md="3">
                    <div class="audio-control2">
                        <h1>Status</h1>

                        <div><span id="message">

                        </span></div>


                    </div>
                </b-col>
                <b-col md="3">
                    <div class="audio-control3">
                        <h1>Bot</h1>

                        <div>
                            <input type="text" id="BOT" name="BOT" placeholder="BOT" value="CoffeeOrderingBot"/>
                        </div>

                    </div>
                </b-col>



            </b-row>
            <canvas class="visualizer"></canvas>

        </div>
    </div>

</b-container>



</template>




