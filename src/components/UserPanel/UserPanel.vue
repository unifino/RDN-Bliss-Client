<template>
    <div id="userPanelBox" :style="`z-index: ${+(store.getters.Flag_logged_in)}`">
        <UserButtons />
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import UserButtons                          from '@/components/UserPanel/userButtons.vue'
import { useStore }                         from 'vuex'

const store = useStore()

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
