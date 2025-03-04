<template>
        
    <div id="mainWrapper" ref="bigGrocery">
        <div id="buttonsWrapper">
            <Handler class="handler" v-for="(b,i) in CTS.Basket" :key="i" :basket="b" />
        </div>
        <div id="basketsWrapper">
            <oneBasket v-for="(b,i) in CTS.Basket" :key="i" :basket="b" />
        </div>
    </div> 

</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import * as CTS                             from '@/types/common'
import Handler                              from '@/components/UserPanel/Grocery/basketHandler.vue'
import oneBasket                            from '@/components/UserPanel/Grocery/oneBasket.vue'

// -- =====================================================================================
    
    const bigGrocery = ref<HTMLElement>( {} as HTMLElement )

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
    }

    #buttonsWrapper{
        height: 96%;
        width: 130px;
        margin-top: 2%;
        overflow-y: auto;
        float: left;
    }
    #basketsWrapper{
        height: 92%;
        width: calc( 100% - 150px);
        margin-top: 3%;
        overflow-y: auto;
        float: right;
    }

</style>

// -- =====================================================================================
