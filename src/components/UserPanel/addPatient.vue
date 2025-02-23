<template>  
    <div id="wholeWrapper" class="init" ref="patientsBox">

        <div id="mainWrapper">
            <General_Info />
            <Nutritional_Assessment />
            <Bio_Chemistry />
            <Medications_Supplements />
            <PatientAnthropometry />
            <GI_Function />
            <Diet_History />

            <Navigator :Titels="Titles" :slider="slider" /> 
        </div>
        
        <Buttons />

    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as Tools                           from '@/mixins/Tools';
import General_Info                         from '@/components/UserPanel/addPatient/General_Info.vue'
import Nutritional_Assessment               from '@/components/UserPanel/addPatient/Nutritional_Assessment.vue'
import Bio_Chemistry                        from '@/components/UserPanel/addPatient/Bio_Chemistry.vue'
import Medications_Supplements              from '@/components/UserPanel/addPatient/Medications_Supplements.vue'
import PatientAnthropometry                 from '@/components/UserPanel/addPatient/Patient_Anthropometry.vue'
import GI_Function                          from '@/components/UserPanel/addPatient/GI_Function.vue'
import Diet_History                         from '@/components/UserPanel/addPatient/Diet_History.vue'
import Navigator                            from '@/components/UserPanel/addPatient/myNavigator.vue'
import Buttons                              from '@/components/UserPanel/addPatient/myButtons.vue'

const store: TS.Store = useStore()

// -- =====================================================================================

    const patientsBox = ref<HTMLElement>( {} as HTMLElement )

    const Titles = ref ( [
        { focus: false, title: "General Information" },
        { focus: false, title: "Nutritional Assessment" },
        { focus: false, title: "Biochemistry" },
        { focus: false, title: "Medications | Supplements" },
        { focus: false, title: "Anthropometry" },
        { focus: false, title: "GI Function" },
        { focus: false, title: "Diet History" },
        // { focus: false, target: part_9 , title: "Food Diary" },
        // { focus: false, target: part_10 , title: "Planning" },
        // { focus: false, target: part_12 , title: "Recommendations" },
        // { focus: false, target: part_13 , title: "Follow-up" },
    ] )

// -- =====================================================================================

    const _out = () => Tools.userAnime( patientsBox, "Out" )
    const _in = ( skip = false ) => {
        Tools.userAnime( patientsBox, "In", skip )
        for ( let i=0; i< Titles.value.length; i++ ) Titles.value[i].focus = false
        Titles.value[0].focus = true
    }

// -- =====================================================================================

    const slider = ( act: "N" | "P" ) => {
        const cfi = store.getters.pageSlide.gpx
        const nfi = ( cfi + ( act === "N" ? 1 : -1 ) + Titles.value.length ) % Titles.value.length
        Titles.value[ cfi ].focus = false
        Titles.value[ nfi ].focus = true
        const mov = act === "N" ? "R" : "L" 
        store.commit( TS.Mutates.pageSlide, { origin: TS.UserTools.CreateNewPatient, gpx: nfi, move: mov } )
    }

// -- =====================================================================================

    const savePatient = async() => {
        while ( store.getters.pageSlide.gpx !== 0 ) slider("N")
        await new Promise( _ => setTimeout( _, 350 ) )

        Tools.userAnime( patientsBox, "Out_Sent" )
        await new Promise( _ => setTimeout( _, 1750 ) )
        Tools.userAnime( patientsBox, "In_Sent" )
    }

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => { 
            if ( oV === TS.Orts.UserPanel ) 
                if ( store.getters.userTool === TS.UserTools.CreateNewPatient )
                    _out() 
        }
    )

    store.watch(
        getters => getters.Flag_savePatient,
        () => savePatient()
    )

    store.watch(
        getters => getters.Flag_resetForm,
        () => { while ( store.getters.pageSlide.gpx !== 0 ) slider("N") }
    )

    store.watch(
        getters => getters.userTool,
        ( nV, oV ) => {
            if ( nV !== oV ) {

                if ( nV === TS.UserTools.CreateNewPatient ) _in( oV === TS.UserTools.null )
                if ( oV === TS.UserTools.CreateNewPatient ) _out()

                // .. PageSlideResetting
                if ( nV === TS.UserTools.CreateNewPatient ) Tools.pageSlide_0( nV )
            }
        
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #wholeWrapper{
        top: 50%;
        left: 300px;
        position: absolute;
    }

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

    .init{
        transform: translate(-10%,-53%) perspective(900px) rotateY(44deg) scale(.8); opacity: 0;
    }

    input{
        box-shadow: none;
        border: none;
    }

</style>

// -- =====================================================================================
