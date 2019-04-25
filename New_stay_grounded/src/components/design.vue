<template>
    <b-container fluid>
        <!-- NAVBAR -->
        <nav>
            <ul>
                <li><a><router-link to="/home/">Home</router-link></a></li>
                <li><a><router-link to="/data"> Data</router-link></a></li>
                <li><a><router-link to="/builddrink" class="active">Brew A Cup</router-link></a></li>
                <li><a><router-link to="/lexbot">Voice Order</router-link></a></li>
            </ul>
        </nav>
        
        
        <div id="centerContainer">
            <div id="design-content">
                <h1>Do you want to choose a recipe or create a custom cup?</h1>
                <!-- BEAN DATA -->
                <div class="btn btn-outline-danger option" role="button">
                    <a href="#recipe-content">        
                    <img src="../assets/list.png">
                    <h2>Choose Recipe</h2>
                    </a>
                 </div> 
                
                <!-- BUILD A DRINK -->  
                <div class="btn btn-outline-success option" role="button">
                    <a href="#build-content">
                    <img src="../assets/cup.png">
                    <h2>Custom Cup</h2>
                    </a>
                 </div> 

            </div>

            <!-- RECIPE CONTENT -->
            <div class="brew-content" id="recipe-content">
                <div id="recipe-menu">
                    <ol id="selectable">
                        <li class="ui-widget-content" value="latte">Latte</li>
                        <li class="ui-widget-content" value="mocha-latte">Moacha Latte</li>
                        <li class="ui-widget-content" value="iced-coffee">Iced Coffee</li>
                        <li class="ui-widget-content" value="coffee">Coffee</li>
                        <li class="ui-widget-content" value="green-tea">Green Tea</li>
                        <li class="ui-widget-content" value="black-tea">Black Tea</li>
                        <li class="ui-widget-content" value="iced-latte">Iced Latte</li>
                        <li class="ui-widget-content" value="iced-green-tea">Iced Green Tea</li>
                        <li class="ui-widget-content" value="iced-black-tea">Iced Black Tea</li>
                    </ol>
                </div>    
            </div>

            <!-- CUSTOM CUP CONTENT -->
            <div class="brew-content" id="build-content">
                <div id="customize-menu">
                    <div class="left">
                            <h2>Customize your drink!</h2>
                        <!-- OUNCES/AMOUNT -->
                        <p>
                            <label for="amount">How many ounces would you like?</label>
                            
                        </p>
                        <div id="slider-range-max"></div>

                        <h2>Drag and Drop to make the following selections:</h2>

                        <!-- HOT OR ICED -->
                        <p>What is the drink temperature?</p>
                        <div class="option hot" id="temp"><p>Hot</p></div>
                        <div class="option cold" id="temp"><p>Iced</p></div>

                        
                        <!-- ESPRESSO, COFFEE, TEA -->
                        <p>What type of drink would you like?</p>
                        <div class="option espresso" id="drinkType"><p>Espresso</p></div>
                        <div class="option coffee" id="drinkType"><p>Coffee</p></div>
                        <div class="option greenTea" id="drinkType"><p>Green Tea</p></div>
                        <div class="option blackTea" id="drinkType"><p>Black Tea</p></div>
                        
                        <!-- FLAVORS -->
                        <p>Do you want a flavoring?</p>
                        <div class="option vanilla" id="flavor"><p>Vanilla</p></div>
                        <div class="option hazelnut" id="flavor"><p>Hazelnut</p></div>
                        <div class="option chocolate" id="flavor"><p>Chocolate</p></div>

                        <!-- MILK TYPE -->
                        <p>What's your preferred milk type?</p>
                        <div class="option skim" id="milkType"><p>Skim Milk</p></div>
                        <div class="option whole" id="milkType"><p>Whole Milk</p></div>
                        <div class="option almond" id="milkType"><p>Almond Milk</p></div>
                        <div class="option cream" id="milkType"><p>Half and Half</p></div>

                        <!-- BREW BUTTON -->
                        <button><a href="#brew-content">
                            <h2>Brew My Drink!</h2>
                        </a>
                        </button>
                    </div>
                    <div class="right">
                        <h2> Selections</h2>
                        <div class="selection" id="amountArea"><p>Amount (oz.) </p><input type="text" id="amount"></div>
                        <div class="selection" id="tempDrop"><p>Drink Temperature</p></div>
                        <div class="selection" id="drinkTypeDrop"><p>Drink Type</p></div>
                        <div class="selection" id="flavorDrop"><p>Flavor</p></div>
                        <div class="selection" id="milkTypeDrop"><p>Milk Type</p></div>

                    </div>
                    
                    
                </div>
            </div>
            <div class="brew-content" id="brew-content">
                <h1>Your Drink!</h1>

                <div class="drink-area">
                    <div id="cup" class="hidden"></div>
                    <div id="handle" class="hidden"></div>
                    <div id="glass" class="hidden"></div>
                    <div id="ice-cubes" class="hidden">
                        <div id="ice-cube-1"></div>
                        <div id="ice-cube-2"></div>
                        <div id="ice-cube-3"></div>
                        <div id="ice-cube-4"></div>
                        <div id="ice-cube-5"></div>
                    </div>
                    <div id="straw" class="hidden"></div>
                    
                </div>
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