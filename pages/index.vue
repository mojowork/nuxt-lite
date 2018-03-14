<template>
  <section class="container">
    <AppLogo />
    <div class="alert alert-primary" >
      This is a primary alert—check it out!
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
</style>
