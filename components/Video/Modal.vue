<template>
  <div :class="item ? 'show' : 'hide'" class="video-modal modal">
    <div class="close-overlay" @click="closeModal()"></div>
    <div class="wrapper" v-if="item">
      <div class="flex-row flex-row-reverse">
        <button class="btn-plain flex-row" @click="closeModal()">
          <span class="visually-hidden">Close</span>
          <span class="icon icon-close"
            ><img
              src="/media/icon-close.svg"
              alt="x for close icon"
              width="30"
              height="30"
          /></span>
        </button>
        <div class="text-wrapper">
          <h2 v-if="item.fields.Name">{{ item.fields.Name }}</h2>
          <p v-if="item.fields.Description">{{ item.fields.Description }}</p>
        </div>
      </div>

      <div v-if="item.fields.embed" class="embed-wrapper">
        <div v-html="item.fields.embed"></div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("modal", {
      item: (state) => state.activeModal,
    }),
  },
  methods: {
    closeModal() {
      this.$store.commit("modal/unsetActiveModal");
    },
  },
};
</script>
