<template>
    <div id="dotBox">
        <div id="dots_wrapper">
            <div class="dot" />
            <div class="dot ey" />
            <div class="dot ex" />
            <div class="dot ey" />
            <div class="dot" />
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #dotBox{
        height: 300px;
        width: 300px;
        bottom: 50px;
        right: 50px;
        position: absolute;
        z-index: 2;
    }

    #dots_wrapper{
        width: auto;
        height: auto;
        position: relative;
        display: inline-block;
        top: 12%;
        left: 65%;
        rotate: -54deg;
    }

    .dot{
        height: 7px;
        width: 7px;
        border-radius: 12px;
        border: solid hsla(28, 93%, 12%, 0.538) 2px;
        float: left;
        margin: 11px 4px;
        cursor: pointer;
    }

    .dot:hover{
        background-color: orange;
    }

    .ex{
        margin-top: 13px;
    }

    .ey {
        margin-top: 12.5px;
    }

</style>

// -- =====================================================================================
