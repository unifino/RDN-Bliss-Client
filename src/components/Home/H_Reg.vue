<template>
    <div id="H_Reg_Box" class="init" ref="HRGBox">
<!-- ================================================================================== -->
        <div id="p1" class="part" ref="part_1">
            <div id="sectionWrapper">
                <div
                    v-for="(x,i) of userMode"
                    :key=i
                    :class="'section no_select ' + (x.selected ? 'selected' : '')"
                    @click="selectUserMode(i)"
                >
                    <div class="check">{{ x.selected?"":"" }}</div>
                    <div class="icon">{{ x.icon }}</div>
                    <div class="txt">{{ x.text }}</div>
                </div>
            </div>
        </div>
<!-- ================================================================================== -->
        <div id="p2" class="part">
            <div id="inputWrapper">
                <input ref="e_mail" type="text" placeholder="e-mail" />
                <input ref="usrnme" type="text" placeholder="username" />
                <input ref="passwd" type="password" placeholder="password" />
            </div>
        </div>
<!-- ================================================================================== -->
        <div id="p3" class="part"></div>
<!-- ================================================================================== -->
        <div id="p4" class="part">
            <div
                id="regButton"
                class="no_select"
                @click="submit()"
            >
                Register
            </div>
        </div>
<!-- ================================================================================== -->
        <div id="p5" class="part">

            <div id="optional">⬇ optional ⬇</div>

            <div class="subpart">
                <input ref="" type="text" placeholder="First Name" />
                <input ref="" type="text" placeholder="Last Name" />
            </div>
            <div class="subpart">
                <input ref="" type="text" placeholder="Birth Day" />
                <input ref="" type="text" placeholder="Gender" />
            </div>

        </div>
<!-- ================================================================================== -->
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

    const HRGBox = ref<HTMLElement>( {} as HTMLElement )
    const part_1 = ref<HTMLElement>( {} as HTMLElement )
    const e_mail = ref<HTMLInputElement>( {} as HTMLInputElement )
    const usrnme = ref<HTMLInputElement>( {} as HTMLInputElement )
    const passwd = ref<HTMLInputElement>( {} as HTMLInputElement )

// -- =====================================================================================

    const userMode = ref ( [
        { icon: "", text: "I'm a Dietitian", selected: false },
        { icon: "", text: "I'm a Patient", selected: false }
    ] )

// -- =====================================================================================

    const selectUserMode = (idx: number) => {
        userMode.value.forEach( (x,i) => x.selected = i === idx );
    }

// -- =====================================================================================

    const regSlider = async function ( phase: "In"|"Out" ) {
        if ( phase === "In" ) await new Promise( _ => setTimeout( _, Tools.speed()+ 500 ) )
        HRGBox.value.className = "XReg_fall_" + phase
    }

// -- =====================================================================================

    const submit = () => {

        // ..  check Form
        let parts = []

        if ( !userMode.value[0].selected && !userMode.value[1].selected )
            parts.push( part_1 )

        if (
              !e_mail.value.value
            || e_mail.value.value.indexOf( "@" ) < 1
            || e_mail.value.value.indexOf( "." ) < 3
        )
            parts.push( e_mail )

        if ( usrnme.value.value.length < 4 ) parts.push( usrnme )

        if ( passwd.value.value.length < 4 ) parts.push( passwd )

        // .. apply alert animation
        parts.forEach( async (x,i) => {
            await new Promise( _ => setTimeout( _, i*100 ) )
            x.value.className += " alert"
            await new Promise( _ => setTimeout( _, 700 ) )
            x.value.className = x.value.className.replace( /alert/g , '' )
        } )

        if ( !parts.length ) registering()

    }

// -- =====================================================================================

    const registering = async () => {
        store.dispatch( TS.Acts.ProcessChange, TS.Processes.Reading )
        store.dispatch( TS.Acts.OrtChange, TS.Orts.Home )
        await new Promise( _ => setTimeout( _, 10 ) )
        HRGBox.value.className = "send";
    }

