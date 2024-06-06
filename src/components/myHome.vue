<template>
    <div id="flexBox_Home">
        <Main_Header />
        <Welcome_Panel style="flex: 1" />
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import Main_Header                          from '@/components/Head/mainHeader.vue';
import Welcome_Panel                        from '@/components/wps/WelcomePanel.vue';

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #flexBox_Home {
        display: flex;
        min-height: 950px;
        max-height: 1200px;
        flex-direction: column;
    }

</style>

// -- =====================================================================================
