<template>
    <div id="wholeWrapper" ref="patientsBox">

        <MyPatientsList />

        <div class="buttonsWrapper">
            <div class="button" v-for="(b,i) of buttons" :key="i" @click="b.fnc">{{ b.title }}</div>
        </div>  
 
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as Tools                           from '@/mixins/Tools';
import MyPatientsList                       from '@/components/UserPanel/Patient/paitentsList.vue'

const store: TS.Store = useStore()

// -- =====================================================================================

    const patientsBox = ref<HTMLElement>( {} as HTMLElement )
    
    const buttons = [ 
        { title: "Create New Patient", fnc: () => store.dispatch( TS.Acts.userTool, TS.UserTools.CreateNewPatient ) },
    ]

// -- =====================================================================================

    const _out = () => Tools.userAnime( patientsBox, "Out" )
    const _in = ( skip = false ) => Tools.userAnime( patientsBox, "In", skip )

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => { 
            if ( oV === TS.Orts.UserPanel ) 
                if ( store.getters.userTool === TS.UserTools.Patients )
                    _out() 
        }
    )

    store.watch(
        getters => getters.userTool,
        ( nV, oV ) => {
            if ( nV !== oV ) {
                if ( nV === TS.UserTools.Patients ) _in( oV === TS.UserTools.null )
                if ( oV === TS.UserTools.Patients ) _out()
            }
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #wholeWrapper{
        left: 300px;
        position: absolute;
        display: none;
    }
    
</style>

// -- =====================================================================================
