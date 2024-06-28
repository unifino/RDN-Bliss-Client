<template>
    <div id="header_icons_box">
        <div v-for="(x,i) of options" :key=i class="optionBox no_select">
            <div @click="changeOrt(x.code)" :class="x.select ? 'selected' : ''">
                <div :class="'icon ' + CD.OrtData[ x.code ].text">{{x.icon}}</div>
                <div :class="'title ' + CD.OrtData[ x.code ].text">
                    {{CD.OrtData[ x.code ].text}}
                </div>
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
    const options = ref ( [ { code: TS.Orts.Home, select: false, icon: "" } ] )

    options.value = [
        { code:TS.Orts.Home,     select: true,  icon: "", },
        { code:TS.Orts.OurGoals, select: false, icon: "", },
        { code:TS.Orts.News,     select: false, icon: "", },
        { code:TS.Orts.FAQs,     select: false, icon: "?", },
        { code:TS.Orts.AboutUs,  select: false, icon: "", },
    ]

    const changeOrt = async ( ortCode: TS.Orts ) => {

        // .. prevent double animation EXcept for Home as return to Base
        if ( store.getters.ort === ortCode && ortCode !== TS.Orts.Home ) return
        if ( !fuse ) return

        store.dispatch( TS.Acts.ProcessChange, TS.Processes.Reading )
        store.dispatch( TS.Acts.OrtChange, ortCode )
        for( let x of options.value ) x.select = x.code === ortCode

        fuse = false
        await new Promise( _ => setTimeout( _, Tools.speed() ) )
        fuse = true

    }

// -- =====================================================================================

    store.watch(
        getters => getters.Flag_logged_in,
        nV => {
            options.value[0].code = nV ? TS.Orts.UserPanel : TS.Orts.Home
            // options.value[0].icon = ""
        }
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

    .selected, .selected> .title, .optionBox:hover{
        color: #521739;
        cursor: pointer;
        font-weight: bold;
        font-weight: bold;
        opacity: 1;
        cursor: pointer;
    }

    .optionBox:hover{
        color: #a33474;
    }

    .Welcome {
        animation           : Welcome 1s;
        animation-fill-mode : both;
    }
    @keyframes Welcome {
        0%  { color: #521739 }
        100%{ color: #64a334; opacity: 1; }
    }

    .Home {
        animation           : Home 1s;
        animation-fill-mode : both;
    }
    @keyframes Home {
        0%  { color: #64a334 }
        100%{ color: #521739; opacity: 1; }
    }

</style>

// -- =====================================================================================
