<template>
    <div ref="part_x" id="planEditor" @click="back">
            Hatef
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as Tools                           from '@/mixins/Tools';

const store: TS.Store = useStore()

// -- =====================================================================================

    // const dietPlans = ref<HTMLElement>( {} as HTMLElement )
    const ipx = 1
    const part_x = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const back = () => {
        const gpx = ipx -1
        store.commit( TS.Mutates.pageSlide, { origin: TS.UserTools.DietPlans, gpx, move: "L" } )
    }
    // const _out = () => Tools.userAnime( dietPlans, "Out" )
    // const _in = ( skip = false ) => Tools.userAnime( dietPlans, "In", skip )

// -- =====================================================================================

    const slider = ( act: "N" | "P" ) => {
        // current_Page_R
    }

// -- =====================================================================================

    store.watch(
        getters => getters.padeSlide,
        ( nV, oV ) => { 
            if ( nV.origin === TS.UserTools.DietPlans )
                Tools.pageSlider2( oV, nV, ipx, part_x )
        }
    )

    // store.watch(
    //     getters => getters.userTool,
    //     ( nV, oV ) => {
    //         if ( nV !== oV ) {
    //             if ( nV === TS.UserTools.DietPlans ) _in( oV === TS.UserTools.null )

    //             if ( oV === TS.UserTools.DietPlans ) _out()
    //         }
    //     }
    // )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #planEditor{
        font-size: 23px;
        font-weight: bold;
        font-family: PoiretOne;
        text-align: center;
        padding: 55px;
        margin-bottom: 30px;
        background-color: aquamarine;
        height: 100%;
    }

  

</style>

// -- =====================================================================================
