<template>
  <section>
    <article class="header section-center">
      <h3>
        custom furniture <br>
        built only for you
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aperiam cupiditate dolor error illum,
        neque nihil nulla pariatur perferendis porro qui quia quod rem saepe sunt tempora vel voluptatum.
      </p>
    </article>
  </section>
</template>

<script>

export default {
  name: 'ServicesComponent',
};
</script>
<style scoped>
section{
  background: var(--clr-primary-10);
}
h3,
h4 {
  color: var(--clr-primary-1);
}
.header h3 {
  margin-bottom: 2rem;
}
p {
  margin-bottom: 0;
  line-height: 1.8;
  color: var(--clr-primary-3);
}
.services-center {
  margin-top: 4rem;
  display: grid;
  gap: 2.5rem;
}
.service {
  background: var(--clr-primary-7);
  text-align: center;
  padding: 2.5rem 2rem;
  border-radius: var(--radius);
}
.service p {
  color: var(--clr-primary-2);
}
span {
  width: 4rem;
  height: 4rem;
  display: grid;
  margin: 0 auto;
  place-items: center;
  margin-bottom: 1rem;
  border-radius: 50%;
  background: var(--clr-primary-10);
  color: var(--clr-primary-1);
}
@media (min-width: 992px) {
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 576px) {
  .services-center {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
}
@media (min-width: 1280px) {
  section{
    padding: 0;
  }
}
</style>
