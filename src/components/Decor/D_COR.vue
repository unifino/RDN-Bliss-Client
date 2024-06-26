<template>
    <img id="BOX_001" ref="BOX_001" :src="pics()[ picIndex ]" />
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as Anime                           from '@/mixins/AnimationCenter'
import * as TS                              from '@/types/types'

const store = useStore();

// -- =====================================================================================

    // eslint-disable-next-line
    const BOX_001 = ref<HTMLElement>( null as any )
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

    store.watch(
        getters => getters.ort,
        nV => Anime.imgDecor( BOX_001, picIndex, nV )
    )

    store.watch(
        getters => getters.Flag_logged_in,
        // .. logOut
        nV => { if (!nV) Anime.imgDecor( BOX_001, picIndex, TS.Orts.Home ) }
    )

    store.watch(
        getters => getters.process,
        nV => {

            let idx: number;

            switch (nV) {
                case TS.Processes.Registering:  idx = 6; break;
                case TS.Processes.Login:        idx = 7; break;
                default:        idx = store.getters.ort; break;
            }

            Anime.imgDecor(
                BOX_001,
                picIndex,
                idx,
                100
            )

        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #BOX_001{
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

    .fadeOut_B001 {
        animation           : fadeOut_B001 .8s;
        animation-fill-mode : both;
    }

    .fadeIn_B001 {
        animation           : fadeIn_B001 .8s;
        animation-fill-mode : both;
    }

    @keyframes fadeOut_B001 {
        0%{ opacity: 1; }
        100%{ opacity: 0; }
    }

    @keyframes fadeIn_B001 {
        0%{ opacity: 0; }
        100%{ opacity: 1; }
    }

</style>

// -- =====================================================================================