// -- =====================================================================================

    store.watch(
        getters => getters.process,
        ( nV, oV ) => {
            // .. Enter -> register mode
            if ( nV === TS.Processes.Registering ) regSlider( "In" )
            // .. Exit <- Register Mode
            else if ( oV === TS.Processes.Registering ) regSlider( "Out" )
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #H_Reg_Box {
        height: 600px;
        width: 1000px;
        margin-top: 98px;
        margin-left: 140px;
        background-color: #F0F0F0;
        border: solid 2px rgb(161 161 161);
        box-shadow: 0 0 10px 1px rgb(130 157 176);
        border-radius: 20px;
        display: grid;
        grid-template-columns: 300px auto auto;
        grid-template-rows: 300px 70px auto ;
        overflow: hidden;
    }

    #H_Reg_Box.init{ transform: scale(.4); opacity: 0; visibility: hidden }

    .XReg_fall_In {
        animation           : XReg_fall_In .7s;
        animation-fill-mode : both;
    }
    @keyframes XReg_fall_In {
        0%  { transform: scale(.4);  opacity: 0;  visibility: hidden  }
        80% { transform: scale(1.1); opacity: .9; visibility: visible }
        100%{ transform: scale(1);   opacity: 1;  visibility: visible }
    }

    .XReg_fall_Out {
        animation           : XReg_fall_Out .6s;
        animation-fill-mode : both;
    }
    @keyframes XReg_fall_Out {
        0%  { transform: scale(1);   opacity: 1;  visibility: visible }
        40% { transform: scale(1.1); opacity: .9; visibility: visible }
        100%{ transform: scale(.5);   opacity: 0; visibility: hidden  }
    }

    .part{
        border-radius: 3px;
    }

    #p1{
        grid-row-start: 1;
        grid-row-end: 3;
        border-right: 2px dashed darkslategray;
        border-left: 1px solid  rgb(118 118 118);
        border-top: 1px solid  rgb(118 118 118);
        background-color: #73A7CB;
    }

    #p2{
        grid-row-start: 1;
        grid-row-end: 3;
        background-image: url( "@/assets/Pics/RDN.png" );
        background-size: auto 114px;
    }

    #p3{
        grid-row-start: 1;
        grid-row-end: 2;
    }

    #p4{
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 3;
        grid-column-end: 4;
    }

    #p5{
        grid-row-start: 3;
        grid-column-start: 1;
        grid-column-end: 4;
        border-top: 2px dashed darkslategray;
    }

    #sectionWrapper{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        margin: -40px auto;
    }

    .section{
        height: 60px;
        width: 230px;
        margin: 30px auto 40px auto;
        color: #103855;
        color: whitesmoke;
        display: flex;
    }

    .section:hover> .check, .section:hover> .txt{
        color: #444445;
        cursor: pointer;
    }

    .section> div{
        align-self: flex-end;
    }

    .icon{
        font-family: fas-6;
        font-size: 50px;
        padding-left: 5px;
        margin-right: 7px;
    }

    .check{
        font-family: fas-6;
        font-size: 25px;
        padding-right: 5px;
        position: relative;
    }

    .txt{
        font-family: PoiretOne;
        font-size: 22px;
        padding-left: 10px;
        font-weight: bold;
    }

    .selected> .check, .selected> .txt{
        color:#0B2E49
    }

    #inputWrapper{
        height: auto;
        width: 250px;
        top: 40px;
        right: 50px;
        position: absolute;
    }

    input{
        height: 25px;
        width: 210px;
        border-radius: 7px;
        border: solid gray 1px;
        box-shadow: 0 0 1px 0px rgb(88 88 91);
        margin: 10px 0;
        font-family: Oswald;
        font-size: 17px;
        padding: 10px 20px;
        color: #081E2F;
        font-weight: bold;
        background-color: #F0F0F0;
    }

    #regButton{
        right: 52px;
        width: 140px;
        height: 40px;
        font-size: 20px;
        line-height: 40px;
        margin-top: -30px;
        text-align: center;
        font-family: PoiretOne;
        font-weight: bold;
        background-color: #214663;
        color: #F0F0F0;
        border-radius: 7px;
        position: absolute;
        cursor: pointer;
    }

    #regButton:hover{
        background-color: #DDA516;
        color: #131313;
    }

    #p1.alert {
        animation           : alert_part_1 .7s;
        animation-fill-mode : both;
    }
    @keyframes alert_part_1 {
        0%  { background-color: #73A7CB; transform: scale(1)    }
        50% { background-color: #CC0808; transform: scale(1.07) }
        100%{ background-color: #73A7CB; transform: scale(1)    }
    }

    .alert {
        animation           : alert .7s;
        animation-fill-mode : both;
    }
    @keyframes alert {
        0%{ transform: scale(1) }
        50%{ background-color: #FB1111; color: black; transform: scale(1.07) }
    }

    .subpart{
        width: 30%;
        float: left;
        text-align: right;
        height: 170px;
        transform: translateY(25%);
    }

    #optional{
        float: right;
        background-color: #F0F0F0;
        font-family: Manrope;
        font-size: 21px;
        padding: 0 10px;
        color: green;
        height: 60px;
        line-height: 60px;
        margin: -32px 60px 0 0;
    }

    .send {
        animation           : send .8s;
        animation-fill-mode : both;
    }

    @keyframes send {
        100%{
            transform: translate(0%,-25%) rotate(540deg) scale(.2);
            border-width: 10px;
            border-radius: 100px;
            opacity: 0;
        }
    }

</style>

// -- =====================================================================================
