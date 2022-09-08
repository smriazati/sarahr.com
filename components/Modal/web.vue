<template>
  <div>
    <div class="text-wrapper">
      <h2 v-if="item.fields.name" class="display-style">
        {{ item.fields.name }}
      </h2>
      <div v-if="item.fields.list">
        <ul class="flex-row ul-plain">
          <li
            v-for="(item, index) in item.fields.list"
            :key="index"
            class="large-text-style"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div v-if="item.fields.brief">
        <h3 class="title-style">The Brief</h3>
        <p class="large-text-style">{{ item.fields.brief }}</p>
      </div>
      <div v-if="item.fields.role">
        <h3 class="title-style">What I Did</h3>
        <p class="large-text-style">{{ item.fields.role }}</p>
      </div>
      <div v-if="item.fields.linkURL">
        <a :href="item.fields.linkURL" target="_blank" class="btn-primary"
          ><span>View site</span></a
        >
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