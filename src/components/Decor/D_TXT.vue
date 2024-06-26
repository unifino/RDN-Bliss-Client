<template>
    <div id="D_TXT" class="no_select" ref="d_txt">{{ myText }}</div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { useStore }                         from 'vuex'
import { ref }                              from 'vue'
import * as TS                              from '@/types/types'
import * as CD                              from '@/mixins/commonData'

const store = useStore()

// -- =====================================================================================

    const myText = ref<string>()
    const d_txt = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const textSlider = async function () {

        // .. delay of .9s ... slide in TEXT
        await new Promise( _ => setTimeout( _, 900 ) )
        d_txt.value.className = "x_xxx " + "slideIn_DTXT"

        await new Promise( _ => setTimeout( _, 860 ) )
        // .. wait until it slides in complexly
        await new Promise( _ => setTimeout( _, 1500 ) )

        // .. reset it Class
        d_txt.value.className = "x_xxx"

    }

// -- =====================================================================================

    // .. Home - About Us
    store.watch(
        getters => getters.ort,
        // eslint-disable-next-line
        nV => myText.value = ( CD.OrtData as any )[ nV ].text
    )

    // .. Registering - Exit
    store.watch(
        getters => getters.process,
        nV => myText.value = nV === TS.Processes.Registering ?
        // eslint-disable-next-line
            "Hey there!" : ( CD.OrtData as any )[ store.getters.ort ].text
    )

    // .. logOut
    store.watch(
        getters => getters.Flag_logged_in,
        // eslint-disable-next-line
        nV => { if (!nV) myText.value = ( CD.OrtData as any )[ store.getters.ort ].text }
    )

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => {
            if (
                nV !== oV ||
                (
                    nV === TS.Orts.Home &&
                    store.getters.process === TS.Processes.Registering
                )
            )
                textSlider()
        }
    )

    store.watch(
        getters => getters.process,
        ( nV, oV ) => {
            if ( nV !== TS.Processes.Login )
                if (
                    store.getters.ort !== TS.Orts.Home ||
                    nV !== TS.Processes.Reading || oV !== TS.Processes.Login
                )
                    textSlider()
        }
    )

    store.watch(
        getters => getters.Flag_logged_in,
        nV => { if (!nV) textSlider() }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #D_TXT{
        color: #34282F;
        font-family: PoiretOne;
        font-size: 140px;
        /* font-weight: 600; */
        margin: 200px 0px;
        padding: 0;
        top: 0;
        left: 0;
        height: auto;
        width: auto;
        position: absolute;
        opacity: 0;
    }

    .slideIn_DTXT {
        animation           : slideIn_DTXT 1.5s;
        animation-fill-mode : both;
    }

    @keyframes slideIn_DTXT {
        0%{
            transform: translateX(0);
            opacity: 0;
        }
        30%{
            transform: translateX(150px);
            opacity: .6;
        }
        40%{
            transform: translateX(150px);
            opacity: .8;
        }
        100%{
            transform: translateX(300px);
            opacity: 0;
        }
    }

</style>

// -- =====================================================================================
