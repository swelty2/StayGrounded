<template>
    <b-container fluid>
        <!-- NAVBAR -->
        <nav>
            <ul>
                <li><a><router-link to="/home/" class="active">Home</router-link></a></li>
                <li><a><router-link to="/brew">Brewmaker 1.0</router-link></a></li>
                <li><a><router-link to="/lexbot">Voice Order</router-link></a></li>
                <li><a><router-link to="/menu">Explore Drinks</router-link></a></li>
                <li><a><router-link to="/data">Fun Facts</router-link></a></li>
            </ul>
        </nav>
        
        <div id="centerContainer">
            <div id="design-content">
                <h1>Explore Drinks</h1>
                <!-- BEAN DATA -->
                <div class="btn btn-outline-danger option" role="button">
                    <a href="#recipe-content">        
                    <img src="../assets/mocha-latte.jpg">
                    <h2>Latte</h2>
                    </a>
                 </div> 
                
                <!-- BUILD A DRINK -->  
                <div class="btn btn-outline-success option" role="button">
                    <a href="#build-content"> 
                    <img src="../assets/cup.png">
                    <h2>Build Your Own</h2>
                    </a>
                 </div> 
                  
                <!-- LEXBOT -->
                <div class="btn btn-outline-primary option" role="button">
                    <a href="#history-content"> 
                    <img src="../assets/history.png">
                    <h2>Order History</h2>
                    </a>
                 </div> 


                <div class="content-row">
                    <router-link class="brew-button" to="/brew" >Brew my Drink</router-link>
                </div>
            </div>
            <div class="brew-content" id="recipe-content">
                <h1>Recipes</h1>
            </div>
            <div class="brew-content" id="build-content">
                <h1>Build Your Own</h1>
            </div>
            <div class="brew-content" id="history-content">
                <h1>Order History</h1>
            </div>

            
        </div>
        
    </b-container>
</template>

<script>
    import brew from './brew'
    export default {
        name: "p5-example",
        components: {
            brew
        },
        data: () => ({
        })
    };
</script>
<style scoped>

</style>