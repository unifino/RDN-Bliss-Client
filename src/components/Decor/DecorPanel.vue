<template>
    <div id="decorPanel">
        <div class="x_xxx" id="d_txt" ref="d_txt"><D_TXT /></div>
        <div class="x_xxx" id="d_cor" ref="d_cor"><D_COR /></div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import D_COR                                from '@/components/Decor/D_COR.vue'
import D_TXT                                from '@/components/Decor/D_TXT.vue'
import { useStore }                         from 'vuex'
import { ref }                              from 'vue'

const store = useStore()

// -- =====================================================================================

    const d_cor = ref<HTMLElement>( {} as HTMLElement )
    const d_txt = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const slider = async function () {

        // .. PART OUT
        // .. delay of .9s ... slide in TEXT
        await new Promise( _ => setTimeout( _, 900 ) )
        d_txt.value.className += "x_xxx " + "slideIn_DTXT"

        // .. PART IN
        await new Promise( _ => setTimeout( _, 860 ) )
        // .. wait untill it slides in completly
        await new Promise( _ => setTimeout( _, 1500 ) )

        // .. reset it Class
        d_txt.value.className = "x_xxx"

    }

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => { if ( nV !== oV ) slider() }
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
    }

    #d_txt{
        top: 0;
        width: 100%;
        transform: translateX(-5%);
        opacity: 0;
    }

    #d_cor{
        bottom: 0;
        width: 24%;
        right: 0;
    }

    .slideIn_DTXT {
        animation           : slideIn_DTXT 1.5s;
        animation-fill-mode : both;
    }

    @keyframes slideIn_DTXT {
        30%{
            transform: translate(0%, 0px);
            opacity: .6;
        }
        40%{
            transform: translate(0%, 0px);
            opacity: .8;
        }
        100%{
            transform: translate(15%, 0px);
            opacity: 0;
        }
    }

</style>

// -- =====================================================================================
