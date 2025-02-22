<template>
    <div ref="part_x" id="part_x" @click="back">
            Hatef
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
    const ipx = 1
    const part_x = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const back = () => {
        const gpx = ipx -1
        store.commit( TS.Mutates.pageSlide, { origin: TS.UserTools.DietPlans, gpx, move: "L" } )
    }
    // const _out = () => Tools.userAnime( dietPlans, "Out" )
    // const _in = ( skip = false ) => Tools.userAnime( dietPlans, "In", skip )

// -- =====================================================================================

    const slider = ( act: "N" | "P" ) => {
        // current_Page_R
    }

// -- =====================================================================================

    store.watch(
        getters => getters.userTool,
        () => part_x.value.classList.add( "page_init" )
    )

    store.watch(
        getters => getters.pageSlide,
        ( nV, oV ) => Tools.ifSlider( TS.UserTools.DietPlans, oV, nV, ipx, part_x )
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #part_x{
        background: rebeccapurple;
    }

  

</style>

// -- =====================================================================================
