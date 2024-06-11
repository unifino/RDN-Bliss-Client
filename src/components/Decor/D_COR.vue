<template>
    <img id="BOX_001" ref="BOX_001" :src="bgPath()[ picIndex ]" />
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'

const store = useStore();

// -- =====================================================================================

    // eslint-disable-next-line
    const BOX_001 = ref<HTMLElement>( null as any )
    let picIndex = ref(0)

    const bgPath = () => {
        return [
            require( "@/assets/Pics/plant.jpg" ),
            require( "@/assets/Pics/flower.jpg" )
        ]
    }


// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        async ( nV ) => {
            await new Promise( _ => setTimeout( _, 100 ) )
            BOX_001.value.className = "fadeOut_B001"
            await new Promise( _ => setTimeout( _, 700 ) )
            picIndex.value = nV === TS.Orts.Home ? 0 : 1
            await new Promise( _ => setTimeout( _, 500 ) )
            BOX_001.value.className = "fadeIn_B001"
        }
    )


// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #BOX_001{
        height: 100%;
        position: absolute;
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
