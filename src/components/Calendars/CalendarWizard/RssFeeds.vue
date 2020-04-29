<template>
  <div class="border-dark">
    <h4>Rss Feeds</h4>
  </div>
</template>

<script>
import CalendarModel from "@/models/Calendars";
export default {
  name: "RssFeeds",
  props: ["calendar"],
  data: () => ({
    calendarForm: CalendarModel
  })
};
</script>

<style>
</style>