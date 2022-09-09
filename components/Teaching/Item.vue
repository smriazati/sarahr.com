<template>
  <div class="text-wrapper">
    <h2 v-if="item.fields.Name">{{ item.fields.Name }}</h2>
    <h3 v-if="item.fields.Institution">{{ item.fields.Institution }}</h3>
    <h4 v-if="item.fields.Department">{{ item.fields.Department }}</h4>
    <p v-if="item.fields.Types">{{ item.fields.Types[0] }}</p>
    <p v-if="item.fields.Terms">
      <span
        v-for="(term, index) in item.fields.Terms"
        :key="index"
        class="pill"
        >{{ term }}</span
      >
    </p>
    <p>{{ item.fields.Description }}</p>
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