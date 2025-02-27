<template>  
    <div id="wholeWrapper" ref="planBox">
        
        <div id="mainWrapper">
            <part_1 />
            <part_2 />
            <part_3 />
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
import part_3                               from '@/components/UserPanel/DietPlan/new/part_3.vue'
import Buttons                              from '@/components/UserPanel/DietPlan/new/newButtons.vue'
import Navigator                            from '@/components/UserPanel/DietPlan/new/myNavigator.vue'

const store: TS.Store = useStore()

// -- =====================================================================================

    const planBox = ref<HTMLElement>( {} as HTMLElement )
    const pageCount = 3

// -- =====================================================================================

    const _out = ( destination: TS.UserTools ) => {
        if ( destination === TS.UserTools.Grocery ) Tools.userAnime( planBox, "Out_Shop" )
        else Tools.userAnime( planBox, "Out" )
    }
    const _in = ( origin: TS.UserTools ) => {
        if ( origin === TS.UserTools.Grocery ) Tools.userAnime( planBox, "In_Shop", false ,200 )
        else Tools.userAnime( planBox, "In", origin === TS.UserTools.null )
    }

// -- =====================================================================================

    const slider = ( act: "N" | "P" ) => {
        const cfi = store.getters.pageSlide.gpx
        const nfi = ( cfi + ( act === "N" ? 1 : -1 ) + pageCount ) % pageCount
        const mov = act === "N" ? "R" : "L" 
        store.commit( TS.Mutates.pageSlide, { origin: TS.UserTools.CreateNewPlan, gpx: nfi, move: mov } )
    }

// -- =====================================================================================

    const savePlan = async() => {
        
        Tools.pageSlide_0( TS.UserTools.CreateNewPlan )

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
                    _out( TS.UserTools.CreateNewPlan ) 
        }
    )

    store.watch(
        getters => getters.Flag_savePlan,
        () => savePlan()
    )

    // store.watch(
    //     getters => getters.Flag_resetForm,
    //     () => { while ( store.getters.pageSlide.gpx !== 0 ) slider("N") }
    // )

    store.watch(
        getters => getters.userTool,
        ( nV, oV ) => {
            if ( nV !== oV ) {

                if ( nV === TS.UserTools.CreateNewPlan ) _in( oV )
                if ( oV === TS.UserTools.CreateNewPlan ) _out( nV )

                // .. PageSlideResetting
                if ( nV === TS.UserTools.CreateNewPlan && oV !== TS.UserTools.Grocery ) 
                    Tools.pageSlide_0( nV )

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
