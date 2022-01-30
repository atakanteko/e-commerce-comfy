<template>
  <main>
    <BreadCrumb title="products" />
    <div class="page">
      <div class="section-center products">
        <h2>Filters</h2>
        <div>
          <h2>Sort</h2>
          <ProductList />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import BreadCrumb from '../../components/BreadCrumb';
import ProductList from '../../components/ProductList';

export default {
  name: 'Products',
  components: { ProductList, BreadCrumb },
};
</script>
<style scoped lang="scss">
.products {
  display: grid;
  gap: 3rem 1.5rem;
  margin: 4rem auto;
}
@media (min-width: 768px) {
  .products {
    grid-template-columns: 200px 1fr;
  }
}
</style>
