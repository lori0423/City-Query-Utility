import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import VueAMap from 'vue-amap';
import axios from 'axios'
import x2js from 'x2js' //xml数据处理插件


Vue.config.productionTip = false

Vue.prototype.$x2js = new x2js() //全局方法挂载
Vue.prototype.$axios = axios;
Vue.use(ElementUI)
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '3c8d72e09340bbf72057257e264b65a2',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.AdvancedInfoWindow', 'AMap.Scale', 'AMap.HawkEye', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.Weather', 'AMap.Geocoder'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
  uiVersion: '1.0.11'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
