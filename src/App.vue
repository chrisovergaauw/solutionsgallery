<template>
  <div id="app">
    <s-g-nav-bar></s-g-nav-bar>
    <section id="divider"></section>
    <my-hero></my-hero>
    <showcase></showcase>
    <show-code></show-code>
    <gallery></gallery>
  </div>
</template>

<script>

import SGNavbar from './components/SGNavbar'
import ContactCard from './components/ContactCard'
import MyHero from './components/MyHero'
import Gallery from './components/Gallery'
import Showcase from './components/Showcase'
import Stolen from './components/Stolen'

export default {
  name: 'App',
  data () {
    return {challenges: this.$challenges}
  },
  components: {
    ContactCard,
    SGNavBar: SGNavbar,
    MyHero: MyHero,
    Showcase: Showcase,
    Gallery: Gallery,
    Stolen: Stolen }
}
</script>

<style lang="css">
  @import '../node_modules/bulma/css/bulma.css';

  body {
    perspective: 1px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    background-image: url("../assets/bg.jpg");
  }

  #diver {
    height: 0.5vh;
  }
</style>
