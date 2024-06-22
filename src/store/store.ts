import {
    ActionTree,
    GetterTree,
    MutationTree,
    createStore
}                                       from 'vuex';
import * as TS                          from '@/types/types'

// -- ==================================================================== TS.State =======

// .. define  TS.State
const state: TS.State = {
    process: TS.Processes.Reading,
    language: TS.Languages.EN,
    displayMode: TS.DisplayMode.Wide,
    ort: TS.Orts.Home,
}

// -- =================================================================== Mutations =======

// .. define Mutations
const mutations: MutationTree<TS.State> & TS.MyMutations = {

    [ TS.Mutates.ProcessChange ] ( state, payload ) { state.process = payload },
    [ TS.Mutates.LanguageChange ] ( state, payload ) { state.language = payload },
    [ TS.Mutates.OrtChange ] ( state, payload ) { state.ort = payload }

}

// -- ===================================================================== Actions =======

// .. define Actions
const actions: ActionTree<TS.State, TS.State> & TS.MyActions = {

    [ TS.Acts.ProcessChange ] ( commit, payload ) {
        store.commit( TS.Mutates.ProcessChange, payload );
    },

    [ TS.Acts.LanguageChange ] ( commit, payload ) {
        store.commit( TS.Mutates.LanguageChange, payload );
    },

    [ TS.Acts.OrtChange ] ( commit, payload ) {
        store.commit( TS.Mutates.OrtChange, payload )
    }

}

// -- ===================================================================== Getters =======

// .. define Getters
const getters: GetterTree<TS.State, TS.State> & TS.MyGetters = {
    process: (state) => (state.process),
    ort: (state) => (state.ort)
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