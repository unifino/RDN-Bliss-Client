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
    ort: TS.Orts.NoWhere,
    animationSpeed: TS.Speeds.Fast,

    H010IDx: 0,
    H010Handy: false,

    userTool: TS.UserTools.null,

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
    
    [ TS.Mutates.userTool ]         ( state, payload ) { state.userTool = payload },

    [ TS.Mutates.H010IDx ]          ( state, payload ) { state.H010IDx = payload },
    [ TS.Mutates.H010Handy ]        ( state, payload ) { state.H010Handy = payload },

    [ TS.Mutates.Flag_plan_B ]      ( state, payload ) { state.Flag_plan_B = payload },
    [ TS.Mutates.Flag_logged_in ]   ( state, payload ) { state.Flag_logged_in = payload },
    [ TS.Mutates.Flag_speed ]       ( state, payload ) { state.Flag_speed = payload },

}

// -- ===================================================================== Actions =======

// .. define Actions
const actions: ActionTree<TS.State, TS.State> & TS.MyActions = {

    [ TS.Acts.ProcessChange ]   (c,p) { store.commit( TS.Mutates.ProcessChange, p ) },
    [ TS.Acts.LanguageChange ]  (c,p) { store.commit( TS.Mutates.LanguageChange, p ) },
    [ TS.Acts.OrtChange ]       (c,p) { store.commit( TS.Mutates.OrtChange, p ) },
    [ TS.Acts.SpeedChange ]     (c,p) { store.commit( TS.Mutates.SpeedChange, p ) },
    
    [ TS.Acts.userTool ]        (c,p) { store.commit( TS.Mutates.userTool, p ) },

    [ TS.Acts.H010IDx ]         (c,p) { store.commit( TS.Mutates.H010IDx, p ) },
    [ TS.Acts.H010Handy ]       (c,p) { store.commit( TS.Mutates.H010Handy, p ) },

    [ TS.Acts.Flag_plan_B ]     (c,p) { store.commit( TS.Mutates.Flag_plan_B, p ) },
    [ TS.Acts.Flag_logged_in ]  (c,p) { store.commit( TS.Mutates.Flag_logged_in, p ) },
    [ TS.Acts.Flag_speed ]      (c,p) { store.commit( TS.Mutates.Flag_speed, p ) },

}

// -- ===================================================================== Getters =======

// .. define Getters
const getters: GetterTree<TS.State, TS.State> & TS.MyGetters = {
    process:        state => state.process,
    ort:            state => state.ort,
    animationSpeed: state => state.animationSpeed,

    userTool:       state => state.userTool,

    H010IDx:        state => state.H010IDx,
    H010Handy:      state => state.H010Handy,

    Flag_plan_B:    state => state.Flag_plan_B,
    Flag_logged_in: state => state.Flag_logged_in,
    Flag_speed:     state => state.Flag_speed,
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