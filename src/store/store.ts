import {
    ActionTree,
    GetterTree,
    MutationTree ,
    createStore,
    useStore
}                                       from "vuex";
import * as TS                          from "@/types/types"

// -- ==================================================================== TS.State =======

// .. define  TS.State
const state: TS.State = {
    language: TS.Languages.EN,
    displayMode: TS.DisplayMode.Wide,
    ort: TS.Orts.Home,
}

// -- =================================================================== Mutations =======

// .. define Mutations
const mutations: MutationTree<TS.State> & TS.MyMutations = {

    [ TS.Mutates.LanguageChange ] ( state, payload ) { state.language = payload },
    [ TS.Mutates.OrtChange ] ( state, payload ) { state.ort = payload }

}

// -- ===================================================================== Actions =======

// .. define Actions
const actions: ActionTree<TS.State, TS.State> & TS.MyActions = {

    [ TS.Acts.LanguageChange ] ( {commit}, payload ) { state.language = payload },
    [ TS.Acts.OrtChange ] ( {commit}, payload ) { state.ort = payload }

}

// -- ===================================================================== Getters =======

// .. define Getters
const getters: GetterTree<TS.State, TS.State> & TS.MyGetters = {
    ort: state => state.ort
}

// -- ======================================================================= Setup =======

// .. SETUP STORE
export const store: TS.Store = createStore( {
    state,
    mutations,
    actions,
    getters
} );

// -- =====================================================================================

export default {
    setup () {
        const store = useStore()
    }
}