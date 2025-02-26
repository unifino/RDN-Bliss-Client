<template>
    <div ref="part_x" id="part_x" @click="back">
        <div id="mainWrapper">
            
            <div class="item1" ><input placeholder="Gender" /></div>
            <div class="item2" ><input placeholder="Age" /></div>
            <div class="item3"><input placeholder="Weight" />
                <input placeholder="Height" /></div>
        </div>  
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

    const ipx = 1
    const part_x = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const back = () => {
        const gpx = ipx -1
        store.commit( TS.Mutates.pageSlide, { origin: TS.UserTools.CreateNewPlan, gpx, move: "L" } )
    }

// -- =====================================================================================

    store.watch(
        getters => getters.userTool,
        () => part_x.value.classList.add( "page_init" )
    )

    store.watch(
        getters => getters.pageSlide,
        ( nV, oV ) => Tools.ifSlider( TS.UserTools.CreateNewPlan, oV, nV, ipx, part_x )
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #mainWrapper{
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1.3fr; 
        grid-template-rows: 1fr 1fr;
        height: 100%;
    }

    #mainWrapper > *{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .item1 {
        grid-column: 1;
        grid-row: 1/span 2; 
    }

    .item2 {
        grid-column: 2;
        grid-row: 1;   
    }

    .item3 {
        grid-column: 2;
        grid-row: 2;
    }
  

</style>

// -- =====================================================================================
