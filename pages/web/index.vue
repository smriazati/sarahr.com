<template>
  <main class="contained page-margin">
    <section class="page-intro">
      <WebBio />
    </section>
    <section>
      <Modal />
      <h2 class="section-title">Recent projects</h2>
      <ul v-if="items" class="web-grid">
        <li v-for="item in items" :key="item.id" class="item">
          <WebWorkItem :item="item" />
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
.page-intro {
  border: 1px solid black;
  max-width: 90ch;
  padding: 2rem;
  margin-bottom: 2rem;
}
.section-title {
  text-transform: none;
  margin-bottom: 1rem;
}
.web-grid {
  // padding-left: 1rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  li {
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
    margin-left: 0;
    background: rgb(223, 222, 222);
    a,
    button {
      padding: 0;
      display: flex;
    }
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
    .text-wrapper {
      > *:not(:first-child) {
        margin-top: 8px;
      }
      > .flex-row > *:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
}
</style>