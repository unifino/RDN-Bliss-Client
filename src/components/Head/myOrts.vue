<template>
    <div id="header_icons_box">
        <div v-for="(x,i) of options" :key=i class="optionBox no_select">
            <div 
                @click="changeOrt(x.code)"
                :class="store.getters.ort === x.code ? 'selected' : ''"
            >
                <div :class="'icon ' + x.class">{{x.icon}}</div>
                <div :class="'title ' + x.class">{{CD.OrtData[ x.code ].text}}</div>
            </div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as CD                              from '@/mixins/commonData'
import * as Tools                           from '@/mixins/Tools'

const store: TS.Store = useStore()

// -- =====================================================================================

    let fuse = true;
    const options = ref ( [ { code: TS.Orts.Home, class: "", icon: "" } ] )

    options.value = [
        { code:TS.Orts.Home,     class: "Home",     icon: "", },
        { code:TS.Orts.OurGoals, class: "OurGoals", icon: "", },
        { code:TS.Orts.News,     class: "News",     icon: "", },
        { code:TS.Orts.FAQs,     class: "FAQs",     icon: "?", },
        { code:TS.Orts.AboutUs,  class: "AboutUs",  icon: "", },
    ]

    const changeOrt = async ( ortCode: TS.Orts ) => {

        // .. prevent double animation EXcept for Home as return to Base
        if ( store.getters.ort === ortCode && ortCode !== TS.Orts.Home ) return
        if ( !fuse ) return

        store.dispatch( TS.Acts.ProcessChange, TS.Processes.Reading )
        store.dispatch( TS.Acts.OrtChange, ortCode )

        fuse = false
        await new Promise( _ => setTimeout( _, Tools.speed() ) )
        fuse = true

    }

// -- =====================================================================================

    const myTransitionFade = async ( logged_in: boolean ) => {

        options.value[0].class = "transitionFadeTo"+ ( logged_in ? "Green" : "Purple" )
        await new Promise( _ => setTimeout( _, 500 ) )
        options.value[0].code = logged_in ? TS.Orts.UserPanel : TS.Orts.Home
        options.value[0].class += logged_in ? " bgUPT" : "" 
        await new Promise( _ => setTimeout( _, 500 ) )
        options.value[0].class = logged_in ? "UserPanel" : "Home"

    }

// -- =====================================================================================

    store.watch(
        getters => getters.Flag_logged_in,
        nV => myTransitionFade( nV )
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #header_icons_box{
        height: 100px;
        width: 500px;
        margin-top: 35px;
        margin-left: 44px;
    }

    .optionBox{
        text-align: center;
        color: #29363a;
        height: 80px;
        width: 95px;
        position: relative;
        float: left;
    }

    .icon{
        font-family: "fas-6";
        font-size: 40px;
        margin: 14px;
    }

    .title{
        font-family: Manrope;
        opacity: 0.4;
    }
    .UserPanel.title{
        opacity: .9;
    }

    .selected, .selected> .title, .optionBox:hover{
        color: #521739;
        cursor: pointer;
        font-weight: bold;
        opacity: 1;
        cursor: pointer;
        border-radius: 20px;
    }
    .selected> .title{
        background-color: #f5dee7;
        color: orangered;
    }
    .selected> .title.UserPanel{
        background-color: #c0e4ef;
    }
    .bgUPT.title{
        background-color: #c0e4ef;
    }

    .optionBox:hover{
        color: #a33474;
    }

    .transitionFadeToGreen {
        font-weight: bold;
        animation           : transitionFadeToGreen 1s;
        animation-fill-mode : both;
    }
    .transitionFadeToPurple {
        font-weight: bold;
        animation           : transitionFadeToGreen 1s;
        animation-fill-mode : both;
        animation-direction: reverse;
    }
    @keyframes transitionFadeToGreen {
        0%  { color: #521739 }
        100%{ color: #64a334 }
    }

    .UserPanel, .selected> .UserPanel.title { color: #64a334 }

    .title.transitionFadeToGreen {
        animation           : transitionFadeTitle 1.1s;
        animation-fill-mode : both;
    }
    .title.transitionFadeToPurple {
        animation           : transitionFadeTitle 1.1s;
        animation-fill-mode : both;
        animation-direction : reverse;   
    }
    @keyframes transitionFadeTitle {
        0%  { color: #521739; opacity: 1 }
        48% { opacity: 0 }
        52% { opacity: 0 }
        100%{ color: #64a334; opacity: 1 }
    }

</style>

// -- =====================================================================================
