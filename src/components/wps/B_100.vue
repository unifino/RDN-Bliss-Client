<template>
    <div id="box">
        <div id="title" />
        <div id="logBox">
            <div class="icon"><span class="txt">I'm a Doctor</span></div>
            <div class="icon"><span class="txt">I'm a Student</span></div>
        </div>
        <div id="signUp">Haven't you an account yet ?  Sign up here</div>
    </div>
</template>

// -- =====================================================================================

<script lang="ts">

// -- =====================================================================================

import { defineComponent }              from 'vue';

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "B_100",

// -- =====================================================================================

} )

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
        /* box-shadow: 0 0 17px #1d1405; */
        background-image: url('@/assets/Pics/login_banner.jpg');
        background-size: 100% auto;
    }

    #logBox{
        height: 50%;
        text-align: center;
        margin: auto;
        border-radius: 7px;
        margin: 20% auto 3% auto;
    }

    #signUp{
        font-family: oswald;
        font-size: 15px;
        text-align: center;
        color: whitesmoke;
        white-space: nowrap;
    }

    .icon{
        font-family: fas;
        font-size: 60px;
        height: auto;
        width: 90%;
        color: #c6c3c0;
        margin: 50px 10px;
        border-radius: 8px;
    }
    .icon:hover, #signUp:hover{
        color: #f1a116;
        cursor: pointer;
    }

    .txt{
        font-family: PoiretOne;
        font-size: 20px;
        font-weight: 900;
        margin: 0px 0px 0px 15px;
    }

</style>

// -- =====================================================================================
