import { Ref }                              from 'vue';
import * as TS                              from '@/types/types'
import { store }                            from '@/store/store'

// -- =====================================================================================

export const MainAnimation = async function ( 
    el: Ref<HTMLElement>, target: "X100"|"X010", phase: "In"|"Out", delay= 0, opt = ""
) {
    await new Promise( _ => setTimeout( _, delay ) )
    el.value.className = "x_xxx " + target + "_fall_" + phase + opt
}

// -- =====================================================================================

export const speed = ( extraTime?: boolean ) => {
    let speed = 0;
    switch (store.getters.animationSpeed) {
        case TS.Speeds.Normal: speed = 900+860 + ( extraTime ? 1500 : 0 ); break;
        case TS.Speeds.Fast: speed = 600 + ( extraTime ? 700 : 0 ); break;
    }
    return speed
}

// -- =====================================================================================
