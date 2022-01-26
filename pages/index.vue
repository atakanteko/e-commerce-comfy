<template>
  <main>
    <Hero />
    <FeaturedProducts />
    <Services />
    <Contact />
  </main>
</template>

<script>
import Hero from '../components/Home/Hero';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import Contact from '../components/Home/Contact';
import Services from '../components/Home/Services';

export default {
  name: 'IndexPage',
  components: {
    Hero,
    FeaturedProducts,
    Contact,
    Services,
  },
};
</script>
