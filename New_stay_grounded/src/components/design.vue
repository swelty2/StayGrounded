<template>
    <b-container fluid>
        <!-- NAVBAR -->
        <nav>
            <ul>
                <li><a><router-link to="/home/Donna">Home</router-link></a></li>
                <li><a><router-link to="/data"> Data</router-link></a></li>
                <li><a><router-link to="/builddrink" class="active">Brew A Cup</router-link></a></li>
                <li><a><router-link to="/lexbot">Voice Order</router-link></a></li>
            </ul>
        </nav>
        
        <div id="centerContainer">
            <div id="design-content">
                <!-- BEAN DATA -->
                <router-link class="btn btn-outline-danger option" to="/menu" role="button">        
                    <img src="../assets/list.png">
                    <h2>Choose Recipe</h2>
                 </router-link> 
                
                <!-- BUILD A DRINK -->  
                <router-link class="btn btn-outline-success option" to="/builddrink" role="button">
                    <img src="../assets/cup.png">
                    <h2>Build Your Own</h2>
                 </router-link> 
                  
                <!-- LEXBOT -->
                <router-link class="btn btn-outline-primary option" to="#" role="button">
                    <img src="../assets/history.png">
                    <h2>Order History</h2>
                 </router-link> 
            </div>
        </div>
        <router-link class="brew-button" to="/brew" >Brew my Drink</router-link>

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