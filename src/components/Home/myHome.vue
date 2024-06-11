<template>
    <div id="flexBox_Home">
        <Main_Header />
        <Home_Panel style="flex: 1" />
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import Main_Header                          from '@/components/Head/mainHeader.vue'
import Home_Panel                           from '@/components/Home/HomePanel.vue'

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #flexBox_Home {
        display: flex;
        min-height: 1000px;
        max-height: 1200px;
        flex-direction: column;
    }

</style>

// -- =====================================================================================
