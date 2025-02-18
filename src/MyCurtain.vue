<template>
    <div id="bg_curtain" class="off" ref="curtain">
        <div id="partA" ref="partA" />
        <div id="partB" ref="partB"> <div id="text">Applying New Settings</div> </div>
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
    const partA = ref<HTMLElement>( {} as HTMLElement )
    const partB = ref<HTMLElement>( {} as HTMLElement )

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

    const _in = () => {
        curtain.value.className = ""
        partA.value.className = "PartA_fall_In"
        partB.value.className = "PartB_fall_In"
    }
    const _out = async () => {
        partA.value.className = "PartA_fall_Out"
        partB.value.className = "PartB_fall_Out"
        await new Promise( _ => setTimeout( _, 300 ) )
        curtain.value.className = "off"
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
        font-family: Vibur;
        font-size: 70px;
        text-align: center;
        top: 14%;
        width: 100%;
        transform: translateX(-2%);
        position: absolute;
    }

    .PartA_fall_In {
        animation           : PartA_fall_In .3s;
        animation-fill-mode : both;
    }
    .PartA_fall_Out {
        animation           : PartA_fall_Out .3s;
        animation-fill-mode : both;
    }
    @keyframes PartA_fall_In {
        0%  { transform: translateY(-100%) }
        100%{ transform: translateY(0%)    }
    }
    @keyframes PartA_fall_Out {
        0%  { transform: translateY(0%)    }
        100%{ transform: translateY(-100%) }
    }

    .PartB_fall_In {
        animation           : PartB_fall_In .3s;
        animation-fill-mode : both;
    }
    .PartB_fall_Out {
        animation           : PartB_fall_Out .3s;
        animation-fill-mode : both;
    }
    @keyframes PartB_fall_In {
        0%  { transform: translateY(100%) }
        100%{ transform: translateY(0%)   }
    }
    @keyframes PartB_fall_Out {
        0%  { transform: translateY(0%)   }
        100%{ transform: translateY(100%) }
    }

</style>

// -- =====================================================================================
