<template>
        
    <div id="basketWrapper">
        <div
            :class="'basketItem' + ( show ? ' show' : '' )"
            v-for="(x,i) of Baskets[ props.basket ]" :key="i"
            @click="addToPlan_1(i)"
        >
            <div class="BI_name">{{ x.name }}</div>
            <div class="BI_size">{{ x.size }}</div>
            <div class="BI_cal">{{ x.cal }}</div>
        </div>  
    </div>  

</template>

// -- =====================================================================================

<script setup lang="ts">

import { defineProps, ref }                 from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as CTS                             from '@/types/common'

const store: TS.Store = useStore()

// -- =====================================================================================

    const props = defineProps<{
        basket: keyof typeof CTS.Basket
        extClass?: string
    }>()

    const show = ref<boolean>( false )

    const addToPlan_1 = ( i: number ) => store.commit( TS.Mutates.newGBi, [ CTS.Basket[ props.basket ], i ] )

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

    store.watch(
        getters => getters.GroceryBasket,
        nV => {
            show.value = false
            if ( nV === props.basket ) show.value = true
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    .basketItem{ display: none }
    
    .show{ display: block }

</style>

// -- =====================================================================================
