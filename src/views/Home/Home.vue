<template>
  <div class="row">
    <!--Profile Groups-->
    <home-card>
      <template slot="header">
        <span>
          <i class="fa fa-users fa-fw"></i>
        </span>
        <span class="ml-2">Profile Groups</span>
      </template>
      <template slot="body">
        <div class="row">
          <ul class="list-group w-100">
            <li class="list-group-item mb-3 rounded new-calendar">
              <i class="fa fa-plus-square mr-2"></i>
              <router-link to="/profile-group/new" class="calendar-name">Add New Profile Group</router-link>
            </li>
            <li class="list-group-item mb-3 rounded" v-for="item in profileGroups" :key="item._id">
              <i class="fa fa-calendar fa-fw mr-2"></i>
              <router-link :to="'/profile-groups/'+item._id" class="calendar-name">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </template>
    </home-card>
    <!--Calendars-->
    <home-card>
      <template slot="header">
        <span>
          <i class="ni ni-calendar-grid-58 fa-fw"></i>
        </span>
        <span class="ml-2">Calendars</span>
      </template>
      <template slot="body">
        <div class="row">
          <ul class="list-group w-100">
            <li class="list-group-item mb-3 rounded new-calendar">
              <i class="fa fa-plus-square mr-2"></i>
              <router-link to="/calendars/new" class="calendar-name">Add New Calendar</router-link>
            </li>
            <li class="list-group-item bg-lighter rounded align-items-center">
              <img src="img/app/master-calendar.png" class="rounded-circle list-group-img" />
              <router-link to="/calendars/master" class="calendar-name">Master Calendar</router-link>
            </li>
          </ul>
        </div>
      </template>
    </home-card>
    <!--Post Overview-->
    <home-card>
      <template slot="header">
        <i class="ni ni-tv-2 fa-fw"></i>
        <span class="ml-2">Post Overview</span>
      </template>
    </home-card>
  </div>
</template>

<script>
import { getProfileGroups } from "@/services/profileGroupService.js";
export default {
  name: "Home",
  data() {
    return {
      profileGroups: []
    };
  },
  mounted() {
    getProfileGroups()
      .then(data => (this.profileGroups = data))
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.list-group-img {
  height: 2rem;
  width: 2rem;
}
.list-group-item {
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 6px;
  display: flex;
  height: 40px;
  margin-bottom: 16px;
  max-width: 100%;
  padding: 0 16px;
}
.list-group-item a {
  color: #212121;
  line-height: 40px;
}
.list-group-item a:hover {
  text-decoration-line: underline;
}
.calendar-name {
  color: #212121;
  line-height: 40px;
  overflow: hidden;
  padding: 8px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.new-calendar {
  background-color: #ffffff;
}
</style>
