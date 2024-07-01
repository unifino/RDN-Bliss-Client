<template>
    <div id="NewsPanel" :style="`z-index: ${+(store.getters.ort === TS.Orts.News)}`">
        <N_100 />
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as Tools                           from '@/mixins/Tools';
import N_100                                from '@/components/News/N_100.vue'

const store: TS.Store = useStore()

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #NewsPanel {
        width: 100vw;
        height: 100%;
        padding: 3vw 4vw;
        position: absolute;
        overflow: auto;
    }

</style>

// -- =====================================================================================
