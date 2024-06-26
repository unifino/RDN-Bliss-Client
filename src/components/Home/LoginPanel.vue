<template>
    <div id="inputWrapper" ref="loginBox">
        <input ref="usrmil" type="text" placeholder="username / e-mail" />
        <input ref="passwd" type="password" placeholder="password" />
        <div id="loginButton" class="no_select" @click="login()">Log in</div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import { useStore }                         from 'vuex'
import { ref }                              from 'vue'
import * as TS                              from '@/types/types'

const store = useStore()
const loginBox = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const login = () => {
        console.log();
    }

// -- =====================================================================================

    store.watch(
        getters => getters.process,
        nV => loginBox.value.className = nV === TS.Processes.Login ? "in" : "out"
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #inputWrapper{
        width: 250px;
        float: lef;
        transform: scale(.3);
        opacity: 0;
    }

    input{
        height: 25px;
        width: 210px;
        border-radius: 7px;
        border: solid gray 1px;
        box-shadow: 0 0 1px 0px rgb(88 88 91);
        margin: 10px 0;
        font-family: oswald;
        font-size: 17px;
        padding: 10px 20px;
        color: #081E2F;
        font-weight: bold;
        background-color: #F0F0F0;
    }

    #loginButton{
        right: 52px;
        width: 140px;
        height: 40px;
        font-size: 20px;
        line-height: 40px;
        margin: 25PX auto;
        text-align: center;
        font-family: PoiretOne;
        font-weight: bold;
        background-color: #214663;
        color: #F0F0F0;
        border-radius: 7px;
        cursor: pointer;
    }

    #loginButton:hover{
        background-color: #DDA516;
        color: #131313;
    }

    .in {
        animation           : in .8s;
        animation-fill-mode : both;
    }

    @keyframes in {
        0%  { opacity: 0; transform: scale(.3); }
        50%  { opacity: 0; transform: scale(.3); }
        100%{ opacity: 1; transform: scale(1); }
    }

    .out {
        animation           : out .7s;
        animation-fill-mode : both;
    }

    @keyframes out {
        0%  { opacity: 1; transform: scale(1); }
        100%{ opacity: 0; transform: scale(.3); }
    }

</style>

// -- =====================================================================================
