<script lang="ts" setup>
    import {MxmNavbar} from 'mxm-ui'
    import { useRoute} from 'vue-router'
    import pageRoutes from '@/router/pageRoutes'
    const routes = useRoute()
    console.log(pageRoutes[0].children);
    
</script>
<template>
    <div class="w-full">
        <div class="header  absolute top-0 left-0 w-full py-1 ">
            <div class="flex item-center justify-between  h-full  w-pageWidth mx-auto ">
                <div class=" self-center">logo</div>
                <mxm-navbar align="right" :routes="pageRoutes[0].children" class=" right-5"></mxm-navbar>
            </div>
        </div>
        <div class="context w-full h-full mx-auto">

        <slot>
      
        </slot> 
        </div>

   
    </div>
</template>