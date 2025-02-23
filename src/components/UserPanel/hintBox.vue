<template>
    <div id="myWindow">
        {{ msg }}
        <div class="anime" style="font-size: 50px; font-family: fas;">
            <!-- ○○○◉◉◉●●● -->
            <!-- <br> -->
            <!-- <br> -->
            <br>
             <br>
            <!-- <br> -->
            <!--   -->
            <br>
            <!-- <br> -->
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

    // const dietPlans = ref<HTMLElement>( {} as HTMLElement )
    const msg = "Talking\nwith\nour\nServer"

// -- =====================================================================================


// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => { 
            console.log();
            
        }
    )

    store.watch(
        getters => getters.userTool,
        ( nV, oV ) => {
            if ( nV !== oV ) {
                console.log();
                
            }
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #myWindow{
        font-family: PoiretOne;
        font-size: 40px;
        height: 620px;
        width: 500px;
        top: 50%;
        left: 300px;
        padding-top: 150px;
        position: absolute;
        transform: translate(0%,-53%);
        white-space: pre;
        display: none;
    }

    .anime{
        text-align: center;
        float: right;
        margin-top: -120px;
        color: rgb(23, 176, 176);
        white-space: pre-line;
        display: none;
    }

</style>

// -- =====================================================================================
