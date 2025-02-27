<template>
    <div id="wholeWrapper" ref="grocery">
        
        <div id="mainWrapper" @click="exit">Hatef</div> 

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

    const grocery = ref<HTMLElement>( {} as HTMLElement )
    let from: TS.UserTools

// -- =====================================================================================

    const _out = () => Tools.userAnime( grocery, "Out" )
    const _in = async () => Tools.userAnime( grocery, "In", false, 200 )

    const exit = () => {
        store.commit( TS.Mutates.userTool, TS.UserTools.CreateNewPatient )
        store.commit( TS.Mutates.userTool, from )
    }

// -- =====================================================================================

store.watch(
        getters => getters.userTool,
        ( nV, oV ) => {
            if ( nV !== oV ) {
                if ( nV === TS.UserTools.Grocery ) { from = oV; _in() }
                if ( oV === TS.UserTools.Grocery ) _out()
            }
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #wholeWrapper{
        left: 300px;
        position: absolute;
        display: none;
    }

    #mainWrapper{
        background-color: #e6e3e3;
        height: 620px;
        width: 845px;
        border: solid 40px #e6e3e3;
        border-width: 10px 20px 20px 20px;
        border-radius: 23px;
        box-shadow: 0 0 7px 1px #babbbb;
        position: relative;
        float: left;
        overflow: hidden;
    }

    .Fast> .Tool_fall_In {
        animation           : Tool_fall_In .4s;
        animation-fill-mode : both;
    }
    @keyframes Tool_fall_In {
        0%  { transform: translateY(-30%) perspective(900px) rotateX(-54deg) scale(.8); opacity: 0 }
        100%{ transform: translateY(0) perspective(900px) rotateX(0deg) scale(1); opacity: 1 }
    }

    .Fast> .Tool_fall_Out {
        animation           : Tool_fall_Out .4s;
        animation-fill-mode : both;
    }
    @keyframes Tool_fall_Out {
        0%  { transform: translateY(0) perspective(900px) rotateX(0deg) scale(1); opacity: 1 }
        100%{ transform: translateY(-30%) perspective(900px) rotateX(-54deg) scale(.8); opacity: 0 }
    }
   

</style>

// -- =====================================================================================
