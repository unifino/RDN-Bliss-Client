<template>
    <div id="userPanelBox" :style="`z-index: ${+(store.getters.ort === TS.Orts.UserPanel)};`">

        <MyPatients  :style="`z-index: ${+(store.getters.userTool === TS.UserTools.Patients)};`"/>
        <CreateNP    :style="`z-index: ${+(store.getters.userTool === TS.UserTools.CreateNewPatient)};`"/>
        <MyCalender  :style="`z-index: ${+(store.getters.userTool === TS.UserTools.Calender)};`"/>
        <MyStats     :style="`z-index: ${+(store.getters.userTool === TS.UserTools.Stats)};`"/>
        <MyDietPlans :style="`z-index: ${+(store.getters.userTool === TS.UserTools.DietPlans)};`"/>
        <MyMessage   :style="`z-index: ${+(store.getters.userTool === TS.UserTools.Messages)};`"/>
        <MyProfile   :style="`z-index: ${+(store.getters.userTool === TS.UserTools.Profile)};`"/>

        <UserButtons />

        <HintBox />

    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import UserButtons                          from '@/components/UserPanel/userButtons.vue'
import MyPatients                           from '@/components/UserPanel/myPatients.vue'
import CreateNP                             from '@/components/UserPanel/addPatient.vue'
import MyCalender                           from '@/components/UserPanel/myCalender.vue'
import MyStats                              from '@/components/UserPanel/myStats.vue'
import MyDietPlans                          from '@/components/UserPanel/myDietPlans.vue'
import MyMessage                            from '@/components/UserPanel/myMessage.vue'
import MyProfile                            from '@/components/UserPanel/myProfile.vue'
import HintBox                              from '@/components/UserPanel/hintBox.vue'
import * as TS                              from '@/types/types'
import { useStore }                         from 'vuex'

const store: TS.Store = useStore()

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #userPanelBox{
        height: 100%;
        width: 100%;
        position: absolute;
    }

</style>

<style>

    .Tool_fall_In {
        animation           : Tool_fall_In .7s;
        animation-fill-mode : both;
    }
    @keyframes Tool_fall_In {
        0%  { transform: translate(-10%,-53%) perspective(900px) rotateY(44deg) scale(.8); opacity: 0 }
        100%{ transform: translate(0,-53%) perspective(900px) rotateY(0deg) scale(1); opacity: 1 }
    }

    .Tool_fall_Out {
        animation           : Tool_fall_Out .7s;
        animation-fill-mode : both;
    }
    @keyframes Tool_fall_Out {
        0%  { transform: translate(0,-53%) perspective(900px) rotateY(0deg) scale(1); opacity: 1 }
        100%{ transform: translate(-10%,-53%) perspective(900px) rotateY(44deg) scale(.8); opacity: 0 }
    }

</style>

<style Fast>

    .Fast> .Tool_fall_In {
        animation           : Tool_fall_In_Fast .4s;
        animation-fill-mode : both;
    }
    @keyframes Tool_fall_In_Fast {
        0%  { transform: translate(-10%,-53%) perspective(900px) rotateY(44deg) scale(.8); opacity: 0 }
        100%{ transform: translate(0,-53%) perspective(900px) rotateY(0deg) scale(1); opacity: 1 }
    }

    .Fast> .Tool_fall_Out {
        animation           : Tool_fall_Out_Fast .4s;
        animation-fill-mode : both;
    }
    @keyframes Tool_fall_Out_Fast {
        0%  { transform: translate(0,-53%) perspective(900px) rotateY(0deg) scale(1); opacity: 1 }
        100%{ transform: translate(-10%,-53%) perspective(900px) rotateY(44deg) scale(.8); opacity: 0 }
    }


    .Fast> .Tool_fall_In_Sent {
        animation           : Tool_fall_In_Sent .4s;
        animation-fill-mode : both;
    }
    @keyframes Tool_fall_In_Sent {
        0%  { transform: translate(-10%,-53%) perspective(900px) rotateY(-44deg) scale(.8); opacity: 0 }
        100%{ transform: translate(0,-53%) perspective(900px) rotateY(0deg) scale(1); opacity: 1 }
    }

    .Fast> .Tool_fall_Out_Sent {
        animation           : Tool_fall_Out_Sent .4s;
        animation-fill-mode : both;
    }
    @keyframes Tool_fall_Out_Sent {
        0%  { transform: translate(0,-53%) perspective(900px) rotateY(0deg) scale(1); opacity: 1 }
        100%{ transform: translate(-10%,-53%) perspective(900px) rotateY(-44deg) scale(.8); opacity: 0 }
    }

</style>

// -- =====================================================================================
