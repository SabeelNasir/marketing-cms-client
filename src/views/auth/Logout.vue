<script>
/* eslint-disable */
export default {
  name: "Logout",
  created() {
    this.$store.dispatch("auth/logout").then(() => {
      this.$router.push({ name: "login" });
    });
  }
};
</script>