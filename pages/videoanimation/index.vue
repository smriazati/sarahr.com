<template>
  <main class="">
    <section>
      <Modal />
      <div v-if="items">
        <VideoGrid :items="items" />
      </div>
    </section>
  </main>
</template>
  
  <script>
export default {
  asyncData({ $axios }) {
    const tableID = "tblgMrpbXDAKNBUNZ";
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
  