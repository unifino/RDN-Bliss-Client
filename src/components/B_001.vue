<template>
    <div id="box"></div>
</template>

// -- =====================================================================================

<script lang="ts">

// -- =====================================================================================

import { Options, Vue }                 from 'vue-class-component';

// -- =====================================================================================

@Options( {} )

export default class B_001 extends Vue {
}

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #box{
        background-image: url('../assets/Pics/plant.png');
        background-repeat: no-repeat;
        background-size: auto 150%;
        background-position: -40px;
        border-radius: 23px;
        height: 720px;
        width: 570px;
        margin: 45px 0 0 0;
        position: relative;
        float: left;
    }

</style>

// -- =====================================================================================
