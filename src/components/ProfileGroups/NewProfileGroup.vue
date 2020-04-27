<template>
  <div class="container">
    <div class="col-lg-6 col-12 offset-lg-3">
      <div class="card" shadow>
        <div class="card-header">
          <div class="row">
            <div class="col-2">
              <router-link to="/" class="ni ni-fat-remove ni-2x text-theme"></router-link>
            </div>
            <div class="text-center col-8">
              <h2 class="text-fern">Create a New Profile Group</h2>
            </div>
          </div>
        </div>
        <div class="card-body">
          <form-profile-group
            v-on:onSubmit="onSubmit"
            :profileGroup.sync="profileGroup"
            :submitting.sync="submitting"
          ></form-profile-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { saveProfileGroup } from "@/services/profileGroupService";
import FormProfileGroup from "@/components/ProfileGroups/FormProfileGroup";
export default {
  name: "NewProfileGroup",
  components: {
    FormProfileGroup
  },
  data() {
    return {
      profileGroup: {
        name: null,
        ageRange: [0, 20],
        language: null,
        gender: []
      },
      loading: true,
      submitting: false
    };
  },
  methods: {
    onSubmit(data) {
      this.submitting = true;
      saveProfileGroup(this.profileGroup)
        .then(() => {
          this.$message({
            message: `Profile Group Saved`,
            type: "success"
          });
          this.$router.push({ path: "/" });
        })
        .finally(() => {
          this.submitting = false;
        });
    }
  }
};
</script>

<style scoped>
</style>