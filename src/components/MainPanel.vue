<template>
    <div id="mainPanel">
        <div id="mainPanelWrapper">

            <DecorPanel />
            <HomePanel />
            <FAQsPanel />
            <AboutUsPanel />

            <UserPanel ref='userPanel' id="userPanel" />

        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import DecorPanel                           from '@/components/Decor/DecorPanel.vue'
import HomePanel                            from '@/components/Home/HomePanel.vue'
import AboutUsPanel                         from '@/components/About Us/AboutUsPanel.vue'
import FAQsPanel                            from '@/components/FAQs/FAQsPanel.vue'
import UserPanel                            from '@/components/UserPanel/UserPanel.vue'
import { ref }                              from 'vue'

// -- =====================================================================================

    const userPanel = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================



// -- =====================================================================================

</script>


// -- =====================================================================================

<style scoped>

    #mainPanel{
        height: 100%;
        width: 100%;
        bottom: 0;
        background-color: #fbfbfb;
        position: relative;
    }

    #mainPanelWrapper{
        width: 100%;
        height: 100%;
        position: absolute;
    }

    #userPanel{
        /* transform: translateY(100%); */
        background: red;
        width: 100%;
        height: 100%;
        position: absolute;
    }

</style>

// -- =====================================================================================
