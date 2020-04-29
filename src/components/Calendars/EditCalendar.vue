<template>
  <calendar-wizard v-on:onSubmit="onSubmit">
    <form-calendar v-on:onSubmit="onSubmit" :calendar.sync="calendar" :submitting.sync="submitting"></form-calendar>
  </calendar-wizard>
</template>
<script>
import FormCalendar from "@/components/Calendars/FormCalendar";
import { calendarModel } from "@/models/Calendars";
import { saveCalendar, getCalendar } from "@/services/calendarService.js";
export default {
  name: "EditCalendar",
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
  mounted() {
    this.loading = true;
    getCalendar(this.$route.params.id)
      .then(data => {
        this.calendar = data;
        this.loading = false;
      })
      .catch(error => {
        console.log("errorrr : " + error);
        this.loading = false;
      });
  },
  methods: {
    onSubmit() {
      this.submitting = true;
      console.log(this.calendar);
      setTimeout(() => {
        this.$router.push({
          path: `/calendars/${this.$route.params.id}/wizard/social_accounts`
        });
      }, 2000);
      this.submitting = false;
    }
  }
};
</script>

<style>
</style>