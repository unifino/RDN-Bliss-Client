<template>
    <div id="H_Reg_Box">
<!-- ================================================================================== -->
        <div id="p1" class="part"></div>
        <div id="p2" class="part"></div>
        <div id="p3" class="part"></div>
<!-- ================================================================================== -->
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================


// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #H_Reg_Box {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto;
        min-height: 690px;
        max-height: 1200px;
        flex-direction: column;
        gap: 15px;
        padding: 10px;
    }

    .part{
        /* background-color: antiquewhite; */
        border-radius: 3px;
    }
    #p1{
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    #p2{
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    #p3{
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 3;
        grid-row-end: 4;
        border-top: 2px dashed darkslategray;
    }

</style>

// -- =====================================================================================
