<template>
  <div class="products-container">
    <article v-for="(element, index) in products" :key="index">
      <div class="container">
        <img :src="element.image" :alt="element.name">
        <Nuxt-link :to="{name: 'products-id', params: { id:element.id } }" class="link">
          <outline-eye-icon />
        </Nuxt-link>
        <footer>
          <h5>{{ element.name }}</h5>
          <!--          <p>{{ element.formattedPrice }}</p>-->
        </footer>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'GridView',
  props: {
    products: {
      type: Array,
      default: null,
    },
  },
};
</script>
<style scoped lang="scss">

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
