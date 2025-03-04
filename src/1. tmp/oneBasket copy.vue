<template>
        
    <div id="tableWrapper">
        <div :class="'column_1 ' + extClass" >{{ props.basket }}</div>
        <div :class="'column_2 ' + extClass" >
            <div class="add" @click="exit">+</div>
            <div class="rail">
                <div class="item" v-for="(x,i) of Baskets[ props.basket ]" :key="i">
                    <div class="icon">{{ x.icon }}</div>
                    <div class="name">{{ x.name }}</div>
                    <div class="size">{{ x.size }}</div>
                    <div class="cal">{{ x.cal }}</div>
                </div>  
            </div>  
        </div>
    </div>  

</template>

// -- =====================================================================================

<script setup lang="ts">

import { defineProps }                      from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as CTS                             from '@/types/common'

const store: TS.Store = useStore()

// -- =====================================================================================

    const props = defineProps<{
        basket: keyof typeof CTS.Basket
        extClass?: string
    }>()

    // const myBasket = ref<HTMLElement>( {} as HTMLElement )
    let from: TS.UserTools

    const Baskets = {

        [ CTS.Basket.Protein ]: [
            { icon: "", name: "Egg", size: "1 pcs", cal: "120 kcal" },
            { icon: "", name: "Chicken", size: "100 g", cal: "30 kcal" },
            { icon: "", name: "Fish", size: "90 g", cal: "10 kcal" },
            { icon: "", name: "Hot Dog", size: "200 g", cal: "300 kcal" },
            { icon: "", name: "Burger", size: "100 g", cal: "400 kcal" },
            { icon: "", name: "Pizza", size: "50 g", cal: "40 kcal" },
        ],
        [ CTS.Basket.Fruit ]: [
            { icon: "", name: "Apple", size: "1 pcs", cal: "120 kcal" },
            { icon: "", name: "Lemon", size: "1 pcs", cal: "120 kcal" },

        ],
        [ CTS.Basket.Vegtable ]: [
            { icon: "", name: "Pepper", size: "1 pcs", cal: "120 kcal" },
            { icon: "", name: "Carrot", size: "1 pcs", cal: "120 kcal" },
            { icon: "", name: "Vegtable", size: "1 pcs", cal: "120 kcal" },
            { icon: "", name: "Vegtable", size: "1 pcs", cal: "120 kcal" },

        ],
        [ CTS.Basket.Carbo ]: [
            { icon: "", name: "Bread", size: "1 pcs", cal: "120 kcal" },
            { icon: "", name: "Cake", size: "200 g", cal: "350 kcal" },
            { icon: "", name: "Soap", size: "1 pcs", cal: "120 kcal" },
            { icon: "", name: "Other", size: "1 pcs", cal: "120 kcal" },

        ],
        [ CTS.Basket.Fat ]: [
            { icon: "", name: "Cheese", size: "10 g", cal: "120 kcal" },
            { icon: "", name: "Oil", size: "10 g", cal: "120 kcal" },
            { icon: "", name: "Ice Cream", size: "200 g", cal: "350 kcal" },
        ],
        [ CTS.Basket.Beverage ]: [
           { icon: "", name: "Water", size: "1 glass", cal: "0 kcal" },
           { icon: "", name: "Coffee", size: "1 cup", cal: "0 kcal" },
           { icon: "", name: "Tea", size: "1 cup", cal: "0 kcal" },
           { icon: "", name: "Cola", size: "300 cc", cal: "100 kcal" },
           { icon: "", name: "Juice", size: "300 cc", cal: "100 kcal" },
           { icon: "", name: "Other", size: "300 cc", cal: "100 kcal" },
        ]

    }
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

    .column_1{
        border-width: 0 0 2px 0;
        grid-column: 1;
    }
    .column_2{
        border-width: 0 0 2px 0;
        grid-column: 2;
    }
    
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
        width: 100px;
        height: 70px;
        border: solid #8d9294 2px;
        border-radius: 8px;
        margin: 0 3px;
        cursor: pointer;
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        flex-shrink: 0; 
    }

    .item:hover{ background-color: #edebdd }
    
    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: fas;
        font-size: 30px;
        position: absolute;
        margin: 7px 0 0 8px;
    }

    .name{
        font-size: 16px;
        position: absolute;
        margin: 44px 0 0 8px;
    }
    
    .size{
        text-align: right;
        width: 50px;
        color: #1777bc;
        position: absolute;
        margin: 4px 0 0 45px;
    }

    .cal{
        text-align: right;
        width: 50px;
        color: chocolate;
        margin: 24px 0 0 45px;
    }

    .rail{
        width: 600px;
        height: 100px;
        overflow-x: auto;
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

</style>

// -- =====================================================================================
