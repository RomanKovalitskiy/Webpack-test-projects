<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <img src="/assets/img/webpack.jpeg">
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: null
    }
  },
  created(){
    this.message = this.$store.getters.getMessage;
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    color: green;
  }
</style>
