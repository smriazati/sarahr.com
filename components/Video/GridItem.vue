<template>
  <div class="video-grid-item" ref="item" @click="openModal(item)">
    <div v-if="item.fields.Thumbnail" class="image-wrapper" ref="img">
      <img :src="item.fields.Thumbnail[0].thumbnails.large.url" alt="" />
    </div>
    <div class="text-wrapper">
      <h2 v-if="item.fields.Name" class="h2">{{ item.fields.Name }}</h2>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openModal(payload) {
      this.$store.commit("modal/setActiveModal", payload);
    },
  },
};
</script>