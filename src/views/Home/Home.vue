<template>
  <div class="row">
    <!--Profile Groups-->
    <profile-groups-card />
    <!--Calendars-->
    <calendars-card />
    <!--Post Overview-->
    <post-overview-card />
  </div>
</template>

<script>
import CalendarsCard from "@/components/Home/CalendarsCard";
import ProfileGroupsCard from "@/components/Home/ProfileGroupsCard";
import PostOverviewCard from "@/components/Home/PostOverviewCard";
export default {
  name: "Home",
  components: {
    CalendarsCard,
    ProfileGroupsCard,
    PostOverviewCard
  }
};
</script>

<style>
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
.list-group-item i {
  color: #5eae6d;
}
.bg-fern {
  background-color: #5eae6d;
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
