import * as TS                              from '@/types/types'
import { Ref } from 'vue'

// -- =====================================================================================

export const imgDecor = async (
    nV: TS.Orts,
    el:Ref<HTMLElement>,
    pics: Ref<number>,
    idx: number|null = null
) => {
    await new Promise( _ => setTimeout( _, 100 ) )
    el.value.className = "fadeOut_B001"
    await new Promise( _ => setTimeout( _, 700 ) )
    // .. set pic by idx or by Ort-Index
    pics.value = idx !== null ? idx : Object.values( TS.Orts ).indexOf( nV )
    await new Promise( _ => setTimeout( _, 500 ) )
    el.value.className = "fadeIn_B001"
}

// -- =====================================================================================

export const textSlider = async function ( el:Ref<HTMLElement> ) {

    // .. delay of .9s ... slide in TEXT
    await new Promise( _ => setTimeout( _, 900 ) )
    el.value.className = "x_xxx " + "slideIn_DTXT"

    await new Promise( _ => setTimeout( _, 860 ) )
    // .. wait untill it slides in completly
    await new Promise( _ => setTimeout( _, 1500 ) )

    // .. reset it Class
    el.value.className = "x_xxx"

}

// -- =====================================================================================

// eslint-disable-next-line
export const MainTransition = async function ( phase: "In"|"Out", [X100,X010]: any ) {
    switch ( phase ) {

        case "In":
            await new Promise( _ => setTimeout( _, 900 + 860 ) )
            if( X100 ) X100.value.className = "x_xxx " + "fallIn_X100"
            if( X010 ) X010.value.className = "x_xxx " + "fallIn_X010"
            break;

        case "Out":
            if( X100 ) X100.value.className = "x_xxx " + "fallOut_X100"
            if( X010 ) X010.value.className = "x_xxx " + "fallOut_X010"
            break;

    }
}

// -- =====================================================================================

export const regSlider = async function ( phase: "In"|"Out", el:Ref<HTMLElement> ) {

    switch ( phase ) {

        case "In":
            await new Promise( _ => setTimeout( _, 900+ 860 + 500 ) )
            el.value.className = "x_xxx " + "fallIn_XReg"
            break;

        case "Out":
            el.value.className = "x_xxx " + "fallOut_XReg"
            await new Promise( _ => setTimeout( _, 900+ 860 ) )
            el.value.className = "x_xxx "
            break;

    }

}

// -- =====================================================================================
