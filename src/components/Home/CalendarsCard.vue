<template>
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
            <span class="rounded-circle bg-fern pr-2 pl-2 pb-1 mr-2">
              <i class="fa fa-eye text-white pt-2"></i>
            </span>
            <router-link to="/calendars/master" class="calendar-name">Master Calendar</router-link>
          </li>
        </ul>
      </div>
    </template>
  </home-card>
</template>

<script>
export default {};
</script>

<style>
</style>