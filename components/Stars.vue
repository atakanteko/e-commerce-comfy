<template>
  <div class="rating">
    <outline-star-icon
      v-for="(star, index) in 5"
      :key="index"
      src="../assets/star.svg"
      :alt="index + 'star'"
      :class="{ 'active': star <= stars }"
      class="star"
    />
    <span style="display: inline-block">({{ reviews }} customer reviews)</span>
  </div>
</template>

<script>

export default {
  name: 'Stars',
  props: {
    stars: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style lang="scss" scoped>
$active-color: #f3d23e;
.rating {
  display: flex;
  font-size: 22px;
  color: #a7a8a8;
  align-items: center;
  margin-bottom: 5px;
  span {
    color: #a7a8a8;
    font-size: 1rem;
    margin-left: 1rem;
  }
  .star {
     display: inline-block;
     width: 20px;
     height: 30px;
     color: #a7a8a8;
   }
  .active {
      color: $active-color;
  }
}

</style>
