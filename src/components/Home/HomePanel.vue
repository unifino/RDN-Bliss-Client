<template>
    <div id="homePanel" :style="`z-index: ${+(store.getters.ort === TS.Orts.Home)}`">
        
        <Login />
        
        <div
            class="full"
            :style="`z-index: ${+(store.getters.process===TS.Processes.Registering)}`"
        >
            <H_Reg />
        </div>
        
        <div :class="'X100 ' + TS.Speeds[store.getters.animationSpeed]"><H_100 /></div>
        <div :class="'X010 ' + TS.Speeds[store.getters.animationSpeed]"><H_010 /></div>
    
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import H_100                                from '@/components/Home/H_100.vue'
import H_010                                from '@/components/Home/H_010.vue'
import H_Reg                                from '@/components/Home/H_Reg.vue'
import Login                                from '@/components/Home/LoginPanel.vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'

const store: TS.Store = useStore()

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #homePanel{
        height: 100%;
        width: 100%;
        bottom: 0px;
        position: absolute;
    }

    .full{
        height: 100%;
        width: 100%;
        bottom: 0px;
        position: absolute;
    }

</style>

// -- =====================================================================================
