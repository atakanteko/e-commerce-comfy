<template>
  <main class="page-100">
    <section>
      <h1>404</h1>
      <h3>Sorry, the page you tried cannot be found</h3>
      <nuxt-link to="/">
        back home
      </nuxt-link>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'error',
};
</script>
<style scoped>
main{
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1 {
  font-size: 10rem;
}
h3 {
  text-transform: none;
  margin-bottom: 2rem;
}
</style>
