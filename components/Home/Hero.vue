<template>
  <section class="section-center">
    <article class="content">
      <h1>
        design your <br>
        comfort zone
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio est,
        eveniet ex incidunt ipsum natus possimus quibusdam repellendus voluptas!Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Corporis distinctio est, eveniet ex incidunt ipsum natus possimus quibusdam repellendus voluptas!
      </p>
      <NuxtLink to="/products" class="btn hero-btn">
        shop now
      </NuxtLink>
    </article>
    <article class="img-container">
      <img src="../../assets/hero-bcg.jpeg" alt="nice table" class="main-img">
      <img src="../../assets/hero-bcg-2.jpeg" alt="person working" class="accent-img">
    </article>
  </section>
</template>

<script>
export default {
  name: 'Hero',
};
</script>
<style scoped>
  section{
    min-height: 60vh;
    display: grid;
    place-items: center;
  }
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
@media (min-width: 992px) {
  section{
  height: calc(100vh - 5rem);
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  }
  h1 {
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.25rem;
  }
  .hero-btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
  .img-container {
    display: block;
    position: relative;
  }
  .main-img {
    width: 100%;
    height: 550px;
    position: relative;
    border-radius: var(--radius);
    display: block;
    object-fit: cover;
  }
  .accent-img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 250px;
    transform: translateX(-50%);
    border-radius: var(--radius);
  }
  .img-container::before {
    content: '';
    position: absolute;
    width: 10%;
    height: 80%;
    background: var(--clr-primary-9);
    bottom: 0;
    left: -8%;
    border-radius: var(--radius);
  }
}
</style>
