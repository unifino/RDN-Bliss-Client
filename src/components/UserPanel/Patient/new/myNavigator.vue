<template>
    <div id="navigation_box">
        <div class="nav" style="float: left;"  @click="props.slider?.('P')">Previous</div>
        <div id="titleBox">
            <div 
                v-for="(x,i) in props.Titels"
                :key="i"
                :class="'title' + ( x.focus? ' expanded' : '' )"
            >
                    {{ x.focus ? x.title : "" }}
            </div>
        </div>
        <div class="nav" style="float: right;" @click="props.slider?.('N')">Next</div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { defineProps }                      from 'vue'

// -- =====================================================================================

    const props = defineProps( {
        Titels: Object,
        slider: Function
    } )

</script>

// -- =====================================================================================

<style scoped>

    .nav{
        background-color: #d3d5d8;
        color: #2f4e6a;
        font-family: Manrope  ;
        font-size: 20px;
        text-align: center;
        height: auto;
        width: 130px;
        padding: 8px 0;
        border-radius: 7px;
        cursor: pointer;
    }
    .nav:hover{
        color: #4c7d04;
        box-shadow: 0 1px 0px 1px #7bbf16;   
    }

    #navigation_box{
        height: 60px;
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