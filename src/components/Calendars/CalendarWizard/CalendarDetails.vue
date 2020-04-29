<template>
  <form-calendar :calendar.sync="calendar" :submitting.sync="submitting"></form-calendar>
</template>
<script>
import FormCalendar from "@/components/Calendars/FormCalendar";
import { calendarModel } from "@/models/Calendars";
import { updateCalendar, getCalendar } from "@/services/calendarService.js";
export default {
  name: "CalendarDetails",
  components: {
    FormCalendar
  },
  props: ["isSubmitting"],
  data() {
    return {
      calendar: calendarModel,
      loading: true,
      submitting: false
    };
  },
  mounted() {
    this.loading = true;
    getCalendar(this.$route.params.id).then(data => {
      this.calendar = data;
      this.loading = false;
    });
  },
  methods: {
    async onSubmit() {
      this.$emit("update:isSubmitting", true);
      this.submitting = true;
      await updateCalendar(this.$route.params.id, this.calendar);
      this.submitting = false;
      this.$router.push({
        path: `/calendars/${this.$route.params.id}/wizard/social_accounts`
      });
    }
  }
};
</script>

<style>
</style>