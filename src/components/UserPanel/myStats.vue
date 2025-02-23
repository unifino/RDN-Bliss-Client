<template>
    <div id="my_stats_box" ref="stats">
        
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

    const stats = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const _out = () => Tools.userAnime( stats, "Out" )
    const _in = ( skip = false ) => Tools.userAnime( stats, "In", skip )

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => { 
            if ( oV === TS.Orts.UserPanel ) 
                if ( store.getters.userTool === TS.UserTools.Stats )
                    _out() 
        }
    )

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
        background-color: transparent;
        height: 620px;
        width: 700px;
        left: 300px;
        padding: 40px;
        border-radius: 23px;
        box-shadow: 0 0 7px 1px #babbbb;
        position: absolute;
        display: none;
    }

</style>

// -- =====================================================================================
