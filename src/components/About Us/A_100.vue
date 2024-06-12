<template>
    <div id="A_100_Box">
        <div class="section selected">Institute</div>
        <div class="section">Our Team</div>
        <div class="section">Certified Coach</div>
        <div class="section">Careers</div>
        <div class="section">Contact Us</div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #A_100_Box{
        background-color: #151f29;
        height: 65%;
        width: 400px;
        border-radius: 23px;
        box-shadow: 0 0 7px #676a74 ;
        margin: auto;
        margin-top: 12%;
        position: relative;
        overflow: hidden;
        padding-top: 15%;
    }

    .section{
        font-family: PoiretOne;
        font-size: 25px;
        font-weight: bold;
        color: whitesmoke;
        height: auto;
        width: 65%;
        /* background-color: red; */
        padding: 20px;
        margin: 10px auto;
    }

    .section.selected{
        text-decoration: underline 2px orange;
    }

</style>

// -- =====================================================================================
