<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="'static/img/' + challenge + '.png'" alt="Placeholder image">
        <!--<img src="../challenges/dots/10-line-maze2.png" alt="Placeholder image">-->
      </figure>
    </div>
    <div class="card-content">
      <div class="media" style="display: none">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content" >
          <p class="title is-4">John Smith</p>
          <p class="subtitle is-6">@johnsmith</p>
        </div>
      </div>

      <div class="content" id="tagDiv"><span v-html="description"></span><br>
        <span v-for="tag in tags" v-bind:key="tag" class="tag is-black is-right">{{tag}}</span>
        <br>
        <a class="button is-warning is-outlined" v-on:click="setCanvas(challenge)">Showcase</a>
        <time datetime="2016-1-1" style="display: none">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
</template>

<script>
import P5 from 'p5'
import 'p5/lib/addons/p5.dom.min'
import 'p5/lib/addons/p5.sound.min'

export default {
  name: 'P5Card',
  props: ['challenge'],
  data () {
    return {}
  },
  methods: {
    setCanvas: function (challenge) {
      if (!window.p5Canvas) {
        window.testScript = require(`../challenges/${challenge}/${challenge}.js`).sketchInstance
        // window.p5Canvas = 'something'
        // this.description = require(`../challenges/${challenge}/${challenge}.js`).getDescription()
        this.$store.commit('showcase', true)
        this.$store.commit('sketch', challenge)
        window.p5Canvas = new P5(window.testScript, document.getElementById('showcase'))
        document.getElementById('showcase').scrollIntoView({behavior: 'smooth'})
      } else {
        window.p5Canvas.remove()
        window.p5Canvas = undefined
        this.$store.commit('showcase', false)
        this.$store.commit('sketch', undefined)
        this.setCanvas(challenge)
      }
    }
  },
  computed: {
    description: function () {
      return require(`../challenges/${this.challenge}/${this.challenge}.js`).getDescription()
    },
    tags: function () {
      return require(`../challenges/${this.challenge}/${this.challenge}.js`).getTags()
    }
  }
}

</script>

<style scoped>
  .card, .card-content {
    color: #f1f7fa;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .tag {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-right: 1rem;
  }
</style>
