<template>
  <article>
    <div class="container">
      <img :src="image" :alt="name">
      <Nuxt-link :to="{name: 'products-id', params: { id:id } }" class="link">
        <outline-eye-icon />
      </Nuxt-link>
      <footer>
        <h5>{{ name }}</h5>
        <p>{{ formattedPrice }}₺</p>
      </footer>
    </div>
  </article>
</template>

<script>
import { formatPrice } from '../utils/helpers';

export default {
  name: 'ProductComponent',
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      category: this.product.category,
      colors: this.product.colors,
      company: this.product.company,
      description: this.product.description,
      featured: this.product.featured,
      id: this.product.id,
      image: this.product.image,
      name: this.product.name,
      price: this.product.price,
      shipping: this.product.shipping,
      formattedPrice: null,
    };
  },
  mounted() {
    this.formattedPrice = formatPrice(this.price);
  },
};
</script>
<style scoped>
.container {
  position: relative;
  border-radius: var(--radius);
}
img {
  height: 200px;
  width: 100%;
  display: block;
  object-fit: cover;
  border-radius: var(--radius);
  transition: var(--transition);
}
.link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--clr-primary-5);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  transition: var(--transition);
  opacity: 0;
  cursor: pointer;
  font-size: 1.25rem;
  color: var(--clr-white);
}
.container:hover img {
  opacity: 0.5;
}
.container:hover .link {
  opacity: 1;
}
footer {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
footer h5,
footer p {
  margin-bottom: 0;
  font-weight: 400;
}

footer p {
  color: var(--clr-primary-5);
  letter-spacing: var(--spacing);
}
</style>
