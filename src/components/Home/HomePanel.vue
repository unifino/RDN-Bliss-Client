<template>
    <div id="homePanel" :style="`z-index: ${+(store.state.ort === TS.Orts.Home)}`">
        <div id="h_100" class="x_xxx" ref="h_100"><H_100 /></div>
        <div id="h_010" class="x_xxx" ref="h_010"><H_010 /></div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import H_100                                from '@/components/Home/H_100.vue'
import H_010                                from '@/components/Home/H_010.vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import { ref }                              from 'vue'

const store = useStore()

// -- =====================================================================================

    const h_100 = ref<HTMLElement>( {} as HTMLElement )
    const h_010 = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const slider = async function ( phase: "In" | "Out" ) { switch ( phase ) {
// -- =====================================================================================
            case "In":
                await new Promise( _ => setTimeout( _, 900 + 860 ) )
                h_100.value.className = "x_xxx " + "fallIn_H100"
                h_010.value.className = "x_xxx " + "fallIn_H010"
                break;
// -- =====================================================================================
            case "Out":
                h_100.value.className = "x_xxx " + "fallOut_H100"
                h_010.value.className = "x_xxx " + "fallOut_H010"
                break;
// -- =====================================================================================
    } }

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => { if ( nV !== oV ) slider( nV === TS.Orts.Home ? "In" : "Out" ) }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #homePanel{
        height: 100%;
        width: 100%;
        bottom: 0;
        position: absolute;
    }

    .x_xxx{
        height: 100%;
        position: absolute;
        overflow: hidden;
    }

    #h_100{
        width: 28%;
    }

    #h_010{
        width: 850px;
        left: 28%;
        /* margin: auto;
        left: 0;
        right: 0; */
    }

    .fallOut_H100 {
        animation           : fallOut_H100 1.9s;
        animation-fill-mode : both;
    }

    @keyframes fallOut_H100 {
        14%{
            transform: rotate(3deg) scale(1.07);
        }
        20%{
            transform: rotate(3deg) scale(1.07);
        }
        100%{
            transform: translate(-700px, 1000px) rotate(-70deg) scale(0.2);
        }
    }

    .fallOut_H010 {
        animation           : fallOut_H010 1.9s;
        animation-fill-mode : both;
    }

    @keyframes fallOut_H010 {
        14%{
            transform: translate(0px, 20px) scale(0.9);
            opacity: .3;
        }
        20%{
            transform: translate(0px, 20px) scale(0.9);
        }
        100%{
            transform: translate(0px, 1000px) scale(0.2);
        }
    }

    .fallIn_H100 {
        transform: translate(-700px, 1000px) rotate(-70deg) scale(0.2);
        animation           : fallIn_H100 1.7s;
        animation-fill-mode : both;
    }

    @keyframes fallIn_H100 {
        66%{
            transform: translate(0px, 0px) rotate(3deg) scale(1.07);
        }
        70%{
            transform: rotate(3deg) scale(1.07);
        }
        100%{
            transform: rotate(0deg) scale(1);
        }
    }

    .fallIn_H010 {
        transform: translate(0px, 1000px) scale(0.2);
        animation           : fallIn_H010 1.2s;
        animation-fill-mode : both;
    }

    @keyframes fallIn_H010 {
        14%{
            opacity: .2;
            transform: translate(0px, 1000px) scale(0.2);
        }
        75%{
            opacity: .4;
            transform: translate(0px, 20px) scale(0.9);
        }
        100%{
            opacity: 1;
            transform: translate(0px, 0px) scale(1);
        }
    }

</style>

// -- =====================================================================================
