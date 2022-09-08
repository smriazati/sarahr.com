<template>
  <main class="contained">
    <SiteComingSoon />
  </main>
</template>
  
  <script>
export default {
  asyncData({ $axios }) {
    const tableID = "tblHmGsoccl2fhkoA";
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
  