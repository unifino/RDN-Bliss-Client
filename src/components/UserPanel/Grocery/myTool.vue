<template>
    <div id="wholeWrapper" ref="grocery">
        
        <bigGrocery />

        <div class="buttonsWrapper">
            <div 
                :class="'button' + ( b.marin ? ' buttonHasMargin' : '')"
                v-for="(b,i) of buttons" :key="i" 
                @click="b.fnc" 
            >
                {{ b.title }}
            </div>
        </div>
        
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as Tools                           from '@/mixins/Tools';
import bigGrocery                           from '@/components/UserPanel/Grocery/bigGrocery.vue'

const store: TS.Store = useStore()

// -- =====================================================================================

    const grocery = ref<HTMLElement>( {} as HTMLElement )
    let from: TS.UserTools

    const buttons = [ 
        { title: "Add New Item", fnc: () => exit() },
        { title: "Back to Previous Menu", fnc: () => exit(), marin: true },
    ]

// -- =====================================================================================

    const _out = () => {
        Tools.userAnime( grocery, "Out" )
        store.commit( TS.Mutates.GroceryBasket, undefined )
    }
    const _in = async () => Tools.userAnime( grocery, "In", false, 200 )

    const exit = () => store.commit( TS.Mutates.userTool, from )

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
