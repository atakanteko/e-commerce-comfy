<template>
  <section>
    <article v-for="(elem, index) in products" :key="index">
      <img :src="elem.image" :alt="elem.name">
      <div>
        <h4>{{ elem.name }}</h4>
        <h5 class="price">
          {{ getFormattedPrice(elem.price) }}
        </h5>
        <p>{{ elem.description.substring(0,150) }}...</p>
        <Nuxt-link :to="{name: 'products-id', params: { id:elem.id } }" class="btn">
          details
        </Nuxt-link>
      </div>
    </article>
  </section>
</template>

<script>
import { formatPrice } from '../utils/helpers';

export default {
  name: 'ListView',
  props: {
    products: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      formattedPrice: null,
    };
  },
  methods: {
    getFormattedPrice(price) {
      return formatPrice(price);
    },
  },
};
</script>
<style scoped lang="scss">
section{
  display: grid;
  row-gap: 3rem;
  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
}
</style>
