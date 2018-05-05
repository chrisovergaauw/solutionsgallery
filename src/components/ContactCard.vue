<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-8">
          <h1 class="title">Contact Details</h1>
          <ul>
            <li><b>name:</b> {{ fullName }}</li>
            <li><b>Date of Birth:</b> {{ dob }} ({{ age }})</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import moment from 'moment'

export default {
  name: 'contact-card',
  data () {
    return this.$contactDetails
  },
  computed: {
    age: function () {
      return moment().diff(this.dob, 'years', false)
    }
  }
}
</script>

<style scoped>

</style>
