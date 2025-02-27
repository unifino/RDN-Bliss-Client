<template>
    <div ref="part_x" id="part_x">
        <div id="tableWrapper">
            
            <div class="item1" >Breakfast</div>
            <div class="item2" >Lunch</div>
            <div class="item3" >Snak</div>
            <div class="item4" >Dinner</div>
            <div class="item5" >Bedtime</div>
            <div class="item6" ><div class="add" @click="add">+</div></div>
            <div class="item7" ><div class="add" @click="add">+</div></div>
            <div class="item8" ><div class="add" @click="add">+</div></div>
            <div class="item9" ><div class="add" @click="add">+</div></div>
            <div class="item10"><div class="add" @click="add">+</div></div>
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

    const ipx = 2
    const part_x = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const add = async () => {
       store.commit( TS.Mutates.userTool, TS.UserTools.Grocery )
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

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #tableWrapper{
        margin: auto;
        margin-top: 4%;
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 7fr; 
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        height: 80%;
        width: 90%;
    }
    #tableWrapper>*{
        font-family: Oswald;
        font-weight: bold;
        font-size: 21px;
        display: flex;
        align-items: center;
        padding: 0 0 0 10px;
        /* justify-content: center; */
        border-style: solid;
        border-color: #787775;
        color: #072622;

    }
    .item1{
        border-width: 0 1px 1px 0;
        border-width: 0 0 1px 0;
        grid-column: 1;
        grid-row: 1; 
    }

    .item2{
        border-width: 1px 1px 1px 0;
        border-width: 1px 0 1px 0;
        grid-column: 1;
        grid-row: 2; 
    }
    .item3{
        border-width: 1px 1px 1px 0;
        border-width: 1px 0 1px 0;
        grid-column: 1;
        grid-row: 3; 
    }
    .item4{
        border-width: 1px 1px 1px 0;
        border-width: 1px 0 1px 0;
        grid-column: 1;
        grid-row: 4; 
    }
    .item5{
        border-width: 1px 1px 0 0;
        border-width: 1px 0 0 0;
        grid-column: 1;
        grid-row: 5; 
    }
    .item6{
        border-width: 0 0 1px 1px;
        border-width: 0 0 1px 0;
        grid-column: 2;
        grid-row: 1; 
    }
    .item7{
        border-width: 1px 0 1px 1px;
        border-width: 1px 0 1px 0;
        grid-column: 2;
        grid-row: 2; 
    }
    .item8{
        border-width: 1px 0 1px 1px;
        border-width: 1px 0 1px 0;
        grid-column: 2;
        grid-row: 3; 
    }
    .item9{
        border-width: 1px 0 1px 1px;
        border-width: 1px 0 1px 0;
        grid-column: 2;
        grid-row: 4; 
    }
    .item10{
        border-width: 1px 0 0 1px;
        border-width: 1px 0 0 0;
        grid-column: 2;
        grid-row: 5; 
    }

    .add{
        color: #798d8c;
        font-family: fas;
        font-size: 29px;
        padding: 6px 10px 0 10px;
        cursor: pointer;
    }
    .add:hover{ color: #1777bc }
</style>

// -- =====================================================================================
