import * as TS                              from '@/types/types'
import { Ref } from 'vue'

// -- =====================================================================================

export const decor = async ( nV: TS.Orts, el:Ref<HTMLElement>, picIdx: Ref<number> ) => {
    await new Promise( _ => setTimeout( _, 100 ) )
    el.value.className = "fadeOut_B001"
    await new Promise( _ => setTimeout( _, 700 ) )
    picIdx.value = Object.values( TS.Orts ).indexOf( nV )
    await new Promise( _ => setTimeout( _, 500 ) )
    el.value.className = "fadeIn_B001"
}

// -- =====================================================================================

// eslint-disable-next-line
export const MainTransition = async function ( phase: "In"|"Out", [X100,X010]: any ) { 
    switch ( phase ) {
// -- =====================================================================================
        case "In":
            await new Promise( _ => setTimeout( _, 900 + 860 ) )
            if( X100 ) X100.value.className = "x_xxx " + "fallIn_X100"
            if( X010 ) X010.value.className = "x_xxx " + "fallIn_X010"
            break;
// -- =====================================================================================
        case "Out":
            if( X100 ) X100.value.className = "x_xxx " + "fallOut_X100"
            if( X010 ) X010.value.className = "x_xxx " + "fallOut_X010"
            break;
// -- =====================================================================================
    }
}

// -- =====================================================================================
