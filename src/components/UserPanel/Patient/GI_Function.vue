<template>  
    <div id="part_x" class="ppp" ref="part_x">
        <div v-for="(G,i) in GI_F" :key="i" class="section">

            <div class="title"> {{ G.title }}</div>
            
            <div id="infoWrapper" >

                <div class="symptomsWrapper" :class="G.addMode ? 'block' : 'none'">
                    <div class="symptom option" v-for="(S,j) in G.symptoms.filter( s => !myNewPatient_GIF[G.title].includes(s) )" :key="j" @click="add(i,G.title,S)">{{S}}</div>
                    <div class="add" @click="back(i)"><span class="note">Back</span></div>
                </div>

                <div class="symptomsWrapper" :class="!G.addMode ? 'block' : 'none'">
                    <div 
                        @mouseenter="trash($event,'in')" @mouseleave="trash($event,'out')" 
                        class="symptom" v-for="(S,k) in G.symptoms.filter( s => myNewPatient_GIF[G.title].includes(s) )" :key="k">
                        {{S}}
                        <div ref="trashes" class="trash" @click="remove(G.title,S)"></div>
                    </div>
                </div>
                
                <div :class="'add ' + ( G.addMode ? 'none' : 'block' )" @click="list(i)">
                    <span class="note">Add New Symptom</span>
                </div>
            
            </div>
        
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as CTS                             from '@/types/common'
import * as Tools                           from '@/mixins/Tools';

const store: TS.Store = useStore()

// -- =====================================================================================

    const i = 5
    const part_x = ref<HTMLElement>( {} as HTMLElement )

    const myNewPatient_GIF: CTS.GI_F = JSON.parse( JSON.stringify( store.getters.newPatient.GI_F ) )

    let Bowel_Movement_Symptoms = [ "Constipation", "Diarrhea", "IBS-Constipation", "IBS-Diarrhea", "Loose Watery Stool", "Steatorrhea", "Hematochezia", "Melena", "etc" ]
    let Digestion_Symptoms = [ "Nausea", "Vomiting", "Diarrhea", "Constipation", "Heartburn", "Ulces", "Fiatulence", "Bloating", "Xerostomia", "Mucositis", "Dysphagia", "Mouth Sores", "Difficulty Chewing or Swallowing|Dental Caries", "Abdominal Distention"  ]
    let Appetite_Symptoms = [ "Good-Poor Appetite", "Loss of Appetite", "Increase Desire to Eat", "Poor Oral Intake", "Food Intolerance" , "Food Allergy" ]

    const GI_F = ref([
        { addMode: false, title: CTS.GI_Functions.BowelMovement, symptoms: Bowel_Movement_Symptoms },
        { addMode: false, title: CTS.GI_Functions.Digestion, symptoms: Digestion_Symptoms },
        { addMode: false, title: CTS.GI_Functions.Appetite, symptoms: Appetite_Symptoms }
    ]);

    const trash = async ( event: MouseEvent, mode: 'in' | 'out' ) => {
        const myTrash = ( event.target as HTMLElement ).getElementsByClassName( "trash" )[0];
        if ( myTrash ) myTrash.className = "trash trash_" + mode
        if ( mode === "out" ) {
            await new Promise( _ => setTimeout( _, 150 ) )
            myTrash.className = "trash"
        }
    }

// -- =====================================================================================

    const myForceUpdate = () => {
        // .. ForceUpdate
        GI_F.value[0].addMode = !GI_F.value[0].addMode
        GI_F.value[0].addMode = !GI_F.value[0].addMode
    }

    const list = ( target: number ) => GI_F.value[ target ].addMode = true
    const back = ( target: number ) => GI_F.value[ target ].addMode = false

    const add = ( g: number, G: CTS.GI_Functions, S: string ) => {
        myNewPatient_GIF[G].push(S)
        store.commit( TS.Mutates._np_GIF, myNewPatient_GIF )
        GI_F.value[ g ].addMode = false
    }

    const remove = ( G: CTS.GI_Functions, S: string ) => {
        myNewPatient_GIF[G] = myNewPatient_GIF[G].filter( x => x !== S )
        myForceUpdate()
    }

    const myReset = () => {
        myNewPatient_GIF.Appetite = []
        myNewPatient_GIF.Digestion = []
        myNewPatient_GIF[ CTS.GI_Functions.BowelMovement ] = []
        store.commit( TS.Mutates._np_GIF, myNewPatient_GIF )
        myForceUpdate()
    }

// -- =====================================================================================

    store.watch(
        getters => getters.ppp,
        ( nV, oV ) => Tools.pppAnime( oV, nV, i, part_x )
    )

    store.watch(
        getters => getters.Flag_resetForm,
        () => myReset()
    )
    
// -- =====================================================================================

</script>


// -- =====================================================================================

<style scoped>

    .section{
        height: 90%;
        width: 32%;
        margin: 0 .66%;
        position: relative;
        float: left;
    }

    .title{
        font-family: Oswald;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        padding: 10px 0;
        border-bottom: 1px solid gray;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .none{ display: none }

    .symptomsWrapper{
        height: auto;
        text-align: center;
        visibility: visible;
    }

    .symptom {
        background-color: #F0F0F0;
        height: 27px;
        width: 70%;
        border-radius: 7px;
        border: solid gray 1px;
        box-shadow: 0 0 1px 0px rgb(88 88 91);
        margin: 7px auto;
        font-family: Oswald;
        font-size: 17px;
        padding: 10px 20px;
        color: #081E2F;
        font-weight: bold;
        overflow: hidden;
    }
    .option{ cursor: pointer }
    .option:hover{ background-color: #f5e3c2 }

    .add{
        color: #007f9b;
        text-align: center;
        width: 70%;
        margin: 5px auto;
        font-family: fas;
        font-size: 30px;
        opacity: .7;
        cursor: pointer;
    }
    .add:hover{
        opacity: 1;
    }

    .note{
        color: #555555;
        font-family: Manrope;
        font-size: 14px;
        font-weight: bold;
        padding-left: 10px;
        vertical-align: 25%;
        position: relative;
    }

    #infoWrapper{
        text-align: center;
        height: 82%;
        width: 100%;
        overflow-y: auto;
        margin: 0;
    }
    
</style>

// -- =====================================================================================
