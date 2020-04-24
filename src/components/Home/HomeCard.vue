<template>
  <div class="col-xl-4 col-sm-12">
    <div class="card">
      <div class="card-header">
        <slot name="header"></slot>
      </div>
      <div class="card-body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCard"
};
</script>

<style>
</style>