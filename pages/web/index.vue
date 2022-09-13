<template>
  <main class="contained page-margin">
    <section class="page-intro">
      <WebBio />
    </section>
    <section>
      <Modal />
      <h2 class="section-title">Recent projects</h2>
      <ul v-if="items" class="card-list">
        <li v-for="item in items" :key="item.id" class="card-item">
          <WebItem :item="item" />
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: "Web Development & UX Design",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "description",
          content: "Front-end web development and UX design portfolio.",
        },
      ],
    };
  },
  asyncData({ $axios }) {
    const tableID = "tbl67dj6N8D52nQIe";
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
</style>