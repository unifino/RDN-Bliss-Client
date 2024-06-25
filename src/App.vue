<template>
    <div id="main_frame">
        <BG msg="Nutrition"/>
        <div id="MainBox_Flex">
            <Main_Header />
            <MainPanel style="flex: 1" />
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import BG                                   from '@/components/BG.vue'
import Main_Header                          from '@/components/Head/mainHeader.vue'
import MainPanel                            from '@/components/MainPanel.vue'

// -- ====================================================================================

</script>

// -- =====================================================================================

<style>

    .no_select {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    @font-face {
        font-family: 'oswald';
        src: url('../src/assets/Fonts/Oswald-ExtraLight.ttf');
    }

    @font-face {
        font-family : 'Manrope';
        src : url('../src/assets/Fonts/Manrope.ttf');
    }

    @font-face {
        font-family : 'PoiretOne';
        src : url('../src/assets/Fonts/PoiretOne-Regular.ttf');
    }

    @font-face {
        font-family : 'fas-6';
        src : url('../src/assets/Fonts/fa-solid-6-900.ttf');
    }

</style>

<style scoped>

    #main_frame{
        margin: auto;
        position: relative;
    }

    #MainBox_Flex {
        display: flex;
        min-height: 1000px;
        max-height: 1200px;
        flex-direction: column;
    }

</style>

// -- =====================================================================================
