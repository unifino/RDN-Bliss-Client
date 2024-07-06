<template>
    <div id="userPanelBox" :style="`z-index: ${+(store.getters.ort === TS.Orts.UserPanel)};`">

        <MyPatients />
        <MyCalender />
        <MyStats />
        <MyDietPlans />
        <MyMessage />
        <MyProfile />

        <UserButtons />

    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import UserButtons                          from '@/components/UserPanel/userButtons.vue'
import MyPatients                           from '@/components/UserPanel/myPatients.vue'
import MyCalender                           from '@/components/UserPanel/myCalender.vue'
import MyStats                              from '@/components/UserPanel/myStats.vue'
import MyDietPlans                          from '@/components/UserPanel/myDietPlans.vue'
import MyMessage                            from '@/components/UserPanel/myMessage.vue'
import MyProfile                            from '@/components/UserPanel/myProfile.vue'
import * as TS                              from '@/types/types'
import { useStore }                         from 'vuex'

const store: TS.Store = useStore()

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #userPanelBox{
        height: 100%;
        width: 100%;
        position: absolute;
    }

</style>

// -- =====================================================================================
