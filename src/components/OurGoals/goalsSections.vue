<template>
    <div id="sectionsWrapper">
        
        <div id="FutureEvents" class="init" ref="g_010">
            <div class="titleWrapper">
                <div class="title">Future Events</div>
            </div>
        </div>
        
        <div id="Benefits" class="init" ref="g_100">
            <div class="titleWrapper">
                <div class="title">Benefits</div>
            </div>
        </div>
        
        <div id="Archive" class="init" ref="g_001">
            <div class="titleWrapper">
                <div class="title">Archive</div>
            </div>
        </div>
    
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as Tools                           from '@/mixins/Tools';

const store: TS.Store = useStore()

// -- =====================================================================================

    const g_010 = ref<HTMLElement>( {} as HTMLElement )
    const g_100 = ref<HTMLElement>( {} as HTMLElement )
    const g_001 = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const _out = () => myAnimation( "Out" )
    const _in = () => myAnimation( "In" )

// -- =====================================================================================

    const myAnimation = async ( phase: "In"|"Out" ) => {
        if ( phase === "In" ) await new Promise( _ => setTimeout( _, Tools.speed() ) )
        g_010.value.className = "G010_fall_" + phase
        g_100.value.className = "G100_fall_" + phase
        g_001.value.className = "G001_fall_" + phase
    }

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV: TS.Orts, oV: TS.Orts ) => {
            if( oV === TS.Orts.OurGoals ) _out()
            if( nV === TS.Orts.OurGoals ) _in()
        }
    )

    store.watch(
        getters => getters.Flag_logged_in,
        ( nV, oV ) => { 
            if( oV && store.getters.ort === TS.Orts.OurGoals ) { _out(); _in() } 
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #sectionsWrapper{
        width: 55vw;
        height: 85%;
        top: 50px;
        left: 120px;
        position: absolute;
    }

    .titleWrapper{
        background-color: rgb(82, 148, 170);
        height: 300px;
        width: 60px;
        left: calc( 100% - 60px );
        border-radius: 0 16px 16px 0;
        position: relative;
        opacity: .5;
        white-space: pre;
    }
    #FutureEvents .titleWrapper{ height: 350px }

    .title{
        transform: rotate(90deg) translateX(40px);
        font-family: TsukimiRounded;
        font-weight: bold;
        right: 0;
        font-size: 30px;
        color: #070707;
    }

    #FutureEvents{
        height: 350px;
        width: 70%;
        margin: auto;
        margin-bottom: 40px;
        border-radius: 16px;
        background-color: #b6d5f4;
    }
    #FutureEvents.init{
        transform: translateY(-500px) scale(.4);
        opacity: 0
    }

    #Benefits{
        height: 300px;
        width: 550px;
        border-radius: 16px;
        background-color: rgb(14, 82, 97);
        float: left;
    }
    #Benefits.init{
        transform: translate(500px, 500px) rotate(70deg) scale(0.2)
    }

    #Archive{
        height: 300px;
        width: 450px;
        border-radius: 16px;
        background-color: aquamarine;
        float: right;
        overflow: hidden;
    }
    #Archive.init{
        transform: translate(500px, 500px) rotate(70deg) scale(0.2)
    }

    .G010_fall_Out {
        animation           : G010_fall_Out .9s;
        animation-fill-mode : both;
    }
    @keyframes G010_fall_Out {
        0%  { transform: translate(0,0) scale(1); opacity: 1 }
        100%{ transform: translateY(-500px) scale(.4); opacity: 0 }
    }
    .G010_fall_In {
        animation           : G010_fall_In .9s;
        animation-fill-mode : both;
    }
    @keyframes G010_fall_In {
        100%{ transform: translate(0,0) scale(1); opacity: 1 }
        0%  { transform: translateY(-500px) scale(.4); opacity: 0 }
    }


    .G100_fall_Out {
        animation           : G100_fall_Out .9s;
        animation-fill-mode : both;
    }
    @keyframes G100_fall_Out {
        0%{ transform: translate(0,0) rotate(0deg) scale(1) } 
        100%{ transform: translate(-500px, 500px) rotate(-70deg) scale(0.2) }
    }
    .G100_fall_In {
        animation           : G100_fall_In .9s;
        animation-fill-mode : both;
    }
    @keyframes G100_fall_In {
        0%{ transform: translate(-500px, 500px) rotate(-70deg) scale(0.2) }
        100%{ transform: translate(0,0) rotate(0deg) scale(1) }
    }

    
    .G001_fall_Out {
        animation           : G001_fall_Out .9s;
        animation-fill-mode : both;
    }
    @keyframes G001_fall_Out {
        0%{ transform: translate(0,0) rotate(0) scale(1) }
        100%{ transform: translate(500px, 500px) rotate(70deg) scale(0.2) }
    }
    
    .G001_fall_In {
        animation           : G001_fall_In .9s;
        animation-fill-mode : both;
    }
    @keyframes G001_fall_In {
        0%{ transform: translate(500px, 500px) rotate(70deg) scale(0.2) } 
        100%{ transform: translate(0,0) rotate(0) scale(1) }
    }

</style>

<style Fast>

    .Fast> .G010_fall_Out {
        animation           : G010_fall_Out_Fast .5s;
        animation-fill-mode : both;
    }
    @keyframes G010_fall_Out_Fast {
        0%  { transform: translate(0,0) scale(1); opacity: 1 }
        100%{ transform: translateY(-500px) scale(.4); opacity: 0 }
    }
    .Fast> .G010_fall_In {
        animation           : G010_fall_In_Fast .5s;
        animation-fill-mode : both;
    }
    @keyframes G010_fall_In_Fast {
        100%{ transform: translate(0,0) scale(1); opacity: 1 }
        0%  { transform: translateY(-500px) scale(.4); opacity: 0 }
    }


    .Fast> .G100_fall_Out {
        animation           : G100_fall_Out_Fast .5s;
        animation-fill-mode : both;
    }
    @keyframes G100_fall_Out_Fast {
        0%{ transform: translate(0,0) rotate(0deg) scale(1) } 
        100%{ transform: translate(-500px, 500px) rotate(-70deg) scale(0.2) }
    }
    .Fast> .G100_fall_In {
        animation           : G100_fall_In_Fast .5s;
        animation-fill-mode : both;
    }
    @keyframes G100_fall_In_Fast {
        0%{ transform: translate(-500px, 500px) rotate(-70deg) scale(0.2) }
        100%{ transform: translate(0,0) rotate(0deg) scale(1) }
    }

    
    .Fast> .G001_fall_Out {
        animation           : G001_fall_Out_Fast .5s;
        animation-fill-mode : both;
    }
    @keyframes G001_fall_Out_Fast {
        0%{ transform: translate(0,0) rotate(0) scale(1) }
        100%{ transform: translate(500px, 500px) rotate(70deg) scale(0.2) }
    }
    .Fast> .G001_fall_In {
        animation           : G001_fall_In_Fast .5s;
        animation-fill-mode : both;
    }
    @keyframes G001_fall_In_Fast {
        0%{ transform: translate(500px, 500px) rotate(70deg) scale(0.2) } 
        100%{ transform: translate(0,0) rotate(0) scale(1) }
    }

</style>

// -- =====================================================================================
