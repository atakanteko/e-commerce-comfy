<template>
  <h4>addToCart </h4>
</template>

<script>
export default {
  name: 'AddToCart',
};
</script>

<style scoped>
section{
  margin-top: 2rem;
}
.colors {
  display: grid;
  grid-template-columns: 125px 1fr;
  align-items: center;
  margin-bottom: 1rem;
}
div {
  display: flex;
}

span {
  text-transform: capitalize;
  font-weight: 700;
}

.color-btn {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: #222;
  margin-right: 0.5rem;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.active {
  opacity: 1;
}
.btn-container {
  margin-top: 2rem;
}

.btn {
  margin-top: 1rem;
  width: 140px;
}
</style>
