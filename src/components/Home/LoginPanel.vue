<template>
    <div
        id="LoginPanelWrapper"
        :style="`z-index: ${+(store.getters.process === TS.Processes.Login)}`"
    >
        <div id="LoginPanel" class="init" ref="loginBox">
            <input ref="usrmil" type="text" placeholder="username / e-mail" />
            <input ref="passwd" type="password" placeholder="password" />
            <div id="forgot">Forgot Username | Password ?</div>
            <div id="loginButton" class="no_select" @click="login()">Log in</div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { useStore }                         from 'vuex'
import { ref, Ref }                         from 'vue'
import * as TS                              from '@/types/types'
import * as CTS                             from '@/types/common'
import axios                                from 'axios';
import * as CD                              from '@/mixins/commonData'
import * as Tools                           from '@/mixins/Tools'

const store: TS.Store = useStore()

// -- =====================================================================================

const loginBox = ref<HTMLElement>( {} as HTMLElement )
const usrmil = ref<HTMLInputElement>( {} as HTMLInputElement )
const passwd = ref<HTMLInputElement>( {} as HTMLInputElement )

// -- =====================================================================================

    const login = () => {
        
        // ..  checking the Form
        let parts = []

        if ( store.getters.userType === CTS.UserTypes.null )
            store.dispatch( TS.Acts.Flag_H100_Alert, true )

        // ! remove it --- change 1 to 4 
        if ( usrmil.value.value.length < 1 ) parts.push( usrmil )
        if ( passwd.value.value.length < 1 ) parts.push( passwd )

        // .. apply alert animation
        parts.length || store.getters.userType === CTS.UserTypes.null ? 
            alertMe( parts ) : logging()

    }

// -- =====================================================================================

    const logging = () => {

        axios.post( CD.serverURL + "logIn", {
            userType: store.getters.userType,
            username: usrmil.value.value,
            password: passwd.value.value
        } )
        .then( async res => {
            if  ( res.data.status === 200 ) successLogin()
            else if ( res.data.status === 500 ) {
                if ( res.data.err === "User Not Found" ) alertMe( [ usrmil, passwd ] )
                else Tools.err( res.data.err )
            }
            else Tools.err( "Unknown STATUS ERR!" )
        } )
        .catch( err => Tools.err( "Server Not Reachable: " + err ) )
    
    }

// -- =====================================================================================

    const alertMe = async ( elx: Ref<HTMLInputElement>[] ) => {
        for ( let el of elx ) el.value.className += " alert"
        await new Promise( _ => setTimeout( _, 700 ) )
        for ( let el of elx ) el.value.className = el.value.className.replace( /alert/g , '' )
    }
    
// -- =====================================================================================

    const successLogin = () => {
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
        font-family: Oswald;
        font-size: 17px;
        padding: 10px 20px;
        color: #081E2F;
        font-weight: bold;
        background-color: #F0F0F0;
    }

    #forgot{
        font-family: PoiretOne;
        text-align: center;
        color: #2a2929;
        font-size: 15px;
        /* background-color: #081E2F; */
        margin: 9px 10px 30px 10px;
        font-weight: bold;

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
