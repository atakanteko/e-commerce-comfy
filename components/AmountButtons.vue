<template>
  <div class="addCart-buttons">
    <button :disabled="getCurrentAmount===1" @click="decreaseAmount">
      <outline-minus-icon style="color: black;width: 25px" />
    </button>
    <h2>{{ getCurrentAmount }}</h2>
    <button @click="increaseAmount">
      <outline-plus-icon style="color: black;width: 25px" />
    </button>
  </div>
</template>

<script>

export default {
  name: 'AmountButtons',
  props: {
    stock: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      amount: 1,
      stockStatus: false,
    };
  },
  computed: {
    getCurrentAmount() {
      return this.amount;
    },
  },
  methods: {
    increaseAmount() {
      if (this.stock > this.amount) {
        this.amount++;
      } else {
        this.stockStatus = true;
      }
    },
    decreaseAmount() {
      this.amount--;
    },
  },
};
</script>

<style scoped lang="scss">
.addCart-buttons{
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button{
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
