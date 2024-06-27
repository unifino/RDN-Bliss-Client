<template>
    <div id="mainPanel">
        <div id="mainPanelWrapper">

            <DecorPanel />
            <HomePanel />
            <FAQsPanel />
            <AboutUsPanel />

            <UserPanel />

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


// -- =====================================================================================

</script>


// -- =====================================================================================

<style>
    #mainPanelWrapper{
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .X100_fall_Out {
        animation           : X100_fall_Out 1.9s;
        animation-fill-mode : both;
    }

    @keyframes X100_fall_Out {
        14% { transform: rotate(3deg) scale(1.07) }
        20% { transform: rotate(3deg) scale(1.07) }
        100%{ transform: translate(-700px, 1000px) rotate(-70deg) scale(0.2) }
    }

    .X010_fall_Out {
        animation           : X010_fall_Out 1.9s;
        animation-fill-mode : both;
    }

    @keyframes X010_fall_Out {
        14% { transform: translate(0px, 20px) scale(0.9); opacity: .3 }
        20% { transform: translate(0px, 20px) scale(0.9) }
        100%{ transform: translate(0px, 1000px) scale(0.2) }
    }

    .X100_fall_In {
        animation           : X100_fall_In 1.7s;
        animation-fill-mode : both;
    }

    @keyframes X100_fall_In {
        0%  { transform: translate(-700px, 1000px) rotate(-70deg) scale(0.2) }
        66% { transform: translate(0px, 0px) rotate(3deg) scale(1.07) }
        70% { transform: rotate(3deg) scale(1.07) }
        100%{ transform: rotate(0deg) scale(1) }
    }

    .X010_fall_In {
        animation           : X010_fall_In 1.2s;
        animation-fill-mode : both;
    }

    @keyframes X010_fall_In {
        0%  { transform: translate(0px, 1000px) scale(0.2) }
        14% { opacity: .2; transform: translate(0px, 1000px) scale(0.2) }
        75% { opacity: .4; transform: translate(0px, 20px) scale(0.9) }
        100%{ opacity: 1; transform: translate(0px, 0px) scale(1) }
    }

</style>

<style scoped>

    #mainPanel{
        height: 100%;
        width: 100%;
        background-color: #fbfbfb;
        position: relative;
    }

</style>

// -- =====================================================================================
