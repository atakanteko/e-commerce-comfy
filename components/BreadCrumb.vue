<template>
  <section>
    <div class="section-center">
      <h3>
        <NuxtLink to="/">
          Home
        </NuxtLink> /
        <NuxtLink v-if="product" to="/products">
          Products /
        </NuxtLink> {{ title }}
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    title: {
      type: String,
      default: '',
    },
    product: {
      type: String,
      default: null,
    },
  },
};
</script>
<style scoped>
section{
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
}
a {
  color: var(--clr-primary-3);
  padding: 0.5rem;
  transition: var(--transition);
}
a:hover {
  color: var(--clr-primary-1);
}

</style>
