import * as TS                              from '@/types/types'
import * as Anime                           from '@/mixins/AnimationCenter'
import { Ref }                              from 'vue';

// -- =====================================================================================

// eslint-disable-next-line
export const mainCA = ( [ oV, nV, ort ]: TS.Orts[], [X100,X010]: Ref<HTMLElement>[] ) => {
    if ( nV !== oV )
        if ( [ oV, nV ].includes( ort ) )
            Anime.MainTransition( nV === ort ? "In" : "Out", [ X100, X010 ] )
}

// -- =====================================================================================