<template>
  <section>
    <div class="colors">
      <span> colors : </span>
      <div id="buttons">
        <button
          v-for="(item, index) in product.colors"
          :key="index"
          :style="{backgroundColor: item}"
          class="color-btn"
          @click="setCurrentColor(index)"
        >
          <outline-check-icon v-if="mainColor === index" style="color: white" />
        </button>
      </div>
    </div>
    <div class="btn-container" style="margin-top: 20px;">
      <AmountButtons :stock="product.stock" />
      <NuxtLink to="/cart" class="btn">
        add to cart
      </NuxtLink>
    </div>
  </section>
</template>

<script>
import AmountButtons from './AmountButtons';

export default {
  name: 'AddToCart',
  components: { AmountButtons },
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      currentColor: 0,
    };
  },
  computed: {
    mainColor() {
      return this.currentColor;
    },
  },
  methods: {
    setCurrentColor(index) {
      this.currentColor = index;
    },
  },
};
</script>

<style scoped lang="scss">
section{
   margin-top: 20px;;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    #buttons{
      display: flex;
      .color-btn {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        margin-right: 0.5rem;
        border: none;
        cursor: pointer;
        opacity: 0.5;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

span {
  text-transform: capitalize;
  font-weight: 700;
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
