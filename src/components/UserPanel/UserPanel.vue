<template>
    <div id="userPanelBox" :style="`z-index: ${+(store.state.Flag_logged_in)}`">
        *
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

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
