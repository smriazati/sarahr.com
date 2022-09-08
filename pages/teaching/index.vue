<template>
  <main class="contained">
    <SiteComingSoon />
  </main>
</template>
    
    <script>
export default {
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
    