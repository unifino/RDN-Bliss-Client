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
    Flag_speed: false,
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
    [ TS.Mutates.Flag_speed ]       ( state, payload ) { state.Flag_speed = payload },

}

// -- ===================================================================== Actions =======

// .. define Actions
const actions: ActionTree<TS.State, TS.State> & TS.MyActions = {

    [ TS.Acts.ProcessChange ]  (c,p) { store.commit( TS.Mutates.ProcessChange, p ) },
    [ TS.Acts.LanguageChange ] (c,p) { store.commit( TS.Mutates.LanguageChange, p ) },
    [ TS.Acts.OrtChange ]      (c,p) { store.commit( TS.Mutates.OrtChange, p ) },
    [ TS.Acts.SpeedChange ]    (c,p) { store.commit( TS.Mutates.SpeedChange, p ) },
    [ TS.Acts.Flag_plan_B ]    (c,p) { store.commit( TS.Mutates.Flag_plan_B, p ) },
    [ TS.Acts.Flag_logged_in ] (c,p) { store.commit( TS.Mutates.Flag_logged_in, p ) },
    [ TS.Acts.Flag_speed ]     (c,p) { store.commit( TS.Mutates.Flag_speed, p ) },
}

// -- ===================================================================== Getters =======

// .. define Getters
const getters: GetterTree<TS.State, TS.State> & TS.MyGetters = {
    process: (state) => (state.process),
    ort: (state) => (state.ort),
    animationSpeed: (state) => (state.animationSpeed),
    Flag_plan_B: (state) => (state.Flag_plan_B),
    Flag_logged_in: (state) => (state.Flag_logged_in),
    Flag_speed: (state) => (state.Flag_speed),
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