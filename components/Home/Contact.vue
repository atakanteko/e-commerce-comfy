<template>
  <section>
    <div class="section-center">
      <h3>join our newsletter and get 20%</h3>
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quia.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam asperiores enim
          eveniet ipsam neque quos ratione saepe unde voluptas!
        </p>
      </div>
      <form class="contact-form">
        <input type="text" class="form-input" placeholder="enter email">
        <button type="button" class="submit-btn">
          subscribe
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactComponent',
};
</script>
<style lang="scss" scoped>

section{
  padding: 5rem 0;
}
h3 {
  text-transform: none;
}
p {
  line-height: 2;
  max-width: 45em;
  color: var(--clr-grey-5);
}
.contact-form {
  width: 90vw;
  max-width: 500px;
  display: grid;
  grid-template-columns: 1fr auto;
}

.form-input,
.submit-btn {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--clr-black);
}
.form-input {
  border-right: none;
  color: var(--clr-grey-3);
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
}
.submit-btn {
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}
.form-input::placeholder {
  color: var(--clr-black);
  text-transform: capitalize;
}
.submit-btn {
  background: var(--clr-primary-5);
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  cursor: pointer;
  transition: var(--transition);
  color: var(--clr-black);
}
.submit-btn:hover {
  color: var(--clr-white);
}
@media (min-width: 992px) {
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 8rem;
    margin-top: 2rem;
  }
  p {
    margin-bottom: 0;
  }
}
@media (min-width: 1280px) {
  section{
    padding: 15rem 0;
  }
}
</style>
