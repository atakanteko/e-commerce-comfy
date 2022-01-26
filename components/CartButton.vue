<template>
  <div class="frame">
    <NuxtLink to="/cart" class="cart-btn">
      Cart
      <span class="cart-container">
        <outline-shopping-cart-icon class="shopping-cart" />
        <span class="cart-value">12</span>
      </span>
    </NuxtLink>
    <button type="button" class="auth-btn">
      Login <outline-login-icon class="login-btn" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'CartButton',
};
</script>
<style scoped>
.login-btn{
  height: 1.6rem;
  width: 1.6rem;
  margin-left: 5px;
}
.shopping-cart{
  height: 1.6rem;
  width: 1.6rem;
  margin-left: 5px;
}
.frame {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
}
.cart-btn {
  color: var(--clr-grey-1);
  font-size: 1.5rem;
  letter-spacing: var(--spacing);
  display: flex;
  align-items: center;
}
.cart-container {
  display: flex;
  align-items: center;
  position: relative;
}

.cart-value {
  position: absolute;
  top: -10px;
  right: -16px;
  background: var(--clr-primary-5);
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 0.75rem;
  color: var(--clr-white);
  padding: 12px;
}
.auth-btn {
  display: flex;
  align-items: center;
  background: transparent;
  border-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--clr-grey-1);
  letter-spacing: var(--spacing);
}
</style>
