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
    animationSpeed: TS.Speeds.Fast,

    Flag_plan_B: false,
    Flag_logged_in: false,
}

// -- =================================================================== Mutations =======

// .. define Mutations
const mutations: MutationTree<TS.State> & TS.MyMutations = {

    [ TS.Mutates.ProcessChange ]    ( state, payload ) { state.process = payload },
    [ TS.Mutates.LanguageChange ]   ( state, payload ) { state.language = payload },
    [ TS.Mutates.OrtChange ]        ( state, payload ) { state.ort = payload },
    [ TS.Mutates.SpeedChange ]      ( state, payload ) { state.animationSpeed = payload },
    [ TS.Mutates.Flag_plan_B ]      ( state, payload ) { state.Flag_plan_B = payload },
    [ TS.Mutates.Flag_logged_in ]   ( state, payload ) { state.Flag_logged_in = payload },

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
    },

    [ TS.Acts.SpeedChange ] ( commit, payload ) {
        store.commit( TS.Mutates.SpeedChange, payload )
    },

    [ TS.Acts.Flag_plan_B ] ( commit, payload ) {
        store.commit( TS.Mutates.Flag_plan_B, payload )
    },

    [ TS.Acts.Flag_logged_in ] ( commit, payload ) {
        store.commit( TS.Mutates.Flag_logged_in, payload )
    },

}

// -- ===================================================================== Getters =======

// .. define Getters
const getters: GetterTree<TS.State, TS.State> & TS.MyGetters = {
    process: (state) => (state.process),
    ort: (state) => (state.ort),
    animationSpeed: (state) => (state.animationSpeed),
    Flag_plan_B: (state) => (state.Flag_plan_B),
    Flag_logged_in: (state) => (state.Flag_logged_in),
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