<template>  
    <div id="part_4" class="ppp" ref="part_x">
        <div id="infoWrapper">
            <input ref="firstname" type="text" placeholder="Medicines in Use" />
            <input ref="lastname" type="text" placeholder="Supplements in Use" />
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

    const i = 3
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

    #part_4 { width: 100%; height: 100%; position: absolute; }

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
