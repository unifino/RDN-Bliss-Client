<template>
    <div id="inputWrapper" ref="loginBox">
        <input ref="usrmil" type="text" placeholder="username / e-mail" />
        <input ref="passwd" type="password" placeholder="password" />
        <div id="loginButton" class="no_select" @click="login()">Log in</div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { useStore }                         from 'vuex'
import { ref }                              from 'vue'
import * as TS                              from '@/types/types'

const store = useStore()

// -- =====================================================================================

const loginBox = ref<HTMLElement>( {} as HTMLElement )
const usrmil = ref<HTMLElement>( {} as HTMLElement )
const passwd = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const login = () => {

        // ! remove i
        logging()

        // ..  checking the Form
        let parts = []

        // eslint-disable-next-line
        if ( ( usrmil.value as any ).value.length < 4 ) parts.push( usrmil )

        // eslint-disable-next-line
        if ( ( passwd.value as any ).value.length < 4 ) parts.push( passwd )

        // .. apply alert animation
        // parts.forEach( async (x,i) => {
            // await new Promise( _ => setTimeout( _, i*100 ) )
            // x.value.className += " alert"
            // await new Promise( _ => setTimeout( _, 700 ) )
            // x.value.className = x.value.className.replace( /alert/g , '' )
        // } )

        if ( !parts.length ) logging()

    }

// -- =====================================================================================

    const logging = () => {
        store.dispatch( TS.Acts.Flag_logged_in, true )
        store.dispatch( TS.Acts.ProcessChange, TS.Processes.Reading )
        store.dispatch( TS.Acts.OrtChange, TS.Orts.UserPanel )
        loginBox.value.className = "out"
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

    .alert {
        animation           : alert .7s;
        animation-fill-mode : both;
    }

    @keyframes alert {
        0%{
            transform: scale(1);
        }
        50%{
            background-color: #FB1111;
            color: black;
            transform: scale(1.07);
        }
        100%{
        }
    }

</style>

// -- =====================================================================================
