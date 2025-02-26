<template>  
    <div id="part_x" ref="part_x">
        <div id="infoWrapper">
            <div class="hw_Field">
                <div class="hw_title">Height</div>
                <input class="hw_input" ref="height" type="text" />
                <span class="hw_unit">cm</span>
            </div>
            <div class="hw_Field">
                <div class="hw_title">Weight</div>
                <input class="hw_input" ref="weight" type="text" />
                <span class="hw_unit">kg</span>
            </div>
            <div class="hw_Field">
                <div class="hw_title">IBW</div>
                <input class="hw_input" ref="ibw" type="text" />
                <span class="hw_unit">kg</span>
            </div>
            <div class="hw_Field">
                <div class="hw_title">UBW</div>
                <input class="hw_input" ref="ubw" type="text" />
                <span class="hw_unit">kg</span>
            </div>
            <div class="hw_Field">
                <div class="hw_title">BMI</div>
                <input class="hw_input" ref="bmi" type="text" />
                <span class="hw_unit">kg/m²</span>
            </div>
            <!-- <input ref="lastname" type="text" placeholder="%WT Change" />
            <input ref="lastname" type="text" placeholder="MUAC" />
            <input ref="lastname" type="text" placeholder="Head Circumference" />
            <input ref="lastname" type="text" placeholder="Waist Circumference" />
            <input ref="lastname" type="text" placeholder="WHR" /> -->
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as Tools                           from '@/mixins/Tools';

const store: TS.Store = useStore()

// -- =====================================================================================

    const ipx = 4
    const part_x = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    store.watch(
        getters => getters.userTool,
        () => part_x.value.classList.add( "page_init" )
    )

    store.watch(
        getters => getters.pageSlide,
        ( nV, oV ) => Tools.ifSlider( TS.UserTools.CreateNewPatient, oV, nV, ipx, part_x )
    )
    
// -- =====================================================================================

</script>


// -- =====================================================================================

<style scoped>
    
</style>

// -- =====================================================================================
