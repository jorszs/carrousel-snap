<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const handleScroll = (evt, el) => {
//   if (window.scrollX > 50) {
//     el.setAttribute('style', 'opacity: 1; transform: translate3d(0, -10px, 0)');
//   }
//   return window.scrollX > 100;
// };
</script>

<!-- v-scroll="handleScroll" -->
<template>
  <div class="AppCarrousel flex items-center snap-mandatory snap-x">
    <div class="item snap-start" v-for="i in list" :key="i">
      <div class="w-[400px]">{{ i }}</div>
    </div>
  </div>
</template>

<style scoped>
.AppCarrousel {
  width: 100%;
  height: 200px;
  /* background-color: #fff; */
  overflow: scroll;
  /* scroll-snap-type: x mandatory; */
}
.item {
  /* width: 300px; */
  height: 100px;
  margin: 0 15px;
  border-radius: 12px;
  background-color: #f00;
}
</style>
