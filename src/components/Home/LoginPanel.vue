<template>
    <div id="LoginPanelWrapper">
        <div id="LoginPanel" class="init" ref="loginBox">
            <input ref="usrmil" type="text" placeholder="username / e-mail" />
            <input ref="passwd" type="password" placeholder="password" />
            <div id="loginButton" class="no_select" @click="login()">Log in</div>
        </div>
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
const usrmil = ref<HTMLInputElement>( {} as HTMLInputElement )
const passwd = ref<HTMLInputElement>( {} as HTMLInputElement )

// -- =====================================================================================

    const login = () => {

        // ! remove it
        logging()

        // ..  checking the Form
        let parts = []

        if ( usrmil.value.value.length < 4 ) parts.push( usrmil )

        // eslint-disable-next-line
        if ( passwd.value.value.length < 4 ) parts.push( passwd )

        // ! remove it
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
        loginBox.value.className = "Out"
    }

// -- =====================================================================================

    store.watch(
        getters => getters.process,
        ( nV, oV ) => {
            // .. Enter -> register mode
            if ( nV === TS.Processes.Login ) loginBox.value.className = "In"
            // .. Exit <- Register Mode
            else if ( oV === TS.Processes.Login ) loginBox.value.className = "Out"
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #LoginPanelWrapper{
        height: 300px;
        width: 350px;
        right: 0;
        left: 0;
        margin: auto;
        margin-top: 220px;
        position: absolute;
        z-index: 2;
    }

    #LoginPanel{
        height: 300px;
        width: 250px;
        position: absolute;
    }

    #LoginPanel.init{
        transform: scale(.4);
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
        margin: 25px 60px;
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

    .In {
        animation           : In .8s;
        animation-fill-mode : both;
    }

    @keyframes In {
        0%  { opacity: 0; transform: scale(.4); }
        50% { opacity: 0; transform: scale(.4); }
        100%{ opacity: 1; transform: scale(1);  }
    }

    .Out {
        animation           : Out .22s;
        animation-fill-mode : both;
    }

    @keyframes Out {
        0%  { opacity: 1; transform: scale(1); }
        100%{ opacity: 0; transform: scale(.4); }
    }

    .alert {
        animation           : alert .7s;
        animation-fill-mode : both;
    }

    @keyframes alert {
        0%{ transform: scale(1) }
        50%{ background-color: #FB1111; color: black; transform: scale(1.07) }
        100%{}
    }

</style>

// -- =====================================================================================
