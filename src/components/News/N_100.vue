<template>
    <div id="N_100_Box" class="init" ref="n_100">
        <div class="column" v-for="(x,y) of [0,1,2]" :key="y">
            <div 
                v-for="(n,i) of myData.filter( (t,i) => i%3 === x )"
                :key="i" 
                :class="'newsBox ' + n.boxClass"
            >
                <div><img :src="n.img" :class="'img ' + n.imgClass.o" /></div>
                <div class="title" >{{ n.title }}</div>
            </div>
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

    const n_100 = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const _out = () => Tools.MainAnimation( n_100, "X010", "Out" );
    const _in = () => Tools.MainAnimation( n_100, "X010", "In", Tools.speed() );

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => {
            if( oV === TS.Orts.News ) _out()
            if( nV === TS.Orts.News ) _in()
        }
    )

    store.watch(
        getters => getters.Flag_logged_in,
        // .. Bye Bye
        ( nV, oV ) => { 
            if( oV && store.getters.ort === TS.Orts.News ) { _out(); _in() } 
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #N_100_Box.init{
        transform: translate(0px, 1000px) scale(0.2);
        opacity: 1;
    }

    .column {
        width: 20vw;
        height: auto;
        position: relative;
        margin: .5vw;
        padding-bottom: 120px;
        float: left;
    }

    .newsBox{
        background-color: #074f1a;
        width: 20vw;
        position: relative;
        margin-bottom: .9vw;
        border-radius: 16px;
        overflow: hidden;
    }

    .small { height: 12vw }
    .medium{ height: 16vw }
    .large { height: 30vw }

    .title{
        bottom: 0;
        background-color: #074f1a;
        color: #d0ddeb;
        width: 90%;
        padding: 5% 5% 8% 5%;
        position: absolute;
        font-size: 23px;
        font-weight: bold;
        font-family: Thasadith;
    }

    .img{
        position: absolute
    }

    .H{ height: 80%; width: auto }
    .W{ height: auto; width: 100% }


</style>

// -- =====================================================================================
