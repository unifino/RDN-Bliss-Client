<template>
    <div id="my_stats_box" class="init" ref="message">
        
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

    const message = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const _out = () => myAnimation( "Out" )
    const _in = ( skip = false ) => myAnimation( "In", skip )

// -- =====================================================================================

    const myAnimation = async ( phase: "In"|"Out", skip = false ) => {
        if ( phase === "In" ) 
            if ( !skip ) 
                await new Promise( _ => setTimeout( _, Tools.speed() *.8 ) )
        message.value.className = "Tool_fall_" + phase
    }


// -- =====================================================================================

    store.watch(
        getters => getters.userTool,
        ( nV, oV ) => {
            if ( nV !== oV ) {
                if ( nV === TS.UserTools.Stats ) _in( oV === TS.UserTools.null )

                if ( oV === TS.UserTools.Stats ) _out()
            }
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #my_stats_box{
        background-color: #17a914;
        height: 620px;
        width: 700px;
        top: 50%;
        left: 300px;
        padding: 40px;
        border-radius: 23px;
        box-shadow: 0 0 7px 1px #babbbb;
        position: absolute;
    }

    .init{
        transform: translate(-10%,-53%) perspective(900px) rotateY(44deg) scale(.8); opacity: 0
    }

</style>

// -- =====================================================================================
