<template>  
    <div id="wholeWrapper" class="init" ref="patientsBox">

        <div id="mainWrapper">
<!--                                                                                    -->
            <Part_1 />
            <Part_2 />
            <Part_3 />
            <Part_4 />
            <Part_5 />
            <Part_6 />
            <Part_7 />
<!--                                                                                    -->
            <div id="navigation_box">
                <div class="nav no_select" style="float: left;"  @click="slider('P')">Previous</div>
                <div id="titleBox">
                    <div 
                        v-for="(x,i) in Titles"
                        :key="i"
                        :class="'title' + ( x.focus? ' expanded' : '' )"
                    >
                            {{ x.focus ? x.title : "" }}
                    </div>
                </div>
                <div class="nav no_select" style="float: right;" @click="slider('N')">Next</div>
            </div>
        </div>
<!--                                                                                    -->

        <div class="buttonsWrapper no_select">
            <div
                class="button"
                v-for="(b,i) of buttons"
                :key="i"
                @click="b.fnc"
                :style="b.marin ? 'margin-top:50px':''"
            >
                {{ b.title }}
            </div>
        </div>  
 
    </div>
</template>
<!--                                                                                    -->

// -- =====================================================================================

<script setup lang="ts">

import { ref, onMounted }                   from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as CTS                             from "@/types/common";
import * as Tools                           from '@/mixins/Tools';
import Part_1                               from '@/components/UserPanel/Patient/Part_1.vue'
import Part_2                               from '@/components/UserPanel/Patient/Part_2.vue'
import Part_3                               from '@/components/UserPanel/Patient/Part_3.vue'
import Part_4                               from '@/components/UserPanel/Patient/Part_4.vue'
import Part_5                               from '@/components/UserPanel/Patient/Part_5.vue'
import Part_6                               from '@/components/UserPanel/Patient/Part_6.vue'
import Part_7                               from '@/components/UserPanel/Patient/Part_7.vue'
const store: TS.Store = useStore()

// -- =====================================================================================

    const patientsBox = ref<HTMLElement>( {} as HTMLElement )
    
    const buttons = [ 
        { title: "Save New Patient", fnc: () => store.dispatch( TS.Acts.userTool, TS.UserTools.Patients ) },
        { title: "Reset Form", fnc: () => resetForm() },
        { title: "Back to Previous Menu", fnc: () => store.dispatch( TS.Acts.userTool, TS.UserTools.Patients ), marin: true },
    ]

    const Titles = ref ( [
        { focus: false, title: "General Information" },
        { focus: false, title: "Nutritional Assessment" },
        { focus: false, title: "Biochemistry" },
        { focus: false, title: "Medications | Supplements" },
        { focus: false, title: "Anthropometry" },
        { focus: false, title: "GI Function" },
        { focus: false, title: "Diet History" },
        // { focus: false, target: part_9 , title: "Food Diary" },
        // { focus: false, target: part_10 , title: "Planning" },
        // { focus: false, target: part_11 , title: "Diet Plan" },
        // { focus: false, target: part_12 , title: "Recommendations" },
        // { focus: false, target: part_13 , title: "Follow-up" },
    ] )

// -- =====================================================================================

    onMounted ( async() => { for( let i in Titles.value ) slider("P") } )

// -- =====================================================================================

    const _out = () => Tools.userAnime( patientsBox, "Out" )
    const _in = ( skip = false ) => Tools.userAnime( patientsBox, "In", skip )

// -- =====================================================================================

    const slider = ( act: "N" | "P" ) => {

        const cfi = store.getters.ppp.i
        const nfi = ( cfi + ( act === "N" ? 1 : -1 ) + Titles.value.length ) % Titles.value.length
        Titles.value[ cfi ].focus = false
        Titles.value[ nfi ].focus = true
        const mov = act === "N" ? "R" : "L" 
        store.commit( TS.Mutates.ppp, { i: nfi, m: mov } )

    }

// -- =====================================================================================

    const resetForm = async () => {
        store.dispatch( TS.Acts.userTool, TS.UserTools.null )
        await new Promise( _ => setTimeout( _, 150 ) )
        store.dispatch( TS.Acts.userTool, TS.UserTools.CreateNewPatient )
    }

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => { 
            if ( oV === TS.Orts.UserPanel ) 
                if ( store.getters.userTool === TS.UserTools.CreateNewPatient )
                    _out() 
        }
    )

    store.watch(
        getters => getters.userTool,
        ( nV, oV ) => {
            if ( nV !== oV ) {
                if ( nV === TS.UserTools.CreateNewPatient ) _in( oV === TS.UserTools.null )
                if ( oV === TS.UserTools.CreateNewPatient ) _out()
            }
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #wholeWrapper{
        top: 50%;
        left: 300px;
        position: absolute;
    }

    #mainWrapper{
        background-color: #e6e3e3;
        height: 620px;
        width: 845px;
        border: solid 40px #e6e3e3;
        border-width: 40px 20px 20px 20px;
        border-top-width: 10px;
        border-radius: 23px;
        box-shadow: 0 0 7px 1px #babbbb;
        position: relative;
        float: left;
        overflow: hidden;
    }

    .init{
        transform: translate(-10%,-53%) perspective(900px) rotateY(44deg) scale(.8); opacity: 0;
    }

    #part_3,#part_4,#part_5,#part_6,#part_7,#part_8 { width: 100%; height: 100%; position: absolute; }

    #infoWrapper{
        height: auto;
        width: 250px;
        margin-top: 90px;
        margin-right: 90px;
        position: relative;
        float: right;
    }

    input{
        box-shadow: none;
        border: none;
    }

    .name{
        color: white;
        font-family: Oswald;
        font-weight: bold;
        font-size: 20px;
        right: 20px;
        position: absolute;
    }

    #navigation_box{
        height: 60px;
        width: 90%;
        left: 5%;
        position: absolute;
        bottom: -20px;
        margin: 14px 0;
        z-index: 5;
    }

    .nav{
        background-color: #d3d5d8;
        color: #2f4e6a;
        font-family: Manrope  ;
        font-size: 20px;
        text-align: center;
        height: auto;
        width: 130px;
        padding: 8px 0;
        border-radius: 7px;
        cursor: pointer;
    }
    .nav:hover{
        color: #4c7d04;
        box-shadow: 0 1px 0px 1px #7bbf16;   
    }
    #titleBox{
        width: 310px;
        left: 0;
        right: 0;
        margin: auto;
        position: absolute;
    }
    .title{
        font-family: Manrope;
        color: #2f4e6a;
        text-align: center;
        width: auto;
        padding: 1px 4px 9px 4px;
        border-bottom: 3px solid #dca305;   
        margin: 2px;
        position: relative;
        float: left;
        height: 20px;
    }
    .expanded{
        border-bottom: 3px solid #7bbf16;   
        width: 220px;
    }

</style>

// -- =====================================================================================
