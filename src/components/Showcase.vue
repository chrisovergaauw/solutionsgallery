<template>
  <article class="media">
    <div class="media-content">
      <div class="content is-centered">
        <div id="showcase"></div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Showcase',
  data () {
    return {}
  }
}
</script>

<style scoped>
  #showcase {
    text-align: center;
  }

  #showcase button {
    color: #f1f7fa;
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>
