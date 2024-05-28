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
        background-image: url('@/assets/Pics/plant.jpg');
        background-repeat: no-repeat;
        background-size: 140% auto;
        background-position: 0px 0px;
        border-radius: 23px;
        height: 100%;
        position: relative;
    }

</style>

// -- =====================================================================================
