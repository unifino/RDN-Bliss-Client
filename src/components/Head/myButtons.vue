<template>
    <div id="header_buttons_box">
        <div
            v-for="(opt,i) of options"
            :key=i
            class="optionBox no_select"
            @click="opt.fnc"
        >
            <div class="icon" ref="test">{{opt.icon}}</div>
            <div class="title">{{opt.title}}</div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
const store = useStore();

// -- =====================================================================================

    const test = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const lang = () => {
        ( test as any ).value[1].className = "icon " +
            ( (test as any).value[1].className.includes( "test" ) ? "" : "test" )
    }
    const logOut = () => {
        store.dispatch( TS.Acts.Flag_logged_in, false )
        if ( store.getters.ort === TS.Orts.UserPanel )
            store.dispatch( TS.Acts.OrtChange, TS.Orts.Home )
    }
    const logIn = async () => {
        if ( store.getters.ort !== TS.Orts.Home ) {
            store.dispatch( TS.Acts.OrtChange, TS.Orts.Home )
            await new Promise( _ => setTimeout( _, 900+ 860+ 1500 ) )
        }
        store.dispatch( TS.Acts.ProcessChange, TS.Processes.Login )
    }

// -- =====================================================================================

    // eslint-disable-next-line
    const options =  ref ( [{ title: "", icon: "", fnc: ()=>{} }] )

    options.value = [
        { title: "Language" , icon: "", fnc: lang },
        { title: "Animation" , icon: "", fnc: lang },
        // { title: "Theme", icon: "", theme },
    ]

    const loggingRelated = [
        { title: "Log in", icon: "", fnc: logIn },
        { title: "Exit", icon: "", fnc: logOut },
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
        width: 100px;
        position: relative;
        float: left;
    }

    .icon{
        font-family: "fas-6";
        font-size: 31px;
        margin: 25px 20px 10px 20px;
        opacity: .7;
    }

    .test {
        transform: scaleX(-1)
    }

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
