<template>
  <div class="rating">
    <ul class="list">
      <li v-for="star in 5" :key="star" :class="{ 'active': star <= stars }" class="star">
        <Icon scale="1" :name="star <= stars ? 'star' : 'star-o'" />
      </li>
    </ul>
    <span style="display: inline-block">({{ reviews }} customer reviews)</span>
  </div>
</template>

<script>
import 'vue-awesome/icons/star';
import 'vue-awesome/icons/star-o';
import Icon from 'vue-awesome/components/Icon';

export default {
  name: 'Stars',
  components: { Icon },
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
span {
  color: #a7a8a8;
  font-size: 1rem;
  margin-left: 1rem;
  margin-bottom: 6px;
}
.rating {
  display: flex;
  font-size: 22px;
  color: #a7a8a8;
  align-items: center;
}
.list {
  margin: 0 0 5px 0;
  padding: 0;
  list-style-type: none;
&:hover {
.star {
  color: $active-color;
}
}
}
.star {
  display: inline-block;
  cursor: pointer;
&:hover {
&~.star {
&:not(.active) {
   color: inherit;
 }
}
}
}
.active {
  color: $active-color;
}

</style>
