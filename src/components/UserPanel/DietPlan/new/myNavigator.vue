<template>
    <div id="navigation_box">
        <div :class="'nav previous ' + disXP" style="float: left;"  @click="props.slider?.('P')"></div>
        <div :class="'nav next ' + disXN" style="float: right;" @click="props.slider?.('N')"></div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref, defineProps }                 from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'

const store: TS.Store = useStore()

// -- =====================================================================================

    const props = defineProps( {
        slider: Function
    } )

    const disXP = ref<string>()
    const disXN = ref<string>()

// -- =====================================================================================

    store.watch(
        getters => getters.pageSlide,
        nV => { 
            disXP.value = nV.gpx === 0 ? "x" : "" 
            disXN.value = nV.gpx === 2 ? "x" : "" 
        }
    )

</script>

// -- =====================================================================================

<style scoped>

    .nav{
        background-color: #d3d5d8;
        color: #2f4e6a;
        font-family: fas;
        font-size: 25px;
        text-align: center;
        height: 44px;
        width: 60px;
        padding-top: 16px;
        border-radius: 60px;
        cursor: pointer;
    }
    .nav:hover{
        color: #4c7d04;
        box-shadow: 1px 0 0px 1px #7bbf16;   
    }
    .previous:hover{
        box-shadow: -1px 0 0px 1px #7bbf16;   
    }
    
    .x { display: none }

    #navigation_box{
        height: 80px;
        width: 90%;
        left: 5%;
        position: absolute;
        bottom: -20px;
        margin: 14px 0;
        z-index: 5;
    }


    #titleBox{
        width: 310px;
        left: 0;
        right: 0;
        margin: auto;
        position: absolute;
    }
    .title{
        font-family: Manrope;
        color: #2f4e6a;
        text-align: center;
        width: auto;
        padding: 1px 4px 9px 4px;
        border-bottom: 3px solid #dca305;   
        margin: 2px;
        position: relative;
        float: left;
        height: 20px;
    }
    .expanded{
        border-bottom: 3px solid #7bbf16;   
        width: 220px;
    }

</style>