<template>
  <div class="row">
    <home-card>
      <template slot="header">
        <i class="fa fa-calendar fa-fw"></i>Calendars
      </template>
      <template slot="body">
        <div class="row">
          <div class="col-sm-1">
            <i class="fa fa-plus-square fa-fw"></i>
          </div>
          <div class="col-sm-11">
            <router-link to="/calendars/new" class="newCalendar">Add New Calendar</router-link>
          </div>
        </div>
      </template>
    </home-card>
    <home-card>
      <template slot="header">
        <i class="fa fa-paper fa-fw"></i>Post Overview
      </template>
    </home-card>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.newCalendar {
  color: green;
}
.newCalendar:hover {
  text-decoration-line: underline;
}
</style>
