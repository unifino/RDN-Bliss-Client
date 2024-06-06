<template>
    <div id="Main_Header_Box">

        <Header_Icons />
        <div id="divider" />
        <myButtons />

        <myLogo />

    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import Header_Icons                         from '@/components/Head/myIcons.vue'
import myButtons                            from '@/components/Head/myButtons.vue'
import myLogo                               from '@/components/Head/myLogo.vue'

// -- =====================================================================================


// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #Main_Header_Box{
        background-color: #f3f3f3;
        background-image: url( "@/assets/Pics/RDN.png" );
        background-size: auto 114px;
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
