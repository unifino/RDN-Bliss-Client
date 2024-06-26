<template>
    <img id="D_COR" ref="d_cor" :src="pics()[ picIndex ]" />
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'

const store = useStore();

// -- =====================================================================================

    const d_cor = ref<HTMLElement>( {} as HTMLElement )
    const picIndex = ref(0)

    const pics = () => {
        return [
            require( "@/assets/Pics/plant.jpg" ),
            require( "@/assets/Pics/beauty.jpg" ),
            require( "@/assets/Pics/books.jpg" ),
            require( "@/assets/Pics/magazine.jpg" ),
            require( "@/assets/Pics/flower.jpg" ),
            // .. user
            require( "@/assets/Pics/office-lobby.jpg" ),
            // .. 6
            require( "@/assets/Pics/whimsical.jpg" ),
            require( "@/assets/Pics/blue-tit.jpg" ),
        ]
    }

// -- =====================================================================================

    const idxFinder = () => {

        let idx = store.getters.ort;

        switch ( store.getters.process ) {
            case TS.Processes.Reading:     return idx
            case TS.Processes.Registering: return idx = 6
            case TS.Processes.Login:       return idx = 7
        }

    }

// -- =====================================================================================

    const imgDecor = async () => {
        await new Promise( _ => setTimeout( _, 10 ) )
        d_cor.value.className = "fadeOut_D_COR"
        await new Promise( _ => setTimeout( _, 700 ) )
        // .. set pic by idx or by Ort-Index
        picIndex.value = idxFinder()
        let delay = store.getters.process === TS.Processes.Login ? 100 : 500;
        await new Promise( _ => setTimeout( _, delay ) )
        d_cor.value.className = "fadeIn_D_COR"
    }

// -- =====================================================================================

    // .. 0-5
    store.watch( getters => getters.ort, () => imgDecor() )
    // .. 6-7
    store.watch( getters => getters.process, () => imgDecor() )
    // .. logOut
    store.watch( getters => getters.Flag_logged_in, nV => { if (!nV) imgDecor() } )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #D_COR{
        height: 100%;
        right: 0;
        position: absolute;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .fadeOut_D_COR {
        animation           : fadeOut_D_COR .8s;
        animation-fill-mode : both;
    }

    .fadeIn_D_COR {
        animation           : fadeIn_D_COR .8s;
        animation-fill-mode : both;
    }

    @keyframes fadeOut_D_COR {
        0%{ opacity: 1; }
        100%{ opacity: 0; }
    }

    @keyframes fadeIn_D_COR {
        0%{ opacity: 0; }
        100%{ opacity: 1; }
    }

</style>

// -- =====================================================================================
