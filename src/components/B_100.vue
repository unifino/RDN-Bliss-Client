<template>
    <div id="box">
        <div id="title">Sign in System</div>
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
        box-shadow: 0 0 7px #676a74 ;
        border-radius: 23px;
        height: 610px;
        width: 400px;
        margin: 75px 85px;
        position: relative;
        float: left;
        overflow: hidden;
    }

    #title{
        font-size: 25px;
        text-align: center;
        font-weight: bold;
        font-family: PoiretOne;
        background-color: #0c4936;
        color: whitesmoke;
        height: auto;
        line-height: 80px;
        box-shadow: 0 0 17px #2d8ceb;
    }

</style>

// -- =====================================================================================
