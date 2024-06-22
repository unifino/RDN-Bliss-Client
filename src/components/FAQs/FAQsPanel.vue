<template>
    <div id="FAQsPanel" :style="`z-index: ${+(store.state.ort === TS.Orts.FAQs)}`">
        <div id="f_100" class="x_xxx init" ref="f_100"><F_100 /></div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as Tools                           from '@/mixins/Tools'
import { ref }                              from 'vue'
import F_100                                from '@/components/FAQs/F_100.vue'

const store = useStore()

// -- =====================================================================================

    const f_100 = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => Tools.mainCA( [ oV, nV, TS.Orts.FAQs ], [ null, f_100 ] )
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #f_100.init{
        transform: translate(-700px, 1000px) rotate(-70deg) scale(0.2);
    }

    #f_010.init{
        transform: translate(0px, 1000px) scale(0.2);
        opacity: 0;
    }

    #FAQsPanel{
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

    #f_100{
        width: 63%;
    }

    #f_010{
        width: 850px;
        left: 28%;
        /* margin: auto;
        left: 0;
        right: 0; */
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

</style>

// -- =====================================================================================
