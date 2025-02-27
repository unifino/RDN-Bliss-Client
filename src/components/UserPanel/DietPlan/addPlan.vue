<template>  
    <div id="wholeWrapper" ref="planBox">
        
        <div id="mainWrapper">
            <part_1 />
            <part_2 />
            <Navigator :slider="slider" /> 
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
import part_1                               from '@/components/UserPanel/DietPlan/new/part_1.vue'
import part_2                               from '@/components/UserPanel/DietPlan/new/part_2.vue'
import Buttons                              from '@/components/UserPanel/DietPlan/new/newButtons.vue'
import Navigator                            from '@/components/UserPanel/DietPlan/new/myNavigator.vue'

const store: TS.Store = useStore()

// -- =====================================================================================

    const planBox = ref<HTMLElement>( {} as HTMLElement )
    const pageCount = 3

// -- =====================================================================================

    const _out = () => Tools.userAnime( planBox, "Out" )
    const _in = ( skip = false ) => Tools.userAnime( planBox, "In", skip )

// -- =====================================================================================

    const slider = ( act: "N" | "P" ) => {
        const cfi = store.getters.pageSlide.gpx
        const nfi = ( cfi + ( act === "N" ? 1 : -1 ) + pageCount ) % pageCount
        const mov = act === "N" ? "R" : "L" 
        store.commit( TS.Mutates.pageSlide, { origin: TS.UserTools.CreateNewPlan, gpx: nfi, move: mov } )
    }

// -- =====================================================================================

    const savePatient = async() => {
        while ( store.getters.pageSlide.gpx !== 0 ) slider("N")
        await new Promise( _ => setTimeout( _, 350 ) )

        Tools.userAnime( planBox, "Out_Sent" )
        await new Promise( _ => setTimeout( _, 1750 ) )
        Tools.userAnime( planBox, "In_Sent" )
    }

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => { 
            if ( oV === TS.Orts.UserPanel ) 
                if ( store.getters.userTool === TS.UserTools.CreateNewPlan )
                    _out() 
        }
    )

    // store.watch(
    //     getters => getters.Flag_savePatient,
    //     () => savePatient()
    // )

    // store.watch(
    //     getters => getters.Flag_resetForm,
    //     () => { while ( store.getters.pageSlide.gpx !== 0 ) slider("N") }
    // )

    store.watch(
        getters => getters.userTool,
        ( nV, oV ) => {
            if ( nV !== oV ) {

                if ( nV === TS.UserTools.CreateNewPlan ) _in( oV === TS.UserTools.null )
                if ( oV === TS.UserTools.CreateNewPlan ) _out()

                // .. PageSlideResetting
                if ( nV === TS.UserTools.CreateNewPlan ) Tools.pageSlide_0( nV )
            }
        
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #wholeWrapper{
        left: 300px;
        position: absolute;
        display: none;
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

    input{
        box-shadow: none;
        border: none;
    }

</style>

// -- =====================================================================================
