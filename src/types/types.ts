import {
    ActionContext,
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
}                                       from 'vuex';

// -- =====================================================================================

// ..  declare Languages
export enum Languages { "EN", "FA", "UR" }

// .. declare Display Modes
export enum DisplayMode { "Wide", "Packed" }

// .. declare Places
export enum Orts {
    Home = "Home",
    OurGoals = "Our Goals",
    News = "News",
    FAQs = "FAQs",
    AboutUs = "About Us"
}

// ..  declare Processes
export enum Processes { "Reading", "Registering", "Login" }

// .. declare State
export type State = {
    process: Processes,
    language: Languages,
    displayMode: DisplayMode,
    ort: Orts,

    // .. declare Flags
    Flag_plan_B: boolean
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
    ProcessChange           = "Change_The_Process",
    LanguageChange          = "Change_The_Language",
    OrtChange               = "Change_The_Ort",
    Flag_plan_B             = "Change_Animation_Plan_B"
}

// .. declare Mutations
export type MyMutations<S = State> = {
    [ Mutates.ProcessChange ]   ( state: S, payload: Processes ): void;
    [ Mutates.LanguageChange ]  ( state: S, payload: Languages ): void;
    [ Mutates.OrtChange ]       ( state: S, payload: Orts ): void;
    [ Mutates.Flag_plan_B ]     ( state: S, payload: boolean ): void;
}

// -- =====================================================================================

// .. declare Action-Options
export enum Acts {
    ProcessChange   = "Change_The_Process",
    LanguageChange  = "Change_The_Language",
    OrtChange       = "Change_The_Ort",
    Flag_plan_B     = "Change_Animation_Plan_B"
}

// .. declare Action Interface
export interface MyActions {
    [ Acts.ProcessChange ]      ( {dispatch}: AAC, payload: Processes ): void;
    [ Acts.LanguageChange ]     ( {dispatch}: AAC, payload: Languages ): void;
    [ Acts.OrtChange ]          ( {dispatch}: AAC, payload: Orts ): void;
    [ Acts.Flag_plan_B ]        ( {dispatch}: AAC, payload: boolean ): void;
}

// -- =====================================================================================

// .. declare Getters Options
export type MyGetters = {
    process ( state: State ): Processes,
    ort ( state: State ): Orts,
    Flag_plan_B ( state: State ): boolean
}

// -- =====================================================================================

// .. declare Store
export type Store = Omit< VuexStore<State>, "commit"|"dispatch"|"getters" > & {

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

    getters: { [K in keyof MyGetters]: ReturnType<MyGetters[K]> };

};

// -- =====================================================================================
