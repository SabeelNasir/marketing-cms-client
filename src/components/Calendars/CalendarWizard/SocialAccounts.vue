<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th colspan="2">Social Accounts</th>
        <th class="actions">
          <span>Actions</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr data-service="facebook" class v-for="item in socialAccountsJson" :key="item.name">
        <td class="name">
          <span>
            <img :src="item.icon" class="mr-2" />
            {{item.name}}
          </span>
        </td>
        <td class="notices"></td>
        <td class="actions">
          <a href="#" class="btn btn-sm btn-primary">Connect</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const socialAccountsJsonFromFile = require("@/utils/social_accounts.json");
export default {
  name: "SocialAccounts",
  data: () => ({
    socialAccountsJson: socialAccountsJsonFromFile
  })
};
</script>

<style>
</style>