import { Ref }                              from 'vue';

// -- =====================================================================================

export const MainAnimation = async function ( 
    el: Ref<HTMLElement>, target: "X100"|"X010", phase: "In"|"Out", delay= 0, opt = ""
) {
    await new Promise( _ => setTimeout( _, delay ) )
    el.value.className = "x_xxx " + target + "_fall_" + phase + opt
}

// -- =====================================================================================
