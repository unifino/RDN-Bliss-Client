<template>
    <div id="F_100_Box" class="init" ref="f_100">
        <div id="F_100_Box_Wrapper">
            <div class="section" v-for="(d,i) of myData" :key="i">{{ d.title }}</div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import { ref }                              from 'vue'
import * as Tools                           from '@/mixins/Tools'
import myData                               from "./data.json";

const store: TS.Store = useStore()

// -- =====================================================================================

    const f_100 = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const _out = () => Tools.MainAnimation( f_100, "X010", "Out" );
    const _in = () => Tools.MainAnimation( f_100, "X010", "In", Tools.speed() );

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => {
            if( oV === TS.Orts.FAQs ) _out()
            if( nV === TS.Orts.FAQs ) _in()
        }
    )

    store.watch(
        getters => getters.Flag_logged_in,
        // .. Bye Bye
        ( nV, oV ) => { 
            if( oV && store.getters.ort === TS.Orts.FAQs ) { _out(); _in() } 
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #F_100_Box{
        background-color: #024250;
        height: 440px;
        width: 1000px;
        border-radius: 23px;
        box-shadow: 0 0 7px #676a74 ;
        margin: auto;
        margin: 55px 0 0 100px;
        position: absolute;
        overflow: hidden;
        padding-top: 6%;
        padding-bottom: 7%;
    }

    #F_100_Box.init{
        transform: translate(0px, 1000px) scale(0.2);
        opacity: 1;
    }

    #F_100_Box_Wrapper{
        overflow: auto;
        height: 80%;
        padding-bottom: 10%;
    }

    .section{
        font-family: PoiretOne;
        font-size: 25px;
        font-weight: bold;
        color: whitesmoke;
        height: auto;
        width: 65%;
        padding: 5px 20px;
        margin: 25px auto;
        cursor: pointer;
    }

    .section.selected{
        text-decoration: underline 2px orange;
    }

    .section:hover{
        color: orange;
    }

</style>

// -- =====================================================================================
