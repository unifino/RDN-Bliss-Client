<template>
    <div id="aboutUsPanel" :style="`z-index: ${+(store.state.ort === TS.Orts.AboutUs)}`">
        <div id="a_100" class="x_xxx init" ref="a_100"><A_100 /></div>
        <div id="a_010" class="x_xxx init" ref="a_010"><A_010 /></div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import A_100                                from '@/components/About Us/A_100.vue'
import A_010                                from '@/components/About Us/A_010.vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as Tools                           from '@/mixins/Tools'
import { ref }                              from 'vue'

const store = useStore()

// -- =====================================================================================

    const a_100 = ref<HTMLElement>( {} as HTMLElement )
    const a_010 = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => Tools.mainCA( [ oV, nV, TS.Orts.AboutUs ], [ a_100, a_010 ] )
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #a_100.init{
        transform: translate(-700px, 1000px) rotate(-70deg) scale(0.2);
    }

    #a_010.init{
        transform: translate(0px, 1000px) scale(0.2);
        opacity: 0;
    }

    #aboutUsPanel{
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

    #a_100{
        width: 28%;
    }

    #a_010{
        width: 850px;
        left: 28%;
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
        transform           : translate(-700px, 1000px) rotate(-70deg) scale(0.2);
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
        transform           : translate(0px, 1000px) scale(0.2);
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

</style>

// -- =====================================================================================
