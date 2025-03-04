<template>
    <div id="wholeWrapper" ref="dietPlans">
        
        <MyPlansList />

        <div class="buttonsWrapper">
            <div class="button" v-for="(b,i) of buttons" :key="i" @click="b.fnc">{{ b.title }} </div>
        </div>  

    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as Tools                           from '@/mixins/Tools';
import MyPlansList                          from '@/components/UserPanel/DietPlan/plansList.vue'

const store: TS.Store = useStore()

// -- =====================================================================================

    const dietPlans = ref<HTMLElement>( {} as HTMLElement )
    const buttons = [ 
        { title: "Create New Plan", fnc: () => store.dispatch( TS.Acts.userTool, TS.UserTools.CreateNewPlan ) },
    ]

// -- =====================================================================================

    const _out = () => Tools.userAnime( dietPlans, "Out" )
    const _in = ( skip = false ) => Tools.userAnime( dietPlans, "In", skip )

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => { 
            if ( oV === TS.Orts.UserPanel ) 
                if ( store.getters.userTool === TS.UserTools.DietPlans )
                    _out() 
        }
    )

    store.watch(
        getters => getters.userTool,
        ( nV, oV ) => {
            if ( nV !== oV ) {

                if ( nV === TS.UserTools.DietPlans ) _in( oV === TS.UserTools.null )
                if ( oV === TS.UserTools.DietPlans ) _out()

                // .. PageSlideResetting
                if ( nV === TS.UserTools.DietPlans ) Tools.pageSlide_0( nV )

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

    #title{
        font-size: 23px;
        font-weight: bold;
        font-family: PoiretOne;
        text-align: center;
        padding: 55px;
        margin-bottom: 30px;
    }

    #methodsWrapper{ 
        margin: auto;
        width: 250px;
        text-align: center;
    }

    .method{
        background-color: #F0F0F0;
        font-family: Oswald;
        font-size: 17.5px;
        font-weight: bold;
        color: #081E2F;
        height: 25px;
        width: 210px;
        padding: 10px 20px;
        border-radius: 7px;
        border: solid gray 1px;
        box-shadow: 0 0 1px 0px rgb(88 88 91);
        margin: 10px 0;
        cursor: pointer;
    }
    .method:hover{
        background-color: #3dcbfa;
    }

</style>

// -- =====================================================================================
