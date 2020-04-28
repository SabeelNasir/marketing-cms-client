<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit($emit('onSubmit',calendar))">
      <form-wizard
        @on-complete="onComplete"
        stepSize="xs"
        :title="tabTitle"
        :subtitle="null"
        v-on:on-complete="()=>{}"
        v-on:on-change="onTabChanged"
        color="#5e72e4"
      >
        <tab-content title="Details" icon="fa fa-user">
          <div class="form-group">
            <ValidationProvider name="Profile Group" rules="required" v-slot="{ errors }">
              <label for="profileGroup" class="form-control-label">Profile Group</label>
              <br />
              <el-select
                :loading="loadingGroups"
                :loadingText="'Loading Groups'"
                id="profileGroup"
                v-model="calendar.profileGroupId"
                placeholder="Profile Group"
                filterable
              >
                <el-option
                  v-for="group in profileGroups"
                  :key="group._id"
                  :value="group._id"
                  :label="group.name"
                ></el-option>
              </el-select>
              <p class="text-danger">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
              <label for="Name" class="form-control-label">Name</label>
              <input v-model="calendar.name" class="form-control" />
              <p class="text-danger">{{errors[0]}}</p>
            </ValidationProvider>
          </div>
          <!-- <div class="form-group">
            <button class="btn btn-primary" type="submit">
              <i class="fa fa-spinner fa-spin" v-if="submitting"></i>
              {{calendar._id ? 'Edit' : 'Create'}}
            </button>
          </div>-->
        </tab-content>
        <tab-content title="Social Accounts" icon="fa fa-cog">
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
              <tr data-service="facebook" class>
                <td class="name">
                  <span>
                    <img
                      src="//cdn.loomly.com/assets/social_logos/facebook-logo-round@2x-cd0c7ee46f539737c059ddc81df6213923d5203253b946807e79bf73c80ab6cc.png"
                    />Facebook for Posts
                  </span>
                </td>
                <td class="notices"></td>
                <td class="actions">
                  <a
                    class="button x-small load-modal"
                    data-url="/calendars/146899/identities/connect_warning_modal?return_to=%2Fcalendars%2F146899%2Fwizard%2Fsocial_accounts&amp;service=facebook"
                    href="#"
                  >Connect</a>
                </td>
              </tr>

              <tr data-service="facebook_for_ads" class>
                <td class="name">
                  <span>Facebook for Ads</span>
                </td>
                <td class="notices"></td>
                <td class="actions">
                  <a
                    class="button x-small load-modal"
                    data-url="/calendars/146899/identities/connect_warning_modal?return_to=%2Fcalendars%2F146899%2Fwizard%2Fsocial_accounts&amp;service=facebook_for_ads"
                    href="#"
                  >Connect</a>
                </td>
              </tr>

              <tr data-service="twitter" class>
                <td class="name">
                  <span>
                    <img
                      src="//cdn.loomly.com/assets/social_logos/twitter-logo-round@2x-e9f41d3ec463d9430dd62659503c6f1e2181bb5143458783742d07a96021e243.png"
                    />Twitter
                  </span>
                </td>
                <td class="notices"></td>
                <td class="actions">
                  <a
                    class="button x-small"
                    href="/calendars/146899/identities/connect/twitter?return_to=%2Fcalendars%2F146899%2Fwizard%2Fsocial_accounts"
                  >Connect</a>
                </td>
              </tr>

              <tr data-service="facebook_for_instagram" class>
                <td class="name">
                  <span>
                    <img
                      src="//cdn.loomly.com/assets/social_logos/instagram-logo-round@2x-31ae5aea3041bef867000f221bb75fc7e2157161e77303c137d3bf1d3b9b391a.png"
                    />Instagram
                  </span>
                </td>
                <td class="notices">
                  <div class="instagram-facebook-notice">
                    Automated publishing available through Zapier
                    (
                    <a
                      target="_blank"
                      href="https://intercom.help/loomly/en/articles/3530899-how-to-publish-to-instagram-with-zapier"
                    >learn more</a>)
                    or manual publishing through the Loomly
                    <a
                      href="https://intercom.help/loomly/en/articles/3434409-how-do-i-publish-to-instagram-using-reminders"
                    >mobile apps</a>.
                    <br />Native publishing will be available this year: we are getting there and truly appreciate your patience.
                  </div>
                </td>
                <td class="actions">
                  <a
                    class="button x-small load-modal"
                    data-url="/calendars/146899/identities/connect_warning_modal?return_to=%2Fcalendars%2F146899%2Fwizard%2Fsocial_accounts&amp;service=facebook_for_instagram"
                    href="#"
                  >Connect</a>
                </td>
              </tr>

              <tr data-service="pinterest" class>
                <td class="name">
                  <span>
                    <img
                      src="//cdn.loomly.com/assets/social_logos/pinterest-logo-round@2x-68ac9165b7a125a923261461e00bfc6f322fdd081145970cc9b55fb6afd6f32d.png"
                    />Pinterest
                  </span>
                </td>
                <td class="notices"></td>
                <td class="actions">
                  <a
                    class="button x-small load-modal"
                    data-url="/calendars/146899/identities/connect_warning_modal?return_to=%2Fcalendars%2F146899%2Fwizard%2Fsocial_accounts&amp;service=pinterest"
                    href="#"
                  >Connect</a>
                </td>
              </tr>

              <tr data-service="linkedin" class>
                <td class="name">
                  <span>
                    <img
                      src="//cdn.loomly.com/assets/social_logos/linkedin-logo-round@2x-e13c1b74ccc8331fc488cae8a9fd1d9b076c8c6f0ba1dcb22435f0dd4e8f16d3.png"
                    />LinkedIn
                  </span>
                </td>
                <td class="notices"></td>
                <td class="actions">
                  <a
                    class="button x-small"
                    href="/calendars/146899/identities/connect/linkedin?return_to=%2Fcalendars%2F146899%2Fwizard%2Fsocial_accounts"
                  >Connect</a>
                </td>
              </tr>

              <tr data-service="google" class>
                <td class="name">
                  <span>
                    <img
                      src="//cdn.loomly.com/assets/social_logos/google-logo-round@2x-ffff8a2bf6d689200f3052b207e26aca62bf76e25d050239b9644da9b1e0baa1.png"
                    />Google My Business
                  </span>
                </td>
                <td class="notices"></td>
                <td class="actions">
                  <a
                    class="button x-small"
                    href="/calendars/146899/identities/connect/google?return_to=%2Fcalendars%2F146899%2Fwizard%2Fsocial_accounts"
                  >Connect</a>
                </td>
              </tr>

              <tr data-service="tiktok" class>
                <td class="name">
                  <span>
                    <img
                      src="//cdn.loomly.com/assets/social_logos/tiktok-logo-round@2x-03948eb26aeaaaf87caeb6535b27a80d011be34e6018d54e87ef0f8813f94050.png"
                    />TikTok
                  </span>
                </td>
                <td class="notices"></td>
                <td class="actions">
                  <a
                    class="button x-small load-modal"
                    data-url="/calendars/146899/identities/manual_connection_modal/tiktok?return_to=%2Fcalendars%2F146899%2Fwizard%2Fsocial_accounts"
                    href="#"
                  >Connect</a>
                </td>
              </tr>

              <tr data-service="youtube" class>
                <td class="name">
                  <span>
                    <img
                      src="//cdn.loomly.com/assets/social_logos/youtube-logo-round@2x-f3cf722741debd4585d74ca8a89eb7f9c861b0aa2e507ae8bb1374e2c2e3f419.png"
                    />YouTube (Beta)
                  </span>
                </td>
                <td class="notices"></td>
                <td class="actions">
                  <a
                    class="button x-small"
                    rel="nofollow"
                    data-method="post"
                    href="/calendars/146899/request-feature?id=youtube&amp;return_to=%2Fcalendars%2F146899%2Fwizard%2Fsocial_accounts"
                  >Request Access</a>
                </td>
              </tr>
            </tbody>
          </table>
        </tab-content>
        <tab-content title="Last step" icon="ti-check">Yuhuuu! This seems pretty damn simple</tab-content>
        <!-- <template slot="footer" scope="props">
          <div class="wizard-footer-right">
            <wizard-button
              v-if="props.activeTabIndex == 0"
              :style="props.fillButtonStyle"
              @click.native="props.nextTab()"
              class="btn btn-primary"
            >Create Calendar & Continue</wizard-button>
          </div>
          <div class="wizard-footer-left">
            <wizard-button
              v-if="props.activeTabIndex > 0"
              :style="props.fillButtonStyle"
              @click.native="props.prevTab()"
              class="btn btn-primary"
            >Previous</wizard-button>
          </div>
          <div class="wizard-footer-right">
            <wizard-button
              v-if="props.activeTabIndex > 0 && !props.isLastStep"
              :style="props.fillButtonStyle"
              class="btn btn-primary"
              @click.native="props.nextTab()"
            >Next</wizard-button>
          </div>
          <div class="wizard-footer-right">
            <wizard-button
              v-if="props.isLastStep"
              @click.native="alert('Done')"
              class="btn btn-primary"
              :style="props.fillButtonStyle"
            >{{props.isLastStep ? 'Done' : 'Next'}}</wizard-button>
          </div>
        </template> -->
      </form-wizard>
    </form>
  </ValidationObserver>
