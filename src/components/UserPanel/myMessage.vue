<template>
    <div id="my_message_box" class="init" ref="message">
        <div id="messagesBox">
            <textarea />
        </div>
        <div id="buttonsWrapper" class="no_select">
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

    const message = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const buttons = [ 
        { title: "New Messages" },
        { title: "All Messages" },
        { title: "Contact List" },
        { title: "Archive" },
    ]

// -- =====================================================================================

    const _out = () => Tools.userAnime( message, "Out" )
    const _in = ( skip = false ) => Tools.userAnime( message, "In", skip )

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => { 
            if ( oV === TS.Orts.UserPanel ) 
                if ( store.getters.userTool === TS.UserTools.Messages )
                    _out() 
        }
    )

    store.watch(
        getters => getters.userTool,
        ( nV, oV ) => {
            if ( nV !== oV ) {
                if ( nV === TS.UserTools.Messages ) _in( oV === TS.UserTools.null )

                if ( oV === TS.UserTools.Messages ) _out()
            }
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #my_message_box{
        background-color: transparent;
        height: 620px;
        width: 700px;
        top: 50%;
        left: 300px;
        position: absolute;
    }

    .init{
        transform: translate(-10%,-53%) perspective(900px) rotateY(44deg) scale(.8); opacity: 0;
    }

    #messagesBox{
        background-color: #e9e8e6;
        height: 100%;
        width: 450px;
        box-shadow: 0 0 7px 1px #babbbb;
        border-radius: 23px;
        position: relative;
        float: left;
    }

    #messagesBox textarea{
        bottom: 30px;
        min-height: 50px;
        min-width: 90%;
        max-width: 90%;
        margin: auto;
        left: 0;
        right: 0;
        border: none;
        border-radius: 9px;
        position: absolute;
    }

    #buttonsWrapper{
        width: 200px;
        position: relative;
        float: left;
        border-left: #369797 5px;
        border-radius: 5px;
        border-left-style: solid;
        margin-left: 40px;
        margin-top: 50px;;
    }
    .button{
        color: #144444;
        font-family: Manrope;
        font-weight: 600;
        margin: 12px 15px;
        cursor: pointer;
    }
    .button:hover{ color: #08cee0; }

</style>

// -- =====================================================================================
