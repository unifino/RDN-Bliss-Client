<template>
    <div id="main_frame">
        <BG msg="Nutirition"/>
        <My_Home />
    </div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent }              from 'vue';
import BG                               from '@/components/BG.vue';
import My_Home                          from '@/components/Home.vue';

// -- ====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "WelcomePanel",

// -- =====================================================================================

    components: { BG, My_Home }

// -- =====================================================================================

} )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    @font-face {
        font-family         : 'PoiretOne';
        src                 : url('../src/assets/Fonts/PoiretOne-Regular.ttf') ;
        font-weight         : normal;
        font-style          : normal;
    }

    @font-face {
        font-family         : 'far';
        src                 : url('../src/assets/Fonts/fa-regular-400.ttf') ;
        font-weight         : normal;
        font-style          : normal;
    }

    @font-face {
        font-family         : 'fas';
        src                 : url('../src/assets/Fonts/fa-solid-900.ttf') ;
        font-weight         : normal;
        font-style          : normal;
    }

    /* font-family: Fredericka the Great; */
    /* font-family: Offside; */
    /* font-family: NovaMono; */
    /* font-family: Kite One; */
    /* font-family: Edu NSW ACT Foundation; */

    #main_frame{
        min-width: 1700px;
        max-width: 2000px;
        margin: auto;
        position: relative;
    }

</style>

// -- =====================================================================================
