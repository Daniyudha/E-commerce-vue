<template>
  <div id="app">
    <Nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style>
@import "assets/css/about.css";
@import "assets/css/bootstrap.css";
/* @import "assets/css/checkout.css"; */
@import "assets/css/contact.css";
@import "assets/css/creditly.css";
@import "assets/css/easy-responsive-tabs.css";
@import "assets/css/flexslider.css";
@import "assets/css/font-awesome.css";
@import "assets/css/jquery-ui1.css";
@import "assets/css/shop.css";
@import "assets/css/style.css";
@import "assets/css/style7.css";


</style>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
    components: {
        Nav,
        Footer
    }
}
</script>
