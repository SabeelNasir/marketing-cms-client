<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form ref="calendarForm" @submit.prevent="handleSubmit(onSubmit)">
      <div class="form-group">
        <ValidationProvider name="Profile Group" rules="required" v-slot="{ errors }">
          <label for="profileGroup" class="form-control-label">Profile Group</label>
          <br />
          <el-select
            :loading="loadingGroups"
            :loadingText="'Loading Groups'"
            id="profileGroup"
            v-model="calendar.profileGroup._id"
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
        <ValidationProvider name="Calendar Name" rules="required" v-slot="{ errors }">
          <label for="Name" class="form-control-label">Calendar Name</label>
          <input v-model="calendar.name" class="form-control" />
          <p class="text-danger">{{errors[0]}}</p>
        </ValidationProvider>
      </div>
      <div class="form-group">
        <ValidationProvider name="Timezone" rules="required" v-slot="{ errors }">
          <label for="Timezone" class="form-control-label">Calendar Time Zone</label>
          <el-select
            id="timeZone"
            v-model="calendar.timeZone"
            placeholder="Select Time Zone"
            filterable
          >
            <el-option
              v-for="item in worldTimeZones"
              :key="item.text"
              :value="item.text"
              :label="item.text"
            ></el-option>
          </el-select>
          <p class="text-danger">{{errors[0]}}</p>
        </ValidationProvider>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { getProfileGroups } from "@/services/profileGroupService";
const timeZonesJson = require("@/utils/world_timezones.json");
export default {
  name: "FormCalendar",
  props: ["calendar", "submitting"],
  data: () => ({
    profileGroups: [],
    loadingGroups: false,
    worldTimeZones: timeZonesJson
  }),
  mounted() {
    this.getProfileGroups();
  },

  methods: {
    async getProfileGroups() {
      this.loadingGroups = true;
      this.profileGroups = await getProfileGroups();
      this.loadingGroups = false;
    },
    onSubmit() {
      return new Promise((resolve, reject) => {
        this.$emit("onSubmit", this.calendar);
        reject(false);
      });
    }
  }
};
</script>

<style>
.el-select {
  width: 100%;
}
.actions {
  text-align: right;
}
.notices {
  color: #d0021b;
  font-size: 12px;
  white-space: normal;
}
</style>