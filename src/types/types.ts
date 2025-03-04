import {
    ActionContext,
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
}                                       from 'vuex';
import { WatchOptions }                 from "vue";
import * as CTS                         from '@/types/common'

// -- =====================================================================================

// ..  declare Languages
export enum Languages { EN, FA, UR }

// .. declare Display Modes
export enum DisplayMode { Wide, Packed }

// .. declare Places
export enum Orts { Home, OurGoals, News, FAQs, AboutUs, UserPanel, NoWhere }

export type OrtData = {[ K in Orts ]: { name: string, text: string } }

export type PageSlide = { origin: UserTools, gpx: number, move: "R"|"L" }

// ..  declare Processes
export enum Processes { "Reading", "Registering", "Login" }

// .. declare UserTools
export enum UserTools { 
    Grocery,
    Patients,
    CreateNewPatient,
    Calender,
    Stats,
    DietPlans,
    CreateNewPlan,
    Messages,
    Profile,
    null
}

export enum Speeds { Normal = "Normal", Fast = "Fast" }

// .. declare State
export type State = {

    process: Processes
    language: Languages
    displayMode: DisplayMode
    ort: Orts
    animationSpeed: Speeds

    // .. declare User related States
    userType: CTS.UserTypes
    userTool: UserTools
    pageSlide: PageSlide
    newPatient: CTS.Patient

    // .. declare minor data
    H010IDx: number
    GroceryBasket: CTS.Basket|undefined
    
    // .. declare Flags
    Flag_plan_B: boolean
    Flag_logged_in: boolean
    Flag_speed: boolean
    Flag_H010_Hand: boolean
    Flag_H100_Alert: boolean
    Flag_savePatient: boolean
    Flag_savePlan: boolean
    Flag_resetForm: boolean

}

// -- =====================================================================================

// .. declare AugmentedActionContext
type AAC = Omit< ActionContext<State, State>, "commit" > & {
    commit <K extends keyof MyMutations> (
        key: K,
        payload?: Parameters<MyMutations[K]>[1]
    ): ReturnType<MyMutations[K]>;
};

// -- =====================================================================================

// .. declare Mutation-Options
export enum Mutates {
    ProcessChange   = "ProcessChange",
    LanguageChange  = "LanguageChange",
    OrtChange       = "OrtChange",
    SpeedChange     = "SpeedChange",

    userType        = "UserType",
    userTool        = "UserTools",
    pageSlide       = "pageSlideByUserTool",

    _np_Gender      = "New Patient Gender",
    _np_FirstName   = "New Patient First Name",
    _np_LastName    = "New Patient Last Name",
    _np_BirthDay    = "New Patient BirthDay",
    _np_MS          = "New Patient Martial Status",
    _np_Education   = "New Patient Educational Level",
    _np_Occupation  = "New Patient Occupation",
    _np_GIF         = "New Patient GIFs",

    H010IDx         = "H010Panel_ID",
    GroceryBasket   = "GroceryBasket",

    Flag_plan_B     = "Flag_plan_B",
    Flag_logged_in  = "Flag_logged_in",
    Flag_speed      = "Flag_speed",
    Flag_H010_Hand  = "H010HandControl",
    Flag_H100_Alert = "Flag_H100_AlertControl",
    Flag_savePatient= "Flag_savePatient",
    Flag_savePlan   = "Flag_savePlan",
    Flag_resetForm  = "Flag_resetForm",
    
}

