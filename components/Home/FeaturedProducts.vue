<template>
  <section>
    <Loading v-if="getProductLoadingStatus" />
    <div v-else class="title">
      <h2>featured products</h2>
      <div class="underline" />
      <div class="section-center featured">
        <Product v-for="(product, index) in getFeaturedProducts[0]" :key="index" :product="product" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Loading from '../Loading';
import Product from '../Product';

export default {
  name: 'FeaturedProducts',
  components: {
    Loading,
    Product,
  },
  data() {
    return {
      product: this.getFeaturedProducts,
    };
  },
  computed: {
    ...mapGetters('products_context', ['getFeaturedProducts', 'getProductLoadingStatus']),
  },
};
</script>
<style scoped>
section{
  background: var(--clr-grey-10);
}
.title{
  padding-top: 2rem;
}
.featured {
  padding-bottom: 3rem;
  padding-top: 1rem;
  display: grid;
  gap: 2.5rem;
}
.featured img {
  height: 225px;
}
.btn {
  display: block;
  width: 148px;
  margin: 0 auto;
  text-align: center;
}
@media (min-width: 576px) {
  .featured {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
}
</style>
