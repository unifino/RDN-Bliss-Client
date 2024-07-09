import {
    ActionContext,
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
}                                       from 'vuex';
import { WatchOptions }                 from "vue";

// -- =====================================================================================

// ..  declare Languages
export enum Languages { "EN", "FA", "UR" }

// .. declare Display Modes
export enum DisplayMode { "Wide", "Packed" }

// .. declare Places
export enum Orts { Home, OurGoals, News, FAQs, AboutUs, UserPanel, NoWhere }

export type OrtData = {[ K in Orts ]: { name: string, text: string } }

// ..  declare Processes
export enum Processes { "Reading", "Registering", "Login" }

// .. declare UserType
export enum UserTypes { "Dietitian", "Patient", null }

// .. declare UserTools
export enum UserTools { "Patients", "Calender", "Stats", "DietPlans", "Messages", "Profile", null }

export enum Speeds { Normal = "Normal", Fast = "Fast" }

// .. declare State
export type State = {
    process: Processes
    language: Languages
    displayMode: DisplayMode
    ort: Orts
    animationSpeed: Speeds

    // .. declare User related States
    userType: UserTypes
    userTool: UserTools

    // .. declare minor data
    H010IDx: number
    
    // .. declare Flags
    Flag_plan_B: boolean
    Flag_logged_in: boolean
    Flag_speed: boolean
    Flag_H010_Hand: boolean
    Flag_H100_Alert: boolean

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
    
    H010IDx         = "H010Panel_ID",
    
    Flag_plan_B     = "Flag_plan_B",
    Flag_logged_in  = "Flag_logged_in",
    Flag_speed      = "Flag_speed",
    Flag_H010_Hand  = "H010HandControl",
    Flag_H100_Alert = "Flag_H100_AlertControl",
}

// .. declare Mutations
export type MyMutations<S = State> = {
    [ Mutates.ProcessChange ]   ( state: S, payload: Processes ): void;
    [ Mutates.LanguageChange ]  ( state: S, payload: Languages ): void;
    [ Mutates.OrtChange ]       ( state: S, payload: Orts ):      void;
    [ Mutates.SpeedChange ]     ( state: S, payload: Speeds ):    void;
    
    [ Mutates.userType ]        ( state: S, payload: UserTypes ): void;
    [ Mutates.userTool ]        ( state: S, payload: UserTools ): void;
    
    [ Mutates.H010IDx ]         ( state: S, payload: number ):    void;
    
    [ Mutates.Flag_plan_B ]     ( state: S, payload: boolean ):   void;
    [ Mutates.Flag_logged_in ]  ( state: S, payload: boolean ):   void;
    [ Mutates.Flag_speed ]      ( state: S, payload: boolean ):   void;
    [ Mutates.Flag_H010_Hand ]  ( state: S, payload: boolean ):   void;
    [ Mutates.Flag_H100_Alert ] ( state: S, payload: boolean ):   void;
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

    H010IDx         = "H010Panel_ID",
    
    Flag_plan_B     = "Flag_plan_B",
    Flag_logged_in  = "Flag_logged_in",
    Flag_speed      = "Flag_speed",
    Flag_H010_Hand  = "H010HandControl",
    Flag_H100_Alert = "Flag_H100_AlertControl",
}

// .. declare Action Interface
export interface MyActions {
    [ Acts.ProcessChange ]      ( {dispatch}: AAC, payload: Processes ): void;
    [ Acts.LanguageChange ]     ( {dispatch}: AAC, payload: Languages ): void;
    [ Acts.OrtChange ]          ( {dispatch}: AAC, payload: Orts ):      void;
    [ Acts.SpeedChange ]        ( {dispatch}: AAC, payload: Speeds ):    void;

    [ Acts.userType ]           ( {dispatch}: AAC, payload: UserTypes ): void;
    [ Acts.userTool ]           ( {dispatch}: AAC, payload: UserTools ): void;

    [ Acts.H010IDx ]            ( {dispatch}: AAC, payload: number ):    void;
    
    [ Acts.Flag_plan_B ]        ( {dispatch}: AAC, payload: boolean ):   void;
    [ Acts.Flag_logged_in ]     ( {dispatch}: AAC, payload: boolean ):   void;
    [ Acts.Flag_speed ]         ( {dispatch}: AAC, payload: boolean ):   void;
    [ Acts.Flag_H010_Hand ]     ( {dispatch}: AAC, payload: boolean ):   void;
    [ Acts.Flag_H100_Alert ]    ( {dispatch}: AAC, payload: boolean ):   void;
}

// -- =====================================================================================

// .. declare Getters Options
export type MyGetters = {
    process             ( state: State ): Processes
    ort                 ( state: State ): Orts
    animationSpeed      ( state: State ): Speeds

    userType            ( state: State ): UserTypes
    userTool            ( state: State ): UserTools

    H010IDx             ( state: State ): number
    
    Flag_plan_B         ( state: State ): boolean
    Flag_logged_in      ( state: State ): boolean
    Flag_speed          ( state: State ): boolean
    Flag_H010_Hand      ( state: State ): boolean
    Flag_H100_Alert     ( state: State ): boolean
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
