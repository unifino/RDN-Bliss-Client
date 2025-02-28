<template>
        
    <div id="mainWrapper" ref="bigGrocery">
        <div id="basketsWrapper">
            <oneBasket category="Protein" ext-class="first"/>
            <oneBasket category="Vegtable" />
            <oneBasket category="Fruit" />
            <oneBasket category="Carbo" />
            <oneBasket category="Fat" />
            <oneBasket category="Beverage" ext-class="last" />
        </div>
    </div> 

</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
// import { useStore }                         from 'vuex'
// import * as TS                              from '@/types/types'
import oneBasket                            from '@/components/UserPanel/Grocery/oneBasket.vue'

// const store: TS.Store = useStore()

// -- =====================================================================================
    
    const bigGrocery = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #mainWrapper{
        background-color: #e6e3e3;
        height: 620px;
        width: 845px;
        border: solid 40px #e6e3e3;
        border-width: 10px 20px 20px 20px;
        border-radius: 23px;
        box-shadow: 0 0 7px 1px #babbbb;
        position: relative;
        float: left;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    #basketsWrapper{
        height: 87%;
        margin-top: 3%;
        overflow-y: auto;
    }

</style>

// -- =====================================================================================
