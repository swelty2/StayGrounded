<template>
    <b-container fluid>
        <!-- NAVBAR -->
        <nav>
            <ul>
                <li><a><router-link to="/home/Donna">Home</router-link></a></li>
                <li><a><router-link to="/data"> Data</router-link></a></li>
                <li><a><router-link to="/menu">Brew A Cup</router-link></a></li>
                <li><a><router-link to="/speechform">Voice Order</router-link></a></li>
            </ul>
        </nav>

        <b-card title="Get Creative... Build your drink"
                style="max-width: 100rem;"
                class="mb-2">
        </b-card>
        <router-link to="/brew">Brew my Drink</router-link>

        <!--<brew></brew>-->
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