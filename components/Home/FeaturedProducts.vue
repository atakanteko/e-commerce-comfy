<template>
  <h1>FeaturedProducts</h1>
</template>

<script>
import mapGetters from 'vuex/dist/vuex.mjs';

export default {
  name: 'FeaturedProducts',
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
.featured {
  margin: 4rem auto;
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
