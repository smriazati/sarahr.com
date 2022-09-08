<template>
  <div>
    <div class="text-wrapper">
      <h2 v-if="item.fields.Name">
        {{ item.fields.Name }}
      </h2>
      <p v-if="item.fields.Description">
        {{ item.fields.Description }}
      </p>
    </div>
    <div v-if="item.fields.embed" class="embed-wrapper">
      <div v-html="item.fields.embed"></div>
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