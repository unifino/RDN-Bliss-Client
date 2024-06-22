<template>
    <div id="F_100_Box">
        <div id="F_100_Box_Wrapper">
            <div class="section">How Selestial works?</div>
            <div class="section">What services do you offer?</div>
            <div class="section">Who’s behind Selestial?</div>
            <div class="section">How fast are requests completed?</div>
            <div class="section">Refunds Policy.</div>
            <div class="section">How much is a website?</div>
            <div class="section">How long does it take to make such awesome websites?</div>
            <div class="section">Can you also deal with bigger projects ?</div>
            <div class="section">Are you a designer or developer?</div>
            <div class="section">Is that really you in the framed picture above?</div>
            <div class="section">How do I become as awesome as you?</div>
            <div class="section">Did you use drugs while designing this website?</div>
            <div class="section">What is the content of the infamous hidden section?</div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #F_100_Box{
        background-color: #024250;
        height: 65%;
        width: 1100px;
        border-radius: 23px;
        box-shadow: 0 0 7px #676a74 ;
        margin: auto;
        margin-top: 2%;
        position: relative;
        overflow: hidden;
        padding-top: 7%;
        padding-bottom: 7%;
    }

    #F_100_Box_Wrapper{
        overflow: auto;
        height: 80%;
        padding-bottom: 10%;
    }

    .section{
        font-family: PoiretOne;
        font-size: 25px;
        font-weight: bold;
        color: whitesmoke;
        height: auto;
        width: 65%;
        padding: 5px 20px;
        margin: 25px auto;
        cursor: pointer;
    }

    .section.selected{
        text-decoration: underline 2px orange;
    }

    .section:hover{
        color: orange;
    }

</style>

// -- =====================================================================================
