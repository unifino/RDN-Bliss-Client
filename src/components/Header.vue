<template>
    <div id="box">
        <div id="rdn" />
        <div id="logo" />
    </div>
</template>

// -- =====================================================================================

<script lang="ts">

// -- =====================================================================================

import { defineComponent }                  from 'vue';

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Main_Header",

// -- =====================================================================================

} )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #box{
        background-color: #f3f3f3;
        background-image: url( "@/assets/Pics/RDN.png" );
        background-size: auto 70%;
        border-bottom-width: 2px;
        height: 164px;
        width: 100%;
        margin: 0;
        position: relative;
    }

    #rdn{
        width: 220px;
        height: 60px;
        position: absolute;
        right: 144px;
        top: 50px;
        background-image: url( "@/assets/Pics/RDN_txt_logo.png" );
        background-repeat: no-repeat;
        background-size: auto 100%;
    }

    #logo{
        width: 220px;
        height: 100px;
        position: absolute;
        right: 50px;
        top: 30px;
        background-image: url( "@/assets/Pics/logo.png" );
        background-repeat: no-repeat;
        background-size: auto 100%;
    }

</style>

// -- =====================================================================================
