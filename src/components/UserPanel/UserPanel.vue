<template>
    <div id="userPanelBox" :style="`z-index: ${+(store.getters.Flag_logged_in)}; visibility: ${store.getters.Flag_logged_in?'visible':'hidden'}`">
        <UserButtons />
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import UserButtons                          from '@/components/UserPanel/userButtons.vue'
import * as TS                              from '@/types/types'
import { useStore }                         from 'vuex'

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
