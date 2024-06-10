import { ComponentCustomProperties }    from 'vue'
import { Store }                        from 'vuex'
import * as TS                          from '@/types/types'
import * as VX                          from '@/store/store'

declare module '@vue/runtime-core' {
    // declare your own store states
    VX.store

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: TS.Store<TS.State>
    }
}