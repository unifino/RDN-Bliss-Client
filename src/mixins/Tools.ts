import { Ref }                              from 'vue';
import * as TS                              from '@/types/types'
import * as CTS                             from '@/types/common'
import * as CD                              from '@/mixins/commonData'
import { store }                            from '@/store/store'
import axios                                from 'axios';

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

const delay = () => {
    let delay = 0;
    switch (store.getters.animationSpeed) {
        case TS.Speeds.Normal: delay = 900; break;
        case TS.Speeds.Fast: delay = 500; break;
    }
    return delay
}

// -- =====================================================================================

export const userAnime = async ( el: Ref<HTMLElement>, phase: "In"|"Out"|"In_Sent"|"Out_Sent", skip=false ) => {
    if ( phase === "In" ) 
        if ( !skip ) 
            await new Promise( _ => setTimeout( _, delay() ) )
    el.value.className = "Tool_fall_" + phase
}

const pageSlider = ( oV: TS.PageSlide, nV: TS.PageSlide, ipx: number, part_x: Ref<HTMLElement> ) => {
    if ( oV.gpx === ipx ) part_x.value.className = nV.move === "R" ? "next_Page" : "previous_Page" 
    if ( nV.gpx === ipx ) part_x.value.className = "current_Page_" + nV.move 
}

export const ifSlider = ( 
    myOrigin: TS.UserTools, 
    oV: TS.PageSlide, 
    nV: TS.PageSlide, 
    ipx: number, 
    part_x: Ref<HTMLElement> 
) => {
    if ( nV.origin === myOrigin ) pageSlider ( oV, nV, ipx, part_x )
}

// -- =====================================================================================

export const errHandler = ( err: string ) => {

    if ( err.includes( "UNKNOWN") ) alert( err )
    else alert( err )

}

// -- =====================================================================================

export const post = ( subURL: CTS.Post, data: object ): Promise<CTS.UserData> => {

    return new Promise( (rs, rx) => {
        
        // .. Sending Request
        axios.post( CD.serverURL + subURL, data )
        // .. Receiving Answer
        .then( res => {
            // .. Login is Successful
            if ( res.data.status === 200 ) rs( res.data.scc )
            // .. Handle Reported Problems
            else if ( res.data.status === 500 ) {
                if ( res.data.err.includes( "User Not Found" ) ) rx()
                else if ( res.data.err.includes( "Exists" ) ) rx( res.data.err )
                else errHandler( res.data.err )
            }
            // .. Handle Error
            else errHandler( "UNKNOWN: 001: " + res.data )
        } )
        // .. NO Answer
        .catch( err => errHandler( `Connection Error:\n${CD.serverURL+subURL}\n${err}` ) )
    
    } )

}

// -- =====================================================================================

export const get = ( subURL: CTS.Get, data?: object ) => {

    return new Promise( rs => {

        // .. Sending Request
        axios.get( CD.serverURL + subURL + "?" + JSON.stringify( data ) )
        // .. Receiving Answer
        .then( res => {
            // .. Login is Successful
            if ( res.data.status === 200 ) rs( res.data.scc )
            // .. Handle Reported Problems
            else if ( res.data.status === 500 ) errHandler( res.data.err )
            // .. Handle Error
            else errHandler( "UNKNOWN: 001: " + res.data )
        } )
        // .. NO Answer
        .catch( err => errHandler( `Connection Error:\n${CD.serverURL+subURL}\n${err}` ) )
    
    } )

}

// -- =====================================================================================

export const setNames = ( users: CTS.UserData[] )  => {
    // .. set a name
    for ( const u of users ) {
        if ( u.firstname || u.lastname ) {
            u.name = ( u.firstname || "" ) + " " + ( u.lastname || "" )
            u.name = u.name.trim();
        }
        else u.name = u.username || ( u.email.split( "@" )[0] ) 
    }
    return users;
}

// -- =====================================================================================