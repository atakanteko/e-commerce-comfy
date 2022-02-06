<template>
  <div>
    <h5
      v-if="$store.getters['products_context/getFilterProducts'].length < 1"
      style="text-transform: none"
    >
      Sorry, no products matched your search...
    </h5>
    <GridView
      v-else-if="$store.getters['filter_context/getGridViewStatus']"
      :products="$store.getters['products_context/getFilterProducts']"
    />
    <ListView
      v-else
      :products="$store.getters['products_context/getFilterProducts']"
    />
  </div>
</template>

<script>
import GridView from './GridView';
import ListView from './ListView';

export default {
  name: 'ProductList',
  components: { ListView, GridView },
};
</script>
<style scoped></style>
