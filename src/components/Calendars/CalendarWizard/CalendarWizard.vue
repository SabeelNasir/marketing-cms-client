<template>
  <div class="col-lg-8 col-12 offset-lg-2">
    <card shadow>
      <div class="card-header">
        <div class="row">
          <div class="col-2">
            <router-link to="/" class="ni ni-fat-remove ni-2x text-theme"></router-link>
          </div>
          <div class="text-center col-8">
            <h2 class="text-fern">{{$route.params.id ? 'Update' : 'Create a New'}} Calendar</h2>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="vue-form-wizard md">
          <div class="wizard-header">
            <h4 class="wizard-title">{{tabTitle}}</h4>
            <p class="category"></p>
          </div>
          <div class="wizard-navigation">
            <ul class="wizard-nav wizard-nav-pills">
              <li :class="activeIndex == 0 || activeIndex == 1   ? 'active': ''">
                <a href="javascript:void(0)">
                  <div class="wizard-icon-circle md tab_shape">
                    <div
                      class="wizard-icon-container tab_shape"
                      :class="activeIndex == 0 || activeIndex == 1  ? 'bg-primary': ''"
                    >
                      <i class="wizard-icon fa fa-calendar-week"></i>
                    </div>
                  </div>
                </a>
              </li>
              <li :class="activeIndex == 2 ? 'active': ''">
                <a href="javascript:void(0)">
                  <div class="wizard-icon-circle md tab_shape">
                    <div
                      class="wizard-icon-container tab_shape"
                      :class="activeIndex == 2 ? 'bg-primary': ''"
                    >
                      <i class="wizard-icon fa fa-users"></i>
                    </div>
                  </div>
                </a>
              </li>
              <li :class="activeIndex == 3 ? 'active': ''">
                <a href="javascript:void(0)">
                  <div class="wizard-icon-circle md tab_shape">
                    <div
                      class="wizard-icon-container tab_shape"
                      :class="activeIndex == 3 ? 'bg-primary': ''"
                    >
                      <i class="wizard-icon fa fa-rss"></i>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <!-- Render Child Component -->
            <div class="wizard-tab-content">
              <slot></slot>
              <component
                :is="childContent"
                v-if="$route.params.stage != null"
                ref="childComponent"
                :isSubmitting.sync="isSubmitting"
              />
            </div>
          </div>
          <!--Footer Buttons-->
          <!--New Calendar-->
          <div class="text-center" v-if="activeIndex == 0">
            <button class="btn btn-primary" @click="$emit('onSubmit')">
              <i class="fa fa-spinner fa-spin" v-if="submitting"></i>
              Create Calendar & Continue
            </button>
          </div>
          <!-- Edit/Details -->
          <div v-if="activeIndex == 1" class="wizard-card-footer mt-5">
            <div class="text-center">
              <button class="btn btn-primary" @click.prevent="onSubmit">
                <i class="fa fa-spinner fa-spin" v-if="submitting || isSubmitting"></i>
                Update & Next
              </button>
            </div>
          </div>
          <!--Social Accounts -->
          <div v-if="activeIndex == 2" class="wizard-card-footer mt-5">
            <div class="wizard-footer-left">
              <button
                class="btn btn-primary"
                @click="$router.push({path:`/calendars/${$route.params.id}/wizard/details`})"
              >Back</button>
            </div>
            <div class="wizard-footer-right">
              <router-link
                class="btn btn-primary"
                :to="{name: 'Calendar Wizard',params:{id:$route.params.id,stage:'rss_feeds'}}"
              >Next</router-link>
            </div>
          </div>
          <!-- Rss Feeds -->
          <div v-if="activeIndex == 3" class="wizard-card-footer mt-5">
            <div class="wizard-footer-left">
              <button class="btn btn-primary" @click="$router.back()">Back</button>
            </div>
            <div class="wizard-footer-right">
              <button class="btn btn-primary" @click="$emit('onSubmit')">Finish</button>
            </div>
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import {
  SocialAccounts,
  CalendarDetails,
  RssFeeds
} from "@/components/Calendars/CalendarWizard";
export default {
  name: "CalendarWizard",
  components: {
    SocialAccounts,
    CalendarDetails,
    RssFeeds
  },
  props: ["submitting"],
  data() {
    return {
      activeIndex: 0,
      tabTitle: "Set Calendar Details",
      childContent: "social-accounts",
      loading: false,
      isSubmitting: false
    };
  },
  mounted() {
    this.onTabChange();
  },
  methods: {
    onTabChange() {
      switch (this.$route.params.stage) {
        case "details":
          this.tabTitle = "Update Calendar Details";
          this.activeIndex = 1;
          this.childContent = "calendar-details";
          break;
        case "social_accounts":
          this.tabTitle = "Connect Social Accounts";
          this.activeIndex = 2;
          this.childContent = "social-accounts";
          break;
        case "rss_feeds":
          this.tabTitle = "Set post ideas preferences";
          this.activeIndex = 3;
          this.childContent = "rss-feeds";
          break;
      }
    },
    onSubmit() {
      this.$refs.childComponent.onSubmit();
    }
  },
  watch: {
    $route(to, from) {
      this.onTabChange();
    }
  }
};
</script>

<style>
</style>