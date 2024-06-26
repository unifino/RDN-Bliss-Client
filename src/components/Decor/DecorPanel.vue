<template>
    <div id="decorPanel">
        <div id="d_cor" class="x_xxx" ref="d_cor"><D_COR /></div>
        <div id="d_txt" class="x_xxx" ref="d_txt"><D_TXT /></div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import D_COR                                from '@/components/Decor/D_COR.vue'
import D_TXT                                from '@/components/Decor/D_TXT.vue'
import { useStore }                         from 'vuex'
import { ref }                              from 'vue'
import * as Anime                           from '@/mixins/AnimationCenter'
import * as TS                              from '@/types/types'

const store = useStore()

// -- =====================================================================================

    const d_cor = ref<HTMLElement>( {} as HTMLElement )
    const d_txt = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => {
            if (
                nV !== oV ||
                (
                    nV === TS.Orts.Home &&
                    store.getters.process === TS.Processes.Registering
                )
            )
                Anime.textSlider( d_txt )
        }
    )

    store.watch(
        getters => getters.process,
        ( nV, oV ) => {
            if ( nV !== TS.Processes.Login )
                if (
                    store.getters.ort !== TS.Orts.Home ||
                    nV !== TS.Processes.Reading || oV !== TS.Processes.Login
                )
                    Anime.textSlider( d_txt )
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #decorPanel{
        height: 100%;
        width: 100%;
        bottom: 0;
        position: absolute;
    }

    .x_xxx{
        height: 100%;
        position: absolute;
        overflow: hidden;
        transform: translateX(-5%);
    }

    #d_txt{
        top: 0;
        width: 100%;
        opacity: 0;
    }

    #d_cor{
        bottom: 0;
        right: 0;
        width: 100%;
        transform: translateX(0);
    }

    .slideIn_DTXT {
        animation           : slideIn_DTXT 1.5s;
        animation-fill-mode : both;
    }

    @keyframes slideIn_DTXT {
        30%{
            transform: translate(2.3%, 0px);
            opacity: .6;
        }
        40%{
            transform: translate(2.3%, 0px);
            opacity: .8;
        }
        100%{
            transform: translate(15%, 0px);
            opacity: 0;
        }
    }

</style>

// -- =====================================================================================