</template>

<script>
import { getProfileGroups } from "@/services/profileGroupService";
// :nextButtonText="activeTabIndex == 0 ? 'Create Calendar & Continue' : 'Next'"

export default {
  name: "FormCalendar",
  props: ["calendar", "submitting"],
  data: () => ({
    profileGroups: [],
    loadingGroups: false,
    activeIndex: 0,
    tabTitle: "Set Calendar Details"
  }),
  mounted() {
    this.getProfileGroups();
  },
  methods: {
    async getProfileGroups() {
      this.loadingGroups = true;
      this.profileGroups = await getProfileGroups();
      this.loadingGroups = false;
    },
    onTabChanged(prevIndex, nextIndex) {
      this.activeIndex = nextIndex;
      switch (nextIndex) {
        case 0:
          this.tabTitle = "Set Calendar Details";
          break;
        case 1:
          this.tabTitle = "Connect Social Accounts";
          break;
        case 2:
          this.tabTitle = "Finalize";
          break;
      }
    }
  },
  watch: {
    activeIndex(value) {
      console.log("for title : " + value);
      switch (value) {
        case 0:
          this.tabTitle = "Set Calendar Details";
          break;
        case 1:
          this.tabTitle = "Connect Social Accounts";
          break;
        case 2:
          this.tabTitle = "Finalize";
          break;
      }
    }
  }
};
</script>

<style scoped>
.el-select {
  width: 100%;
}
.actions {
  text-align: right;
}
.notices {
  color: #d0021b;
  font-size: 12px;
  white-space: normal;
}
</style>