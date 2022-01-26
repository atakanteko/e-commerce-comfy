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
    <div class="services-center section-center">
      <article v-for="(item,index) in services" :key="index" class="service">
        <span class="icon"><outline-globe-alt-icon /></span>
        <h4>{{ item.title }}</h4>
        <p>{{ item.text }}</p>
      </article>
    </div>
  </section>
</template>

<script>
import { services } from '../../utils/services';

export default {
  name: 'ServicesComponent',
  data() {
    return {
      services,
    };
  },
};
</script>
<style scoped>
section{
  padding: 5rem 0;
  background: var(--clr-primary-10);
}
h3,
h4 {
  color: var(--clr-primary-1);
}
section .header h3 {
  margin-bottom: 2rem;
}
section p {
  margin-bottom: 0;
  line-height: 1.8;
  color: var(--clr-primary-3);
}
section .services-center {
  margin-top: 4rem;
  display: grid;
  gap: 2.5rem;
}
section .service {
  background: var(--clr-primary-7);
  text-align: center;
  padding: 2.5rem 2rem;
  border-radius: var(--radius);
}
.service p {
  color: var(--clr-primary-2);
}
section span {
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
    padding: 2rem 0;
  }
}
</style>
