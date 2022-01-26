<template>
  <nav>
    <div class="nav-center">
      <div class="nav-header">
        <NuxtLink to="/">
          <img id="navbar-logo" src="../assets/logo.svg" alt="comfy sloth">
        </NuxtLink>
        <ul class="nav-links">
          <li v-for="(item,index) in routes" id="navbar-link" :key="index">
            <NuxtLink :to="item.path">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
        <CartButton />
      </div>
    </div>
  </nav>
</template>

<script>
import { links } from '../utils/links';
import CartButton from './CartButton';

export default {
  name: 'Navbar',
  components: {
    CartButton,
  },
  data() {
    return {
      routes: links,
    };
  },
};
</script>
<style scoped>
nav{
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-center{
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
.nav-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-header img {
  width: 175px;
  margin-left: -15px;
}
.nav-links {
  display: none;
}

@media (min-width: 992px) {
  .nav-links {
    display: flex;
    justify-content: center;
  }
  .nav-links li{
    margin: 0 0.5rem;
  }
  .nav-links a {
    color: var(--clr-grey-3);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    padding: 0.5rem;
  }
  .nav-links a:hover{
    border-bottom: 2px solid var(--clr-primary-7);
  }
}

</style>
