<template>
  <section style="margin-right: 40px;">
    <img :src="getMainImageUrl" alt="main image" class="main">
    <div class="gallery">
      <img
        v-for="(item, index) in smallImages"
        :key="index"
        :src="item.url"
        :alt="item.filename"
        :class="{active: getMainImageUrl === item.url}"
        @click="changeMainImage(item.url)"
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductImages',
  props: {
    productImages: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      mainImage: null,
      smallImages: null,
    };
  },
  computed: {
    getMainImageUrl() {
      return this.mainImage;
    },
  },
  mounted() {
    this.mainImage = this.productImages[0].url;
    this.smallImages = this.productImages;
  },
  methods: {
    changeMainImage(url) {
      this.mainImage = url;
    },
  },
};
</script>
<style scoped>
section{

}

.main {
  height: 600px;
  width: 580px;
}
img {
  width: 100%;
  display: block;
  border-radius: var(--radius);
  object-fit: cover;
}
.gallery {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
}
.gallery img {
  height: 100px;
  cursor: pointer;
}

.active {
  box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
}
@media (max-width: 576px) {
  .main {
    height: 300px;
  }
  .gallery img {
    height: 50px;
  }
}
@media (min-width: 992px) {
  .main {
    height: 500px;
  }
  .gallery img {
    height: 75px;
  }
}
</style>
