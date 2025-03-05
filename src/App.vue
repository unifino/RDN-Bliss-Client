<template>
    <div id="main_frame">

        <BG msg="Nutrition"/>

        <div id="MainBox_Flex">
            <HeaderPanel style="z-index: 1" />
            <MainPanel style="flex: .95"     />
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

        
        // store.commit( TS.Mutates.OrtChange, TS.Orts.Home )
        
        // !  Losche es
        store.commit( TS.Mutates.userType, CTS.UserTypes.Dietitian )
        store.commit( TS.Mutates.ProcessChange, TS.Processes.Login )
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
            Tools.setNames( [ userData ] )
            store.commit( TS.Mutates.Flag_logged_in, true )
            store.commit( TS.Mutates.ProcessChange, TS.Processes.Reading )
            store.commit( TS.Mutates.OrtChange, TS.Orts.UserPanel )
            await new Promise( _ => setTimeout( _, 600 ) )
            store.commit( TS.Mutates.pageSlide, { gpx: 2, move: "R", origin: TS.UserTools.CreateNewPlan } )
            store.commit( TS.Mutates.userTool, TS.UserTools.CreateNewPlan )
        }

        
    } )

// -- ====================================================================================

</script>

// -- =====================================================================================

<style>

    *{
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

    input, .field{
        background-color: #F0F0F0;
        font-family: Oswald;
        font-size: 17px;
        font-weight: bold;
        color: #081E2F;
        height: 25px;
        width: 210px;
        padding: 10px 20px;
        border-radius: 7px;
        border: solid gray 1px;
        box-shadow: 0 0 1px 0px rgb(88 88 91);
        margin: 10px 0;
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

    .buttonHasMargin{ margin-top: 50px }

    .page_init{ display: none }
    
    .current_Page_R {
        animation           : current_Page_R .5s;
        animation-fill-mode : both;
        z-index: 1;
        /* display: block; */
    }
    @keyframes current_Page_R {
        0%  { transform: translateX(70%); opacity: 0 }
        100%{ transform: translateX(0); opacity: 1 }
    }

    .current_Page_L {
        animation           : current_Page_L .5s;
        animation-fill-mode : both;
        z-index: 1;
        /* display: block; */
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

    #infoWrapper{
        height: auto;
        width: 250px;
        margin-top: 85px;
        margin-right: 75px;
        position: relative;
        float: right;
    }

    .trash{
        color: #f80a0a;
        text-align: center;
        right: 0;
        margin-right: -10px;
        margin-left: -17px;
        height: 27px;
        width: 27px;
        font-family: fas;
        font-size: 27px;
        cursor: pointer;
        position: relative;
        opacity: 0;
        float: right;
    }

    .trash_in {
        animation           : trash_in .3s;
        animation-fill-mode : both;
        z-index: 1;
    }
    @keyframes trash_in {
        0%  { transform: translateY(70%); opacity: 0 }
        100%{ transform: translateY(0); opacity: 1 }
    }

    .trash_out {
        animation           : trash_out .15s;
        animation-fill-mode : both;
        z-index: 1;
    }
    @keyframes trash_out {
        0%  { transform: translateY(0); opacity: 1 }
        100%{ transform: translateY(70%); opacity: 0 }
    }

    .hw_Field{
        background-color: #F0F0F0;
        font-family: Oswald;
        font-size: 17px;
        font-weight: bold;
        color: #081E2F;
        height: 45px;
        width: 250px;
        border-radius: 7px;
        border: solid gray 1px;
        box-shadow: 0 0 1px 0px rgb(88 88 91);
        position: relative;
        left: 0;
        margin: 10px 0;
    }

    .hw_title {
        text-align: center;
        float: left;
        height: 25px;
        padding: 10px 0;
        width: 110px;
    }

    .hw_input {
        color: #081E2F;
        right: 0px;
        height: 25px;
        width: 118px;
        font-family: Oswald;
        font-size: 17px;
        font-weight: bold;
        padding: 10px;
        border: none;
        border-left: 1px gray solid;
        border-radius: 0px 7px 7px 0;
        box-shadow: 0 0 1px 0px rgb(88 88 91);
        margin: 0;
        float: right;
    }

    .hw_unit {
        position: absolute;
        height: 25px;
        width: 50px;
        padding: 10px 0;
        float: right;
        right: 0;
        color: #96a984;
    }

    .basketItem{
        color: #0a685b;
        font-size: 14px;
        width: 100px;
        height: 70px;
        border: solid #8d9294 2px;
        border-radius: 8px;
        margin: 3px;
        cursor: pointer;
        float: left;
        font-family: Oswald;
        font-weight: bold;
        border: #dedede solid 2px;
        background-color: #ededed;
    }

    .item:hover{ background-color: #edebdd }

    .BI_name{
        text-align: left;
        font-size: 18px;
        padding: 10px 10px;
        overflow: auto;
        width: calc( 100% - 20px );
    }
    
    .BI_size{
        text-align: left;
        width: 45%;
        margin-left: 5%;
        float: left;
        color: #1777bc;
    }

    .BI_cal{
        text-align: right;
        margin-right: 5%;
        width: 45%;
        float: right;
        color: chocolate;
    }


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
