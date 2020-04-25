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
            <h2 class="text-fern">Edit Profile Group</h2>
          </div>
        </div>
      </div>
      <div class="card-body">
        <form-profile-group v-if="!loading" :profileGroup="profileGroup" />
      </div>
    </div>
  </div>
</template>

<script>
import FormProfileGroup from "@/components/ProfileGroups/FormProfileGroup";
import { getProfileGroup } from "@/services/profileGroupService";
export default {
  name: "EditProfileGroup",
  components: {
    FormProfileGroup
  },
  data() {
    return {
      profileGroup: null,
      loading: true
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
  }
};
</script>

<style>
</style>