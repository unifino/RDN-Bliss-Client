<template>  
    <div id="part_x" class="ppp" ref="part_x">
        <div 
            v-for="(x,i) in Genders"
            :key="i" 
            @click="selectGender(x.type)"
            :class="x.type.toLowerCase() + ' gender ' + ( x.selected ? '' : 'grayscale')" 
        />
        <div id="infoWrapper">
            <input ref="firstname" type="text" placeholder="First Name" />
            <input ref="lastname" type="text" placeholder="Last Name" />
            <input ref="birthday" type="text" placeholder="Birth Day" />
            <input ref="ms" type="text" placeholder="Martial Status" />
            <input ref="education" type="text" placeholder="Educational Level" />
            <input ref="occupation" type="text" placeholder="Occupation" />
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as CTS                             from "@/types/common";
import * as Tools                           from '@/mixins/Tools';

const store: TS.Store = useStore()

// -- =====================================================================================

    const i = 0
    const part_x = ref<HTMLElement>( {} as HTMLElement )

    const firstname = ref<HTMLInputElement>( {} as HTMLInputElement )
    const lastname = ref<HTMLInputElement>( {} as HTMLInputElement )
    const birthday = ref<HTMLElement>( {} as HTMLElement )
    const ms = ref<HTMLElement>( {} as HTMLElement )
    const education = ref<HTMLElement>( {} as HTMLElement )
    const occupation = ref<HTMLElement>( {} as HTMLElement )
    
    // const newPatient = store.getters.newPatient
    
    const Genders = ref ( [
        { type: CTS.Gender.male, selected: false },
        { type: CTS.Gender.female, selected: false }
    ] )

// -- =====================================================================================

    const myData = () => {
        store.commit( TS.Mutates._np_FirstName, firstname.value.value )
        store.commit( TS.Mutates._np_LastName, lastname.value.value )
        
    }

    const myReset = () => {
        firstname.value.value = ""
        lastname.value.value = ""

        myData()
    }


// -- =====================================================================================

    const selectGender = ( gender: CTS.Gender ) => {
        Genders.value.forEach( x => x.selected = false )
        Genders.value.filter( x => x.type === gender )[0].selected = true;
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

    store.watch(
        getters => getters.Flag_savePatient,
        ( nV, oV ) => {
            console.log(nV,oV);
            
            myData()}
    )

// -- =====================================================================================

</script>


// -- =====================================================================================

<style scoped>
    
    .gender{
        width: 120px;
        height: 120px;
        background-size: 94% auto;
        background-repeat: no-repeat;
        background-position-x: right;
        float: left;
        margin: 80px 0 0 35px;
        cursor: pointer;
        border-bottom-width: 3px;
        border-bottom-style: solid;

    }
    .male{ background-image: url('@/assets/Pics/Avatars/ai-generated-1.png') }
    .female{ background-image: url('@/assets/Pics/Avatars/ai-generated-2.png') }
    .male { border-bottom-color: #67c3dcd5 }
    .female { border-bottom-color: #e77fc1d5 }
    .grayscale{
        border-bottom-width: 0;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }
    .gender:hover{
        -webkit-filter: none;
        filter: none;
    }

    #infoWrapper{
        height: auto;
        width: 250px;
        margin-top: 90px;
        margin-right: 90px;
        position: relative;
        float: right;
    }
    
</style>

// -- =====================================================================================
