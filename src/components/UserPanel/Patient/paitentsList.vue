<template>
    <div id="my_patients_box">

        <div id="emergencyWrapper">

            <div id="emergencyTitle">Emergency Patients</div>

            <div :class="'patientBox ' + p.gender" v-for="p in patients.slice(4,6)" :key="p.id">
                <div class="nameWrapper">
                    <div class="name">{{ p.name }}</div>
                </div>
            </div>

            <!-- <div id="noEmergencyHint">No Emergency Patients</div> -->

        </div>

        <div :class="'patientBox ' + p.gender" v-for="p in patients" :key="p.id">
            <div class="nameWrapper">
                <div class="name">{{ p.name }}</div>
            </div>
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

    let patients: Ref<CTS.Patient[]> = ref([])

// -- =====================================================================================

    const getData = () => {
        // .. Sending Request
        get( CTS.Get.getPatients )
        // .. Receiving Answer
        .then( answer => Tools.setNames( patients.value = answer as CTS.Patient[] ) )
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

    #my_patients_box{
        height: 100%;
        padding-top: 30px;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 0 20px;
        float: left;
        position: relative;
    }

    #emergencyWrapper {
        background-color: #e90a0a;
        height: auto;
        width: 100%;
        border-radius: 14px;
        border-bottom: 40px solid #a50707;
        padding-bottom: 2px;
        margin: 40px 0;
        position: relative;
        overflow: auto;
    }

    #emergencyTitle{
        text-align: center;
        color: whitesmoke;
        padding: 30px 0 23px 0;
        font-size: 27px;
        font-family: AllertaStencil;
    }

    #noEmergencyHint{
        text-align: center;
        color: rgb(46, 43, 43);
        font-size: 16px;
        font-family: Manrope;
        padding: 5px 0 35px 0;
    }

    #borderTop{
        background-color: #e6e3e3de;
        height: 40px;
        width: 100%;
        top: 0px;
        position: absolute;
    }

    .patientBox{
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

    .patientBox.male:hover .name{ color: #08365c }
    .patientBox.female:hover .name{ color: #58085c }

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
    .male{ background-image: url('@/assets/Pics/Avatars/ai-generated-1.png') }
    .female{ background-image: url('@/assets/Pics/Avatars/ai-generated-2.png') }
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