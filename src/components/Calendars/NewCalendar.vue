<template>
  <calendar-wizard v-on:onSubmit="onSubmit" :submitting.sync="submitting">
    <form-calendar :calendar.sync="calendar" :submitting.sync="submitting"></form-calendar>
  </calendar-wizard>
</template>

<script>
import FormCalendar from "@/components/Calendars/FormCalendar";
import { CalendarWizard } from "@/components/Calendars/CalendarWizard";
import { calendarModel } from "@/models/Calendars";
import { saveCalendar } from "@/services/calendarService.js";
export default {
  name: "NewCalendar",
  components: {
    FormCalendar,
    CalendarWizard
  },
  data() {
    return {
      calendar: calendarModel,
      loading: true,
      submitting: false
    };
  },
  methods: {
    async onSubmit() {
      this.submitting = true;
      const { _id } = await saveCalendar(this.calendar);
      this.submitting = false;
      this.$router.push({
        path: `/calendars/${_id}/wizard/social_accounts`
      });
    }
  }
};
</script>

<style>
</style>