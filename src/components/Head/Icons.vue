<template>
    <div id="header_icons_box">
        <div v-for="(opt,i) of options" :key=i class="optionBox no_select">
            <div @click="changeOrt(opt.code)" :class="opt.select?'selcted':''">
                <div class="icon">{{opt.icon}}</div>
                <div class="title">{{opt.title}}</div>
            </div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script lang="ts">

// -- =====================================================================================

import { defineComponent, ref, reactive }             from 'vue';
import { useStore }                         from 'vuex'
import * as VX                              from "@/store/store";
import * as TS                              from "@/types/types";

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Header_Icons",

// -- =====================================================================================

    components: {},

// -- =====================================================================================

    setup() {

        const store = useStore();

        const options = ref ( [ { code: 0, title: "", select: false, icon: "" } ] );

        options.value = [
            { code:TS.Orts.Home,     title: "Home",      select: false, icon: "", },
            { code:TS.Orts.OurGoals, title: "Our Goals", select: false, icon: "", },
            { code:TS.Orts.News,     title: "News" ,     select: false, icon: "", },
            { code:TS.Orts.FAQs,     title: "FAQs" ,     select: false, icon: "?", },
            { code:TS.Orts.AboutUs,  title: "About Us",  select: false, icon: "", },
        ]

        const changeOrt = ( ortCode: TS.Orts ) => {
            store.dispatch( TS.Acts.OrtChange, ortCode );
            for( let x of options.value ) x.select = x.code === ortCode;
        }

        return { options, changeOrt }

    },

    methods: {

    }

// -- =====================================================================================

} )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #header_icons_box{
        height: 100px;
        width: 500px;
        margin-top: 35px;
        margin-left: 44px;
    }

    .optionBox{
        text-align: center;
        color: #29363a;
        height: 80px;
        width: 100px;
        position: relative;
        float: left;
    }

    .icon{
        font-family: "fas-6";
        font-size: 45px;
        margin: 14px;
    }

    .title{
        font-family: Manrope;
        opacity: 0.2;
    }

    .selcted, .selcted> .title, .optionBox:hover{
        color: #521739;
        cursor: pointer;
        font-weight: bold;
        font-weight: bold;
        opacity: 1;
        cursor: pointer;
    }

    .optionBox:hover{
        color: #cc0f7e;
    }

</style>

// -- =====================================================================================
