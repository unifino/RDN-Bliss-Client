<template>
    <div id="FAQsPanel" :style="`z-index: ${+(store.getters.ort === TS.Orts.FAQs)}`">
        <F_100 />
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import F_100                                from '@/components/FAQs/F_100.vue'

const store = useStore()

// -- =====================================================================================


// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #FAQsPanel{
        height: 100%;
        width: 100%;
        bottom: 0;
        position: absolute;
    }

</style>

// -- =====================================================================================
