<template>
    <div ref="part_x" id="part_x" @click="back">
        <div id="mainWrapper">
            
            <div class="item1">
                <div 
                    v-for="(x,i) in Genders"
                    :key="i" 
                    @click="setGender(x.type)"
                    :class="x.type.toLowerCase() + ' gender ' + ( x.selected ? '' : 'grayscale')" 
                />
            </div>

            <div class="item3">
                
                <div id="hw_Wrapper">
                    <div class="hw_Field">
                        <div class="hw_title">Height</div>
                        <input class="hw_input" ref="height" type="text" />
                        <div class="hw_unit">cm</div>
                    </div>
                    <div class="hw_Field">
                        <div class="hw_title">Weight</div>
                        <input class="hw_input" ref="weight" type="text" />
                        <div class="hw_unit">kg</div>
                    </div>
                </div>

                <select v-model="selectedAge" :class="'date' + (selectedAge === 'Group Age' ? '' : ' set')" >
                    <option 
                        v-for="(a,i) in ageGroups" :key="i"
                        :value="a"
                        :selected="a === 'Group Age' ? true : false"
                        :disabled="a === 'Group Age' ? true : false"
                    >
                        {{ a }}
                    </option>
                </select>

            </div>
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

    const ipx = 1
    const part_x = ref<HTMLElement>( {} as HTMLElement )

    const Genders = ref ( [
        { type: CTS.Gender.male, selected: false },
        { type: CTS.Gender.female, selected: false }
    ] )
    const ageGroups = ref<string[]>(["Group Age","Infant","2-7","8-18","18-65","over65"])
    const selectedAge = ref("Group Age")

// -- =====================================================================================

    let selectedGender = Genders.value.find( x => x.selected )

    const setGender = ( gender?: CTS.Gender ) => {

        if ( gender ) {
            for ( let i=0; i<Genders.value.length; i++ ) Genders.value[i].selected = false
            Genders.value.filter( x => x.type === gender )[0].selected = true
        }

        const picked = Genders.value.filter( x => x.selected )
        if ( picked.length ) {
            selectedGender = picked[0]
            store.commit( TS.Mutates._np_Gender, selectedGender.type )
        }

    }

// -- =====================================================================================

    const back = () => {
        const gpx = ipx -1
        // store.commit( TS.Mutates.pageSlide, { origin: TS.UserTools.CreateNewPlan, gpx, move: "L" } )
    }

// -- =====================================================================================

    store.watch(
        getters => getters.userTool,
        () => part_x.value.classList.add( "page_init" )
    )

    store.watch(
        getters => getters.pageSlide,
        ( nV, oV ) => Tools.ifSlider( TS.UserTools.CreateNewPlan, oV, nV, ipx, part_x )
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #mainWrapper{
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1.3fr; 
        grid-template-rows: 1fr 1fr;
        height: 100%;
    }

    #mainWrapper > * {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    #mainWrapper > .item1 {
        flex-direction: row;
        grid-column: 1;
        grid-row: 1; 
    }

    .item2 {
        grid-column: 1;
        grid-row: 2;   
    }

    .item3 {
        grid-column: 2;
        grid-row: 1;
        float: right;
    }
  
    .gender{
        width: 120px;
        height: 100px;
        background-color: #e9dcc3;
        background-size: 94% auto;
        background-repeat: no-repeat;
        background-position: right top;
        border: solid white 3px;
        border-radius: 20px;
        margin: 0 0 0 40px;
        cursor: pointer;
        float: left;
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

    #hw_Wrapper{ margin: 30px; padding-top: 65px; }

    .item3>.date, .item3>.field{
        background-color: #F0F0F0;
        font-family: Oswald;
        font-size: 17px;
        font-weight: bold;
        color: #62717c;
        height: 45px;
        width: 250px;
        border-radius: 7px;
        border: solid gray 1px;
        box-shadow: 0 0 1px 0px #58585b;
        padding: 0 20px;
    }
    .item3>.set, .item2> input:valid{
        background-color: #a8d976;
        color: #35393c;
    } 

</style>

// -- =====================================================================================
