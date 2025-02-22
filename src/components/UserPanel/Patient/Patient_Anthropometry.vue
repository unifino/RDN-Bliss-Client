<template>  
    <div id="part_x" ref="part_x">
        <div id="infoWrapper">
            <div class="field">Height<input ref="height" type="text" /><span class="unit">cm</span></div>
            <div class="field">Weight<input ref="weight" type="text" /><span class="unit">kg</span></div>
            <div class="field">IBW<input ref="ibw" type="text" /><span class="unit">kg</span></div>
            <div class="field">UBW<input ref="ubw" type="text" /><span class="unit">kg</span></div>
            <div class="field">BMI<input ref="bmi" type="text" /><span class="unit">kg/m²</span></div>
            <!-- <input ref="lastname" type="text" placeholder="%WT Change" />
            <input ref="lastname" type="text" placeholder="MUAC" />
            <input ref="lastname" type="text" placeholder="Head Circumference" />
            <input ref="lastname" type="text" placeholder="Waist Circumference" />
            <input ref="lastname" type="text" placeholder="WHR" /> -->
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

    const ipx = 4
    const part_x = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    store.watch(
        getters => getters.userTool,
        () => part_x.value.classList.add( "page_init" )
    )

    store.watch(
        getters => getters.pageSlide,
        ( nV, oV ) => Tools.ifSlider( TS.UserTools.CreateNewPatient, oV, nV, ipx, part_x )
    )
    
// -- =====================================================================================

</script>


// -- =====================================================================================

<style scoped>

    input{
        float: right;
        width: 50%;
        border: none;
        border-radius: 0px 7px 7px 0;
        border-left: 1px gray solid;
        margin: -10px -20px 0 0;
        color: #107fd4;
    }

    .unit{
        text-align: center;
        right: 18%;
        height: 25px;
        width: 18%;
        margin: -10px -40px 0 0;
        font-family: Oswald;
        font-size: 17px;
        font-weight: bold;
        color: #96a984;
        padding: 10px 0px;
        border-radius: 0px 7px 7px 0;
        position: absolute;
    }
    
</style>

// -- =====================================================================================
