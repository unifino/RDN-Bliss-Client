<template>
    <div id="H_010_Box" class="init" ref="h_010">

        <DotBox />

        <div style="visibility: collapse; display: none;">
            <img v-for="(x,i) of bgPath()" :key="i" :src="bgPath()[i]" />
        </div>
        <div id="newsBox">
            <img id="bg" :src="bgPath()[store.getters.H010IDx]" />
            <div id="bgCover" ref="bgCover" />
            <div id="shadowBox_3" />
            <div id="shadowBox_2" />
            <div id="shadowBox_1" />
            <div id="shadowBox_main">
                <div id="contentBox" ref="contentBox">
                    <div id="title" ref="title" v-html="myData[ store.getters.H010IDx ].title" />
                    <div id="content" ref="content" v-text="myData[ store.getters.H010IDx ].text" />
                </div>
                <div id="border"></div>
            </div>
        </div>
</div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import DotBox                               from '@/components/Home/DotBox.vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import { ref }                              from 'vue'
import * as Tools                           from '@/mixins/Tools'
import myData                               from "./data.json";

const store: TS.Store = useStore()


// -- =====================================================================================

    const h_010 = ref<HTMLElement>( {} as HTMLElement )
    const title = ref<HTMLElement>( {} as HTMLElement )
    const content = ref<HTMLElement>( {} as HTMLElement )
    const bgCover = ref<HTMLElement>( {} as HTMLElement )
    let timeOut: number;

// -- =====================================================================================

    const bgPath = () => {
        return [
            require( "@/assets/Pics/Home/1.jpg" ),
            require( "@/assets/Pics/Home/2.jpg" ),
            require( "@/assets/Pics/Home/3.jpg" ),
            require( "@/assets/Pics/Home/4.jpg" ),
            require( "@/assets/Pics/Home/5.jpg" ),
        ]
    }

// -- =====================================================================================

    const _in = () => Tools.MainAnimation( h_010, "X010", "In", Tools.speed() );
    const _out = async () => {
        const planB = store.getters.Flag_plan_B
        if ( planB ) await new Promise( _ => setTimeout( _, 1 ) )
        Tools.MainAnimation( h_010, "X010", "Out", 0, planB ? "_planB" : "" )
        if ( planB ) store.dispatch( TS.Acts.Flag_plan_B, false )
        clearTimeout( timeOut )
    };

    const _login = ( mode: TS.Processes, direction: "Go"|"Back" ) => {
        if ( direction === "Go" ) {
            if ( mode === TS.Processes.Reading ) h_010.value.className = "LoginPos"
            if ( mode === TS.Processes.Registering ) h_010.value.className = "LoginPosInstant"
        }
        if ( direction === "Back" ) {
            if ( mode === TS.Processes.Reading ) h_010.value.className = "StandardPos"
        }
        store.dispatch( TS.Acts.Flag_plan_B, direction === "Go" )
    }

// -- =====================================================================================

    const newsSlider = async ( byHand = false ) => {

        // .. reset ClassNames
        content.value.className = ""
        title.value.className = ""
        bgCover.value.className = ""
        await new Promise( _ => setTimeout( _, 10 ) )

        bgCover.value.className = "fadeIn"
        content.value.className = "fadeOut"
        await new Promise( _ => setTimeout( _, 100 ) )
        title.value.className = "slideOut"
        await new Promise( _ => setTimeout( _, 660 ) )

        if ( !byHand ) 
            store.dispatch( TS.Acts.H010IDx, (store.getters.H010IDx +1) % myData.length )

        title.value.className = "slideIn"
        await new Promise( _ => setTimeout( _, 200 ) )
        content.value.className = "fadeIn"
        bgCover.value.className = "fadeOut"

        timeOut = setTimeout( newsSlider, byHand ? 6000 : 4000 )

    }

