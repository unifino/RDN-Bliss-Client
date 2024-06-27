<template>
    <div id="homePanel" :style="`z-index: ${+(store.state.ort === TS.Orts.Home)}`">
        <Login />
        <H_100 />
        <H_010 />
        <H_Reg />
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

const store = useStore()

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

</style>

// -- =====================================================================================
