<template>
    <div id="homePanel" :style="`z-index: ${+(store.state.ort === TS.Orts.Home)}`">
        <div id="h_100" class="x_xxx" ref="h_100"><H_100 /></div>
        <div id="h_010" class="x_xxx" ref="h_010"><H_010 /></div>
        <div id="h_reg" class="x_xxx" ref="h_reg"><H_Reg /></div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import H_100                                from '@/components/Home/H_100.vue'
import H_010                                from '@/components/Home/H_010.vue'
import H_Reg                                from '@/components/Home/H_Reg.vue'
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
        getters => getters.ort,
        ( nV, oV ) => {
            Tools.mainCA( [ oV, nV, TS.Orts.Home ], [ h_100, h_010 ] )

        }
    )

    store.watch(
        getters => getters.process,
        nV => {
            // .. Enter -> register mode
            if ( nV === TS.Processes.Registering ) {
                Tools.reg_Phase_A( "In", h_reg )
                // eslint-disable-next-line
                Tools.mainCA( [ "Home", null as any, "Home" ], [ h_100, h_010 ] )
            }
            // .. Exit <- Register Mode
            else {
                Tools.reg_Phase_A( "Out", h_reg )
                // .. exiting back to the Home
                if ( store.getters.ort === TS.Orts.Home ) {
                    // eslint-disable-next-line
                    Tools.mainCA( [ null as any, "Home", "Home" ], [ h_100, h_010 ] )
                }
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
        height: 85%;
        margin-top: 44px;
        margin-left: 55px;
        width: 1200px;
        border: solid 2px rgb(161 161 161);
        box-shadow: 0 0 10px 1px rgb(130 157 176);
        border-radius: 20px;
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

    .fallIn_X100 {
        transform: translate(-700px, 1000px) rotate(-70deg) scale(0.2);
        animation           : fallIn_X100 1.7s;
        animation-fill-mode : both;
    }

    @keyframes fallIn_X100 {
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
        transform: translate(0px, 1000px) scale(0.2);
        animation           : fallIn_X010 1.2s;
        animation-fill-mode : both;
    }

    @keyframes fallIn_X010 {
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
            transform: scale(.9);
            opacity: .9;
        }
        100%{
            transform: scale(.85);
            opacity: 1;
            visibility: visible;
        }
    }

    .fallOut_XReg {
        animation           : fallOut_XReg .5s;
        animation-fill-mode : both;
    }

    @keyframes fallOut_XReg {
        0%{
            transform: scale(.85);
            opacity: 1;
            visibility: visible;
        }
        20%{
            transform: scale(.9);
            opacity: .9;
        }
        100%{
            transform: scale(.4);
            opacity: 0;
            visibility: hidden;
        }
    }

</style>

// -- =====================================================================================
