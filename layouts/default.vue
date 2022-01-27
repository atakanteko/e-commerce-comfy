<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default {
  name: 'DefaultLayout',
  components: { Footer, Navbar },
  mounted() {
    this.$store.dispatch('products_context/fetchProducts');
  },
};
</script>
