<template>
  <div>
    <div class="card" shadow>
      <div class="card-header">
        <div class="row">
          <div class="col-2">
            <router-link to="/">
              <i class="ni ni-fat-remove ni-2x text-theme"></i>
            </router-link>
          </div>
          <div class="text-center col-8">
            <h2 class="text-fern">Create a New Profile Group</h2>
          </div>
        </div>
      </div>
      <div class="card-body">
        <form-profile-group />
      </div>
    </div>
  </div>
</template>

<script>
import FormProfileGroup from "@/components/ProfileGroups/FormProfileGroup";
export default {
  name: "NewProfileGroup",
  components: {
    FormProfileGroup
  }
};
</script>

<style scoped>
</style>