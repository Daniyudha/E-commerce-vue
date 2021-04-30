<template>
  <div class="home">
    <Banner/>
    <Grid/>
    <Properties/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Grid from '@/components/Grid.vue'
import Properties from '../components/properties.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Grid,
    Properties
  }
}
</script>
