<template>
      <div v-on:click="initCanvas" ref="canvas">test</div>
</template>
<script>
/* eslint-disable */
import p5 from 'p5'
import "p5/lib/addons/p5.dom.min"
import "p5/lib/addons/p5.sound.min";
export default {
  name: 'Stolen',
  data: function () {
    return {
      script: null,
      ps: null,
      x: 0,
      y: 0,
      canvas: null
    }
  },
  mounted () {
    this.script = p => {
      this.x = 100
      this.y = 100

      p.setup = _ => {
        this.canvas = p.createCanvas(600, 420)
        this.canvas.parent(document.getElementById('showcase'))
        p.frameRate(60)
      }

      p.draw = _ => {
        console.log('draw')
        p.background(0)
        p.fill(255)
        p.rect(this.x, this.y, 50, 50)
        this.x++
        if (this.x > 200) {
          this.x = 100
        }
      }
    }
  },
  methods: {
    initCanvas: function () {
      if (!this.ps) {
        window.testScript = require('../challenges/dots/dots').sketchy
        console.log(window.testScript)
        window.p5Canvas = new p5(window.testScript)
        console.log('ps from instance')
        console.log(this.ps)
      }
    }
  }
}
</script>
