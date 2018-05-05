<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container has-text-centered-mobile">
      <div class="navbar-brand is-hidden-touch">
        <div class="navbar-item ">Chris Overgaauw</div>
      </div>
      <div class="navbar-end is-inline-flex-touch">

        <div class="navbar-item">
          <a v-bind:href="this.$contactDetails.linkedin">
            <font-awesome-icon :icon="['fab', 'linkedin']"/>
          </a>
        </div>
        <div class="navbar-item">
          <a v-bind:href="this.$contactDetails.github">
            <font-awesome-icon :icon="['fab', 'github']"/>
          </a>
        </div>

        <div class="navbar-item">
          <a v-bind:href="this.$contactDetails.instagram">
            <font-awesome-icon :icon="['fab', 'instagram']"/>
          </a>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'SGNavbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#selfie {
  border-radius: 50%;
}

.navbar {
  background-color: transparent;
}
.navbar-brand {
  background-color: rgba(0,0,0,0.3);
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
}
.navbar-end {
  background-color: rgba(0,0,0,0.3);
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
}
a {
  color: #f1f7fa;
}
.navbar-brand .navbar-item {
  color: #f1f7fa;
}
</style>
