<template>
    <div id="H_010_Box" ref="h_010">
        <DotBox />

        <div id="newsBox">
            <img class="bg no_select" :src="bgPath()" />
            <div id="shadowBox_3" />
            <div id="shadowBox_2" />
            <div id="shadowBox_1" />
            <div id="shadowBox_main">
                <div id="contentBox">
                    <div class="title" v-html="context.title" />
                    <div class="content" v-text="context.text" />
                </div>
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

const store = useStore();

// -- =====================================================================================

    const h_010 = ref<HTMLElement>( {} as HTMLElement )

    let context = { title: "", text: "" }
    context.title = "Agricultural Science Center of Excellence for Nutrition and Diet (ASCEND) for Better Health";
    context.text = "A virtual center that brings together scientists, partner organizations, and communities to deliver science-based solutions that promote and elevate food and nutrition security for all Americans. \n\n On September 28th, USDA announced the launch of the first USDA Nutrition Hub in Baton Rouge, Louisiana, in partnership with Southern University."

// -- =====================================================================================

    const bgPath = () => {
        return require( "@/assets/Pics/news/temp/2.jpg" )
    }

// -- =====================================================================================

    const _out = async ( opt?: string ) => {
        if ( opt ) await new Promise( _ => setTimeout( _, 1 ) )
        Tools.MainAnimation( h_010, "X010", "Out", 0, opt )
    };
    const _in = () => Tools.MainAnimation( h_010, "X010", "In", 900+860 );
    const _login = ( phase: "Login"|"Standard" ) => h_010.value.className = phase + "Pos"

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => {
            if( oV === TS.Orts.Home ) _out()
            if( nV === TS.Orts.Home ) _in()
        }
    )

    store.watch(
        getters => getters.process,
        ( nV, oV ) => {
            if ( nV === TS.Processes.Login ) _login( "Login" )
            if ( nV === TS.Processes.Registering ) _out()
            // .. Exit from Home to other Orts from Registering State
            if ( oV === TS.Processes.Login && store.getters.ort !== TS.Orts.Home )
                _out( "_planB" )
            // .. Exit back to Home from Registering
            if
            ( 
                nV === TS.Processes.Reading && 
                store.getters.ort === TS.Orts.Home && 
                oV !== TS.Processes.Login 
            )
                _in()
            // .. Exit back to Home from Login
            if
            ( 
                nV === TS.Processes.Reading && 
                store.getters.ort === TS.Orts.Home && 
                oV === TS.Processes.Login 
            )
                _login( "Standard" )
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #H_010_Box{
        background-color: #eeefec;
        right: 0;
        left: 0;
        height: 700px;
        width: 790px;
        border-radius: 23px;
        margin: 35px auto 0 auto;
        position: absolute;
        overflow: hidden;
    }

    #newsBox{
        width: 55%;
        margin: 0 5%;
        height: 80%;
        padding: 10% 0;
    }

    .bg{
        bottom: 0;
        right: 0;
        height: 95%;
        width: auto;
        position: absolute;
        z-index: 0;
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

    .title{
        font-family: PoiretOne;
        font-weight: bold;
        font-size: 25px;
        margin-bottom: 52px;
    }

    .content{
        font-family: oswald;
        font-size: 18px;
        font-weight: bold;
        max-width: 300px;
        white-space: pre-line;
    }

    .LoginPos {
        animation           : LoginPos .8s;
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

</style>

// -- =====================================================================================
