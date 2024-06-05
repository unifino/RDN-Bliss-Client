<template>
    <div id="box">

        <div id="newsBox">
            <img class="bg" :src="bgPath()" />
            <div id="shadowBox_3" />
            <div id="shadowBox_2" />
            <div id="shadowBox_1" />
            <div id="shadoBox_main">
                <div id="contentBox">
                    <div class="title" v-html="context.title" />
                    <div class="content" v-text="context.text" />
                </div>
            </div>
        </div>

</div>
</template>

// -- =====================================================================================

<script lang="ts">

// -- =====================================================================================

import { defineComponent }                  from 'vue';

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "B_010",

// -- =====================================================================================

    setup () {

// -- =====================================================================================

        let context = { title: "", text: "" }
        context.title = "Agricultural Science Center of Excellence for Nutrition and Diet (ASCEND) for Better Health";
        context.text = "A virtual center that brings together scientists, partner organizations, and communities to deliver science-based solutions that promote and elevate food and nutrition security for all Americans. \n\n On September 28th, USDA announced the launch of the first USDA Nutrition Hub in Baton Rouge, Louisiana, in partnership with Southern University."

// -- =====================================================================================

        return { context }

// -- =====================================================================================

    },

// -- =====================================================================================

    methods: {
        bgPath () {
            return require( "@/assets/Pics/news/temp/2.jpg" )
        }
    }


// -- =====================================================================================

} )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #box{
        background-color: #eeefec;
        border-radius: 23px;
        height: 87%;
        width: 90%;
        margin: 5% 1% auto 4%;
        position: relative;
        overflow: hidden;
    }

    #newsBox{
        width: 55%;
        margin: 0 5%;
        height: 80%;
        padding: 10% 0;
    }

    .bg{
        bottom: 0;
        right: 0;
        height: 95%;
        width: auto;
        position: absolute;
        z-index: 0;
    }

    #shadoBox_main, #shadowBox_1, #shadowBox_2, #shadowBox_3{
        top: 0;
        left: 0;
        background-color: #eeefec;
        width: 45%;
        height: 60%;
        padding: 90px 50% 30% 90px;
        border-radius: 0 0 100% 0;
        position: absolute;
        z-index: 1;
    }
    #shadowBox_1{
        top: 12px;
        left: 12px;
        background-color: #d0d1cf;
        opacity: .8;
    }
    #shadowBox_2{
        top: 27px;
        left: 27px;
        background-color: #adadad;
        opacity: .6;
    }
    #shadowBox_3{
        top: 72px;
        left: 72px;
        background-color: rgb(71, 71, 71);
        opacity: .35;
    }

    .title{
        font-family: PoiretOne;
        font-weight: bold;
        font-size: 25px;
        margin-bottom: 52px;
    }

    .content{
        font-family: oswald;
        font-size: 18px;
        max-width: 300px;
        white-space: pre-line;
    }

</style>

// -- =====================================================================================
