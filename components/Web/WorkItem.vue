<template>
  <div class="text-wrapper">
    <h3 v-if="item.fields.name" class="display-style">
      {{ item.fields.name }}
    </h3>
    <p v-if="item.fields.tagline">{{ item.fields.tagline }}</p>
    <div class="flex-row">
      <a :href="item.fields.linkURL" target="_blank" class="btn-primary">
        <span>View site</span>
      </a>
      <button class="btn-plain btn-primary" @click="openModal(item)">
        <span>See details</span>
      </button>
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