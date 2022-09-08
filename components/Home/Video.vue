<template>
  <div class="video-wrapper">
    <button v-if="!isPlaying" class="btn-plain">Play</button>
    <video
      preload="auto"
      ref="video"
      class="btn"
      @click="toggleVid"
      loop="true"
    >
      <source src="/media/input.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
    };
  },
  methods: {
    toggleVid() {
      let vid = this.$refs.video;
      if (vid.paused) {
        vid.play();
        vid.playbackRate = (Math.random() * 1.4 + 0.8).toFixed(1);
        this.isPlaying = true;
        // console.log(vid.playbackRate);
      } else {
        vid.pause();
        this.isPlaying = false;
      }
    },
  },
};
</script>

<style scoped>
.video-wrapper {
  max-width: 100%;
  overflow: hidden;
}

.video-wrapper button {
  position: fixed;
  bottom: 10%;
  right: 10%;
}
.video-wrapper:hover {
  cursor: pointer;
}
</style>