<template>
    <div id="main_frame">
        <BG msg="Nutirition"/>
        <My_Home />
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import BG                                   from '@/components/BG.vue'
import My_Home                              from '@/components/Home/myHome.vue'

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

</style>

// -- =====================================================================================
