<template>  
    <div id="part_x" class="ppp" ref="part_x">
        <div id="infoWrapper">
            <input ref="firstname" type="text" placeholder="Height" />
            <input ref="lastname" type="text" placeholder="Weight" />
            <input ref="lastname" type="text" placeholder="IBW" />
            <input ref="lastname" type="text" placeholder="UBW" />
            <input ref="lastname" type="text" placeholder="BMI" />
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

    const i = 4
    const part_x = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    store.watch(
        getters => getters.ppp,
        ( nV, oV ) => Tools.pppAnime( oV, nV, i, part_x )
    )
    
// -- =====================================================================================

</script>


// -- =====================================================================================

<style scoped>

    #infoWrapper{
        height: auto;
        width: 250px;
        margin-top: 90px;
        margin-right: 90px;
        position: relative;
        float: right;
    }
    
</style>

// -- =====================================================================================
