<template>
    <div ref="part_x" id="part_x">
        <div id="nameWrapper">
            <div id="title">Give it a Name</div> 
            <input placeholder="Title" />
        </div>
        <div id="title">Select the Calori's Calculation Method:</div>
        <div id="methodsWrapper">
            <div class="method" v-for="(m,i) of methods" :key="i" @click="select(i)">{{ m }}</div>
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

    // const dietPlans = ref<HTMLElement>( {} as HTMLElement )
    const ipx = 0
    const part_x = ref<HTMLElement>( {} as HTMLElement )
    const methods = [ "Mifflin-St. Jeor's", "Harris-Benedict" , "WHO" ]

// -- =====================================================================================

    const select = ( i: number ) => {
        i++
        slider()
    }

// -- =====================================================================================

    const slider = () => {
        const gpx = ipx +1
        store.commit( TS.Mutates.pageSlide, { origin: TS.UserTools.CreateNewPlan, gpx, move: "R" } )
    }

// -- =====================================================================================

    const myReset = () => {
        console.log("reset");
        
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

    store.watch(
        getters => getters.Flag_resetForm,
        () => myReset()
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #title{
        font-size: 23px;
        font-weight: bold;
        font-family: PoiretOne;
        text-align: center;
        padding: 75px 0 15px 0;
    }

    #methodsWrapper, #nameWrapper{ 
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    #methodsWrapper{
        margin-top: 30px;
    }

    .method{
        background-color: #F0F0F0;
        font-family: Oswald;
        font-size: 17.5px;
        font-weight: bold;
        color: #081E2F;
        height: 25px;
        width: 210px;
        padding: 10px 20px;
        border-radius: 7px;
        border: solid gray 1px;
        box-shadow: 0 0 1px 0px rgb(88 88 91);
        margin: 10px 0;
        cursor: pointer;
    }
    .method:hover{
        background-color: #3dcbfa;
    }

</style>

// -- =====================================================================================
