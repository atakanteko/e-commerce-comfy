<template>
  <main>
    <Loading v-if="getSingleProductLoadingStatus" />
    <Error v-else-if="getSingleProductErrorStatus" />
    <div v-else>
      <BreadCrumb :title="getSingleProduct.name" product="Products" />
      <div class="section section-center page">
        <NuxtLink to="/products" class="btn">
          back to products
        </NuxtLink>
        <div class="products-center" style="display:flex; margin-top: 30px;">
          <ProductImages :product-images="getSingleProduct.images ? getSingleProduct.images : [{url:''}]" />
          <section class="content">
            <h2>{{ getSingleProduct.name }}</h2>
            <Stars
              :stars="getSingleProduct.stars"
              :reviews="getSingleProduct.reviews"
            />
            <h5 class="price">
              {{ getPrice }}
            </h5>
            <p class="desc">
              {{ getSingleProduct.description }}
            </p>
            <p class="info">
              <span>Available : </span>
              {{ stockStatus }}
            </p>
            <p class="info">
              <span>SKU : </span>
              {{ getSingleProduct.id }}
            </p>
            <p class="info">
              <span>Brand : </span>
              {{ getSingleProduct.company }}
            </p>
            <hr>
            <AddToCart v-if="getSingleProduct.stock > 0" />
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import BreadCrumb from '../../../components/BreadCrumb';
import { formatPrice } from '../../../utils/helpers';
import ProductImages from '../../../components/ProductImages';
import Stars from '../../../components/Stars';
import AddToCart from '../../../components/Home/AddToCart';

export default {
  name: 'SingleProduct',
  components: {
    AddToCart,
    Stars,
    ProductImages,
    Loading,
    Error,
    BreadCrumb,
  },
  data() {
    return {
      price: null,
    };
  },
  computed: {
    ...mapGetters('products_context', ['getSingleProduct', 'getSingleProductLoadingStatus', 'getSingleProductErrorStatus']),
    stockStatus() {
      return this.getSingleProduct.stock > 0 ? 'In stock' : 'out of stock'.i;
    },
    getPrice() {
      return formatPrice(this.getSingleProduct.price);
    },
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
