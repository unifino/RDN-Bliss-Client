<template>
    <div id="my_profile_box" class="init" ref="profile">
        <div id="infoBox">
        </div>
        <div class="buttonsWrapper">
            <div class="button" v-for="(b,i) of buttons" :key="i">{{ b.title }}</div>
        </div>
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

    const profile = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const buttons = [ 
        { title: "General" },
        { title: "Background" },
        { title: "Contact" },
        { title: "Security & Password" },
        { title: "Misc." },
    ]

// -- =====================================================================================

    const _out = () => Tools.userAnime( profile, "Out" )
    const _in = ( skip = false ) => Tools.userAnime( profile, "In", skip )

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => { 
            if ( oV === TS.Orts.UserPanel ) 
                if ( store.getters.userTool === TS.UserTools.Profile )
                    _out() 
        }
    )

    store.watch(
        getters => getters.userTool,
        ( nV, oV ) => {
            if ( nV !== oV ) {
                if ( nV === TS.UserTools.Profile ) _in( oV === TS.UserTools.null )

                if ( oV === TS.UserTools.Profile ) _out()
            }
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #my_profile_box{
        background-color: transparent;
        height: 620px;
        width: 750px;
        top: 50%;
        left: 300px;
        position: absolute;
    }

    .init{
        transform: translate(-10%,-53%) perspective(900px) rotateY(44deg) scale(.8); opacity: 0
    }
    
    #infoBox{
        background-color: #e9e8e6;
        height: 100%;
        width: 450px;
        box-shadow: 0 0 7px 1px #babbbb;
        border-radius: 23px;
        position: relative;
        float: left;
    }

</style>

// -- =====================================================================================
