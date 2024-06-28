<template>
    <div id="user_buttons_box">
        <div
            v-for="(opt,i) of options"
            :key=i
            class="optionBox no_select"
            @click="opt.fnc"
        >
            <div class="icon">{{opt.icon}}</div>
            <div class="title">{{opt.title}}</div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
const store: TS.Store = useStore()

// -- =====================================================================================

    const lang = () => { console.log() }

// -- =====================================================================================

    // eslint-disable-next-line
    const options =  ref ( [{ title: "", icon: "", fnc: ()=>{} }] )

    options.value = [
        { title: "Patients" , icon: "", fnc: lang },
        { title: "Calender" , icon: "", fnc: lang },
        { title: "Week Stat", icon: "", fnc: lang },
        { title: "Diet Plan", icon: "", fnc: lang },
        { title: "Messages" , icon: "", fnc: lang },
        { title: "Profile"  , icon: "", fnc: lang },
    ]

// -- =====================================================================================

    store.watch(
        getters => getters.Flag_logged_in,
        (nV: boolean) => {
            console.log(nV);
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #user_buttons_box{
        background-color: #e3e3e3;
        height: auto;
        width: 95px;
        top: 50%;
        transform: translateY(-53%);
        padding: 40px 20px;
        border-radius: 23px;
        box-shadow: 0 0 7px 1px #818181;
        margin: 0 0 0 50px;
        position: absolute;
    }

    .optionBox{
        text-align: center;
        color: #107476;
        height: auto;
        width: 95px;
        position: relative;
        float: left;
        background-color: #b6b8b53e;
        margin: 6px auto 6px auto;
        border-radius: 10px;
    }

    .icon{
        font-family: "fas-6";
        font-size: 31px;
        margin: 20px 20px 10px 20px;
        /* opacity: .7; */
    }

    .title{
        font-family: Manrope;
        font-weight: bold;
        font-size: 12px;
        opacity: 1;
        margin-bottom: 12px;
        /* color: whitesmoke; */
    }

    .optionBox:hover{
        color: #169f01;
        cursor: pointer;
    }

    .optionBox:hover> .title{
        font-weight: bold;
        opacity: 1;
    }

</style>

// -- =====================================================================================
