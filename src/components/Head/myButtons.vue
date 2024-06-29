<template>
    <div id="header_buttons_box">
        <div
            v-for="(opt,i) of options"
            :key=i
            class="optionBox no_select"
            @click="opt.fnc"
        >
            <div :class="'icon ' + opt.class">{{opt.icon}}</div>
            <div class="title">{{opt.title}}</div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as Tools                           from '@/mixins/Tools'

const store: TS.Store = useStore()

// -- =====================================================================================


    const lang = () => { console.log() }
    const speed = () => store.dispatch( TS.Acts.Flag_speed, !store.getters.Flag_speed )

    const logOut = () => {
        store.dispatch( TS.Acts.Flag_logged_in, false )
        if ( store.getters.ort === TS.Orts.UserPanel )
            store.dispatch( TS.Acts.OrtChange, TS.Orts.Home )
    }
    const logIn = async () => {
        if ( store.getters.ort !== TS.Orts.Home ) {
            store.dispatch( TS.Acts.OrtChange, TS.Orts.Home )
            await new Promise( _ => setTimeout( _, Tools.speed( true ) ) )
        }
        store.dispatch( TS.Acts.ProcessChange, TS.Processes.Login )
    }

// -- =====================================================================================

    const options =  ref ( [{ title: "", icon: "", class: "", fnc: ()=>{true} }] )

    options.value = [
        { title: "Language" , icon: "", class: "", fnc: lang },
        {
            title: store.getters.animationSpeed + " Animation", 
            icon: "", 
            class: store.getters.animationSpeed, 
            fnc: speed
        },
        { title: "Theme"    , icon: "", class: "", fnc: lang },
    ]

    const loggingRelated = [
        { title: "Log in",    icon: "", class: "", fnc: logIn },
        { title: "Exit"  ,    icon: "", class: "", fnc: logOut },
    ]

    options.value.push( loggingRelated[0] )

// -- =====================================================================================

    store.watch(
        getters => getters.Flag_logged_in,
        (nV: boolean) => {
            options.value.pop()
            options.value.push( loggingRelated[ nV ? 1 : 0] )
        }
    )

    store.watch(
        getters => getters.animationSpeed,
        () => {
            options.value[1].class = store.getters.animationSpeed
            options.value[1].title = store.getters.animationSpeed + " Animation"
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #header_buttons_box{
        height: 100px;
        width: 500px;
        margin-top: 35px;
    }

    .optionBox{
        text-align: center;
        color: #29363a;
        height: 80px;
        width: 105px;
        position: relative;
        float: left;
    }

    .icon{
        font-family: "fas-6";
        font-size: 31px;
        margin: 25px 20px 10px 20px;
        opacity: .7;
    }

    .icon.Normal { transform: scaleX(-1) }
    .icon.Fast   { transform: scaleX(1)  }

    .title{
        font-family: Manrope;
        font-weight: bold;
        font-size: 12px;
        opacity: 0.4;
    }

    .optionBox:hover{
        color: #169f01;
        cursor: pointer;
    }

    .optionBox:hover> .title{
        font-weight: bold;
        opacity: 1;
    }

</style>

// -- =====================================================================================
