<template>
    <div id="H_100_Box" ref="h_100">
<!-- ================================================================================== -->
        <div id="title" />
<!-- ================================================================================== -->
        <div id="logBox">
<!-- ================================================================================== -->
            <div
                v-for="(x,i) of options"
                :key=i
                :class="'section no_select ' + ( x.selected? 'selected' : '' )"
                @click="prepareToLogin(i)"
            >
                <div class="icon"></div>
                <div class="txt">{{ x.text }}</div>
            </div>
<!-- ================================================================================== -->
            <div class="section no_select mini" @click="headToRegistration">
                <div class="icon mini"></div>
                <div class="txt">Create a new Account</div>
            </div>
<!-- ================================================================================== -->
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import { ref }                              from 'vue'
import * as Tools                           from '@/mixins/Tools'

const store = useStore();

// -- =====================================================================================

    const h_100 = ref<HTMLElement>( {} as HTMLElement )
    const options = ref ( [ { text: "", selected: false, icon: "" } ] )

    options.value = [
        { text: "I'm a Dietitian", selected: false,  icon: "", },
        { text: "I'm a Patient", selected: false, icon: "", },
    ]

// -- =====================================================================================

    const headToRegistration = () => {
        store.dispatch( TS.Acts.ProcessChange, TS.Processes.Registering )
    }

// -- =====================================================================================

    const prepareToLogin = ( idx: number ) => {
        store.dispatch( TS.Acts.ProcessChange, TS.Processes.Login )
        options.value.forEach( (x,i) => x.selected = i === idx )
    }

// -- =====================================================================================

    const _out = () => Tools.MainAnimation( h_100, "X100", "Out" )
    const _in = () => Tools.MainAnimation( h_100, "X100", "In", 900+860 )
    const reset = () => options.value.forEach( x => x.selected = false )

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => {
            if( oV === TS.Orts.Home ) _out()
            if( nV === TS.Orts.Home ) _in()
        }
    )

    store.watch(
        getters => getters.process,
        ( nV, oV ) => {
            if( nV === TS.Processes.Registering ) _out()
        }
    )

    store.watch(
        getters => getters.process,
        ( nV, oV ) => {
            if ( oV === TS.Processes.Login ) reset()
            // .. Exit back to Home from Registering
            if
            ( 
                nV === TS.Processes.Reading && 
                store.getters.ort === TS.Orts.Home && 
                oV !== TS.Processes.Login 
            )
                _in()
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #H_100_Box{
        background-color: #393a3b;
        height: 550px;
        width: 350px;
        border-radius: 23px;
        box-shadow: 0 0 7px #676a74 ;
        margin: 120px 0 0 100px;
        position: absolute;
        overflow: hidden;
    }

    #title{
        font-size: 25px;
        text-align: center;
        font-weight: bold;
        font-family: PoiretOne;
        background-color: #0c4936;
        color: whitesmoke;
        height: 150px;
        line-height: 80px;
        background-image: url('@/assets/Pics/login_banner.jpg');
        background-size: 100% auto;
    }

    #logBox{
        padding-top: 10px;
    }

    .section{
        height: 63px;
        width: 230px;
        margin: 44px auto;
        color: #c6c3c0;
        display: flex;
    }
    .section:hover{
        color: #f1a116;
        cursor: pointer;
    }

    .section> div{
        align-self: flex-end;
    }

    .icon{
        font-family: fas-6;
        font-size: 60px;
        padding-left: 7px;
        margin-right: 20px;
    }

    .txt{
        font-family: PoiretOne;
        font-size: 20px;
        font-weight: 900;
    }

    .mini{
        padding-left: 0;
        font-size: 44px;
    }
    .mini .txt{
        font-size: 15px;
    }

    .selected, .selected:hover{
        color: #5AA2AF;
    }

</style>

// -- =====================================================================================