// .. declare Mutations
export type MyMutations<S = State> = {
    [ Mutates.ProcessChange ]   ( state: S, payload: Processes ):                   void;
    [ Mutates.LanguageChange ]  ( state: S, payload: Languages ):                   void;
    [ Mutates.OrtChange ]       ( state: S, payload: Orts ):                        void;
    [ Mutates.SpeedChange ]     ( state: S, payload: Speeds ):                      void;
    
    [ Mutates.userType ]        ( state: S, payload: CTS.UserTypes ):               void;
    [ Mutates.userTool ]        ( state: S, payload: UserTools ):                   void;
    [ Mutates.pageSlide ]       ( state: S, payload: PageSlide ):                   void;
    
    [ Mutates._np_Gender ]      ( state: S, payload: CTS.Gender ):                  void;
    [ Mutates._np_FirstName ]   ( state: S, payload: string ):                      void;
    [ Mutates._np_LastName ]    ( state: S, payload: string ):                      void;
    [ Mutates._np_BirthDay ]    ( state: S, payload: string ):                      void;
    [ Mutates._np_MS ]          ( state: S, payload: CTS.MS ):                      void;
    [ Mutates._np_Education ]   ( state: S, payload: CTS.Education ):               void;
    [ Mutates._np_Occupation ]  ( state: S, payload: string ):                      void;
    [ Mutates._np_GIF ]         ( state: S, payload: CTS.GI_F ):                    void;
    
    [ Mutates.H010IDx ]         ( state: S, payload: number ):                      void;
    [ Mutates.GroceryBasket ]   ( state: S, payload: CTS.Basket|undefined ):        void;
    
    [ Mutates.Flag_plan_B ]     ( state: S, payload: boolean ):                     void;
    [ Mutates.Flag_logged_in ]  ( state: S, payload: boolean ):                     void;
    [ Mutates.Flag_speed ]      ( state: S, payload: boolean ):                     void;
    [ Mutates.Flag_H010_Hand ]  ( state: S, payload: boolean ):                     void;
    [ Mutates.Flag_H100_Alert ] ( state: S, payload: boolean ):                     void;
    [ Mutates.Flag_savePatient ]( state: S, payload: boolean ):                     void;
    [ Mutates.Flag_savePlan ]   ( state: S, payload: boolean ):                     void;
    [ Mutates.Flag_resetForm ]  ( state: S, payload: boolean ):                     void;
}

// -- =====================================================================================

// .. declare Action-Options
export enum Acts {
    ProcessChange   = "ProcessChange",
    LanguageChange  = "LanguageChange",
    OrtChange       = "OrtChange",
    SpeedChange     = "SpeedChange",

    userType        = "UserType",
    userTool        = "UserTools",
    pageSlide       = "pageSlideByUserTool",

    _np_Gender      = "New Patient Gender",
    _np_FirstName   = "New Patient First Name",
    _np_LastName    = "New Patient Last Name",
    _np_BirthDay    = "New Patient BirthDay",
    _np_MS          = "New Patient Martial Status",
    _np_Education   = "New Patient Educational Level",
    _np_Occupation  = "New Patient Occupation",
    _np_GIF         = "New Patient GIFs",

    H010IDx         = "H010Panel_ID",
    GroceryBasket   = "GroceryBasket",
    
    Flag_plan_B     = "Flag_plan_B",
    Flag_logged_in  = "Flag_logged_in",
    Flag_speed      = "Flag_speed",
    Flag_H010_Hand  = "H010HandControl",
    Flag_H100_Alert = "Flag_H100_AlertControl",
    Flag_savePatient= "Flag_savePatient",
    Flag_savePlan   = "Flag_savePlan",
    Flag_resetForm  = "Flag_resetForm",

}

// .. declare Action Interface
export interface MyActions {
    [ Acts.ProcessChange ]      ( {dispatch}: AAC, payload: Processes ):            void;
    [ Acts.LanguageChange ]     ( {dispatch}: AAC, payload: Languages ):            void;
    [ Acts.OrtChange ]          ( {dispatch}: AAC, payload: Orts ):                 void;
    [ Acts.SpeedChange ]        ( {dispatch}: AAC, payload: Speeds ):               void;
    
    [ Acts.userType ]           ( {dispatch}: AAC, payload: CTS.UserTypes ):        void;
    [ Acts.userTool ]           ( {dispatch}: AAC, payload: UserTools ):            void;
    [ Acts.pageSlide ]          ( {dispatch}: AAC, payload: PageSlide ):            void;
    
