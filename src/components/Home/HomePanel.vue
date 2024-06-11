<template>
    <div id="homePanel">
        <div id="wrapper">
            <div class="w_xxx" id="w_txt" ref="W_TXT"><B_TXT /></div>
            <div class="w_xxx" id="w_100" ref="W_100"><B_100 /></div>
            <div class="w_xxx" id="w_010" ref="W_010"><B_010 /></div>
            <div class="w_xxx" id="w_001" ref="W_001"><B_001 /></div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import B_100                                from '@/components/Home/B_100.vue'
import B_010                                from '@/components/Home/B_010.vue'
import B_001                                from '@/components/Home/B_001.vue'
import B_TXT                                from '@/components/TextBanner.vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import { ref }                              from 'vue'

const store = useStore()

// -- =====================================================================================

    const W_100 = ref<HTMLElement>( {} as HTMLElement )
    const W_010 = ref<HTMLElement>( {} as HTMLElement )
    const W_001 = ref<HTMLElement>( {} as HTMLElement )
    const W_TXT = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const slider = async function () {

        // .. PART OUT
        // .. fall Out of sections 1-- & -1-
        W_100.value.className = "w_xxx " + "fallOut_B100"
        W_010.value.className = "w_xxx " + "fallOut_B010"
        // .. delay of .9s [ fall Out of section --1 ]
        await new Promise( _ => setTimeout( _, 900 ) )
        // .. slide in TEXT
        W_TXT.value.className += "w_xxx " + "slideIn_BTXT"

        // .. PART IN
        await new Promise( _ => setTimeout( _, 860 ) )
        if ( store.getters.ort === TS.Orts.Home ) {
            // .. fall In of sections 1-- & -1-
            W_100.value.className = "w_xxx " + "fallIn_B100"
            W_010.value.className = "w_xxx " + "fallIn_B010"
        }

        // .. PART ...
        // .. wait untill it slides in completly
        await new Promise( _ => setTimeout( _, 1500 ) )
        // .. reset it Class
        W_TXT.value.className = "w_xxx"

    }

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => {
            if ( nV !== oV ) {
                slider()
            }
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #homePanel{
        bottom: 0;
        background-color: #fbfbfb;
        position: relative;
    }

    #wrapper{
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .w_xxx{
        height: 100%;
        position: absolute;
        overflow: hidden;
    }

    #w_100{
        width: 28%;
    }

    #w_010{
        width: 850px;
        left: 28%;
        /* margin: auto;
        left: 0;
        right: 0; */
    }

    #w_txt{
        top: 0;
        width: 100%;
        transform: translateX(-5%);
        opacity: 0;
    }

    #w_001{
        bottom: 0;
        width: 24%;
        right: 0;
    }

    .fallOut_B100 {
        animation           : fallOut_B100 1.9s;
        animation-fill-mode : both;
    }

    @keyframes fallOut_B100 {
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

    .fallOut_B010 {
        animation           : fallOut_B010 1.9s;
        animation-fill-mode : both;
    }

    @keyframes fallOut_B010 {
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

    .slideIn_BTXT {
        animation           : slideIn_BTXT 1.5s;
        animation-fill-mode : both;
    }

    @keyframes slideIn_BTXT {
        30%{
            transform: translate(0%, 0px);
            opacity: .6;
        }
        40%{
            transform: translate(0%, 0px);
            opacity: .8;
        }
        100%{
            transform: translate(15%, 0px);
            opacity: 0;
        }
    }

    .fallIn_B100 {
        transform: translate(-700px, 1000px) rotate(-70deg) scale(0.2);
        animation           : fallIn_B100 1.7s;
        animation-fill-mode : both;
    }

    @keyframes fallIn_B100 {
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

    .fallIn_B010 {
        transform: translate(0px, 1000px) scale(0.2);
        animation           : fallIn_B010 1.2s;
        animation-fill-mode : both;
    }

    @keyframes fallIn_B010 {
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

</style>

// -- =====================================================================================
