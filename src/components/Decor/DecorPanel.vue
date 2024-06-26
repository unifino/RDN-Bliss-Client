<template>
    <div id="decorPanel">
        <D_COR />
        <D_TXT />
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import D_COR                                from '@/components/Decor/D_COR.vue'
import D_TXT                                from '@/components/Decor/D_TXT.vue'

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #decorPanel{
        height: 100%;
        width: 100%;
        bottom: 0;
        position: absolute;
    }

</style>

// -- =====================================================================================
