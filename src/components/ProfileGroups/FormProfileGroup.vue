<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)" refs="profileForm">
      <div class="form-group">
        <label class="form-control-label">Name</label>
        <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
          <input class="form-control" v-model="profileGroup.name" />
          <p class="text-danger">{{errors[0]}}</p>
        </ValidationProvider>
      </div>
      <div class="form-group">
        <label class="form-control-label">Age Range</label>
        <el-slider v-model="profileGroup.ageRange" range show-stops :max="100"></el-slider>
      </div>
      <div class="form-group">
        <label class="form-control-label">Gender</label>
        <el-checkbox-group v-model="profileGroup.gender">
          <el-checkbox label="Female"></el-checkbox>
          <el-checkbox label="Male"></el-checkbox>
          <el-checkbox label="Transgender"></el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="form-group">
        <label class="form-control-label">Language</label>
        <br />
        <el-select v-model="profileGroup.language" filterable placeholder="Select">
          <el-option
            v-for="item in languages"
            :key="item.code"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" type="submit">
          <i class="fa fa-spinner fa-spin" v-if="submitting"></i>
          {{profileGroup._id !=null ? 'Edit' : 'Create'}}
        </button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
const languagesJson = require("@/utils/languages.json");
// import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  name: "FormProfileGroup",
  // components: {
  //   ValidationProvider,
  //   ValidationObserver
  // },
  props: {
    profileGroup: {
      type: Object,
      default: () => {
        return {
          name: null,
          ageRange: [0, 20],
          gender: [],
          language: null
        };
      }
    },
    submitting: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      languages: languagesJson,
      rules: {
        name: [
          { requred: true, message: "Please input group name" },
          { min: 5, message: "Length should be atleast 5" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("child here: ");
      this.$emit("update:profileGroup", this.profileGroup);
      this.$emit("onSubmit", this.profileGroup);
    }
  }
};
</script>

<style scoped>
.el-select {
  width: 100%;
}
</style>