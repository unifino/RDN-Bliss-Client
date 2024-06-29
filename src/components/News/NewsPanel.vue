<template>
    <div id="FAQsPanel" :style="`z-index: ${+(store.getters.ort === TS.Orts.News)}`">
        <!-- <div class="column"><div class="newsBox large"></div><div class="newsBox"></div><div class="newsBox large"></div><div class="newsBox"></div><div class="newsBox large"></div><div class="newsBox"></div></div>
        <div class="column"><div class="newsBox medium"></div><div class="newsBox"></div><div class="newsBox medium"></div><div class="newsBox"></div><div class="newsBox large"></div><div class="newsBox large"></div><div class="newsBox"></div></div>
        <div class="column"><div class="newsBox"></div><div class="newsBox"></div><div class="newsBox large"></div><div class="newsBox medium"></div><div class="newsBox"></div><div class="newsBox large"></div></div> -->
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as Tools                           from '@/mixins/Tools';

const store: TS.Store = useStore()

// -- =====================================================================================

    const curtain = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const changeSpeed = async () => {
        _in();
        await new Promise( _ => setTimeout( _, 300 ) )
    }

    const _in = () => {
        curtain.value.className = ""
    }


// -- =====================================================================================

    store.watch(
        getters => getters.Flag_speed,
        () => changeSpeed()
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #FAQsPanel {
        width: 70vw;
        height: 100%;
        padding: 2vw;
        position: absolute;
        overflow: auto;
    }

    .column {
        width: 20vw;
        height: 100%;
        position: relative;
        margin: .5vw;
        float: left;
    }

    .newsBox{
        background-color: rgb(81, 170, 247);
        height: 12vw;
        width: 20vw;
        position: relative;
        margin-bottom: .9vw;
        border-radius: 16px;
    }

    .medium { height: 16vw }
    .large{ height: 30vw }

</style>

// -- =====================================================================================
