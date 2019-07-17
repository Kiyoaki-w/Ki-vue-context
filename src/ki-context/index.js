import Vue from 'vue';
import context from './context.vue'

const plugin = {
  install(Vue, options) {
    Vue.component('ki-context', context);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
