import Vue from 'vue'
import App from './App.vue'



(async () => {
  console.log('하잇!!');
  try {
    // @ts-ignore - Module Federation 모듈은 런타임에 동적으로 로드됨
    const DefaultModule = await import('hrProject/hrLnb');
    Vue.component('default-layout', DefaultModule.default);
    console.log('✓ 인사 LNB');
  } catch (err) {
    console.error('인사 LNB 불러오기 실패', err);
    try {
      console.log('폴백 성공 ✓ Using local Default layout as fallback');
    } catch (fallbackErr) {
      console.error('폴백 실패 Failed to load local Default layout:', fallbackErr);
    }
  }
})();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
