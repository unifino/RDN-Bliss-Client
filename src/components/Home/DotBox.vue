<template>
    <div id="dotBox">
        <div ref="dots" id="dots_wrapper">
            <div @click=goTo(0) class="dot selected" />
            <div @click=goTo(1) class="dot ey" />
            <div @click=goTo(2) class="dot ex" />
            <div @click=goTo(3) class="dot ey" />
            <div @click=goTo(4) class="dot" />
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import { ref }                              from 'vue'

const store: TS.Store = useStore()

// -- =====================================================================================

    const dots = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const doter = (idx: number) => {
        // .. reset ClassNames
        for( let x of Object.values( dots.value.children ) ) 
            x.className = x.className.replace( / selected/g, "" )
        // .. Turn On this Dot
        dots.value.children[ idx ].className += " selected"
    }

// -- =====================================================================================

    const goTo = (idx: number) => {
        store.dispatch( TS.Acts.H010Handy, true )
        store.dispatch( TS.Acts.H010IDx, idx )        
    }

// -- =====================================================================================

    store.watch(
        getters => getters.H010IDx,
        nV => doter( nV ) 
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #dotBox{
        height: 300px;
        width: 300px;
        bottom: 50px;
        right: 50px;
        position: absolute;
        z-index: 2;
    }

    #dots_wrapper{
        width: auto;
        height: auto;
        position: relative;
        display: inline-block;
        top: 12%;
        left: 65%;
        rotate: -54deg;
    }

    .dot{
        height: 7px;
        width: 7px;
        border-radius: 12px;
        border: solid hsla(28, 93%, 12%, 0.538) 2px;
        float: left;
        margin: 11px 4px;
        cursor: pointer;
    }

    .dot:hover{ 
        border-color: orange;
        background-color: orange 
    }

    .ex{ margin-top: 13px }
    .ey{ margin-top: 12.5px }

    .selected{
        animation           : selected .8s;
        animation-fill-mode : both;
    }
    @keyframes selected {
        100%{ background-color: #17a392; border-color: #17a392; }
    }

</style>

// -- =====================================================================================
