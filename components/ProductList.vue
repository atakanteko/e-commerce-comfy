<template>
  <div>
    <h5
      v-if="getFilterProducts.length < 1"
      style="text-transform: none"
    >
      Sorry, no products matched your search...
    </h5>
    <GridView
      v-else-if="$store.getters['filter_context/getGridViewStatus']"
      :products="getFilterProducts"
    />
    <ListView
      v-else
      :products="getFilterProducts"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GridView from './GridView';
import ListView from './ListView';

export default {
  name: 'ProductList',
  components: { ListView, GridView },
  computed: {
    ...mapGetters('products_context', ['getFilterProducts']),

  },
};
</script>
<style scoped></style>
