<template>  
    <div id="part_x" class="ppp" ref="part_x">
        <div id="infoWrapper">
            <input ref="firstname" type="text" placeholder="Usual Diet" />
            <input ref="lastname" type="text" placeholder="Favorite Food" />
            <input ref="lastname" type="text" placeholder="Dislike Food" />
            <input ref="lastname" type="text" placeholder="Water Intake" />
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

    const i = 6
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

</style>

// -- =====================================================================================
