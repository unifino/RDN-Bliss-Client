<template>
    <img id="BOX_001" ref="BOX_001" :src="bgPath()" />
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'

const store = useStore();

// -- =====================================================================================

    const BOX_001 = ref<HTMLElement>( null as any )

    // let bgPath = () => {
    //     return store.getters.ort === TS.Orts.Home ?
    //         require( "@/assets/Pics/plant.jpg" ) :
    //         require( "@/assets/Pics/news/temp/1.jpg" );
    // }

    let bgPath = () => {
        return require( "@/assets/Pics/plant.jpg" ) 
    }
// -- =====================================================================================

    store.watch(
        getters => getters.process,
        ( nV ) => {
            if( nV === TS.Processes.Animating ) {
                bgPath = () => {
                    return require( "@/assets/Pics/login_banner.jpg" )
                }
            }

        }
    )


// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #BOX_001{
        /* background-image: url( '@/assets/Pics/plant.jpg' ); */
        background-repeat: no-repeat;
        background-size: 140% auto;
        background-position: 0px 0px;
        border-radius: 23px;
        height: 100%;
        position: relative;
    }

    .fadeOut_B001, .fadeIn_B001 {
        animation           : fade_B001 .8s;
    }

    .fadeOut_B001 {
        animation-fill-mode : forwards;
    }

    .fadeIn_B001 {
        animation-fill-mode : backwards;
    }

    @keyframes fade_B001 {
        0%{ opacity: 1; }
        100%{ opacity: 0; }
    }

</style>

// -- =====================================================================================
