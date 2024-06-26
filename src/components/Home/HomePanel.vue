<template>
    <div id="homePanel" :style="`z-index: ${+(store.state.ort === TS.Orts.Home)}`">
        <div id="loginPanel"                     ><Login /></div>
        <div id="h_100" class="x_xxx" ref="h_100"><H_100 /></div>
        <div id="h_010" class="x_xxx" ref="h_010"><H_010 /></div>
        <div id="h_reg" class="x_xxx" ref="h_reg"><H_Reg /></div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import H_100                                from '@/components/Home/H_100.vue'
import H_010                                from '@/components/Home/H_010.vue'
import H_Reg                                from '@/components/Home/H_Reg.vue'
import Login                                from '@/components/Home/LoginPanel.vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as Tools                           from '@/mixins/Tools'
import { ref }                              from 'vue'

const store = useStore()

// -- =====================================================================================

    const h_100 = ref<HTMLElement>( {} as HTMLElement )
    const h_010 = ref<HTMLElement>( {} as HTMLElement )
    const h_reg = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    store.watch(
        getters => getters.Flag_logged_in,
        () => Tools.mainCA (
            [ TS.Orts.Home, TS.Orts.UserPanel, TS.Orts.Home ],
            [ h_100, h_010 ] 
        )
    )

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => {
            Tools.mainCA( [ oV, nV, TS.Orts.Home ], [ h_100, h_010 ] )
            store.dispatch( TS.Acts.Flag_plan_B, false )
        }
    )

    store.watch(
        getters => getters.process,
        ( nV, oV ) => {
            // .. Enter -> register mode
            if ( nV === TS.Processes.Registering ) {
                Tools.reg_Phase_A( "In", h_reg )
                // eslint-disable-next-line
                Tools.mainCA( [ "Home", null as any, "Home" ], [ h_100, h_010 ] )
            }
            // .. Exit <- Register Mode
            else if ( oV === TS.Processes.Registering ) {
                Tools.reg_Phase_A( "Out", h_reg )
                // .. exiting back to the Home
                if ( store.getters.ort === TS.Orts.Home ) {
                    // eslint-disable-next-line
                    Tools.mainCA( [ null as any, "Home", "Home" ], [ h_100, h_010 ] )
                }
            }

            // .. Enter -> Login mode
            else if ( nV === TS.Processes.Login ) {
                h_010.value.className = "x_xxx LoginPosition"
                store.dispatch( TS.Acts.Flag_plan_B, true )
            }
            // .. Exit <- Login Mode
            else if ( oV === TS.Processes.Login )
                // .. exiting back to the Home
                if ( store.getters.ort === TS.Orts.Home ) {
                    h_010.value.className = "x_xxx StandardPosition"
                    store.dispatch( TS.Acts.Flag_plan_B, false )
                }

        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #homePanel{
        height: 100%;
        width: 100%;
        bottom: 0;
        position: absolute;
    }

    .x_xxx{
        height: 100%;
        position: absolute;
        overflow: hidden;
    }

    #h_100{
        width: 28%;
    }

    #h_010{
        width: 850px;
        left: 28%;
        /* margin: auto;
        left: 0;
        right: 0; */
    }

    #h_reg{
        height: 600px;
        width: 1000px;
        margin-top: 98px;
        margin-left: 140px;
        overflow: visible;
        transform: scale(.4);
        opacity: 0;
        visibility: hidden;
    }

    .fallOut_X100 {
        animation           : fallOut_X100 1.9s;
        animation-fill-mode : both;
    }

    @keyframes fallOut_X100 {
        14%{
            transform: rotate(3deg) scale(1.07);
        }
        20%{
            transform: rotate(3deg) scale(1.07);
        }
        100%{
            transform: translate(-700px, 1000px) rotate(-70deg) scale(0.2);
        }
    }

    .fallOut_X010 {
        animation           : fallOut_X010 1.9s;
        animation-fill-mode : both;
    }

    @keyframes fallOut_X010 {
        14%{
            transform: translate(0px, 20px) scale(0.9);
            opacity: .3;
        }
        20%{
            transform: translate(0px, 20px) scale(0.9);
        }
        100%{
            transform: translate(0px, 1000px) scale(0.2);
        }
    }

    .fallOut_X010_planB {
        animation           : fallOut_X010_planB 1.9s;
        animation-fill-mode : both;
    }

    @keyframes fallOut_X010_planB {
        0%{
            transform: translate(0%, 82%) rotate(90deg);
        }
        100%{
            transform: translate(0px, 1000px) scale(0.2) rotate(90deg);
        }
    }

    .fallIn_X100 {
        animation           : fallIn_X100 1.7s;
        animation-fill-mode : both;
    }

    @keyframes fallIn_X100 {
        0%{
            transform: translate(-700px, 1000px) rotate(-70deg) scale(0.2);
        }
        66%{
            transform: translate(0px, 0px) rotate(3deg) scale(1.07);
        }
        70%{
            transform: rotate(3deg) scale(1.07);
        }
        100%{
            transform: rotate(0deg) scale(1);
        }
    }

    .fallIn_X010 {
        animation           : fallIn_X010 1.2s;
        animation-fill-mode : both;
    }

    @keyframes fallIn_X010 {
        0%{
            transform: translate(0px, 1000px) scale(0.2);
        }
        14%{
            opacity: .2;
            transform: translate(0px, 1000px) scale(0.2);
        }
        75%{
            opacity: .4;
            transform: translate(0px, 20px) scale(0.9);
        }
        100%{
            opacity: 1;
            transform: translate(0px, 0px) scale(1);
        }
    }

    .fallIn_XReg {
        animation           : fallIn_XReg .7s;
        animation-fill-mode : both;
    }

    @keyframes fallIn_XReg {
        0%{
            visibility: visible;
        }
        80%{
            transform: scale(1.1);
            opacity: .9;
        }
        100%{
            transform: scale(1);
            opacity: 1;
            visibility: visible;
        }
    }

    .fallOut_XReg {
        animation           : fallOut_XReg .6s;
        animation-fill-mode : both;
    }

    @keyframes fallOut_XReg {
        0%{
            transform: scale(1);
            opacity: 1;
            visibility: visible;
        }
        40%{
            transform: scale(1.1);
            opacity: .9;
        }
        100%{
            transform: scale(.5);
            opacity: 0;
            visibility: hidden;
        }
    }

    .LoginPosition {
        animation           : LoginPosition .8s;
        animation-fill-mode : both;
    }

    @keyframes LoginPosition {
        0%{
            transform: translate(0px, 0px) scale(1);
        }
        100%{
            opacity: 1;
            transform: translate(0%, 82%) rotate(90deg);
        }
    }

    .StandardPosition {
        animation           : StandardPosition .8s;
        animation-fill-mode : both;
    }

    @keyframes StandardPosition {
        0%{
            transform: translate(0%, 82%) rotate(90deg);
        }
        100%{
            opacity: 1;
            transform: translate(0%, 0%) rotate(0deg);
        }
    }

    #loginPanel{
        height: 300px;
        width: 350px;
        margin: auto;
        margin-top: 220px;
        right: 0;
        left: 0;
        position: absolute;
    }

</style>

// -- =====================================================================================
