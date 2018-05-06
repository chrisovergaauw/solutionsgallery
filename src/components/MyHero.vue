<template>
  <section class="hero is-medium" v-on:click="setSketch" id="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Solutions Gallery
          by Chris Overgaauw
        </h1>
        <h2 class="subtitle">
          This gallery is inspired by the coding train challenges.
        </h2>
        <div class="has-text-centered">
          <a class="button is-rounded" id="mainActionButton" v-bind:href="this.$contactDetails.linkedin"><b>Contact me on LinkedIn</b></a>
          <p class="is-hidden-desktop">or</p>
          <a class="button is-rounded" id="secondaryActionButton" href="http://thecodingtrain.com"><u>Visit the coding train</u></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'MyHero',
  data () {
    return this.$contactDetails
  },
  methods: {
    setSketch: function () {
      window.p5Canvas.noLoop()
      this.ps = this.$store.state
      console.log('ps from store: ')
      console.log(this.ps)
      console.log('setting sketch to this.ps')
      this.$store.commit('setSketch', this.ps)
    }
  }
}
</script>

<style scoped>
  .hero {
    background-color: rgba(0, 0, 0, 0.3);
    margin-top: 8rem;
    margin-bottom: 8rem;
  }

  .hero .hero-body {
    text-align: center;
  }

  .hero .hero-body .title,
  .hero .hero-body .subtitle,
  .hero p{
    color: #f1f7fa;
  }

  #mainActionButton{
    background: none;
    color: #f1f7fa;
    border: 3px solid #f1f7fa;
  }

  #secondaryActionButton {
    background: none;
    color: #f1f7fa;
    border: none;

  }
</style>
