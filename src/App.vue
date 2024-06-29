<template>
    <div id="main_frame">

        <BG msg="Nutrition"/>

        <div id="MainBox_Flex">
            <HeaderPanel />
            <MainPanel style="flex: 1" />
        </div>

        <Curtain  />

    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import BG                                   from '@/components/BG.vue'
import HeaderPanel                          from '@/components/Head/HeaderPanel.vue'
import MainPanel                            from '@/components/MainPanel.vue'
import Curtain                              from '@/MyCurtain.vue'

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
        font-family: 'Oswald';
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

    @font-face { 
        font-family : 'AllertaStencil'; 
        src : url('../src/assets/Fonts/AllertaStencil-Regular.ttf')
    }

    @font-face { 
        font-family : 'Vibur'; 
        src : url('../src/assets/Fonts/Vibur-Regular.ttf')
    }

    @font-face { 
        font-family : 'RalewayDots'; 
        src : url('../src/assets/Fonts/RalewayDots-Regular.ttf')
    }

    @font-face { 
        font-family : 'Thasadith'; 
        src : url('../src/assets/Fonts/Thasadith-Regular.ttf')
    }

    @font-face { 
        font-family : 'TsukimiRounded'; 
        src : url('../src/assets/Fonts/TsukimiRounded-Regular.ttf')
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
