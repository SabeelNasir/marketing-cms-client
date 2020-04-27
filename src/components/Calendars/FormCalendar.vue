<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit($emit('onSubmit',calendar))">
      <div class="form-group">
        <ValidationProvider name="Profile Group" rules="required" v-slot="{ errors }">
          <label for="profileGroup" class="form-control-label">Profile Group</label>
          <br />
          <el-select
            :loading="loadingGroups"
            :loadingText="'Loading Groups'"
            id="profileGroup"
            v-model="calendar.profileGroupId"
            placeholder="Profile Group"
            filterable
          >
            <el-option
              v-for="group in profileGroups"
              :key="group._id"
              :value="group._id"
              :label="group.name"
            ></el-option>
          </el-select>
          <p class="text-danger">{{ errors[0] }}</p>
        </ValidationProvider>
      </div>
      <div class="form-group">
        <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
          <label for="Name" class="form-control-label">Name</label>
          <input v-model="calendar.name" class="form-control" />
          <p class="text-danger">{{errors[0]}}</p>
        </ValidationProvider>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" type="submit">
          <i class="fa fa-spinner fa-spin" v-if="submitting"></i>
          {{calendar._id ? 'Edit' : 'Create'}}
        </button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { getProfileGroups } from "@/services/profileGroupService";
export default {
  name: "FormCalendar",
  props: ["calendar", "submitting"],
  data: () => ({
    profileGroups: [],
    loadingGroups: false
  }),
  mounted() {
    this.getProfileGroups();
  },
  methods: {
    async getProfileGroups() {
      this.loadingGroups = true;
      this.profileGroups = await getProfileGroups();
      this.loadingGroups = false;
    }
  }
};
</script>

<style scoped>
.el-select {
  width: 100%;
}
</style>