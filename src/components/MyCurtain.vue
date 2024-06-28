<template>
    <div id="bg_curtain" class="init" ref="curtain">
        <div id="text">Applying New Settings</div>
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
        const mode = store.getters.animationSpeed === TS.Speeds.Fast ? 
            TS.Speeds.Normal : TS.Speeds.Fast
        store.dispatch( TS.Acts.SpeedChange, mode )
        await new Promise( _ => setTimeout( _, Tools.speed() ) )
        _out()
    }

    const _in = () => curtain.value.className = "Curtain_fall_In"
    const _out = () => curtain.value.className = "Curtain_fall_Out"

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
        background-color: #2c2c34;
        margin: 0;
        padding: 0;
        top: 0;
        left: 0;
        height: 120%;
        margin-top: -20vh;
        width: 100%;
        position: absolute;
        z-index: 2;
    }

    .init{
        transform: translateY(100%);
    }

    #text{
        color: #108271;

        font-family: AllertaStencil;
        font-family: Vibur;
        /* font-family: RalewayDots; */
        /* font-family: Thasadith; */
        /* font-family: TsukimiRounded; */
        /* font-family: PoiretOne; */

        font-size: 70px;
        text-align: center;
        top: 50%;
        width: 100%;
        transform: translate(-2%,-130%);
        position: absolute;
    }

    .Curtain_fall_In {
        animation           : Curtain_fall_In .3s;
        animation-fill-mode : both;
    }
    @keyframes Curtain_fall_In {
        0%  { transform: translateY(100%) }
        100%{ transform: translateY(0%)   }
    }

    .Curtain_fall_Out {
        animation           : Curtain_fall_Out .3s;
        animation-fill-mode : both;
    }
    @keyframes Curtain_fall_Out {
        0%  { transform: translateY(0%)   }
        100%{ transform: translateY(100%) }
    }

</style>

// -- =====================================================================================
