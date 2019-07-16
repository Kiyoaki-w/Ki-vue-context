import Vue from 'vue';
import context from './context.vue'

const plugin = {
  install(Vue, options) {
    Vue.component('ki-context', context);
  }
};

export default plugin;
