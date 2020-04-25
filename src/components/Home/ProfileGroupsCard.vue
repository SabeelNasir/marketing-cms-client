<template>
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
            <span class="mr-2">
              <i class="fa fa-plus-square"></i>
            </span>
            <router-link to="/profile-groups/new" class="calendar-name">Add New Profile Group</router-link>
          </li>
          <li class="list-group-item mb-3 rounded" v-for="item in profileGroups" :key="item._id">
            <span class="mr-2">
              <i class="fa fa-calendar fa-fw"></i>
            </span>
            <router-link
              :to="'/profile-groups/'+item._id+'/edit'"
              class="calendar-name"
            >{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </template>
  </home-card>
</template>

<script>
import { getProfileGroups } from "@/services/profileGroupService.js";
export default {
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

<style>
</style>