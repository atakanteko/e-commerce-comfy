<template>
  <section>
    <div class="btn-container">
      <button type="button" :class="{'active':getGridViewStatus}" @click="gridView">
        <outline-view-grid-icon />
      </button>
      <button type="button" :class="{'active':!getGridViewStatus}" @click="listView">
        <outline-view-list-icon />
      </button>
    </div>
    <div>{{ getFilterProducts.length }} products found</div>
    <hr>
    <form>
      <label htmlFor="sort">sort by</label>
      <select id="sort" name="sort" class="sort-input" @change="changeOptionValue($event)">
        <option value="price-lowest">
          price (lowest)
        </option>
        <option value="price-highest">
          price (highest)
        </option>
        <option value="name-a" selected>
          name (a-z)
        </option>
        <option value="name-z">
          name (z-a)
        </option>
      </select>
    </form>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SortComponent',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters('filter_context', ['getGridViewStatus', 'getOptionValue']),
    ...mapGetters('products_context', ['getFilterProducts']),
  },
  methods: {
    ...mapActions({
      setViewType: 'filter_context/setIsGridView',
      setOptionValue: 'filter_context/setOptionValue',
      applySortFunctionality: 'products_context/applySortFunctionality',
    }),
    gridView() {
      this.setViewType(true);
    },
    listView() {
      this.setViewType(false);
    },
    changeOptionValue(event) {
      this.setOptionValue(event.target.value);
      this.applySortFunctionality({ value: this.getOptionValue, filteredProducts: this.getFilterProducts });
    },
  },
};
</script>
<style scoped lang="scss">
section{
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
      border-color: #2b9ef2;
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
}
</style>
