<template>
    <div id="user_buttons_box" ref="userButtons">
        <div
            v-for="(opt,i) of Options[ store.getters.userType ] "
            :key=i
            :class="'optionBox no_select ' + ( [ opt.tool , ...opt.onExtra ].includes( store.getters.userTool ) ? 'selected' : '' )"
            @click="userTool( opt.tool )"
        >
            <div class="icon">{{opt.icon}}</div>
            <div class="title">{{opt.title}}</div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as CTS                             from '@/types/common'
import * as Tools                           from '@/mixins/Tools';

const store: TS.Store = useStore()

// -- =====================================================================================

    const userButtons = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    let fuse = true;
    const userTool = async ( tool: TS.UserTools ) => {
    
        if ( !fuse ) return
        // .. Tool | Zurucksetzen
        store.dispatch( TS.Acts.userTool, tool === store.state.userTool ? TS.UserTools.null : tool )

        fuse = false
        await new Promise( _ => setTimeout( _, Tools.speed() ) )
        fuse = true
    
    }

    const _out = () => myAnimation( "Out" )
    const _in = () => myAnimation( "In" )

// -- =====================================================================================

    const myAnimation = async ( phase: "In"|"Out" ) => {
        if ( phase === "In" ) await new Promise( _ => setTimeout( _, Tools.speed() ) )
        userButtons.value.className = "U100_fall_" + phase
    }

// -- =====================================================================================

    const Options = ref ( {
        [ CTS.UserTypes.Dietitian ]: [
            { title: "Patients"  , tool: TS.UserTools.Patients,  icon: "", 
                onExtra: [TS.UserTools.CreateNewPatient] },
            { title: "Calender"  , tool: TS.UserTools.Calender,  icon: "", onExtra: [] },
            { title: "Week Stat" , tool: TS.UserTools.Stats,     icon: "", onExtra: [] },
            { title: "Diet Plan" , tool: TS.UserTools.DietPlans, icon: "", onExtra: [] },
            { title: "Messages"  , tool: TS.UserTools.Messages,  icon: "", onExtra: [] },
            { title: "Profile"   , tool: TS.UserTools.Profile,   icon: "", onExtra: [] },
        ],
        [ CTS.UserTypes.Patient ]: [
            { title: "Dietitians", tool: TS.UserTools.Patients,  icon: "", onExtra: [] },
            { title: "Diet Plan" , tool: TS.UserTools.DietPlans, icon: "", onExtra: [] },
            { title: "Messages"  , tool: TS.UserTools.Messages,  icon: "", onExtra: [] },
            { title: "Profile"   , tool: TS.UserTools.Profile,   icon: "", onExtra: [] },
        ],
        [ CTS.UserTypes.null ]: []

    } )

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => {
            if( oV === TS.Orts.UserPanel ) _out()
            if( nV === TS.Orts.UserPanel ) _in()
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #user_buttons_box{
        background-color: #e3e3e3;
        height: auto;
        width: 95px;
        top: 50%;
        transform: translate(-200px,-53%) scale(1);
        padding: 40px 20px;
        border-radius: 23px;
        box-shadow: 0 0 7px 1px #818181;
        margin: 0 0 0 50px;
        position: absolute;
        z-index: 2;
    }

    .optionBox{
        text-align: center;
        color: #107476;
        height: auto;
        width: 95px;
        position: relative;
        float: left;
        background-color: #b6b8b53e;
        margin: 6px auto 6px auto;
        border-radius: 10px;
    }

    .selected{
        background-color: #15a2a4;
        color: whitesmoke;
    }
    
    .selected:hover{
        color: #e6eced !important
    }

    .icon{
        font-family: "fas-6";
        font-size: 31px;
        margin: 20px 20px 10px 20px;
        /* opacity: .7; */
    }

    .title{
        font-family: Manrope;
        font-weight: bold;
        font-size: 12px;
        opacity: 1;
        margin-bottom: 12px;
        /* color: whitesmoke; */
    }

    .optionBox:hover{
        color: #169f01;
        cursor: pointer;
    }

    .optionBox:hover> .title{
        font-weight: bold;
        opacity: 1;
    }

    .U100_fall_Out {
        animation           : U100_fall_Out .8s;
        animation-fill-mode : both;
    }
    @keyframes U100_fall_Out {
        0%  { transform: translate(0,-53%) scale(1) }
        100%{ transform: translate(-200px,-53%) scale(.4) }
    }

    .U100_fall_In {
        animation           : U100_fall_In .8s;
        animation-fill-mode : both;
    }
    @keyframes U100_fall_In {
        0%  { transform: translate(-200px,-53%) scale(1) }
        100%{ transform: translate(0,-53%) scale(1) }
    }

</style>

<style Fast>

    .Fast> .U100_fall_Out {
        animation           : U100_fall_Out_Fast .5s;
        animation-fill-mode : both;
    }
    @keyframes U100_fall_Out_Fast {
        0%  { transform: translate(0,-53%) scale(1) }
        100%{ transform: translate(-200px,-53%) scale(.4) }
    }

    .Fast> .U100_fall_In {
        animation           : U100_fall_In_Fast .5s;
        animation-fill-mode : both;
    }
    @keyframes U100_fall_In_Fast {
        0%  { transform: translate(-200px,-53%) scale(1) }
        100%{ transform: translate(0,-53%) scale(1) }
    }

</style>

// -- =====================================================================================
