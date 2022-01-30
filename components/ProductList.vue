<template>
  <div>
    <GridView :products="getFilterProducts" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GridView from './GridView';

export default {
  name: 'ProductList',
  components: { GridView },
  computed: {
    ...mapGetters('products_context', ['getFilterProducts']),
  },
};
</script>
<style scoped></style>
