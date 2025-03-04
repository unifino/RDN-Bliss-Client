<template>
        
    <div id="tableWrapper">
        <div :class="'myButton' + ( isSelected ? ' selected' : '' )" @mouseover="select">
            <div class="icon">{{ Baskets[props.basket].icon }}</div>
            <div class="title">{{ props.basket }}</div>
        </div>
    </div>  

</template>

// -- =====================================================================================

<script setup lang="ts">

import { defineProps, ref }                    from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as CTS                             from '@/types/common'

const store: TS.Store = useStore()

// -- =====================================================================================

    const props = defineProps<{
        basket: keyof typeof CTS.Basket
        extClass?: string
    }>()

    const isSelected = ref<boolean>( false )

    const Baskets = {

        [ CTS.Basket.Protein ]: { icon: "" },
        [ CTS.Basket.Fruit ]: { icon: "" },
        [ CTS.Basket.Vegtable ]: { icon: "" },
        [ CTS.Basket.Carbo ]: { icon: "" },
        [ CTS.Basket.Fat ]: { icon: "" },
        [ CTS.Basket.Beverage ]: { icon: "" },

    }

    const select = () => store.commit( TS.Mutates.GroceryBasket, props.basket as any )

// -- =====================================================================================

    store.watch(
        getters => getters.GroceryBasket,
        nV => {
            isSelected.value = false
            if ( nV === props.basket ) isSelected.value = true
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    .myButton{
        color: #285147;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 88px;
        height: 83px;
        border: #d7d4d4 solid 2px;
        background-color: #dbd9d9;
        border-radius: 7px;
        margin: 10px 20px;
        cursor: pointer;
    }

    .selected{ color: #177a1c; border-color: #177a1c; background-color: #ddd3ba; }
    .myButton:hover{ color: #c56715; border-color: #d6a947 }

    .icon{
        margin: 10px;
        font-family: fas;
        font-size: 30px;
    }

    .title{
        font-family: Oswald;
        font-size: 17px;
        font-weight: bold;
        height: 40px;
    }

  
</style>

// -- =====================================================================================
