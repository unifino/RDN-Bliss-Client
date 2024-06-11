<template>
    <div id="mainPanel">
        <div id="mainPanelWrapper">
            <DecorPanel />
            <HomePanel />
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import HomePanel                            from '@/components/Home/HomePanel.vue'
import DecorPanel                           from '@/components/Decor/DecorPanel.vue'

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #mainPanel{
        height: 100%;
        width: 100%;
        bottom: 0;
        background-color: #fbfbfb;
        position: relative;
    }

    #mainPanelWrapper{
        width: 100%;
        height: 100%;
        position: absolute;
    }

</style>

// -- =====================================================================================
