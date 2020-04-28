<template>
  <div class="col-lg-8 col-12 offset-lg-2">
    <card shadow>
      <div class="card-header">
        <div class="row">
          <div class="col-2">
            <router-link to="/" class="ni ni-fat-remove ni-2x text-theme"></router-link>
          </div>
          <div class="text-center col-8">
            <h2 class="text-fern">Create a New Calendar</h2>
          </div>
        </div>
      </div>
      <div class="card-body">
        <form-calendar
          v-on:onSubmit="onSubmit"
          :calendar.sync="calendar"
          :submitting.sync="submitting"
        ></form-calendar>
      </div>
    </card>
  </div>
</template>

<script>
import FormCalendar from "@/components/Calendars/FormCalendar";
import { calendarModel } from "@/models/Calendars";
export default {
  name: "NewCalendar",
  components: {
    FormCalendar
  },
  data() {
    return {
      calendar: calendarModel,
      loading: true,
      submitting: false
    };
  },
  methods: {
    onSubmit() {
      console.log(this.calendar);
    },
    onComplete: function() {
      alert("Yay. Done!");
    }
  }
};
</script>

<style>
</style>