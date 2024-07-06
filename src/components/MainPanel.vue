<template>
    <div id="mainPanel">
        <div id="mainPanelWrapper" >

            <DecorPanel   :class="TS.Speeds[store.getters.animationSpeed]" />

            <HomePanel    :class="TS.Speeds[store.getters.animationSpeed]" />
            <OurGoals     :class="TS.Speeds[store.getters.animationSpeed]" />
            <NewsPanel    :class="TS.Speeds[store.getters.animationSpeed]" />
            <FAQsPanel    :class="TS.Speeds[store.getters.animationSpeed]" />
            <AboutUsPanel :class="TS.Speeds[store.getters.animationSpeed]" />
            
            <UserPanel    :class="TS.Speeds[store.getters.animationSpeed]" />
            
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import DecorPanel                           from '@/components/Decor/DecorPanel.vue'
import HomePanel                            from '@/components/Home/HomePanel.vue'
import OurGoals                             from '@/components/OurGoals/OurGoalsPanel.vue'
import NewsPanel                            from '@/components/News/NewsPanel.vue'
import FAQsPanel                            from '@/components/FAQs/FAQsPanel.vue'
import AboutUsPanel                         from '@/components/About Us/AboutUsPanel.vue'
import UserPanel                            from '@/components/UserPanel/UserPanel.vue'
import * as TS                              from '@/types/types'
import { useStore }                         from 'vuex'

const store: TS.Store = useStore()

// -- =====================================================================================

</script>


// -- =====================================================================================

<style>

    #mainPanelWrapper{
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .X100, .X010{
        height: 100%;
        position: relative;
        float: left;
    }
    .X100{ width: 28%; margin-right: 1.5%; }
    .X010{ width: 60% }

    .X100_fall_Out {
        animation           : X100_fall_Out 1.9s;
        animation-fill-mode : both;
    }
    @keyframes X100_fall_Out {
        14% { transform: rotate(3deg) scale(1.07) }
        20% { transform: rotate(3deg) scale(1.07) }
        100%{ transform: translate(-700px, 1000px) rotate(-70deg) scale(0.2); opacity: 0; }
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
        0%  { transform: translate(-700px, 1000px) rotate(-70deg) scale(0.2); opacity: 1; }
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

<style Fast>

    .Fast> .X100_fall_Out {
        animation           : X100_fall_Out_Fast .9s;
        animation-fill-mode : both;
    }
    @keyframes X100_fall_Out_Fast {
        100%{ transform: translate(-700px, 1000px) rotate(-70deg) scale(0.2) }
    }

    .Fast> .X010_fall_Out {
        animation           : X010_fall_Out_Fast .9s;
        animation-fill-mode : both;
    }
    @keyframes X010_fall_Out_Fast {
        100%{ transform: translate(0px, 1000px) scale(0.2); opacity: 0 }
    }

    .Fast> .X100_fall_In {
        animation           : X100_fall_In_Fast .5s;
        animation-fill-mode : both;
    }
    @keyframes X100_fall_In_Fast {
        0%{ transform: translate(-700px, 1000px) rotate(-70deg) scale(0.2) }
        100%{ transform: translate(0px, 0px) rotate(0deg) scale(1) }
    }

    .Fast> .X010_fall_In {
        animation           : X010_fall_In_Fast .5s;
        animation-fill-mode : both;
    }
    @keyframes X010_fall_In_Fast {
        0%{ transform: translate(0px, 1000px) scale(0.2); opacity: 1; }
        100%{ opacity: 1; transform: translate(0px, 0px) scale(1) }
    }


    .Fast> .Tool_fall_In {
        animation           : Tool_fall_In_Fast .4s;
        animation-fill-mode : both;
    }
    @keyframes Tool_fall_In_Fast {
        0%  { transform: translate(-10%,-53%) perspective(900px) rotateY(44deg) scale(.8); opacity: 0 }
        100%{ transform: translate(0,-53%) perspective(900px) rotateY(0deg) scale(1); opacity: 1 }
    }

    .Fast> .Tool_fall_Out {
        animation           : Tool_fall_Out_Fast .4s;
        animation-fill-mode : both;
    }
    @keyframes Tool_fall_Out_Fast {
        0%  { transform: translate(0,-53%) perspective(900px) rotateY(0deg) scale(1); opacity: 1 }
        100%{ transform: translate(-10%,-53%) perspective(900px) rotateY(44deg) scale(.8); opacity: 0 }
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
