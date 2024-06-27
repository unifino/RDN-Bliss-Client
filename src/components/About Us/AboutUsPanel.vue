<template>
    <div id="aboutUsPanel" :style="`z-index: ${+(store.getters.ort === TS.Orts.AboutUs)}`">
        <A_100 />
        <A_010 />
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import A_100                                from '@/components/About Us/A_100.vue'
import A_010                                from '@/components/About Us/A_010.vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'

const store = useStore()

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #aboutUsPanel{
        height: 100%;
        width: 100%;
        bottom: 0;
        position: absolute;
    }

</style>

// -- =====================================================================================
