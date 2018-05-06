<template>
  <div>
    <!--<div class="control is-expanded has-text-centered">-->
        <!--<input class="input" type="text" placeholder="Normal input">-->
    <!--</div>-->
    <div class="columns is-centered" v-for="i in rowCount" :key="challenges[i]">
      <div v-for="chal in itemCountInRow(i)" :key="chal" class="column is-3">
        <P5Card :challenge="chal"></P5Card>
      </div>
    </div>
  </div>
</template>

<script>
import P5Card from './P5Card'
export default {
  name: 'Gallery',
  data () {
    return {
      challenges: this.$challenges,
      challengesPerRow: 3
    }
  },
  computed: {
    rowCount: function () {
      return Math.ceil(this.challenges.length / this.challengesPerRow)
    }
  },
  methods: {
    itemCountInRow: function (index) {
      return this.challenges.slice((index - 1) * this.challengesPerRow, index * this.challengesPerRow)
    }
  },
  components: {P5Card: P5Card}
}
</script>
<style scoped>
  /*.input{*/
    /*color: #f1f7fa;*/
    /*background-color: rgba(0, 0, 0, 0.3);*/
    /*border: none;*/
    /*width: 75vh;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
  /*}*/

  /*.control {*/
    /*text-align: center;*/
    /*margin-bottom: 1rem;*/
  /*}*/
</style>
