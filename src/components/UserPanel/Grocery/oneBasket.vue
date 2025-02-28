<template>
        
    <div id="tableWrapper">
        <div :class="'item1 ' + extClass" >{{category}}</div>
        <div :class="'item2 ' + extClass" >
            <div class="add" @click="exit">+</div>
            <div class="item">
                <div class="icon"></div>
                <div class="name">Chicken</div>
                <div class="size">100 g</div>
                <div class="cal">30 kcal</div>
            </div>    
        </div>
    </div>  

</template>

// -- =====================================================================================

<script setup lang="ts">

import { defineProps }                      from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'

const store: TS.Store = useStore()

// -- =====================================================================================

    defineProps( {
        category: String,
        extClass: String,
    } )

    // const myBasket = ref<HTMLElement>( {} as HTMLElement )
    let from: TS.UserTools

// -- =====================================================================================

    const exit = () => {
        store.commit( TS.Mutates.userTool, TS.UserTools.CreateNewPatient )
        store.commit( TS.Mutates.userTool, from )
    }

// -- =====================================================================================

    store.watch(
        getters => getters.userTool,
        ( nV, oV ) => {
            if ( nV !== oV ) if ( nV === TS.UserTools.Grocery ) from = oV
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #tableWrapper{
        margin: auto;
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 7fr; 
        grid-template-rows: 1fr;
        height: 100px;
        width: 90%;
    }
    #tableWrapper>*{
        font-family: Oswald;
        font-weight: bold;
        font-size: 21px;
        display: flex;
        align-items: center;
        padding: 0 0 0 10px;
        border-style: solid;
        border-color: #787775;
        color: #072622;
    }

    .item1{
        border-width: 1px 0 1px 0;
        grid-column: 1;
    }
    .item2{
        border-width: 1px 0 1px 0;
        grid-column: 2;
    }
    
    .first { border-top-width: 0 }
    .last { border-bottom-width: 0 }

    .add{
        color: #798d8c;
        font-family: fas;
        font-size: 29px;
        padding: 6px 10px 0 10px;
        margin: 0 20px 0 0;
        cursor: pointer;
    }
    .add:hover{ color: #1777bc }
    
    .item{
        color: #0a685b;
        font-size: 14px;
        width: 130px;
        height: 70px;
        border: solid #8d9294 2px;
        border-radius: 8px;
        display: grid;
        grid-template-columns: 1.7fr 2fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        cursor: pointer;
    }

    .item:hover{ background-color: #edebdd }
    
    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: fas;
        font-size: 30px;
        grid-column: 1;
        grid-row: 1 / span 3;
    }

    .name{
        font-size: 16px;
        grid-column: 1;
        grid-row: 4;
    }
    
    .size{
        grid-column: 2;
        grid-row: 1;
        color: #1777bc;
    }

    .cal{
        grid-column: 2;
        grid-row: 2;
        color: chocolate;
    }

</style>

// -- =====================================================================================
