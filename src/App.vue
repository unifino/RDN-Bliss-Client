<template>
    <div id="main_frame">

        <BG msg="Nutrition"/>

        <div id="MainBox_Flex">
            <HeaderPanel style="z-index: 1" />
            <MainPanel style="flex: 1"      />
        </div>

        <Curtain  />

    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import BG                                   from '@/components/BG.vue'
import HeaderPanel                          from '@/components/Head/HeaderPanel.vue'
import MainPanel                            from '@/components/MainPanel.vue'
import Curtain                              from '@/MyCurtain.vue'
import { onMounted }                        from 'vue';
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'

// .. Entferne es
import * as CTS                             from '@/types/common'
import { post }                             from '@/mixins/Tools'
import * as Tools                           from '@/mixins/Tools'

const store: TS.Store = useStore()

// -- ====================================================================================

    onMounted ( () => {

        
        // store.dispatch( TS.Acts.OrtChange, TS.Orts.Home )
        
        // !  Losche es
        store.dispatch( TS.Acts.userType, CTS.UserTypes.Dietitian )
        store.dispatch( TS.Acts.ProcessChange, TS.Processes.Login )
        const userData: CTS.UserData = {} as CTS.UserData;
        userData.userType = CTS.UserTypes.Dietitian,
        userData.username = "unifino",
        userData.password = "1111"
        // .. Sending Request
        post( CTS.Post.Login, userData )
        // .. Receiving Answer
        .then( ( userData: CTS.UserData ) => successLogin( userData ) )
        // .. Handle NOT Such a User Problem
        .catch( () => alert( userData.username ) )

        const successLogin = async ( userData: CTS.UserData ) => {
            // ! Consider it
            Tools.setNames( [ userData ] )
            store.dispatch( TS.Acts.Flag_logged_in, true )
            store.dispatch( TS.Acts.ProcessChange, TS.Processes.Reading )
            store.dispatch( TS.Acts.OrtChange, TS.Orts.UserPanel )
            await new Promise( _ => setTimeout( _, 800 ) )
            store.dispatch( TS.Acts.userTool, TS.UserTools.CreateNewPatient )
        }

        
    } )

// -- ====================================================================================

</script>

// -- =====================================================================================

<style>

    .no_select {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    @font-face {
        font-family: 'Oswald';
        src: url('../src/assets/Fonts/Oswald-ExtraLight.ttf');
    }

    @font-face {
        font-family : 'Manrope';
        src : url('../src/assets/Fonts/Manrope.ttf');
    }

    @font-face {
        font-family : 'PoiretOne';
        src : url('../src/assets/Fonts/PoiretOne-Regular.ttf');
    }

    @font-face {
        font-family : 'fas';
        src : url('../src/assets/Fonts/fa-solid-6-900.ttf');
    }

    @font-face { 
        font-family : 'AllertaStencil'; 
        src : url('../src/assets/Fonts/AllertaStencil-Regular.ttf')
    }

    @font-face { 
        font-family : 'Vibur'; 
        src : url('../src/assets/Fonts/Vibur-Regular.ttf')
    }

    @font-face { 
        font-family : 'RalewayDots'; 
        src : url('../src/assets/Fonts/RalewayDots-Regular.ttf')
    }

    @font-face { 
        font-family : 'Thasadith'; 
        src : url('../src/assets/Fonts/Thasadith-Regular.ttf')
    }

    @font-face { 
        font-family : 'TsukimiRounded'; 
        src : url('../src/assets/Fonts/TsukimiRounded-Regular.ttf')
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

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px #F0F0F0 inset !important;
    }

    .buttonsWrapper{
        top: 0;
        height: auto;
        width: 250px;
        border-left: #369797 5px;
        border-radius: 5px;
        border-left-style: solid;
        margin-left: 40px;
        margin-top: 50px;
        position: relative;
        float: right;
    }
    .button{
        color: #144444;
        font-family: Manrope;
        font-weight: 600;
        margin: 12px 15px;
        cursor: pointer;
        white-space: pre-wrap;
    }
    .button:hover{ color: #08cee0; }

    .current_Page_R {
        animation           : current_Page_R .5s;
        animation-fill-mode : both;
        z-index: 1;
    }
    @keyframes current_Page_R {
        0%  { transform: translateX(70%); opacity: 0 }
        100%{ transform: translateX(0); opacity: 1 }
    }

    .current_Page_L {
        animation           : current_Page_L .5s;
        animation-fill-mode : both;
        z-index: 1;
    }
    @keyframes current_Page_L {
        0%  { transform: translateX(-70%); opacity: 0 }
        100%{ transform: translateX(0); opacity: 1 }
    }

    .next_Page {
        animation           : next_Page .4s;
        animation-fill-mode : both;
        z-index: 0;
    }
    @keyframes next_Page {
        0%  { transform: translateX(0); opacity: 1 }
        100%{ transform: translateX(-70%); opacity: 0 }
    }

    .previous_Page {
        animation           : previous_Page .4s;
        animation-fill-mode : both;
        z-index: 0;
    }
    @keyframes previous_Page {
        0%  { transform: translateX(0); opacity: 1 }
        100%{ transform: translateX(70%); opacity: 0 }
    }
    
    #part_x { width: 100%; height: 100%; position: absolute; }
    .ppp{ transform: translateX(-70%); opacity: 0 }

</style>

<style scoped>

    #main_frame{
        margin: auto;
        position: relative;
    }

    #MainBox_Flex {
        display: flex;
        min-height: 1000px;
        max-height: 1200px;
        flex-direction: column;
    }

</style>

// -- =====================================================================================
