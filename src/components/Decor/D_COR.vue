<template>
    <img id="BOX_001" ref="BOX_001" :src="pics()[ picIndex ]" />
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as Anime                           from '@/mixins/AnimationCenter'

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
            require( "@/assets/Pics/flower.jpg" )
        ]
    }

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        nV => Anime.decor( nV, BOX_001, picIndex )
    )


// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #BOX_001{
        height: 100%;
        right: 0;
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
