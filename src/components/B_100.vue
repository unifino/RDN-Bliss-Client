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
        background-color: #e66203;
        background-color: #221f1e;
        background-color: #393a3b;
        /* border: 2px solid #6fa5d3; */
        box-shadow: 0 0 10px #471504 ;
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
        /* font-family: Fredericka the Great; */
        /* font-family: Offside; */
        /* font-family: NovaMono; */
        /* font-family: Kite One; */
        /* font-family: Edu NSW ACT Foundation; */
        font-family: PoiretOne;
        background-color: #0c4936;
        color: whitesmoke;
        height: auto;
        line-height: 80px;
        box-shadow: 0 0 17px #2d8ceb;
    }

</style>

// -- =====================================================================================
