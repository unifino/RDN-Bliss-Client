<template>
    <div id="main_frame">
        <BG msg="Nutirition"/>
        <Home />
    </div>
</template>

// -- =====================================================================================

<script lang="ts">

import { Options, Vue }                 from 'vue-class-component';
import BG                               from '@/components/BG.vue';
import Home                             from '@/components/Home.vue';

// -- =====================================================================================

@Options( {
    components: {
        BG, Home,
    },
} )
export default class App extends Vue {}

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
