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
  <div
    class="
      w-full
      h-[200px]
      overflow-scroll
      flex
      items-center
      snap-mandatory snap-x
    "
  >
    <div
      class="w-full h-[100px] rounded-2xl bg-rose-600 mx-4 snap-start"
      v-for="i in list"
      :key="i"
    >
      <div class="w-[400px]"></div>
    </div>
  </div>
</template>

<style scoped></style>
