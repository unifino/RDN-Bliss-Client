<template>
    <div id="H_Reg_Box">
<!-- ================================================================================== -->
        <div id="p1" class="part">
            <div id="sectionWrapper">
                <div
                    v-for="(x,i) of userMode"
                    :key=i
                    :class="'section no_select ' + (x.selected ? 'selected' : '')"
                    @click="selectUserMode(i)"
                >
                    <div class="check">{{ x.selected?"":"" }}</div>
                    <div class="icon">{{ x.icon }}</div>
                    <div class="txt">{{ x.text }}</div>
                </div>
            </div>
        </div>
<!-- ================================================================================== -->
        <div id="p2" class="part">
            <div id="inputWrapper">
                <input type="text" class="input" placeholder="e-mail" />
                <input type="text" class="input" placeholder="username" />
                <input type="password" class="input" placeholder="password" />
            </div>
        </div>
<!-- ================================================================================== -->
        <div id="p3" class="part"></div>
<!-- ================================================================================== -->
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'

// -- =====================================================================================

    const userMode = ref ( [
        { icon: "", text: "I'm a Dietition", selected: false },
        { icon: "", text: "I'm a Paitent", selected: false }
    ] )

    const selectUserMode = (idx: number) => {
        // userMode.value[0].selected = true
        userMode.value.forEach( (x,i) => x.selected = i === idx );
    }

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #H_Reg_Box {
        display: grid;
        grid-template-columns: 350px auto;
        grid-template-rows: 440px auto ;
        min-height: 690px;
        max-height: 1200px;
    }

    .part{
        border-radius: 3px;
    }

    #p1{
        border-right: 2px dashed darkslategray;
        background-color: #73A7CB;
    }

    #p2{

    }

    #p3{
        grid-row-start: 2;
        grid-column-start: 1;
        grid-column-end: 3;
        border-top: 2px dashed darkslategray;
    }

    #sectionWrapper{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        margin: -50px auto;
    }

    .section{
        height: 63px;
        width: 270px;
        margin: 50px auto;
        color: #103855;
        color: whitesmoke;
        display: flex;
    }

    .section:hover> .check, .section:hover> .txt{
        color: #444445;
        cursor: pointer;
    }

    .section> div{
        align-self: flex-end;
    }

    .icon{
        font-family: fas-6;
        font-size: 60px;
        padding-left: 7px;
        margin-right: 10px;
    }

    .check{
        font-family: fas-6;
        font-size: 30px;
        padding-right: 7px;
        position: relative;
    }

    .txt{
        font-family: PoiretOne;
        font-size: 25px;
        padding-left: 10px;
        font-weight: bold;
    }

    .selected> .check, .selected> .txt{
        color:#0B2E49
    }

    #inputWrapper{
        height: 180px;
        width: 350px;
        top: 40px;
        right: 30px;
        position: absolute;
    }

    .input{
        height: 34px;
        width: 260px;
        border-radius: 7px;
        border: solid gray 1px;
        box-shadow: 0 0 1px 0px rgb(88 88 91);
        margin: 13px;
        font-family: oswald;
        font-size: 20px;
        padding: 10px 20px;
        color: #081E2F;
        font-weight: bold;
        background-color: #F0F0F0;
    }

</style>

// -- =====================================================================================
