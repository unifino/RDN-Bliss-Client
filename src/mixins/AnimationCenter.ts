import { Ref }                              from 'vue'
import { store }                            from '@/store/store'

// -- =====================================================================================

export const imgDecor = async (
    el:Ref<HTMLElement>,
    picIndex: Ref<number>,
    idx: number,
    delay = 500
) => {
    await new Promise( _ => setTimeout( _, 10 ) )
    el.value.className = "fadeOut_B001"
    await new Promise( _ => setTimeout( _, 700 ) )
    // .. set pic by idx or by Ort-Index
    picIndex.value = idx
    await new Promise( _ => setTimeout( _, delay ) )
    el.value.className = "fadeIn_B001"
}

// -- =====================================================================================

export const textSlider = async function ( el:Ref<HTMLElement> ) {

    // .. delay of .9s ... slide in TEXT
    await new Promise( _ => setTimeout( _, 900 ) )
    el.value.className = "x_xxx " + "slideIn_DTXT"

    await new Promise( _ => setTimeout( _, 860 ) )
    // .. wait until it slides in complexly
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
            if( X010 ) {
                X010.value.className = "x_xxx " + "fallOut_X010"
                if ( store.getters.Flag_plan_B ) X010.value.className += "_planB"
            }
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
