<template>
    <div id="userPanelBox" :style="`z-index: ${+(store.state.Flag_logged_in)}`">
        
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { useStore }                         from 'vuex'
// import * as TS                              from '@/types/types'
// import * as Tools                           from '@/mixins/Tools'
// import { ref }                              from 'vue'

const store = useStore()

// -- =====================================================================================

    // const userPanel = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    store.watch(
        getters => getters.Flag_logged_in,
        nV => {
            console.log(nV);
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #userPanelBox{
        background-color: red;
        height: 100%;
        width: 100%;
        position: absolute;
    }

</style>

// -- =====================================================================================
