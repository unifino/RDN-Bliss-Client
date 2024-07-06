<template>
    <div id="my_calender_box" class="init" ref="calender">
        <div v-for="x in D" :key="x" class="days title">{{x}}</div>
        <div 
            v-for="(x,i) in N" 
            :key="i" 
            :class="'days ' + x.class"
        >
                {{ x.number }}
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

    const calender = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    let i = 0, j = 1;
    const date = new Date(), year = date.getFullYear(), month = date.getMonth()
    const D = ['S','M','T','W','T','F','S']
    const N: { number: number, class: "pre"|"current"|"next"|"today" }[] = []
    const m = new Date( year, month +0, 0 ).getDate()
    const o = new Date( year, month, 1 ).getDay()
    const toDay = date.getDate()
    
    // .. Current Month Days
    for( let x=1; x<=31; x++ ) N.push( { number: x, class: "current" } )
    // .. Mark Today
    N.filter( x => x.number === toDay )[0].class = "today"; 

    // .. Previous Month Days
    for ( let r=o; r>0; r-- ) N.unshift( { number: m - i++, class: "pre" } )

    // .. Next Month Days
    for ( let x = N.length; x<42; x++ ) N.push( { number: j++, class: "next" } )
    

// -- =====================================================================================

    const _out = () => myAnimation( "Out" )
    const _in = ( skip = false ) => myAnimation( "In", skip )

// -- =====================================================================================

    const myAnimation = async ( phase: "In"|"Out", skip = false ) => {
        
        if ( phase === "In" ) 
            if ( !skip ) 
                await new Promise( _ => setTimeout( _, Tools.speed() *.8 ) )
        
        calender.value.className = "Tool_fall_" + phase
    
    }


// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => { 
            if ( oV === TS.Orts.UserPanel ) 
                if ( store.getters.userTool === TS.UserTools.Calender )
                    _out() 
        }
    )

    store.watch(
        getters => getters.userTool,
        ( nV, oV ) => {
            if ( nV !== oV ) {
                if ( nV === TS.UserTools.Calender ) _in( oV === TS.UserTools.null )

                if ( oV === TS.UserTools.Calender ) _out()
            }
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #my_calender_box{
        background-color: #e9e8e6;
        height: 441px;
        width: 441px;
        top: 50%;
        left: 370px;
        padding: 45px;
        padding-top: 18px;
        border-radius: 23px;
        box-shadow: 0 0 7px 1px #babbbb;
        position: absolute;
    }

    .init{
        transform: translate(-30%,-55%) perspective(900px) rotateY(44deg) scale(.8); opacity: 0;
    }

    .days{
        font-family: TsukimiRounded;
        font-weight: bold;
        font-size: 18px;
        width: 53px;
        height: 53px;
        background-color: #f16e3f;
        color: #ffffff;
        margin: 5px;
        float: left;
        line-height: 53px;
        border-radius: 7px;
        text-align: center;
        cursor: pointer;
    }
    .days:hover{
        background-color: #2b5659;
        color: whitesmoke;
    }

    .pre, .next{
        background-color: #e3dcca;
        color: #818181;
        color: #7b7777;
    }

    .today{
        background-color: #279c85;
        color: white;
    }

    .title{
        background-color: transparent;
        color: #2a4d08;
    }

</style>

<style scoped Fast>

    .Fast> .Tool_fall_In {
        animation           : Tool_fall_In_Fast .4s;
        animation-fill-mode : both;
    }
    @keyframes Tool_fall_In_Fast {
        0%  { transform: translate(-30%,-55%) perspective(900px) rotateY(44deg) scale(.8); opacity: 0 }
        100%{ transform: translate(0,-55%) perspective(900px) rotateY(0deg) scale(1); opacity: 1 }
    }

    .Fast> .Tool_fall_Out {
        animation           : Tool_fall_Out_Fast .4s;
        animation-fill-mode : both;
    }
    @keyframes Tool_fall_Out_Fast {
        0%  { transform: translate(0,-55%) perspective(900px) rotateY(0deg) scale(1); opacity: 1 }
        100%{ transform: translate(-30%,-55%) perspective(900px) rotateY(44deg) scale(.8); opacity: 0 }
    }

</style>

// -- =====================================================================================
