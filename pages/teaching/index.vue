<template>
  <main class="contained page-margin teaching">
    <!-- <section class="page-intro">
      <TeachingBio />
    </section> -->
    <ul class="card-list" v-if="items">
      <li v-for="item in items" :key="item.id" class="card-item">
        <TeachingItem :item="item" />
      </li>
    </ul>
  </main>
</template>
    
<script>
export default {
  head() {
    return {
      title: "College Teaching",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "description",
          content:
            "College courses in creative production topics, like video production, creative coding and motion graphics.",
        },
      ],
    };
  },
  asyncData({ $axios }) {
    const tableID = "tblGLFq17tAZ1N1K8";
    return $axios
      .get(`/${tableID}?view=ItemsAPIView`)
      .then((res) => {
        let items = res.data.records;
        return { items: items };
      })
      .catch((e) => {
        error({ statusCode: 404, message: "Post not found" });
      });
  },
};
</script>
    
<style lang="scss">
.teaching {
  .card-list li {
    flex: 0 0 48%;
  }
}
</style>