<template>  
    <div id="part_6" class="ppp" ref="part_x">
        <div id="infoWrapper">
            <input ref="firstname" type="text" placeholder="Constipation" />
            <input ref="lastname" type="text" placeholder="Diarrhea" />
            <input ref="lastname" type="text" placeholder="Normal" />
            <input ref="lastname" type="text" placeholder="IBS-Constipation" />
            <input ref="lastname" type="text" placeholder="IBS-Diarrhea" />
            <!-- <input ref="lastname" type="text" placeholder="Loose Watery Stool" />
            <input ref="lastname" type="text" placeholder="Steatorrhea" />
            <input ref="lastname" type="text" placeholder="Hematochezia" />
            <input ref="lastname" type="text" placeholder="Melena" />
            <input ref="lastname" type="text" placeholder="etc" /> -->
        </div>
    </div>
    <!-- <div id="part_7" ref="part_7">
                <div id="infoWrapper">
                    <input ref="firstname" type="text" placeholder="Nausea" />
                    <input ref="lastname" type="text" placeholder="Vomiting" />
                    <input ref="lastname" type="text" placeholder="Diarrhea" />
                    <input ref="lastname" type="text" placeholder="Constipation" />
                    <input ref="lastname" type="text" placeholder="Normal" />
                    <input ref="lastname" type="text" placeholder="Heartburn" />
                    <input ref="lastname" type="text" placeholder="Ulces" />
                    <input ref="lastname" type="text" placeholder="Fiatulence" />
                    <input ref="lastname" type="text" placeholder="Bloating" />
                    <input ref="lastname" type="text" placeholder="Xerostomia" />
                    <input ref="lastname" type="text" placeholder="Mucositis" />
                    <input ref="lastname" type="text" placeholder="Dysphagia" />
                    <input ref="lastname" type="text" placeholder="Mouth Sores" />
                    <input ref="lastname" type="text" placeholder="Difficulty Chewing or Swallowing|Dental Caries" />
                    <input ref="lastname" type="text" placeholder="Abdominal Distention" />
                </div>
            </div> -->
<!--                                                                                    -->
            <!-- <div id="part_8" ref="part_8">
                <div id="infoWrapper">
                    <input ref="firstname" type="text" placeholder="Good-Poor Appetite" />
                    <input ref="lastname" type="text" placeholder="Loss of Appetite" />
                    <input ref="lastname" type="text" placeholder="Increase Desire to Eat" />
                    <input ref="lastname" type="text" placeholder="Poor Oral Intake" />
                    <input ref="lastname" type="text" placeholder="Food Intolerance" />
                    <input ref="lastname" type="text" placeholder="Food Allergy" />
                </div>
            </div> -->
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as Tools                           from '@/mixins/Tools';

const store: TS.Store = useStore()

// -- =====================================================================================

    const i = 5
    const part_x = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    store.watch(
        getters => getters.ppp,
        ( nV, oV ) => Tools.pppAnime( oV, nV, i, part_x )
    )
    
// -- =====================================================================================

</script>


// -- =====================================================================================

<style scoped>

    #part_6 { width: 100%; height: 100%; position: absolute; }

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
