<template>
    <div class="container-fluid fixed-top container-nav">
        <div class="row">
            <div class="col-6 left-nav">
                <div class="text-center">
                    <router-link to="/">
                        <h2>C.V</h2>
                    </router-link>
                </div>
            </div>
            <div class="col-6 right-nav">
                <div class="text-center">
                    <router-link to="/portfolio">
                        <h2>Portfolio</h2>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    .container-nav{
        border-bottom: 2px solid white;
        height: auto;
        -webkit-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.75);
    }

    .left-nav, .right-nav{ height: 100%; }
    .left-nav{ background-color: #34495E; }
    .right-nav{ background-color: #41B883; }
</style>
