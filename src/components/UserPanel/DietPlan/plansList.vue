<template>
    <div id="mainWrapper">
        <div id="my_plans_box">
            <div :class="'pBox ' + p.gender" v-for="p in plans" :key="p.id">
                <div class="nameWrapper">
                    <div class="name">{{ "The Plan Name" }}</div>
                </div>
            </div>
            <div id="bottomSpace" />
        </div>
        <div id="borderTop" />
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref,Ref }                          from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as CTS                             from "@/types/common";
import * as Tools                           from '@/mixins/Tools';
import { get }                              from '@/mixins/Tools';

const store: TS.Store = useStore()

// -- =====================================================================================

    let plans: Ref<CTS.Patient[]> = ref([])

// -- =====================================================================================

    const getData = () => {
        // .. Sending Request
        get( CTS.Get.getPatients )
        // .. Receiving Answer
        .then( answer => Tools.setNames( plans.value = answer as CTS.Patient[] ) )
    }

// -- =====================================================================================

    store.watch(
        getters => getters.Flag_logged_in,
        nV => { if(nV) getData() }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #mainWrapper{
        background-color: #e6e3e3;
        height: 620px;
        width: 845px;
        border: solid 40px #e6e3e3;
        border-width: 10px 20px 20px 20px;
        border-radius: 23px;
        box-shadow: 0 0 7px 1px #babbbb;
        position: relative;
        float: left;
        overflow: hidden;
    }

    #my_plans_box{
        height: 100%;
        padding: 30px 20px;
        overflow-y: auto;
        overflow-x: hidden;
        float: left;
        position: relative;
    }

    #bottomSpace{
        background-color: transparent;
        height: 140px;
        width: 100%;
        float: left;
        position: relative;
    }

    #borderTop{
        background-color: #e6e3e3de;
        height: 40px;
        width: 100%;
        top: 0px;
        position: absolute;
    }

    .pBox{
        height: 180px;
        width: 240px;
        background-color: #d3d3d3;
        position: relative;
        float: left;
        margin: 10px;
        border-radius: 5px;
        overflow: hidden;
        cursor: pointer;
        background-position: left 15px;
        background-size: auto 70%;
        background-repeat: no-repeat;
    }

    .pBox.male:hover .name{ color: #08365c }
    .pBox.female:hover .name{ color: #58085c }

    .nameWrapper{
        text-align: right;
        background-color: #929292d5;
        height: 34px;
        width: 100%;
        line-height: 34px;
        bottom: 0;
        padding: 3px 0px;
        position: absolute;
    }
    .male{ background-image: url('@/assets/Pics/Avatars/Diet-plan2.png') }
    .female{ background-image: url('@/assets/Pics/Avatars/Diet-plan2.png') }
    .male> div{ background-color: #67c3dcd5; }
    .female> div{ background-color: #e77fc1d5 }
    
    .name{
        color: white;
        font-family: Oswald;
        font-weight: bold;
        font-size: 20px;
        right: 20px;
        position: absolute;
    }

</style>