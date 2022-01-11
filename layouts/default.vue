<template>
  <div>
    <Navbar />
    <Sidebar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

export default {
  name: 'DefaultLayout',
  components: { Sidebar, Footer, Navbar },
};
</script>
