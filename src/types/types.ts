import {
    ActionContext,
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
}                                       from "vuex";

// -- =====================================================================================

// ..  declare Languages
export enum Languages { "EN", "FA", "UR" }

// .. declare Display Modes
export enum DisplayMode { "Wide", "Packed" }

// .. declare Places
export enum Orts { "Home", "OurGoals", "News", "FAQs", "AboutUs" }

// .. declare State
export type State = {
    language: Languages,
    displayMode: DisplayMode,
    ort: Orts
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
    LanguageChange  = "Change_Languge",
    OrtChange       = "Chage_Ort"
}

// .. declare Mutations
export type MyMutations<S = State> = {
    [ Mutates.LanguageChange ] ( state: S, payload: Languages ): void;
}

// -- =====================================================================================

// .. declare Action-Options
export enum Acts {
    LanguageChange  = "Change_Languge",
    OrtChange       = "Chage_Ort"
}

// .. declare Action Interface
export interface MyActions {
    [ Acts.LanguageChange ]   ( {commit}: AAC, payload: Languages ): void;
    [ Acts.OrtChange ]   ( {commit}: AAC, payload: Orts ): void;
}

// -- =====================================================================================

// .. declare Getters Options
export type MyGetters = {
    ort ( state: State ): Orts
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
