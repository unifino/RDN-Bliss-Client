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
                v-for="(s,i) of sections" :key="i"
                :class="'window' + ( !s.items.length ? ' hide' : '')"
            >
                <div class="title">{{ s.title }}</div>
                <div 
                    v-for="(x,j) of s.items" :key="j" class="item" 
                    @mouseenter="select(i+1);trash($event,'in')" @mouseleave="trash($event,'out')"
                >
                    {{ x }}
                    <div ref="trashes" class="trash" @click="remove(i,j)"></div>
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

    const i = 6
    const part_x = ref<HTMLElement>( {} as HTMLElement )
    const iButton = ref<HTMLInputElement[]>( [{}] as HTMLInputElement[] )
    const window = ref<HTMLElement[]>( [{}] as HTMLElement[] )

    const sections: Ref<{ title: string; items: string[]; }[] > = ref([
        { title: "Usual Diet", items: [] },
        { title: "Favorite Food", items: [] },
        { title: "Dislike Food", items: [] },
        { title: "Water Intake", items: [] },
    ])

// -- =====================================================================================

    const select = ( i: number ) => {
        for ( let j=1; j<=sections.value.length; j++ ) {
            iButton.value[j].classList.toggle( "blue", ( i === j ) )
            window.value[j].classList.toggle( "selected", i === j )
        }
    }

    const addItem = async ( i: number ) => {
        const newItem = iButton.value[i].value.trim()
        if ( !sections.value[i-1].items.includes( newItem ) )
            sections.value[i-1].items.push( newItem );
        iButton.value[i].value = ""
        // .. patch
        await new Promise( _ => setTimeout( _, 10 ) )
        window.value[i].classList.toggle( "selected", !!sections.value[i-1].items.length )
    }

    const trash = async ( event: MouseEvent, mode: 'in' | 'out' ) => {
        const myTrash = ( event.target as HTMLElement ).getElementsByClassName( "trash" )[0];
        if ( myTrash ) myTrash.className = "trash trash_" + mode
        if ( mode === "out" ) {
            await new Promise( _ => setTimeout( _, 150 ) )
            myTrash.className = "trash"
        }
    }

    const remove = ( sectionIdx: number, itemIdx: number ) => {
        sections.value[ sectionIdx ].items.splice( itemIdx, 1 )
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
        ( nV, oV ) => Tools.pageSlider( oV, nV, i, part_x )
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
        padding: 0 35px 0 20px;
        margin-top: 7%;
        margin-left: 20px;
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
        padding: 0 0 3px 25px;
        margin-bottom: 10px;
    }

    .blue{
        background-color: #83cfff;
        color: black;
    }

    .selected .title { color: #04392e; letter-spacing: .7px; }
    .selected .item { color: #05274e }

    .item{
        font-size: 18px;
        font-family: Oswald;
        color: #959797;
        padding: 5px 0 5px 50px;
        margin: 3px 0;
    }
    .item:hover{
        color: #e6990c;
    }

    .trash{
        float: left;
        margin-left: -40px;
    }

    .hide{ display: none }

</style>

// -- =====================================================================================
