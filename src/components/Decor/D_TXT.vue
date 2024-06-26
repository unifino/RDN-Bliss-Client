<template>
    <div id="textBannerBox" class="no_select">{{ myText }}</div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import { useStore }                         from 'vuex'
import { ref }                              from 'vue'
import * as TS                              from '@/types/types'

const store = useStore()

// -- =====================================================================================

    const myText = ref<string>()

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        nV => myText.value = nV
    )

    store.watch(
        getters => getters.process,
        nV => myText.value = nV === TS.Processes.Registering ?
            "Hey there!" : store.getters.ort
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #textBannerBox{
        color: #34282F;
        font-family: PoiretOne;
        font-size: 140px;
        /* font-weight: 600; */
        margin: 200px 100px;
        padding: 0;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }

</style>

// -- =====================================================================================
