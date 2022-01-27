<template>
  <main>
    <Loading v-if="getSingleProductLoadingStatus" />
    <Error v-else-if="getSingleProductErrorStatus" />
    <h4 v-else>
      single product page
    </h4>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';

export default {
  name: 'SingleProduct',
  components: {
    Loading,
    Error,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters('products_context', ['getSingleProduct', 'getSingleProductLoadingStatus', 'getSingleProductErrorStatus']),
  },
  mounted() {
    this.fetchSingleItem(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetchSingleItem: 'products_context/fetchSingleProduct',
    }),
  },
};
</script>
<style scoped>
.product-center {
  display: grid;
  gap: 4rem;
  margin-top: 2rem;
}
.price {
  color: var(--clr-primary-5);
}
.desc {
  line-height: 2;
  max-width: 45em;
}
.info {
  text-transform: capitalize;
  width: 300px;
  display: grid;
  grid-template-columns: 125px 1fr;
}
.info span {
  font-weight: 700;
}

@media (min-width: 992px) {
  .product-center {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .price {
    font-size: 1.25rem;
  }
}
</style>
