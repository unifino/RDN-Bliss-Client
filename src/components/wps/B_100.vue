<template>
    <div id="box">
        <div id="title" />
        <div id="logBox">

            <div class="section no_select">
                <div class="icon"></div>
                <div class="txt">I'm a Doctor</div>
            </div>

            <div class="section no_select">
                <div class="icon"></div>
                <div class="txt">I'm a Student</div>
            </div>

            <div class="section no_select mini">
                <div class="icon mini"></div>
                <div class="txt">Create a new Account</div>
            </div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #box{
        background-color: #393a3b;
        height: 550px;
        width: 350px;
        border-radius: 23px;
        box-shadow: 0 0 7px #676a74 ;
        margin: auto;
        margin-top: 25%;
        position: relative;
        overflow: hidden;
    }

    #title{
        font-size: 25px;
        text-align: center;
        font-weight: bold;
        font-family: PoiretOne;
        background-color: #0c4936;
        color: whitesmoke;
        height: 150px;
        line-height: 80px;
        background-image: url('@/assets/Pics/login_banner.jpg');
        background-size: 100% auto;
    }

    #logBox{
        padding-top: 10px;
    }

    .section{
        height: 63px;
        width: 230px;
        margin: 44px auto;
        color: #c6c3c0;
        display: flex;
    }
    .section:hover{
        color: #f1a116;
        cursor: pointer;
    }

    .section> div{
        align-self: flex-end;
    }

    .icon{
        font-family: fas-6;
        font-size: 60px;
        padding-left: 7px;
        margin-right: 20px;
    }

    .txt{
        font-family: PoiretOne;
        font-size: 20px;
        font-weight: 900;
    }

    .mini{
        padding-left: 0;
        font-size: 44px;
    }
    .mini .txt{
        font-size: 15px;
    }

</style>

// -- =====================================================================================
