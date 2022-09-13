<template>
  <div>
    <div class="text-wrapper">
      <h2 v-if="item.fields.name" class="display-style">
        <span v-if="item.fields.linkURL">
          <a :href="item.fields.linkURL" target="_blank"
            ><span>{{ item.fields.name }}</span></a
          >
        </span>
        <span v-else>
          {{ item.fields.name }}
        </span>
      </h2>

      <div v-if="item.fields.linkURL">
        <a :href="item.fields.linkURL" target="_blank" class="btn-primary-big"
          ><span>View site</span></a
        >
      </div>
      <div v-if="item.fields.github">
        <a :href="item.fields.github" target="_blank" class="btn-primary-big"
          ><span>Github</span></a
        >
      </div>
      <div v-if="item.fields.brief">
        <h3 class="title-style">The Brief</h3>
        <p class="large-text-style">{{ item.fields.brief }}</p>
      </div>
      <div v-if="item.fields.role" class="text-wrapper">
        <h3 class="title-style">What I Did</h3>
        <div v-if="item.fields.list" class="flex-row align-center">
          <ul class="flex-row ul-plain">
            <li
              v-for="(item, index) in item.fields.list"
              :key="index"
              class="large-text-style pill"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <p class="large-text-style">{{ item.fields.role }}</p>
        <div v-if="item.fields.otherlove">
          <p>
            <a href="https://otherlove.co" target="_blank" class="pill"
              >Made with Otherlove</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style  scoped>
ul.flex-row > *:not(:last-child) {
  margin-right: 0.5rem;
}
</style>