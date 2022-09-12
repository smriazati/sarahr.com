<template>
  <div class="video-grid">
    <GridItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      :id="item.fields.urlslug"
    />
  </div>
</template>

<script>
import GridItem from "./GridItem.vue";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: { GridItem },
};
</script>

<style lang="scss">
$transition-image-hover-transform: 0.8s ease all;
$transition-image-hover-bg: 0.5s ease all;
$bg-overlay-color: rgba(50, 48, 57, 0.5);
.video-grid {
  background: #000;
  display: grid;
  max-width: 100vw;
  overflow: hidden;
  grid-template-columns: repeat(3, 33vw);
  grid-auto-rows: 33vw;
  @media (min-width: 600px) and (max-width: $collapse-bp) {
    grid-template-columns: repeat(2, 50vw);
    grid-auto-rows: 50vw;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
  grid-gap: 1px;
  .video-grid-item {
    @include stackedDivs;
    overflow: hidden;
    .text-wrapper {
      z-index: 11;
      position: relative;
      color: rgba(255, 255, 255, 1);
      transition: $transition-image-hover-bg;
      display: flex;
      justify-content: center;
      align-items: center;
      h2 {
        position: relative;
        z-index: 12;
        text-align: center;
        padding-left: $spacer;
        padding-right: $spacer;
      }
      &:before {
        content: "";
        position: absolute;
        z-index: 11;
        top: 0;
        left: 0;
        min-width: 100%;
        min-height: 100%;
        transition: $transition-image-hover-bg;
        background: $bg-overlay-color;
      }
    }
    .image-wrapper {
      img {
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        transition: $transition-image-hover-transform;
        filter: grayscale(1) blur(3px);
      }
    }
    &:hover {
      cursor: pointer;
      .text-wrapper h2 {
        color: rgba(255, 255, 255, 0);
      }
      .text-wrapper:before {
        background: rgba(0, 0, 0, 0);
      }
      .image-wrapper img {
        object-position: 20% 50%;
        filter: grayscale(0) blur(0px);
      }
    }
  }
}
</style>