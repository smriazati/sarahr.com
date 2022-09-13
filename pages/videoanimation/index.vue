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
  head() {
    return {
      title: "Commercial Video & Animation",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Portfolio of branded content, behind-the-scenes videos and motion graphics.",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.items[0].fields.Thumbnail[0].thumbnails.large.url,
        },
      ],
    };
  },
  asyncData({ $axios }) {
    const tableID = "tblfxfdvDX7gMJJG8";
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
  