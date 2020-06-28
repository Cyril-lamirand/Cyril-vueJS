<template>
  <div id="app">
    <div class="container-fluid fixed-top container-nav">
      <div class="row">
        <div class="col-6 left-nav">
          <div class="text-center">
            <h2>C.V</h2>
          </div>
        </div>
        <div class="col-6 right-nav">
          <div class="text-center">
            <h2>Portfolio</h2>
          </div>
        </div>
      </div>
    </div>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  body{ background: #161616 !important; }

  h1, h2, h3, h4, h5, h6, p, ul, li, a { color: whitesmoke; }
  h1, h2, h3, h4, h5, h6 { text-shadow: 2px 1px 3px #110704; }
  h1{ text-transform: uppercase; }

  hr{ border-top: 1px solid whitesmoke !important; }


  .b-icon{ color: whitesmoke; }

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

  small{ color: lightblue; }

  @media only screen and (max-width: 400px) {
    .hide-r{ display: none; }
  }
</style>
