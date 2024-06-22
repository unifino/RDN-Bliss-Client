<template>
    <div id="textBannerBox">{{ myText }}</div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import { useStore }                         from 'vuex'
import { ref }                              from 'vue'
import * as TS                              from '@/types/types'

const store = useStore()

// -- =====================================================================================

    const d_cor = ref<HTMLElement>( {} as HTMLElement )
    const myText = ref<string>()

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        nV => myText.value = nV
    )

    store.watch(
        getters => getters.process,
        nV => myText.value = nV === TS.Processes.Registring ? "Welcome" : store.getters.ort
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #textBannerBox{
        color: #34282F;
        font-family: PoiretOne;
        font-size: 200px;
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
