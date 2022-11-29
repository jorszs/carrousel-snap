import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// Vue.directive('scroll', {
//   inserted: function (el, binding) {
//     let f = function (evt) {
//       if (binding.value(evt, el)) {
//         window.removeEventListener('scroll', f);
//       }
//     };
//     window.addEventListener('scroll', f);
//   },
// });

createApp(App).mount('#app');
