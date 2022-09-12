<template>
  <div :class="activeModal ? 'show' : 'hide'" class="modal" ref="top">
    <div class="close-overlay" @click="closeModal()"></div>
    <div class="wrapper" v-if="activeModal">
      <div class="flex-col">
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
  data() {
    return {
      prevScrollY: 0,
    };
  },
  watch: {
    activeModal() {
      if (this.activeModal) {
        this.scrollToModal();
      } else {
        this.scrollToPrev();
      }
    },
  },
  methods: {
    scrollToModal() {
      this.prevScrollY =
        document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(this.prevScrollY);
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    scrollToPrev() {
      document.body.scrollTop = this.prevScrollY;
      document.documentElement.scrollTop = this.prevScrollY;
    },
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
  position: absolute;
  top: 0;
  left: 0;
  z-index: 399;
  width: 100%;
  height: 100%;
  // color: white;
  &.hide {
    display: none;
  }

  .close-overlay {
    background: rgba(255, 255, 255, 0.95);
    position: fixed;
    width: 100%;
    height: 100%;
    &:hover {
      cursor: pointer;
    }
  }
  .wrapper {
    // @include contained;
    width: auto;
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
    // width: 980px;
    // @media (max-width: 980px) {
    //   width: auto;
    // }
    position: relative;
    border: 1px solid black;
    background: #fff;
    border: 1px solid white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    > *:not(:last-child) {
      margin-bottom: 30px;
    }

    button {
      flex: 0 0 30px;
      padding: 0.5rem;
      align-self: flex-end;
    }

    .embed-wrapper {
      width: 1280px;
      @media (max-width: 1280px) {
        width: auto;
      }
    }
  }
  p {
    max-width: 50ch;
  }
}
</style>