    [ Acts._np_Gender ]         ( {dispatch}: AAC, payload: CTS.Gender ):           void;
    [ Acts._np_FirstName ]      ( {dispatch}: AAC, payload: string ):               void;
    [ Acts._np_LastName ]       ( {dispatch}: AAC, payload: string ):               void;
    [ Acts._np_BirthDay ]       ( {dispatch}: AAC, payload: string ):               void;
    [ Acts._np_MS ]             ( {dispatch}: AAC, payload: CTS.MS ):               void;
    [ Acts._np_Education ]      ( {dispatch}: AAC, payload: CTS.Education ):        void;
    [ Acts._np_Occupation ]     ( {dispatch}: AAC, payload: string ):               void;
    [ Acts._np_GIF ]            ( {dispatch}: AAC, payload: CTS.GI_F ):             void;

    [ Acts.H010IDx ]            ( {dispatch}: AAC, payload: number ):               void;
    [ Acts.GroceryBasket ]      ( {dispatch}: AAC, payload: CTS.Basket|undefined ): void;
        
    [ Acts.Flag_plan_B ]        ( {dispatch}: AAC, payload: boolean ):              void;
    [ Acts.Flag_logged_in ]     ( {dispatch}: AAC, payload: boolean ):              void;
    [ Acts.Flag_speed ]         ( {dispatch}: AAC, payload: boolean ):              void;
    [ Acts.Flag_H010_Hand ]     ( {dispatch}: AAC, payload: boolean ):              void;
    [ Acts.Flag_H100_Alert ]    ( {dispatch}: AAC, payload: boolean ):              void;
    [ Acts.Flag_savePatient ]   ( {dispatch}: AAC, payload: boolean ):              void;
    [ Acts.Flag_savePlan ]      ( {dispatch}: AAC, payload: boolean ):              void;
    [ Acts.Flag_resetForm ]     ( {dispatch}: AAC, payload: boolean ):              void;
}

// -- =====================================================================================

// .. declare Getters Options
export type MyGetters = {
    process             ( state: State ): Processes
    ort                 ( state: State ): Orts
    animationSpeed      ( state: State ): Speeds

    userType            ( state: State ): CTS.UserTypes
    userTool            ( state: State ): UserTools
    pageSlide           ( state: State ): PageSlide
    newPatient          ( state: State ): CTS.Patient

    H010IDx             ( state: State ): number
    GroceryBasket       ( state: State ): CTS.Basket|undefined
    
    Flag_plan_B         ( state: State ): boolean
    Flag_logged_in      ( state: State ): boolean
    Flag_speed          ( state: State ): boolean
    Flag_H010_Hand      ( state: State ): boolean
    Flag_H100_Alert     ( state: State ): boolean
    Flag_savePatient    ( state: State ): boolean
    Flag_savePlan       ( state: State ): boolean
    Flag_resetForm      ( state: State ): boolean
}

// -- =====================================================================================

// .. declare Store
export type Store = Omit< VuexStore<State>, "commit"|"dispatch"|"getters"|"watch" > & {

    commit < K extends keyof MyMutations, P extends Parameters<MyMutations[K]>[1] > (
        key: K,
        payload?: P,
        options?: CommitOptions
    ): ReturnType<MyMutations[K]>;

    dispatch <K extends keyof MyActions > (
        key: K,
        payload?: Parameters<MyActions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<MyActions[K]>;

    // getters <K extends keyof MyGetters > ( key: K): ReturnType<MyGetters[K]>;
    getters: { [K in keyof MyGetters]: ReturnType<MyGetters[K]> };
    
    watch <T> (
        getter: (state: State, getters: MyGetters) => T,
        cb: (value: T, oldValue: T) => void,
        options?: WatchOptions
    ): () => void;

};

// -- =====================================================================================
