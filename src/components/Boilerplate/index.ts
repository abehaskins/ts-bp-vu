// VueJS modules
import Vue from "vue";
import { Component, Inject, Model, Prop, Watch } from "vue-property-decorator";

// Typings for modules imported dynamically
import FirebaseAppModule = require("firebase/app");

@Component
export default class Boilerplate extends Vue {
  name = "Boilerplate";
  required = {
    firebase: FirebaseAppModule
  };

  async mounted() {}
}

require("./template.html")(Boilerplate);
