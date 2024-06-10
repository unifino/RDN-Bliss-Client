<template>
    <div id="header_icons_box">
        <div v-for="(x,i) of options" :key=i class="optionBox no_select">
            <div @click="changeOrt(x.code)" :class="x.select?'selcted':''">
                <div class="icon">{{x.icon}}</div>
                <div class="title">{{x.code}}</div>
            </div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
const store = useStore();

// -- =====================================================================================

    const options = ref ( [ { code: 0, select: false, icon: "" } ] );

    options.value = [
        { code:TS.Orts.Home,     select: true,  icon: "", },
        { code:TS.Orts.OurGoals, select: false, icon: "", },
        { code:TS.Orts.News,     select: false, icon: "", },
        { code:TS.Orts.FAQs,     select: false, icon: "?", },
        { code:TS.Orts.AboutUs,  select: false, icon: "", },
    ]

    const changeOrt = async ( ortCode: TS.Languages ) => {

        store.dispatch( TS.Acts.ClearScreen, TS.Processes.Animating );
        store.dispatch( TS.Acts.OrtChange, ortCode );
        for( let x of options.value ) x.select = x.code === ortCode;

    }

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #header_icons_box{
        height: 100px;
        width: 500px;
        margin-top: 35px;
        margin-left: 44px;
    }

    .optionBox{
        text-align: center;
        color: #29363a;
        height: 80px;
        width: 100px;
        position: relative;
        float: left;
    }

    .icon{
        font-family: "fas-6";
        font-size: 45px;
        margin: 14px;
    }

    .title{
        font-family: Manrope;
        opacity: 0.2;
    }

    .selcted, .selcted> .title, .optionBox:hover{
        color: #521739;
        cursor: pointer;
        font-weight: bold;
        font-weight: bold;
        opacity: 1;
        cursor: pointer;
    }

    .optionBox:hover{
        color: #cc0f7e;
    }

</style>

// -- =====================================================================================
