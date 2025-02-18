<template>  
    <div id="part_x" class="ppp" ref="part_x">
        <div id="infoWrapper">
            <input ref="firstname" type="text" placeholder="Medical Diagnosis" />
            <input ref="lastname" type="text" placeholder="Past Medical History" />
            <input ref="age" type="text" placeholder="Recent Complains" />
            <input ref="martialStatus" type="text" placeholder="Family History" />
            <input ref="educationalLevel" type="text" placeholder="Physical Activity Status" />
            <input ref="occupation" type="text" placeholder="Nutritional Deficiency" />
        </div>
        <div id="infoWindow"></div>
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

    const i = 1
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

    #infoWindow{
        width: calc(100% - 420px);
        height: 80%;
        margin-top: 5%;
        margin-left: 50px;
        overflow-y: auto;
        background-color: rgba(255, 166, 0, 0.044);
    }
    
</style>

// -- =====================================================================================
