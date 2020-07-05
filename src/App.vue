<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  name: 'App',
  components: {Footer, Navbar},
}
</script>

<style>
  body{ background: #161616 !important; }

  h1, h2, h3, h4, h5, h6, p, ul, li, a { color: whitesmoke; }
  h1, h2, h3, h4, h5, h6 { text-shadow: 2px 1px 3px #110704; }
  h1{ text-transform: uppercase; }

  hr{ border-top: 1px solid whitesmoke !important; }

  .b-icon{ color: whitesmoke; }

  small{ color: lightblue; }

  @media only screen and (max-width: 400px) {
    .hide-r{ display: none; }
  }
</style>
