<template>
  <div class="products-container">
    <Product v-for="(element, index) in products" :key="index" :product="element" />
  </div>
</template>

<script>
import Product from './Product';

export default {
  name: 'GridView',
  components: {
    Product,
  },
  props: {
    products: {
      type: Array,
      default: null,
    },
  },
};
</script>
<style scoped lang="scss">
img {
  height: 175px;
}

.products-container {
  display: grid;
  gap: 2rem 1.5rem;
}

@media (min-width: 992px) {
  .products-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1170px) {
  .products-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
