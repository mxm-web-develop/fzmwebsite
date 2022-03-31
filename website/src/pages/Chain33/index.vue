<script lang="ts" setup>
import fullpage from 'fullpage.js';
import { onMounted } from 'vue';

onMounted(async ()=>{
  console.log(fullpage);
  
  fullpage('#Chain33',{
      menu: '#menu',
    lockAnchors: false,
  })
})
</script>
<template>
  <!-- <div class=" bg-[url('/chian33bg.png')] bg-cover bg-bottom w-full h-screen">


    <div class=" mat w-full h-full">
    Chain33 home
    sdfsd
    </div>
        <div class=" w-full h-full">
    Chain33 home
    sdfsd
    </div>
        </div> -->
  <div class="section" id="Chain33">
    <div class="slide bg-red-400">Slide 1</div>
    <div class="slide bg-green-500">Slide 2</div>
    <div class="slide bg-blue-500">Slide 3</div>
    <div class="slide bg-purple-600">Slide 4</div>
  </div>
</template>
