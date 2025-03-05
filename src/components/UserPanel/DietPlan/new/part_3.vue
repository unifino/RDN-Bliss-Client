<template>
    <div ref="part_x" id="part_x">
        <div id="tableWrapper">

            <div v-for="(meal,i,c) of CTS.Meal" class="mealRow" :key="i">
                <div class="mealTitle">{{ meal }}</div>
                <div class="add" @click="addToPlan_0(meal)">+</div>
                <div class="rail">
                    <div class="basketItem" v-for="(item,j) of ITEMS[meal]" :key="j">
                        <div class="BI_name">{{ item.name }}</div>
                        <div class="BI_size">{{ item.size }}</div>
                        <div class="BI_cal">{{ item.cal }}</div>
                    </div>
                </div>
                <div v-if="c < Object.keys(CTS.Meal).length-1" class="divider" />
            </div>
        </div>  
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref, Ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as CTS                             from '@/types/common'
import * as Tools                           from '@/mixins/Tools';

const store: TS.Store = useStore()

// -- =====================================================================================

const Baskets = {

[ CTS.Basket.Protein ]: [
{ icon: "", name: "Chicken", size: "100 g", cal: "30 kcal" },
{ icon: "", name: "Fish", size: "90 g", cal: "10 kcal" },
{ icon: "", name: "Hot Dog", size: "200 g", cal: "300 kcal" },
{ icon: "", name: "Burger", size: "100 g", cal: "400 kcal" },
    { icon: "", name: "Pizza", size: "50 g", cal: "40 kcal" },
{ icon: "", name: "Egg", size: "1 pcs", cal: "120 kcal" },
{ icon: "", name: "Fish", size: "90 g", cal: "10 kcal" },
{ icon: "", name: "Chicken", size: "100 g", cal: "30 kcal" },
    { icon: "", name: "Fish", size: "90 g", cal: "10 kcal" },
    { icon: "", name: "Hot Dog", size: "200 g", cal: "300 kcal" },
    { icon: "", name: "Burger", size: "100 g", cal: "400 kcal" },
    { icon: "", name: "Pizza", size: "50 g", cal: "40 kcal" },
    { icon: "", name: "Fish", size: "90 g", cal: "10 kcal" },
    { icon: "", name: "Egg", size: "1 pcs", cal: "120 kcal" },
    { icon: "", name: "Chicken", size: "100 g", cal: "30 kcal" },
    { icon: "", name: "Fish", size: "90 g", cal: "10 kcal" },
    { icon: "", name: "Hot Dog", size: "200 g", cal: "300 kcal" },
    { icon: "", name: "Burger", size: "100 g", cal: "400 kcal" },
    { icon: "", name: "Pizza", size: "50 g", cal: "40 kcal" }, { icon: "", name: "Chicken", size: "100 g", cal: "30 kcal" },
    { icon: "", name: "Fish", size: "90 g", cal: "10 kcal" },
    { icon: "", name: "Hot Dog", size: "200 g", cal: "300 kcal" },
    { icon: "", name: "Burger", size: "100 g", cal: "400 kcal" },
    { icon: "", name: "Pizza", size: "50 g", cal: "40 kcal" },
    { icon: "", name: "Fish", size: "90 g", cal: "10 kcal" },
    { icon: "", name: "Egg", size: "1 pcs", cal: "120 kcal" },
    { icon: "", name: "Chicken", size: "100 g", cal: "30 kcal" },
    { icon: "", name: "Fish", size: "90 g", cal: "10 kcal" },
    { icon: "", name: "Hot Dog", size: "200 g", cal: "300 kcal" },
    { icon: "", name: "Burger", size: "100 g", cal: "400 kcal" },
    { icon: "", name: "Pizza", size: "50 g", cal: "40 kcal" }, { icon: "", name: "Chicken", size: "100 g", cal: "30 kcal" },
    { icon: "", name: "Fish", size: "90 g", cal: "10 kcal" },
    { icon: "", name: "Hot Dog", size: "200 g", cal: "300 kcal" },
    { icon: "", name: "Burger", size: "100 g", cal: "400 kcal" },
    { icon: "", name: "Pizza", size: "50 g", cal: "40 kcal" },
    { icon: "", name: "Fish", size: "90 g", cal: "10 kcal" },
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

    const ipx = 2
    const part_x = ref<HTMLElement>( {} as HTMLElement )
    type item = { name: string, size: string, cal: string }
    const ITEMS: Ref<{ [key in CTS.Meal]: item[] }> = ref( {
        [ CTS.Meal.Breakfast ]: [],
        [ CTS.Meal.Lunch ]: [],
        [ CTS.Meal.Snak ]: [],
        [ CTS.Meal.Dinner ]: [],
        [ CTS.Meal.Bedtime ]: []
    } )

// -- =====================================================================================

    const addToPlan_0 = async ( meal: CTS.Meal ) => {
        store.commit( TS.Mutates.newGBi, { meal, basket: undefined, item: undefined } )
        store.commit( TS.Mutates.userTool, TS.UserTools.Grocery )
    }

// -- =====================================================================================

    const addToPlan_2 = () => {
        const myGBi = store.getters.newGBi
        if ( myGBi.meal ) ITEMS.value[ myGBi.meal ].push( { 
            name: Baskets[ myGBi.basket as CTS.Basket ][ myGBi.item as number ].name, 
            size: Baskets[ myGBi.basket as CTS.Basket ][ myGBi.item as number ].size, 
            cal: Baskets[ myGBi.basket as CTS.Basket ][ myGBi.item as number ].cal, 
        } )
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
        ( nV ) => { if ( nV.basket !== undefined && nV.item !== undefined ) addToPlan_2() }
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
