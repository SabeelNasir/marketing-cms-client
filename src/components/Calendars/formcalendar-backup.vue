<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit($emit('onSubmit',calendar))">
      <form-wizard
        shape="tab"
        @on-complete="onComplete"
        stepSize="xs"
        :title="tabTitle"
        :subtitle="null"
        v-on:onComplete="onComplete"
        v-on:on-change="onTabChanged"
        :nextButtonText="nextButtonText"
        color="#5e72e4"
        :startIndex="startIndex"
      >
        <!--Calendar Details Tab-->
        <tab-content title="Details" icon="fa fa-user" :before-change="onSubmit">
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
        </tab-content>
        <tab-content title="Social Accounts" icon="fa fa-cog">
          <social-accounts :calendar.sync="calendar" />
        </tab-content>
        <tab-content title="Last step" icon="ti-check">Yuhuuu! This seems pretty damn simple</tab-content>
      </form-wizard>
    </form>
  </ValidationObserver>
</template>

<script>
import { getProfileGroups } from "@/services/profileGroupService";
import { SocialAccounts } from "@/components/Calendars/CalendarWizard";
const timeZonesJson = require("@/utils/world_timezones.json");
export default {
  name: "FormCalendarBackup",
  components: {
    SocialAccounts
  },
  props: ["calendar", "submitting"],
  data: () => ({
    profileGroups: [],
    loadingGroups: false,
    activeIndex: 0,
    tabTitle: "Set Calendar Details",
    worldTimeZones: timeZonesJson,
    nextButtonText: "Create Calendar & Continue",
    startIndex: 0
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
    onTabChanged(prevIndex, nextIndex) {
      this.activeIndex = nextIndex;
      switch (nextIndex) {
        case 0:
          this.tabTitle = "Set Calendar Details";
          if (this.calendar._id != null) {
            this.nextButtonText = "Update & Continue";
          } else {
            this.nextButtonText = "Create Calendar & Continue";
          }
          break;
        case 1:
          this.tabTitle = "Connect Social Accounts";
          this.nextButtonText = "Next";
          break;
        case 2:
          this.tabTitle = "Finalize";
          this.nextButtonText = "Finish";
          break;
      }
    },
    onComplete() {
      console.log("asdfasdf");
    },
    connectClicked(value) {
      console.log(value);
    },
    onSubmit() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("interval started");
          resolve(true);
        }, 3000);
      });
    }
  },
  watch: {
    activeIndex(value) {
      console.log("for title : " + value);
      switch (value) {
        case 0:
          this.tabTitle = "Set Calendar Details";
          break;
        case 1:
          this.tabTitle = "Connect Social Accounts";
          break;
        case 2:
          this.tabTitle = "Finalize";
          break;
      }
    },
    calendar(value) {
      this.$message.success(value.toString());
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