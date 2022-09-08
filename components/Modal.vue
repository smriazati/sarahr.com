<template>
  <div :class="activeModal ? 'show' : 'hide'" class="modal">
    <div class="close-overlay" @click="closeModal()"></div>
    <div class="wrapper" v-if="activeModal">
      <div class="flex-row flex-row-reverse space-between">
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

        <div v-if="modalType === 'videoanimation'">
          <ModalVideo :item="activeModal" />
        </div>

        <div v-if="modalType === 'web'">
          <ModalWeb :item="activeModal" />
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.addEventListeners();
  },
  computed: {
    modalType() {
      return this.$route.name;
    },
    ...mapState("modal", {
      activeModal: (state) => state.activeModal,
    }),
  },
  methods: {
    addEventListeners() {
      document.onkeydown = (evt) => {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
          isEscape = evt.key === "Escape" || evt.key === "Esc";
        } else {
          isEscape = evt.keyCode === 27;
        }
        if (isEscape && this.activeModal) {
          this.closeModal();
        }
      };
    },
    closeModal() {
      this.$store.commit("modal/unsetActiveModal");
    },
  },
};
</script>
  
<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 399;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  // color: white;
  &.hide {
    display: none;
  }

  .close-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    &:hover {
      cursor: pointer;
    }
  }
  .wrapper {
    @include contained;
    position: relative;
    border: 1px solid black;
    background: rgba(228, 228, 228, 0.9);
    border: 1px solid white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    > *:not(:last-child) {
      margin-bottom: 30px;
    }

    button {
      flex: 0 0 30px;
    }
  }
  .text-wrapper {
    > *:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    p {
      max-width: 50ch;
    }
  }
}
</style>