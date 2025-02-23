<template>
    <div class="buttonsWrapper">
        <div
            class="button"
            v-for="(b,i) of buttons"
            :key="i"
            @click="b.fnc"
            :style="b.marin ? 'margin-top:50px':''"
        >
            {{ b.title }}
        </div>
    </div>  
</template>

// -- =====================================================================================

<script setup lang="ts">

import { defineProps }                      from 'vue'
import * as TS                              from '@/types/types'
import { useStore }                         from 'vuex'

const store: TS.Store = useStore()

// -- =====================================================================================

    const buttons = [ 
        { title: "Save New Patient", fnc: () => store.commit( TS.Mutates.Flag_savePatient, !store.getters.Flag_savePatient ) },
        { title: "Reset Form", fnc: () => resetForm() },
        { title: "Back to Previous Menu", fnc: () => store.commit( TS.Mutates.userTool, TS.UserTools.Patients ), marin: true },
    ]

    defineProps( {
        Titels: Object,
        slider: Function
    } )

    const resetForm = async () => {
        store.commit( TS.Mutates.userTool, TS.UserTools.null )
        await new Promise( _ => setTimeout( _, 250 ) )
        store.commit( TS.Mutates.Flag_resetForm, !store.getters.Flag_resetForm )
        await new Promise( _ => setTimeout( _, 350 ) )
        store.commit( TS.Mutates.userTool, TS.UserTools.CreateNewPatient )
    }

</script>

// -- =====================================================================================

<style scoped>

    .buttonsWrapper{
        z-index: 10;
    }

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