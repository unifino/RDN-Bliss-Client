<template>
    <div id="header_icons_box">
        <div
            v-for="(opt,i) of options"
            :key=i
            class="optionBox no_select"
            @click="opt.fnc"
        >
            <div class="button">{{opt.icon}}</div>
            <div class="title">{{opt.title}}</div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
const store = useStore();

// -- =====================================================================================

    const lang = () => { console.log() }
    const logOut = () => { 
        store.dispatch( TS.Acts.Flag_logged_in, false )
        if ( store.getters.ort === TS.Orts.UserPanel )
            store.dispatch( TS.Acts.OrtChange, TS.Orts.Home )

    }

// -- =====================================================================================

    // eslint-disable-next-line
    const options =  ref ( [{ title: "", icon: "", fnc: ()=>{} }] )

    options.value = [
        { title: "Language" , icon: "", fnc: lang },
        // { title: "Theme", icon: "", theme },
        { title: "Exit", icon: "", fnc: logOut },
    ]

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #header_icons_box{
        height: 100px;
        width: 500px;
        margin-top: 35px;
    }

    .optionBox{
        text-align: center;
        color: #29363a;
        height: 80px;
        width: 100px;
        position: relative;
        float: left;
    }

    .button{
        font-family: "fas-6";
        font-size: 31px;
        margin: 25px 20px 10px 20px;
        opacity: .7;
    }

    .title{
        font-family: Manrope;
        font-weight: bold;
        font-size: 12px;
        opacity: 0.4;
    }

    .optionBox:hover{
        color: #a33474;
        cursor: pointer;
    }

    .optionBox:hover> .title{
        font-weight: bold;
        opacity: 1;
    }

</style>

// -- =====================================================================================
