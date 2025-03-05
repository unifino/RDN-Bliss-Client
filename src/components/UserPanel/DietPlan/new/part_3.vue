<template>
    <div ref="part_x" id="part_x">
        <div id="tableWrapper">

            <div v-for="(m,i,x) of CTS.Meal" class="mealRow" :key="i">
                <div class="mealTitle">{{ m }}</div>
                <div class="add" @click="add">+</div>
                <div class="rail">
                    <div class="items" v-for="(x,i) of Breakfast" :key="i">{{ "x.name" }}</div>
                </div>
                <div v-if="x<Object.keys(CTS.Meal).length-1" class="divider" />
            </div>
        </div>  
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as CTS                             from '@/types/common'
import * as Tools                           from '@/mixins/Tools';

const store: TS.Store = useStore()

// -- =====================================================================================

    const ipx = 2
    const part_x = ref<HTMLElement>( {} as HTMLElement )
    const Breakfast = ref<string[]>([])

// -- =====================================================================================

    const add = async () => {
       store.commit( TS.Mutates.userTool, TS.UserTools.Grocery )
    }

// -- =====================================================================================

    const addToPlan_2 = () => {
        console.log("reset");
        Breakfast.value.push( "c" )
    }

    // -- =====================================================================================

    const myReset = () => {
        console.log("reset");
        
    }

// -- =====================================================================================

    store.watch(
        getters => getters.userTool,
        ( nV, oV ) => {
            if ( nV !== TS.UserTools.CreateNewPlan && oV !== TS.UserTools.Grocery )
                part_x.value.classList.add( "page_init" )
            if ( nV === TS.UserTools.CreateNewPlan && oV === TS.UserTools.Grocery ) 
                part_x.value.classList.remove( "page_init" )
        }
    )

    store.watch(
        getters => getters.pageSlide,
        ( nV, oV ) => Tools.ifSlider( TS.UserTools.CreateNewPlan, oV, nV, ipx, part_x )
    )

    store.watch(
        getters => getters.Flag_resetForm,
        () => myReset()
    )

    store.watch(
        getters => getters.newGBi,
        () => addToPlan_2()
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #tableWrapper{
        margin: auto;
        margin-top: 3%;
        text-align: center;
        height: 80%;
        width: 90%;
    }

    .mealRow{
        margin: 5px 0px;
        width: 100%;
        height: 100px;
        float: left;
    }

    .rail{
        overflow-x: auto;
        display: flex;
        justify-content: left;
        align-items: center;
        flex-direction: row;
        height: 100%;
        flex-shrink: 0;

       
    }
     .items{
        flex-shrink: 0;
     }

    .mealTitle{
        font-family: Oswald;
        font-weight: bold;
        font-size: 21px;
        display: flex;
        align-items: center;
        padding: 0 0 0 10px;
        color: #072622;
        height: 100px;
        width: 100px;
        float: left;
    }
    
    .add{
        height: 100%    ;
        width: auto;
        padding: 0 30px 0 0 ;
        color: #798d8c;
        font-family: fas;
        font-size: 29px;
        cursor: pointer;
        float: left;
        display: flex;
        align-items: center;
        text-align: center;        
    }
    .add:hover{ color: #1777bc }
    
    .items{
        color: #0a685b;
        font-size: 14px;
        width: 100px;
        height: 70px;
        border: solid #8d9294 2px;
        border-radius: 8px;
        margin: 3px;
        cursor: pointer;
        float: left;
        font-family: Oswald;
        font-weight: bold;
        border: #dedede solid 2px;
        background-color: #ededed;
    }

    .divider{ 
        height: 0px;
        width: 100%;
        border: solid 1px #787775;
        float: left;
    }

</style>

// -- =====================================================================================
