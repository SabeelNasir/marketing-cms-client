<template>
  <form @submit.prevent="onSubmit()">
    <div class="form-group">
      <label class="form-control-label">Name</label>
      <input class="form-control" v-model="profileGroup.name" />
    </div>
  </form>
</template>

<script>
export default {
  name: "FormProfileGroup",
  props: {
    profileGroup: {
      type: Object,
      default: () => {
        return {
          name: null
        };
      }
    }
  },
  created() {},
  methods: {}
};
</script>

<style>
</style>