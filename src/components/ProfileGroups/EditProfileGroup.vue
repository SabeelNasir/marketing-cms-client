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
              <h2 class="text-fern">Edit Profile Group</h2>
            </div>
          </div>
        </div>
        <div class="card-body">
          <form-profile-group
            v-if="!loading"
            :profileGroup.sync="profileGroup"
            v-on:onSubmit="onSubmit"
            :submitting.sync="submitting"
          ></form-profile-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormProfileGroup from "@/components/ProfileGroups/FormProfileGroup";
import {
  getProfileGroup,
  updateProfileGroup
} from "@/services/profileGroupService";
export default {
  name: "EditProfileGroup",
  components: {
    FormProfileGroup
  },
  data() {
    return {
      profileGroup: null,
      loading: true,
      submitting: false
    };
  },
  mounted() {
    this.loading = true;
    getProfileGroup(this.$route.params.id)
      .then(data => {
        this.profileGroup = data;
        this.loading = false;
      })
      .catch(error => {
        console.log("errorrr : " + error);
        this.loading = false;
      });
  },
  methods: {
    onSubmit(data) {
      this.submitting = true;
      updateProfileGroup(this.profileGroup._id, this.profileGroup)
        .then(() => {
          this.submitting = false;
          this.$message({
            message: `${this.profileGroup.name} Updated`,
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

<style>
</style>