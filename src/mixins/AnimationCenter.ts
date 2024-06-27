import { Ref }                              from 'vue'
import { store }                            from '@/store/store'

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
