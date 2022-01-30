<template>
  <main>
    <BreadCrumb title="products" />
    <div class="page">
      <div class="section-center products">
        <h2>Filters</h2>
        <div>
          <SortComponent />
          <ProductList />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import BreadCrumb from '../../components/BreadCrumb';
import ProductList from '../../components/ProductList';
import SortComponent from '../../components/Sort';

export default {
  name: 'Products',
  components: { SortComponent, ProductList, BreadCrumb },
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
