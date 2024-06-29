<template>

    <div style="visibility: collapse; display: none;">
        <img v-for="(x,i) of pics()" :key="i" :src="pics()[i]" />
    </div>
    
    <img id="D_COR" ref="d_cor" :src="pics()[ picIndex ]" />

</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'

const store: TS.Store = useStore()

// -- =====================================================================================

    const d_cor = ref<HTMLElement>( {} as HTMLElement )
    const picIndex = ref( store.getters.ort )

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

        let idx: number = store.getters.ort;

        switch ( store.getters.process ) {
            case TS.Processes.Reading:     return idx
            case TS.Processes.Registering: return idx = 6
            case TS.Processes.Login:       return idx = 7
        }

    }

// -- =====================================================================================

    const mySpeed = () => {
        let speed = 0;
        switch (store.getters.animationSpeed) {
            case TS.Speeds.Normal: speed = 700; break;
            case TS.Speeds.Fast: speed = 400; break;
        }
        return speed
    }

// -- =====================================================================================

    const imgDecor = async () => {
        await new Promise( _ => setTimeout( _, 10 ) )
        d_cor.value.className = "D_COR_fade_Out"
        await new Promise( _ => setTimeout( _, mySpeed() ) )
        // .. set pic by idx or by Ort-Index
        picIndex.value = idxFinder()
        let delay = store.getters.process === TS.Processes.Login ? 100 : (mySpeed() - 150);
        await new Promise( _ => setTimeout( _, delay ) )
        d_cor.value.className = "D_COR_fade_In"
    }

// -- =====================================================================================

    // .. 0-5
    store.watch( getters => getters.ort, () => imgDecor() )
    // .. 6-7
    store.watch( getters => getters.process, () => imgDecor() )


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

    .D_COR_fade_Out {
        animation           : D_COR_fade_Out .8s;
        animation-fill-mode : both;
    }
    @keyframes D_COR_fade_Out { 0%{ opacity: 1 } 100%{ opacity: 0 } }

    .D_COR_fade_In {
        animation           : D_COR_fade_In .8s;
        animation-fill-mode : both;
    }
    @keyframes D_COR_fade_In  { 0%{ opacity: 0 } 100%{ opacity: 1 } }

</style>

<style Fast>
    .Fast .D_COR_fade_Out {
        animation           : D_COR_fade_Out .3s;
        animation-fill-mode : both;
    }
    @keyframes D_COR_fade_Out { 0%{ opacity: 1 } 100%{ opacity: 0 } }

    .Fast .D_COR_fade_In {
        animation           : D_COR_fade_In .44s;
        animation-fill-mode : both;
    }
    @keyframes D_COR_fade_In  { 0%{ opacity: 0 } 100%{ opacity: 1 } }

</style>

// -- =====================================================================================
