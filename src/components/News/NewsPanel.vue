<template>
    <div id="FAQsPanel" :style="`z-index: ${+(store.getters.ort === TS.Orts.News)}`">
        <!-- Hatef -->
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

    const curtain = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const changeSpeed = async () => {
        _in();
        await new Promise( _ => setTimeout( _, 300 ) )
    }

    const _in = () => {
        curtain.value.className = ""
    }


// -- =====================================================================================

    store.watch(
        getters => getters.Flag_speed,
        () => changeSpeed()
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #bg_curtain{
        margin: 0;
        padding: 0;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 2;
    }

    .off{ visibility: collapse; }

    #partA{
        background-color: #1d2123;
        height: 24%;
        transform: translateY(-100%);
    }

    #partB{
        background-color: #121516;
        height: 76%;
        transform: translateY(100%);
    }

    #text{
        color: #108271;
        /* font-family: AllertaStencil; */
        font-family: Vibur;
        /* font-family: RalewayDots; */
        /* font-family: Thasadith; */
        /* font-family: TsukimiRounded; */
        /* font-family: PoiretOne; */
        font-size: 70px;
        text-align: center;
        top: 14%;
        width: 100%;
        transform: translateX(-2%);
        position: absolute;
    }
</style>

// -- =====================================================================================
