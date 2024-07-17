<template>
    <div id="userPanelBox" :style="`z-index: ${+(store.getters.ort === TS.Orts.OurGoals)};`">
        <GoalsSections :class="TS.Speeds[store.getters.animationSpeed]" />
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import * as TS                              from '@/types/types'
import { useStore }                         from 'vuex'
import GoalsSections                          from '@/components/OurGoals/goalsSections.vue'
// import myData                               from "./data.json";

const store: TS.Store = useStore()

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #userPanelBox{
        height: 100%;
        width: 100%;
        position: absolute;
    }

</style>

// -- =====================================================================================
