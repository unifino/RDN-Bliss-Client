<template>
    <div id="box"></div>
</template>

// -- =====================================================================================

<script lang="ts">

// -- =====================================================================================

import { Options, Vue } from 'vue-class-component';

// -- =====================================================================================

@Options( {} )

export default class B_001 extends Vue {
}

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #box{
        /* background-color: #dad7d714; */
        background-image: url('../assets/Pics/plant.png');
        background-repeat: no-repeat;
        background-size: auto 150%;
        background-position: -40px;
        /* border: 2px solid #6fa5d3; */
        border-radius: 23px;
        height: 720px;
        width: 570px;
        margin: 45px 0 0 0;
        position: relative;
        float: left;
    }

</style>

// -- =====================================================================================
