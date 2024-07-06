<template>
    <div id="A_010_Box" class="init" ref="a_010">
        <div id="newsBox">
            Success Stories<br><br>
            We've helped hundreds of companies around the world achieve remarkable digital sales and marketing results. Below, we invite you to learn about their stories of incredible business growth and success, in their words.
            Ready to talk about how you can achieve similar results?
            <br><br>
            Ryan DeLettre, Davy Clay, and Josh Smith founded Dental ClaimSupport to solve an all too common problem: Dental offices spend too much time on insurance and paperwork, pulling resources away from patient care.  They knew they had a great product and a winning business plan. They just needed to figure out how they could scale.
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

    const a_010 = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const _out = () => Tools.MainAnimation( a_010, "X010", "Out" )
    const _in = () => Tools.MainAnimation( a_010, "X010", "In", Tools.speed() )

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

    #A_010_Box{
        background-color: #fbfbfb48;
        border-radius: 23px;
        height: 700px;
        width: 790px;
        left: 0;
        margin: 45px 0;
        position: absolute;
        overflow: hidden;
    }

    .init{
        transform: translate(0px, 1000px) scale(0.2);
        opacity: 0;
    }

    #newsBox{
        width: 77%;
        margin: 0 5%;
        height: 80%;
        padding: 10% 0;
        font-family: Oswald;
        font-size: 23px;
        white-space: pre-line;
    }

</style>

// -- =====================================================================================
