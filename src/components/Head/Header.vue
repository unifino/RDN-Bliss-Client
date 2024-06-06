<template>
    <div id="Main_Header_Box">

        <Header_Icons />
        <div id="divider" />
        <Buttons />

        <myLogo />

    </div>
</template>

// -- =====================================================================================

<script lang="ts">

// -- =====================================================================================

import { defineComponent }                  from 'vue';
import Header_Icons                         from '@/components/Head/Icons.vue'
import Buttons                              from '@/components/Head/Buttons.vue'
import myLogo                               from '@/components/Head/myLogo.vue'

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Main_Header",

// -- =====================================================================================

    components: { Header_Icons, Buttons, myLogo }

// -- =====================================================================================

} )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #Main_Header_Box{
        background-color: #f3f3f3;
        background-image: url( "@/assets/Pics/RDN.png" );
        background-size: auto 70%;
        border-bottom-width: 2px;
        height: 164px;
        width: 100%;
        margin: 0;
        position: relative;
    }

    #Main_Header_Box> div{
        float: left;
    }

    #divider{
        height: 99px;
        margin: 40px;
        margin-top: 35px;
        border-right: dashed 3px gray;
    }

</style>

// -- =====================================================================================
