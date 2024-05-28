<template>
    <div id="box">
        <div id="title"></div>
    </div>
</template>

// -- =====================================================================================

<script lang="ts">

// -- =====================================================================================

import { Options, Vue }                 from 'vue-class-component';

// -- =====================================================================================

@Options( {} )

export default class B_100 extends Vue {
}

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

</style>

// -- =====================================================================================