// -- =====================================================================================

    store.watch( getters => getters.Flag_logged_in, () => clearTimeout( timeOut ) )

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => {
            if( oV === TS.Orts.Home ) _out()
            if( nV === TS.Orts.Home ) {
                _in()
                timeOut = setTimeout( newsSlider, 4000 )
            }
            else clearTimeout( timeOut )
        }
    )

    store.watch(
        getters => getters.process,
        ( nV, oV ) => {
            if ( nV === TS.Processes.Login ) _login( oV, "Go" )
            if ( nV === TS.Processes.Registering ) _out()
            // .. Exit from Home to other Orts from Registering State
            if ( oV === TS.Processes.Login && store.getters.ort !== TS.Orts.Home ) _out()
            // .. Exit back to Home from Login | Registering
            if ( nV === TS.Processes.Reading && store.getters.ort === TS.Orts.Home )
                oV !== TS.Processes.Login ? _in() : _login( nV, "Back" )
        }
    )

    store.watch( 
        getters => getters.Flag_H010_Hand,
        nV => {
            if (nV) {
                clearTimeout( timeOut )
                store.dispatch( TS.Acts.Flag_H010_Hand, false )
                timeOut = setTimeout( () => newsSlider( true ), 0 )
            }
        }  
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #H_010_Box{
        background-color: #eeefec;
        left: 0;
        height: 700px;
        width: 790px;
        border-radius: 23px;
        margin: 45px 0;
        position: absolute;
        overflow: hidden;
    }

    .init{
        transform: translate(0px, 1000px) scale(0.2)
    }

    #newsBox{
        width: 55%;
        margin: 0 5%;
        height: 80%;
        padding: 10% 0;
    }

    #bg{
        bottom: 0;
        right: 0;
        height: 440px;
        width: auto;
        position: absolute;
        z-index: 0;
    }

    #bgCover{
        height: 100%;
        width: 100%;
        background-color: #195549;
        opacity: 0;
        position: absolute;
    }

    #border{
        background-color: #eeefecec;
        left: 0;
        top: 0;
        height: 100%;
        border-left: 20px solid #eeefec;
        width: 30px;
        position: absolute;
    }

    #shadowBox_main, #shadowBox_1, #shadowBox_2, #shadowBox_3{
        top: 0;
        left: 0;
        background-color: #eeefec;
        width: 45%;
        height: 60%;
        padding: 90px 50% 30% 90px;
        border-radius: 0 0 100% 0;
        position: absolute;
        z-index: 1;
    }
    #shadowBox_1{
        top: 12px;
        left: 12px;
        background-color: #d0d1cf;
        opacity: .8;
    }
    #shadowBox_2{
        top: 27px;
        left: 27px;
        background-color: #adadad;
        opacity: .6;
    }
    #shadowBox_3{
        top: 72px;
        left: 72px;
        background-color: rgb(71, 71, 71);
        opacity: .35;
    }

    #title{
        font-family: PoiretOne;
        font-weight: bold;
        font-size: 25px;
        margin-bottom: 52px;
    }

    #content{
        font-family: Oswald;
        font-size: 18px;
        font-weight: bold;
        max-width: 300px;
        white-space: pre-line;
    }

    .LoginPos {
        animation           : LoginPos .8s;
        animation-fill-mode : both;
    }
    .LoginPosInstant {
        animation           : LoginPos .0s;
        animation-fill-mode : both;
    }
    @keyframes LoginPos {
        0%  { transform: translateY(0) scale(1) }
        100%{ opacity: 1; transform: translateY(720px) rotate(90deg) }
    }

    .StandardPos {
        animation           : StandardPos .8s;
        animation-fill-mode : both;
    }
    @keyframes StandardPos {
        0%  { transform: translateY(720px) rotate(90deg) }
        100%{ opacity: 1; transform: translateY(0) rotate(0deg) }
    }

    .X010_fall_Out_planB {
        animation           : X010_fall_Out_planB 1.9s;
        animation-fill-mode : both;
    }

    @keyframes X010_fall_Out_planB {
        0%  { transform: translateY(720px) rotate(90deg) }
        100%{ transform: translate(0px, 1000px) scale(0.2) rotate(90deg) }
    }


    .slideOut {
        animation           : slideOut .5s;
        animation-fill-mode : both;
    }
    @keyframes slideOut {
        0%  { transform: translateX(0); opacity: 1 }
        100%{ transform: translateX(-40%); opacity: 0 }
    }
    .slideIn {
        animation           : slideIn .5s;
        animation-fill-mode : both;
    }
    @keyframes slideIn {
        0%  { transform: translateX(60%); opacity: 0 }
        100%{ transform: translateX(0); opacity: 1 }
    }

    .fadeOut {
        animation           : fadeOut .5s;
        animation-fill-mode : both;
    }
    @keyframes fadeOut {
        0%  { opacity: 1 }
        100%{ opacity: 0 }
    }
    .fadeIn {
        animation           : fadeIn .5s;
        animation-fill-mode : both;
    }
    @keyframes fadeIn {
        0%  { opacity: 0 }
        100%{ opacity: 1 }
    }

</style>

<style Fast>
    .Fast .LoginPos {
        animation           : LoginPos .5s;
        animation-fill-mode : both;
    }
    @keyframes LoginPos {
        0%  { transform: translateY(0) scale(1) }
        100%{ opacity: 1; transform: translateY(720px) rotate(90deg) }
    }

    .Fast .StandardPos {
        animation           : StandardPos .5s;
        animation-fill-mode : both;
    }
    @keyframes StandardPos {
        0%  { transform: translateY(720px) rotate(90deg) }
        100%{ opacity: 1; transform: translateY(0) rotate(0deg) }
    }

    .Fast .X010_fall_Out_planB {
        animation           : X010_fall_Out_planB .5s;
        animation-fill-mode : both;
    }
    @keyframes X010_fall_Out_planB {
        0%  { transform: translateY(720px) rotate(90deg) }
        100%{ transform: translate(0px, 1000px) scale(0.2) rotate(90deg) }
    }

</style>

// -- =====================================================================================
