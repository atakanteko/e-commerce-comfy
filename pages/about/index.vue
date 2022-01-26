<template>
  <main>
    <BreadCrumb title="about" />
    <section class="page section section-center">
      <img id="about-img" src="@/assets/hero-bcg.jpeg" alt="about">
      <article style="margin-left: 15px">
        <div class="title">
          <h2>our story</h2>
          <div class="underline" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquid,
          aspernatur consequuntur corporis deleniti exercitationem expedita harum iusto libero
          minus natus neque obcaecati quisquam, recusandae reiciendis, saepe unde voluptatibus!
        </p>
      </article>
    </section>
  </main>
</template>

<script>
import BreadCrumb from '../../components/BreadCrumb';

export default {
  name: 'About',
  components: {
    BreadCrumb,
  },
};
</script>
<style scoped>
section{
  display: flex;
}
img {
  width: 100%;
  display: block;
  border-radius: var(--radius);
  height: 500px;
  object-fit: cover;
}
p {
  line-height: 2;
  max-width: 45em;
  margin: 0 auto;
  margin-top: 2rem;
  color: var(--clr-grey-5);
}
.title {
  text-align: left;
}
.underline {
  margin-left: 0;
}
</style>
