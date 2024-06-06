<template>
    <div id="logo_box">
        <div id="rdn" />
        <div id="logo" />
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #logo_box{
        width: 260px;
        height: 100px;
        top: 30px;
        right: 63px;
        position: absolute;
    }

    #logo_box> div{
        height: 100px;
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center;
        float: left;
    }

    #rdn{
        width: 100px;
        background-image: url( "@/assets/Pics/RDN_txt_logo.png" );
    }

    #logo{
        width: 160px;
        background-image: url( "@/assets/Pics/logo.png" );
    }

</style>

// -- =====================================================================================
