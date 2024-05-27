<template>
    <BG msg="Nutirition"/>
    <Home />
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

<style>

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

</style>

// -- =====================================================================================
