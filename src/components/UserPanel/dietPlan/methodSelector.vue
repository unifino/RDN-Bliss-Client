<template>
    <div ref="part_x" id="methodSelector">
        <div id="title">Select your Planing Calculation Method:</div>
        <div id="methodsWrapper">
            <div class="method" v-for="(m,i) of methods" :key="i" @click="select(i)">{{ m }}</div>
        </div>
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
    const ipx = 0
    const part_x = ref<HTMLElement>( {} as HTMLElement )
    const methods = [ "WHO", "Miffin", "St. Gcov", "Harris-Benedid", "MSSE", "HBE" ]

// -- =====================================================================================

    const select = ( i: number ) => {
        slider()
    }

    // const _out = () => Tools.userAnime( dietPlans, "Out" )
    // const _in = ( skip = false ) => Tools.userAnime( dietPlans, "In", skip )

// -- =====================================================================================

    const slider = () => {
        const gpx = ipx +1
        store.commit( TS.Mutates.pageSlide, { origin: TS.UserTools.DietPlans, gpx: ipx +1, move: "R" } )
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
    //     getters => getters.ort,
    //     ( nV, oV ) => { 
    //         if ( oV === TS.Orts.UserPanel ) 
    //             if ( store.getters.userTool === TS.UserTools.DietPlans )
    //                 _out() 
    //     }
    // )

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

    #title{
        font-size: 23px;
        font-weight: bold;
        font-family: PoiretOne;
        text-align: center;
        padding: 55px;
        margin-bottom: 30px;
    }

    #methodsWrapper{ 
        margin: auto;
        width: 250px;
        text-align: center;
    }

    .method{
        background-color: #F0F0F0;
        font-family: Oswald;
        font-size: 17.5px;
        font-weight: bold;
        color: #081E2F;
        height: 25px;
        width: 210px;
        padding: 10px 20px;
        border-radius: 7px;
        border: solid gray 1px;
        box-shadow: 0 0 1px 0px rgb(88 88 91);
        margin: 10px 0;
        cursor: pointer;
    }
    .method:hover{
        background-color: #3dcbfa;
    }

</style>

// -- =====================================================================================
