<template>  
    <div id="part_x" class="ppp" ref="part_x">
        <div id="infoWrapper">
            <input 
                class="iButton"
                ref="iButton"
                v-for="(s,i) of sections" :key="i" 
                :placeholder="s.title" type="text"
                @change="addItem(i +1)"
                @focus="select(i +1)"
                @on:keyup.enter="addItem(i +1)"
            />
        </div>
        <div id="infoWindow">
            <div
                ref="window"
                :class="'window' + ( !s.items.length ? ' hide' : '')"
                v-for="(s,i) of sections" :key="i"
            >
                <div class="title">{{ s.title }}</div>
                <div v-for="(x,j) of s.items" :key="j" class="item">
                    {{ x }}
                </div>
            </div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref, Ref }                         from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as Tools                           from '@/mixins/Tools';

const store: TS.Store = useStore()

// -- =====================================================================================

    const i = 1
    const part_x = ref<HTMLElement>( {} as HTMLElement )
    const iButton = ref<HTMLInputElement[]>( [{}] as HTMLInputElement[] )
    const window = ref<HTMLElement[]>( [{}] as HTMLElement[] )

    const sections: Ref<{ title: string; items: string[]; }[] > = ref([
        { title: "Medical Diagnosis", items: [] },
        { title: "Past Medical History", items: [] },
        { title: "Recent Complains", items: [] },
        { title: "Family History", items: [] },
        { title: "Physical Activity Status", items: [] },
        { title: "Nutritional Deficiency", items: [] },
    ])

// -- =====================================================================================

    const select = ( i: number ) => {
        for ( let j=1; j<=sections.value.length; j++ ) {
            iButton.value[j].classList.toggle( "blue", ( i === j ) )
            window.value[j].classList.toggle( "selected", i === j )
        }
    }

    const addItem = async ( i: number ) => {
        sections.value[i-1].items.push( iButton.value[i].value );
        iButton.value[i].value = ""
        // .. patch
        await new Promise( _ => setTimeout( _, 10 ) )
        window.value[i].classList.toggle( "selected", !!sections.value[i-1].items.length )
    }

    const myReset = () => {
        for ( let i=0; i<sections.value.length; i++ ) {
            sections.value[i].items = []            
            iButton.value[i+1].classList.remove( "blue" )
        }
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
    
// -- =====================================================================================

</script>


// -- =====================================================================================

<style scoped>

    #infoWindow{
        width: calc(100% - 440px);
        height: 80%;
        padding-right: 35px;
        margin-top: 7%;
        margin-left: 50px;
        overflow-y: auto;
    }

    .window{
        color: #b3b5b5;
        font-size: 15px;
        font-weight: bold;
        font-family: Oswald;
        height: auto;
        margin-bottom: 30px;
    }
    
    .title{
        border-bottom: 1px solid #cdcece;
        padding: 0 0 3px 10px;
        margin-bottom: 10px;
    }

    .blue{
        background-color: #30adfb;
        color: white;
    }

    .selected .title { color: #04392e; letter-spacing: .7px; }
    .selected .item { color: #05274e }

    .item{
        font-size: 18px;
        font-family: Oswald;
        padding-left: 4px;
        color: #959797;
    }

    .hide{ display: none }
    
</style>

// -- =====================================================================================
