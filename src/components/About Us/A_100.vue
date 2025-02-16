<template>
    <div id="A_100_Box" class="init" ref="a_100">
        <div id="sections_wrapper">
            <div class="section selected">Institute</div>
            <div class="section">Our Team</div>
            <div class="section">Certified Coach</div>
            <div class="section">Careers</div>
            <div class="section">Contact Us</div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import { ref }                              from 'vue'
import * as Tools                           from '@/mixins/Tools'

const store: TS.Store = useStore()

// -- =====================================================================================

    const a_100 = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const _out = () => Tools.MainAnimation( a_100, "X100", "Out" )
    const _in = () => Tools.MainAnimation( a_100, "X100", "In", Tools.speed() )

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => {
            if( oV === TS.Orts.AboutUs ) _out()
            if( nV === TS.Orts.AboutUs ) _in()
        }
    )

    store.watch(
        getters => getters.Flag_logged_in,
        // .. Bye Bye
        ( nV, oV ) => { 
            if( oV && store.getters.ort === TS.Orts.AboutUs ) { _out(); _in() } 
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #A_100_Box{
        background-color: #151f29;
        left: 0;
        right: 0;
        height: 650px;
        width: 400px;
        border-radius: 23px;
        box-shadow: 0 0 7px #676a74 ;
        margin: auto;
        margin-top: 60px;
        position: absolute;
        overflow: hidden;
    }
    
    #sections_wrapper{
        top: 50%;
        padding: 50px 0;
        position: relative;
        transform: translateY(-50%);
    }

    .init{
        transform: translate(-700px, 1000px) rotate(-70deg) scale(0.2);
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
