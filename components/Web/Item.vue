<template>
  <div class="text-wrapper">
    <h3 v-if="item.fields.name" class="display-style">
      {{ item.fields.name }}
    </h3>
    <p v-if="item.fields.tagline">{{ item.fields.tagline }}</p>
    <div class="flex-row">
      <a
        v-if="item.fields.linkURL"
        :href="item.fields.linkURL"
        target="_blank"
        class="btn-primary"
      >
        <span>View site</span>
      </a>
      <a
        v-if="item.fields.github"
        :href="item.fields.github"
        target="_blank"
        class="btn-primary"
      >
        <span>Github</span>
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